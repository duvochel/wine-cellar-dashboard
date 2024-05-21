import { fetchBottlesPages } from '@/app/lib/data/bottles';
import BottlesTable from '@/app/ui/bottles/table';
import { lusitana } from '@/app/ui/fonts';
import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Bottles',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchBottlesPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
      </div>
      {totalPages > 0 ? (
        <>
          <Suspense
            key={query + currentPage}
            fallback={<InvoicesTableSkeleton />}
          >
            <BottlesTable currentPage={currentPage} query={query} />
          </Suspense>
          <div className="mt-5 flex w-full justify-center">
            <Pagination totalPages={totalPages} />
          </div>
        </>
      ) : (
        <div className="flex h-full content-center">no results</div>
      )}
    </div>
  );
}
