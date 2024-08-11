import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/badge';

import { PreloadResources } from '@/app/preload';

export default function Home() {
  return (
    <section>
      <PreloadResources />
      <h1 className='mb-8 text-2xl font-medium tracking-tighter'>
        hey, I&apos;m dion 👋
      </h1>
      <p className='prose prose-neutral dark:prose-invert'>
        {`I'm a fullstack web developer, optimist. I currently `}
        <Link href='/work'>work</Link>
        {` as a fullstack web developer at `}
        <span className='not-parse'>
          <Badge href='https://www.arcentric.design/'>
            <svg
              width='13'
              height='11'
              role='img'
              aria-label='Vercel logo'
              className='mr-1 inline-flex'
            >
              <use href='/sprite.svg#vercel' />
            </svg>
            Arcentric
          </Badge>
        </span>
        {`, where I help teach the `}
        <Badge href='https://nextjs.org'>
          <Image
            alt='Next.js logomark'
            src='/next-logo.svg'
            className='!mr-1'
            width='14'
            height='14'
          />
          Next.js
        </Badge>
        {` community, an open-source web framework built with `}
        <Badge href='https://react.dev'>
          <svg
            width='14'
            height='14'
            role='img'
            aria-label='React logo'
            className='!mr-1'
          >
            <use href='/sprite.svg#react' />
          </svg>
          React
        </Badge>
        .
      </p>
      <div className='prose prose-neutral dark:prose-invert'>
        <p>
          I invest small angel checks into early stage startups building tools
          for developers.
        </p>
      </div>
      <div className='my-8 flex h-14 w-full flex-row space-x-2 overflow-x-auto'>
        <a
          href='https://bun.sh'
          className='flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800'
        >
          <svg width='35' height='27' role='img' aria-label='Bun logo'>
            <use href='/sprite.svg#bun' />
          </svg>
        </a>
        <a
          href='https://nodejs.org'
          className='flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800'
        >
          <Image
            alt='Nodejs logo'
            src='/svg/nodejs.svg'
            className='!mr-1'
            width='32'
            height='32'
          />
        </a>
        <a
          href='https://www.postgresql.org/'
          className='flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800'
        >
          <Image
            alt='Postgresql logo'
            src='/svg/postgresql.svg'
            className='!mr-1'
            width='32'
            height='32'
          />
        </a>
        <a
          href='https://supabase.com'
          className='flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800'
        >
          <svg width='100' height='19' role='img' aria-label='Supabase logo'>
            <use href='/sprite.svg#supabase' />
          </svg>
        </a>
        <a
          href='https://resend.com'
          className='flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800'
        >
          <svg width='70' height='17' role='img' aria-label='Resend logo'>
            <use href='/sprite.svg#resend' />
          </svg>
        </a>
      </div>
    </section>
  );
}
