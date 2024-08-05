import { Metadata } from 'next';
import React from 'react';

import { TitlePage } from '@/components/title-page';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

export default function BlogPage() {
  return (
    <section>
      <TitlePage title='read my blog' />
    </section>
  );
}
