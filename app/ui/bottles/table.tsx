import Image from 'next/image';
import { fetchFilteredBottles } from '@/app/lib/bottles-data';
import { DeleteInvoice, UpdateInvoice } from '../invoices/buttons';

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
          <div className="md:hidden">
            {bottles?.map((bottle) => (
              <div
                key={bottle.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src="https://picsum.photos/200"
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${bottle.domain}'s profile picture`}
                      />
                      <p>
                        <span>{bottle.domain}</span>
                        <span> - </span>
                        <span>{bottle.appellation}</span>
                      </p>
                    </div>
                    <p className="text-sm text-gray-500">{bottle.color}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">{bottle.vintage}</p>
                    <p>{bottle.region}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={bottle.id} />
                    <DeleteInvoice id={bottle.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Domaine
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Appellation
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Vintage
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Color
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Label
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Region
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {bottles?.map((bottle) => (
                <tr
                  key={bottle.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src="https://picsum.photos/200"
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${bottle.domain}'s profile picture`}
                      />
                      <p>{bottle.domain}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {bottle.appellation}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {bottle.vintage}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {bottle.color}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {bottle.label}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {bottle.region}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      {' '}
                      <UpdateInvoice id={bottle.id} />
                      <DeleteInvoice id={bottle.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
