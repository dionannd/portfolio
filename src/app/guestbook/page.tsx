import { Metadata } from 'next';
import { Suspense } from 'react';

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
        <span className='text-neutral-600 dark:text-neutral-400 mr-1'>
          {entry.created_by}
        </span>
        {entry.body}
      </div>
    </div>
  ));
}
