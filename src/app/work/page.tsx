import { Metadata } from 'next';
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
    </section>
  );
}
