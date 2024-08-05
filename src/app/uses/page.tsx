import { Metadata } from 'next';

import { TitlePage } from '@/components/title-page';

export const metadata: Metadata = {
  title: 'Uses',
  description:
    "Here's  what tech I'm currently using for coding, videos, and music.",
};

export default function UsesPage() {
  return (
    <section>
      <TitlePage title="here's my setup" />
      <div className='prose prose-neutral dark:prose-invert'>
        <h3 id='computer-office'>Computer / Office</h3>
        <ul>
          <li>13&quot; Macbook Air M1 (2020)</li>
          <li>22&quot; Samsung LS22F350</li>
          <li>Logitech G103 Prodigy Gaming Mouse</li>
          <li>Techware Phantom Elite 87 Keyboard</li>
          <li>Desk Customize</li>
          <li>Fantech OCA258 Office Chair</li>
        </ul>
        <h3 id='coding'>Coding</h3>
        <ul>
          <li>
            Editor: VSCode (<a href='#'>Settings / Extensions</a>)
          </li>
          <li>
            Theme:{' '}
            <a
              href='https://marketplace.visualstudio.com/items?itemName=Dionannd.tokyo-night-ported-nvim'
              target='_blank'
            >
              Tokyo Night
            </a>{' '}
            Custom by me
          </li>
          <li>Terminal: Warp Terminal / zsh</li>
          <li>Browser: Arc Browser</li>
        </ul>
        <h3 id='audio-video'>Audio / Video</h3>
        <ul>
          <li>Logitech Z213 Speaker</li>
        </ul>
        <h3 id='software'>Software</h3>
        <ul>
          <li>Shottr</li>
          <li>Numi</li>
          <li>DBeaver</li>
          <li>Postman</li>
          <li>Spotify</li>
        </ul>
        <h3 id='music'>Music</h3>
        <ul>
          <li>Samick Gregbennett GD-303/N Acoustic Guitar</li>
        </ul>
      </div>
    </section>
  );
}
