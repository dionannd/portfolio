import { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';

import cn from '@/lib/helper';

import { SignIn, SignOut } from '@/components/guestbook/button';
import Form from '@/components/guestbook/form';
import { TitlePage } from '@/components/title-page';

import { auth } from '@/app/auth';
import { getGuestbookEntries } from '@/app/db/queries';

export const metadata: Metadata = {
  title: 'Guestbook',
  description: 'Sign my guestbook and leave your mark.',
};

export default function GuestbookPage() {
  return (
    <section>
      <TitlePage title='sign my guestbook' />
      <Suspense>
        <GuestbookForm />
        <GuestbookEntries />
      </Suspense>
    </section>
  );
}

async function GuestbookForm() {
  const session = await auth();

  return session?.user ? (
    <>
      <Form />
      <SignOut />
    </>
  ) : (
    <SignIn />
  );
}

async function GuestbookEntries() {
  const entries = await getGuestbookEntries();

  if (entries.length === 0) {
    return null;
  }

  return entries.map((entry) => (
    <div key={entry.id} className='flex flex-col space-y-1 mb-4'>
      <div className='w-full text-sm break-words'>
        <span
          className={cn('text-neutral-600 dark:text-neutral-400 mr-1', {
            'inline-flex': entry.email === 'dionananda77@gmail.com',
          })}
        >
          {entry.created_by}
          {entry.email === 'dionananda77@gmail.com' && (
            <Image
              src='/svg/verified.svg'
              alt='Admin Verified Logo'
              width={16}
              height={16}
            />
          )}
        </span>
        {entry.body}
      </div>
    </div>
  ));
}
