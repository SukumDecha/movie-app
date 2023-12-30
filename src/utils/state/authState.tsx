import { atom } from "recoil";

export const authState = atom<boolean>({
    key: 'isAuth',
    default: false,
})