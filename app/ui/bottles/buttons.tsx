import { deleteBottle } from '@/app/lib/actions/bottles';
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function ButtonCreateBottle() {
  return (
    <Link
      href="/dashboard/bottles/create"
      className="flex h-10 items-center rounded-lg bg-saturatedPurple-800 px-4 text-sm font-medium text-white transition-colors hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Bottle</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function ButtonUpdateBottle({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/bottles/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function ButtonDeleteBottle({ id }: { id: string }) {
  const deleteBottleWithId = deleteBottle.bind(null, id);
  return (
    <form action={deleteBottleWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}
