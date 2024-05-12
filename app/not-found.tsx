import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the requested resource.</p>
      <Link
        href="/dashboard/"
        className="bg-saturatedPurple-800 mt-4 rounded-md px-4 py-2 text-sm text-white transition-colors hover:bg-purple-300"
      >
        Go to dashboard
      </Link>
    </main>
  );
}
