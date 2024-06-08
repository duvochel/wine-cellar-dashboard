import { fetchFilteredBottles } from '@/app/lib/data/bottles';
import TableMobile from './tableMobile';
import TableDesktop from './tableDesktop';

export default async function BottlesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const bottles = await fetchFilteredBottles(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <TableMobile bottles={bottles} />
          <TableDesktop bottles={bottles} />
        </div>
      </div>
    </div>
  );
}
