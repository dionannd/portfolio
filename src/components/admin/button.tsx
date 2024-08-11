import { useFormStatus } from 'react-dom';

import cn from '@/lib/helper';

export function DeleteButton({ isActive }: { isActive: boolean }) {
  const { pending } = useFormStatus();

  return (
    <button
      className={cn(
        'px-3 py-2 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 mb-8 transition-all',
        {
          'bg-red-300/50 dark:bg-red-700/50': isActive,
        },
      )}
      disabled={pending}
      type='submit'
    >
      Delete Entries
    </button>
  );
}
