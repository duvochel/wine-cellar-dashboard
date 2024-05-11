const { db } = require('@vercel/postgres');
const { bottles } = require('../app/lib/bottles-dataset.js');

async function seedBottles(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS bottles (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        domain TEXT,
        color VARCHAR(255),
        region VARCHAR(255), 
        appellation VARCHAR(255),
        vintage Integer,
        label VARCHAR(255),
        readyYear Integer,
        plateauStartYear Integer,
        plateauEndYear Integer,
        expirationYear Integer,
        expirationString VARCHAR(255),
        comment VARCHAR(255)
      );
    `;

    console.log(`Created "bottles" table`);

    // Insert data into the "bottles" table
    const insertedBottles = await Promise.all(
      bottles.map(async (bottle) => {
        console.log('Inserting', bottle);
        return client.sql`
        INSERT INTO bottles (domain, color, region, appellation, vintage,  label, readyYear, plateauStartYear, plateauEndYear, expirationYear, expirationString, comment)
        VALUES (${bottle.domain}, ${bottle.color}, ${bottle.region},${bottle.appellation},${bottle.vintage}, ${bottle.label}, ${bottle.readyYear}, ${bottle.plateauStartYear},${bottle.plateauEndYear}, ${bottle.expirationYear}, ${bottle.expirationString}, ${bottle.comment})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedBottles.length} bottles`);

    return {
      createTable,
      bottles: insertedBottles,
    };
  } catch (error) {
    console.error('Error seeding bottles:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedBottles(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
