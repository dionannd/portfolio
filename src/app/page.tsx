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
    </section>
  );
}
