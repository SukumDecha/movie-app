import { atom } from "recoil";
import MovieProps from "../types/MovieProps";

export const favouriteState = atom<MovieProps[]>({
  key: "favouriteState",
  default: [],
});
