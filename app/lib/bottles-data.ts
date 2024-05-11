import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { IBottleRequest } from './model/bottleRequest';

const ITEMS_PER_PAGE = 6;

export async function fetchBottlesPages(query: string) {
  noStore();
  console.log(query);

  try {
    const count = await sql`SELECT COUNT(*) FROM bottle`;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of bottles.');
  }
}

export async function fetchFilteredBottles(query: string, currentPage: number) {
  noStore();
  console.log('filter', query);
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const bottles = await sql<IBottleRequest>`
        SELECT
          bottle.id,
          bottle.domain,
          bottle.color,
          bottle.region,
          bottle.appellation,
          bottle.vintage,
          bottle.label
        FROM bottle
        ORDER BY bottle.domain
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
      `;

    return bottles.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch bottles.');
  }
}
