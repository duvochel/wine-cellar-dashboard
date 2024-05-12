import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { IBottleRequest } from './model/bottleRequest';

const ITEMS_PER_PAGE = 6;

export async function fetchBottlesPages(query: string) {
  noStore();

  try {
    const count = await sql`
    SELECT COUNT(*) FROM bottle
    WHERE 
      bottle.domain ILIKE ${`%${query}%`} OR
      bottle.appellation ILIKE ${`%${query}%`} OR
      bottle.label ILIKE ${`%${query}%`} OR
      bottle.region ILIKE ${`%${query}%`} OR
      bottle.color ILIKE ${`%${query}%`} OR
      bottle.vintage::text ILIKE ${`%${query}%`} OR
      bottle.comment ILIKE ${`%${query}%`}
    `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);

    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of bottles.');
  }
}

export async function fetchFilteredBottles(query: string, currentPage: number) {
  noStore();

  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const bottles = await sql`
        SELECT
          bottle.id,
          bottle.domain,
          bottle.appellation,
          bottle.label,
          bottle.region,
          bottle.color,
          bottle.vintage,
          bottle.comment,
          stock."remainQuantity",
          stock.price
        FROM bottle
        JOIN stock ON stock."bottleId" = bottle.id
        WHERE 
          bottle.domain ILIKE ${`%${query}%`} OR
          bottle.appellation ILIKE ${`%${query}%`} OR
          bottle.label ILIKE ${`%${query}%`} OR
          bottle.region ILIKE ${`%${query}%`} OR
          bottle.color ILIKE ${`%${query}%`} OR
          bottle.vintage::text ILIKE ${`%${query}%`} OR
          bottle.comment ILIKE ${`%${query}%`}
        ORDER BY bottle.domain  
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
      `;

    return bottles.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch bottles.');
  }
}
