import { atom } from 'recoil';

export type WindowStateType = {
  onload: boolean;
};

export const windowState = atom<WindowStateType>({
  key: 'window',
  default: {
    onload: true,
  },
});
