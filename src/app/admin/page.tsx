import { redirect } from 'next/navigation';

import Form from '@/components/admin/form';

import { auth } from '@/app/auth';
import { getGuestbookEntries } from '@/app/db/queries';

import { IEntry } from '@/types/entry';

export const metadata = {
  title: 'Admin',
};

export default async function GuestbookPage() {
  const session = await auth();

  if (session?.user?.email !== 'dionananda77@gmail.com') {
    redirect('/');
  }

  const entries = await getGuestbookEntries();

  return (
    <section>
      <h1 className='font-medium text-2xl mb-8 tracking-tighter'>admin</h1>
      <Form entries={entries as IEntry[]} />
    </section>
  );
}
