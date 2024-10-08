import { Metadata } from 'next';
import Link from 'next/link';
import React, { Suspense } from 'react';

import { TitlePage } from '@/components/title-page';

import ViewCounter from '@/app/blog/view-counter';
import { getBlogPosts } from '@/app/db/blog';
import { getViewsCount } from '@/app/db/queries';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

export default function BlogPage() {
  const allBlogs = getBlogPosts();

  return (
    <section>
      <TitlePage title='read my blog' />
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className='flex flex-col space-y-1 mb-4'
            href={`/blog/${post.slug}`}
          >
            <div className='w-full flex flex-col'>
              <p className='text-neutral-900 dark:text-neutral-100 tracking-tight'>
                {post.metadata.title}
              </p>
              <Suspense fallback={<p className='h-6' />}>
                <Views slug={post.slug} />
              </Suspense>
            </div>
          </Link>
        ))}
    </section>
  );
}

async function Views({ slug }: { slug: string }) {
  const views = await getViewsCount();

  return <ViewCounter slug={slug} allViews={views} />;
}
