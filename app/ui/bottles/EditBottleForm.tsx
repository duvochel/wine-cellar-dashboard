'use client';

import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { useFormState } from 'react-dom';
import { updateBottle } from '@/app/lib/actions/bottles';
import { BottleForm } from '@/app/lib/model/bottleForm';
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';

export default function EditBottleForm({ bottle }: { bottle: BottleForm }) {
  const initialState = {
    message: null,
    errors: {},
  };
  const updateBottleWithId = updateBottle.bind(null, bottle.id);
  const [state, dispatch] = useFormState(updateBottleWithId, initialState);

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Bottle domain */}
        <div className="mb-4">
          <label htmlFor="domain" className="mb-2 block text-sm font-medium">
            Choose domain
          </label>
          <div className="relative">
            <input
              id="domain"
              name="domain"
              type="string"
              defaultValue={bottle.domain}
              placeholder="Enter the domain"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="domain-error"
            />
          </div>
          <div id="domain-error" aria-live="polite" aria-atomic="true">
            {state.errors?.domain &&
              state.errors.domain.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Bottle region */}
        <div className="mb-4">
          <label htmlFor="region" className="mb-2 block text-sm font-medium">
            Choose region
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="region"
                name="region"
                type="string"
                defaultValue={bottle.region}
                placeholder="Enter region"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="region-error"
              />
            </div>
          </div>
          <div id="region-error" aria-live="polite" aria-atomic="true">
            {state.errors?.region &&
              state.errors.region.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Bottle appellation */}
        <div className="mb-4">
          <label
            htmlFor="appellation"
            className="mb-2 block text-sm font-medium"
          >
            Choose appellation
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="appellation"
                name="appellation"
                type="string"
                defaultValue={bottle.appellation}
                placeholder="Enter appellation"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="appellation-error"
              />
            </div>
          </div>
          <div id="appellation-error" aria-live="polite" aria-atomic="true">
            {state.errors?.appellation &&
              state.errors.appellation.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Bottle color */}
        <div className="mb-4">
          <label htmlFor="color" className="mb-2 block text-sm font-medium">
            Choose color
          </label>
          <div className="relative">
            <input
              id="color"
              name="color"
              type="string"
              defaultValue={bottle.color}
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="color-error"
            />
          </div>
          <div id="color-error" aria-live="polite" aria-atomic="true">
            {state.errors?.color &&
              state.errors.color.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Bottle price */}
        <div className="mb-4">
          <label htmlFor="price" className="mb-2 block text-sm font-medium">
            Choose price
          </label>
          <div className="relative">
            <input
              id="price"
              name="price"
              type="number"
              value={bottle.price}
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="price-error"
            />
            <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
          <div id="price-error" aria-live="polite" aria-atomic="true">
            {state.errors?.price &&
              state.errors.price.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        <div id="empty-form-error" aria-live="polite" aria-atomic="true">
          {(state.errors?.domain ||
            state.errors?.appellation ||
            state.errors?.region ||
            state.errors?.color) && (
            <p className="mt-2 text-sm text-red-500">
              Missing fields. Failed to Create Bottle.
            </p>
          )}
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/bottles"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Edit Bottle</Button>
      </div>
    </form>
  );
}
