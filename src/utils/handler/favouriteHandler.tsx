import { useRecoilState } from "recoil";
import { favouriteState } from "../state/favouriteList";

export const useFavourite = () => {
  const [favourite, setFavourite] = useRecoilState(favouriteState);

  console.log("Current Favourite State:", favourite);

  return { favourite, setFavourite };
};
