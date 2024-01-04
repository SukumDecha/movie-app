import { useRecoilState } from "recoil";
import { favouriteState } from "./state/favouriteState";
import { currentMovieState } from "./state/currentMovieState";
import { searchState } from "./state/searchState";

export const useFavourite = () => {
  const [favourite, setFavourite] = useRecoilState(favouriteState);


  return { favourite, setFavourite };
};

export const useCurrentMovie = () => {
    const [currentMovie, setCurrentMovie] = useRecoilState(currentMovieState);
 
    return { currentMovie, setCurrentMovie };
  };
  
export const useSearch = () => {
  const [search, setSearch] = useRecoilState(searchState);

  return { search, setSearch };
}