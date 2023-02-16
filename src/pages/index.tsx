import { Element as ScrollElement } from 'react-scroll';

import { DefaultLayout } from '@/components/layouts';
import { Hero, Portfolio, Skill, Footer, Career } from '@/components/parts';

export default function Home() {
  return (
    <DefaultLayout title='kaduhiro | Investor, Software Engineer, Freelance'>
      <Hero />
      <ScrollElement name='skill' className='bg-gray-100 dark:bg-gray-800'>
        <Skill />
      </ScrollElement>
      <ScrollElement name='career' className='bg-gray-200 dark:bg-gray-700'>
        <Career />
      </ScrollElement>
      <ScrollElement name='portfolio' className='bg-white dark:bg-gray-900'>
        <Portfolio />
      </ScrollElement>
      <ScrollElement name='contact'>
        <Footer />
      </ScrollElement>
    </DefaultLayout>
  );
}
