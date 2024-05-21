'use server';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

// This is temporary until @types/react-dom is updated
export type State = {
  errors?: {
    domain?: string[];
    region?: string[];
    appellation?: string[];
    color?: string[];
    price?: string[];
  };
  message?: string | null;
};

const FormBottleSchema = z.object({
  id: z.string(),
  domain: z.string({ invalid_type_error: 'Please select a domain.' }),
  region: z.string({ invalid_type_error: 'Please select a region.' }),
  appellation: z.optional(
    z.string().min(1, 'Please enter a valid appellation.'),
  ),
  color: z.optional(z.string().min(1, 'Please enter a valid color.')),
  price: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than $0.' }),
  date: z.string(),
});

const UpdateBottle = FormBottleSchema.omit({
  id: true,
  date: true,
});

export async function updateBottle(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const validatedFields = UpdateBottle.safeParse({
    domain: formData.get('domain'),
    region: formData.get('region'),
    appellation: formData.get('appellation'),
    color: formData.get('color'),
    price: formData.get('price'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Bottle.',
    };
  }

  const { domain, region, color, appellation, price } = validatedFields.data;

  console.log(domain, region, color, appellation, price);

  try {
    await sql`
      UPDATE bottle
      SET domain = ${domain}, region = ${region}, color = ${color}, appellation = ${appellation}
      WHERE id = ${id};
  `;
  } catch (err) {
    return {
      message: 'Database Error: Failed to Update Bottle.',
    };
  }

  try {
    await sql`
      UPDATE stock
      SET price = ${price}
      FROM bottle b, stock s
      WHERE b.id = s."bottleId"
      and b.id = ${id};
  `;
  } catch (err) {
    return {
      message: 'Database Error: Failed to Update Stock.',
    };
  }
  revalidatePath('/dashboard/bottles');
  redirect('/dashboard/bottles');
}

export async function deleteBottle(id: string) {
  try {
    await sql`DELETE FROM bottles WHERE id = ${id}`;

    revalidatePath('/dashboard/bottles');
    return { message: 'Deleted Bottle.' };
  } catch (err) {
    return {
      message: 'Database Error: Failed to Delete Bottle.',
    };
  }
}
