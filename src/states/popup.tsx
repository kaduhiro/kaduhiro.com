import { atom } from 'recoil';

export type PopupStateType = {
  twitter: boolean;
};

export const popupState = atom<PopupStateType>({
  key: 'popup',
  default: {
    twitter: false,
  },
});
