import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

import { TitlePage } from '@/components/title-page';

export const metadata: Metadata = {
  title: 'Work',
  description: 'A summary of my work and contributions.',
};

export default function WorkPage() {
  return (
    <section>
      <TitlePage title='my work' />
      <div className='prose prose-neutral dark:prose-invert'>
        <p>
          On a mission to build products developers{' '}
          <Link href='/blog/developer-experience'>love</Link>, and along the
          way, teach the next generation of developers. Here's a summary of my
          work so far.
        </p>
        <hr className='my-6 border-neutral-100 dark:border-neutral-800' />
        <h2 className='font-medium text-xl mb-1 tracking-tighter'>
          Arcentric Design
        </h2>
        <p className='text-neutral-600 dark:text-neutral-400 text-sm'>
          Fullstack Web Developer
        </p>
      </div>
    </section>
  );
}
