import Image from 'next/image';
import { fetchFilteredBottles } from '@/app/lib/data/bottles';
import { ButtonDeleteBottle, ButtonUpdateBottle } from './buttons';
import { BottleForm } from '@/app/lib/model/bottleForm';

interface TableDesktopProps {
  bottles: BottleForm[];
}

export default async function TableDesktop({ bottles }: TableDesktopProps) {
  return (
    <table className="hidden min-w-full text-gray-900 md:table">
      <thead className="rounded-lg text-left text-sm font-normal">
        <tr>
          <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
            Domaine
          </th>
          <th scope="col" className="px-4 py-5 font-medium">
            Quantity
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
          <th scope="col" className="px-3 py-5 font-medium">
            price
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
            <td className="whitespace-nowrap px-3 py-3 text-center">
              {bottle.remainQuantity}
            </td>
            <td className="whitespace-nowrap px-3 py-3">
              {bottle.appellation}
            </td>
            <td className="whitespace-nowrap px-3 py-3">{bottle.vintage}</td>
            <td className="whitespace-nowrap px-3 py-3">{bottle.color}</td>
            <td className="whitespace-nowrap px-3 py-3">{bottle.label}</td>
            <td className="whitespace-nowrap px-3 py-3">{bottle.region}</td>
            <td className="whitespace-nowrap px-3 py-3">{bottle.price} €</td>
            <td className="whitespace-nowrap py-3 pl-6 pr-3">
              <div className="flex justify-end gap-3">
                {' '}
                <ButtonUpdateBottle id={bottle.id} />
                <ButtonDeleteBottle id={bottle.id} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
