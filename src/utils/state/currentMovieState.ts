import { atom } from "recoil";
import MovieProps from "../types/MovieProps";

export const currentMovieState = atom<MovieProps | null>({
  key: "currentMovie",
  default: null,
});
