import { useState } from 'react';

import Link from 'next/link';
import { Button as ScrollButton, Link as ScrollLink } from 'react-scroll';
import { useRecoilState } from 'recoil';

import { Theme } from '@/components/elements';
import { IconLogo } from '@/components/elements/icon';
import { popupState } from '@/states';

// import imageKaduhiro from '@/assets/img/kaduhiro.svg';

export const Hero = () => {
  const [popup, setPopup] = useRecoilState(popupState);
  const [open, setOpen] = useState<Boolean>(false);

  const navigators = [
    {
      to: 'skill',
      label: 'スキル',
    },
    {
      to: 'career',
      label: 'キャリア',
    },
    {
      to: 'portfolio',
      label: 'ポートフォリオ',
    },
    {
      to: 'contact',
      label: 'お問い合わせ',
      handler: () => setPopup({ ...popup, twitter: true }),
    },
  ];

  return (
    <>
      <header className='bg-white dark:bg-gray-900'>
        <nav className='relative bg-white dark:bg-gray-900'>
          <div className='container mx-auto px-6 py-4 md:flex md:items-center md:justify-between'>
            <div className='flex items-center justify-between'>
              <div>
                <Link
                  className='text-2xl font-bold text-gray-800 transition-colors duration-300 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 lg:text-3xl'
                  href='/'
                >
                  <IconLogo className='fill-black dark:fill-white' height={50} alt='logo' />
                </Link>
              </div>

              <div className='flex md:hidden'>
                <button
                  type='button'
                  className='text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400'
                  aria-label='toggle menu'
                >
                  {!open && (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='2'
                      onClick={() => setOpen(!open)}
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' d='M4 8h16M4 16h16' />
                    </svg>
                  )}
                  {open && (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='2'
                      onClick={() => setOpen(!open)}
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div
              className={
                'absolute inset-x-0 z-20 w-full bg-white px-6 py-4 transition-all duration-300 ease-in-out dark:bg-gray-900 md:relative md:top-0 md:mt-0 md:flex md:w-auto md:translate-x-0 md:items-center md:bg-transparent md:p-0 md:opacity-100 md:dark:bg-transparent ' +
                (open ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full')
              }
            >
              <div className='flex flex-col md:mx-4 md:flex-row'>
                {navigators.map((navigator, _) => {
                  return (
                    <ScrollLink
                      key={navigator.to}
                      className='my-2 text-gray-700 transition-colors duration-300 hover:cursor-pointer hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 md:mx-4 md:my-0'
                      to={navigator.to}
                      smooth={true}
                      duration={500}
                      onClick={navigator.handler}
                    >
                      {navigator.label}
                    </ScrollLink>
                  );
                })}
              </div>

              <div className='flex justify-center md:block'>
                <a
                  className='relative text-gray-700 transition-colors duration-300 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-300'
                  href='#'
                >
                  <Theme />
                </a>
              </div>
            </div>
          </div>
        </nav>

        <div className='container mx-auto px-6 py-10 sm:py-20 lg:py-40'>
          <div className='items-center gap-10 lg:flex'>
            <div className='w-full lg:w-1/2'>
              <div className='lg:max-w-lg'>
                <h1 className='text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl'>
                  no code, no life.
                </h1>

                <p className='mt-4 text-gray-600 dark:text-gray-400'>
                  「コードに支配されたこの現代社会において、あらゆる分野でコンピュータ技術を駆使し、課題を解決に導いていく」というお仕事をしています。
                </p>

                <ScrollButton
                  type='button'
                  className='mt-6 w-full rounded-md bg-blue-600 px-5 py-2 text-sm tracking-wider text-white transition-colors duration-300 hover:cursor-pointer hover:bg-blue-500 focus:bg-blue-500 focus:outline-none lg:w-auto'
                  to='career'
                  smooth={true}
                  duration={500}
                  value='kaduhiroって誰?'
                />
              </div>
            </div>

            <div className='mt-10 flex w-full items-center justify-center lg:mt-0 lg:w-1/2'>
              <img
                width={480}
                className='h-auto max-w-xl rounded-lg shadow-xl dark:shadow-gray-800'
                src='/img/kaduhiro.svg'
                alt='kaduhiro'
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
