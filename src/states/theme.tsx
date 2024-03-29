import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: typeof window === 'undefined' ? undefined : sessionStorage,
});

export type ThemeStateType = {
  dark: boolean;
};

export const themeState = atom<ThemeStateType>({
  key: 'theme',
  default: {
    dark: false,
  },
  effects_UNSTABLE: [persistAtom],
});
