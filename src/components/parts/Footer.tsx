import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';

import { IconLogoSimple } from '@/components/elements/icon';
import { popupState } from '@/states';

export const Footer = () => {
  const popup = useRecoilValue(popupState);

  const socials = [
    {
      icon: faTwitter,
      label: 'Twitter',
      url: 'https://twitter.com/kaduhiro_',
      popup: popup.twitter,
    },
    {
      icon: faGithub,
      label: 'GitHub',
      url: 'https://github.com/kaduhiro',
    },
  ];

  return (
    <>
      <footer className='bg-white dark:bg-gray-900'>
        <div className='container mx-auto flex flex-col items-center justify-between space-y-4 p-6 sm:flex-row sm:space-y-0'>
          <Link
            href='/'
            className='text-2xl font-bold text-gray-800 transition-colors duration-300 hover:text-blue-500 dark:text-white dark:hover:text-blue-400'
          >
            <IconLogoSimple className='fill-black dark:fill-white' height={30} alt='logo' />
          </Link>

          <p className='text-sm text-gray-600 dark:text-gray-300'>© Copyright 2023 kaduhiro. All rights reserved.</p>

          <div className='flex gap-4'>
            {socials.map((social, _) => {
              return (
                <Link
                  href={social.url}
                  className='text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400'
                  aria-label={social.label}
                  target='_blank'
                  key={social.url}
                >
                  <FontAwesomeIcon
                    icon={social.icon}
                    className={'h-5 w-5 fill-current ' + (social.popup ? 'animate-heartbeat text-blue-500' : '')}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </footer>
    </>
  );
};
