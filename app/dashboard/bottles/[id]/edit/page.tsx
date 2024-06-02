import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchBottleById } from '@/app/lib/data/bottles';
import EditBottleForm from '@/app/ui/bottles/editBottleForm';

export const metadata: Metadata = {
  title: 'Edit Bottle',
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [bottle] = await Promise.all([fetchBottleById(id)]);

  if (!bottle) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Bottles', href: '/dashboard/bottles' },
          {
            label: 'Edit Bottle',
            href: `/dashboard/bottles/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditBottleForm bottle={bottle} />
    </main>
  );
}
