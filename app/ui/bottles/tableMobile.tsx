import Image from 'next/image';
import { fetchFilteredBottles } from '@/app/lib/data/bottles';
import { ButtonDeleteBottle, ButtonUpdateBottle } from './buttons';
import { BottleForm } from '@/app/lib/model/bottleForm';

interface TableMobileProps {
  bottles: BottleForm[];
}

export default async function TableMobile({ bottles }: TableMobileProps) {
  return (
    <div className="md:hidden">
      {bottles?.map((bottle) => (
        <div key={bottle.id} className="mb-2 w-full rounded-md bg-white p-4">
          <div className="flex items-center justify-between border-b pb-4">
            <div className="flex w-full flex-col">
              <div className="mb-2 flex w-full items-center gap-3">
                <Image
                  src="https://picsum.photos/200"
                  className="mr-2 rounded-full"
                  width={28}
                  height={28}
                  alt={`${bottle.domain}'s profile picture`}
                />
                <span>{bottle.domain}</span>
                <span className="font-bold">{bottle.remainQuantity}</span>
              </div>
              <div className="flex w-full gap-2 text-sm text-gray-500">
                <span>{bottle.appellation}</span>
                <span>{bottle.color}</span>
                <span className="text-xl font-medium">{bottle.vintage}</span>
              </div>
            </div>
          </div>
          <div className="flex w-full items-center gap-3 pt-4">
            <div>
              <p>{bottle.region}</p>
            </div>
            <div className="flex justify-end gap-2">
              <ButtonUpdateBottle id={bottle.id} />
              <ButtonDeleteBottle id={bottle.id} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
