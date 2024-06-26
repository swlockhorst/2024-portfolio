import { About } from '@/components/about';
import { Footer } from '@/components/footer';
import { Nav } from '@/components/nav';
import { Projects } from '@/components/projects';
import { Work } from '@/components/work';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Steven Lockhorst</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <svg width='0' height='0'>
          <defs>
            <linearGradient id='main-gradient'>
              <stop offset='0%' stopColor='#b16cea' />
              <stop offset='30%' stopColor='#ff5e69' />
              <stop offset='55%' stopColor='#ff8a56' />
              <stop offset='80%' stopColor='#ffa84b' />
            </linearGradient>
          </defs>
        </svg>

        <Nav />

        <About />

        <Work />

        <Projects />
      </main>

      <Footer />
    </>
  );
}
