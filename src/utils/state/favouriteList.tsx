import { atom } from "recoil";

export const favourite = atom<boolean>({
    key: 'isAuth',
    default: false,
})