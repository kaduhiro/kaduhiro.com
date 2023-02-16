interface LoadingProps {
  loading: Boolean;
}

import { useEffect, useState } from 'react';

import { useRecoilState } from 'recoil';

import { IconLogoSimple } from '@/components/elements/icon';
import { windowState } from '@/states';

const Loading = () => {
  const [window, setWindow] = useRecoilState(windowState);

  const [fadeout, setFadeout] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setFadeout(true), 1500);
    setTimeout(() => setWindow({ onload: false }), 2000);
  }, [setFadeout, setWindow]);

  const Fullscreen = () =>
    window.onload ? (
      <div className='relative z-50'>
        <div
          className={
            'fixed flex h-full w-full items-center justify-center bg-white dark:bg-black ' +
            (fadeout && 'animate-fade-out-bottom')
          }
        >
          <IconLogoSimple className='w-32 animate-pulse fill-black dark:fill-white' alt='KD' />
        </div>
      </div>
    ) : (
      <></>
    );

  return <Fullscreen />;
};

export default Loading;
