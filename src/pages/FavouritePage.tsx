import { useEffect, useState } from "react";
import { SidebarMenu } from "../components/header/SidebarMenu";
import { useFavourite } from "../utils/handler/favouriteHandler";
import { fetchByName } from "../utils/handler/movieHandler";
import MovieProps from "../utils/types/MovieProps";
import { MovieSection } from "../components/movie/MovieSection";
import FavouriteProps from "../utils/types/FavouriteProps";
import NavbarMenu from "../components/header/NavbarMenu";

export const FavouritePage = () => {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const { favourite } = useFavourite();

  useEffect(() => {
    const fetchMovie = async () => {
      const favouriteMovies = await getFavouriteMovies(favourite);
      setMovies(favouriteMovies);
    };

    fetchMovie();
  }, []);
  return (
    <div className="flex h-screen">
      <div className="w-1/5 flex flex-col h-screen">
        <SidebarMenu />
      </div>
      <div className="flex-1 flex flex-col items-center overflow-hidden bg-[#343330]">
        <div>
          <NavbarMenu />
        </div>
        <div className="flex-1 overflow-y-auto p-6 relative z-0">
          <MovieSection title="Favourite..." favouriteMovies={movies} />
        </div>
      </div>
    </div>
  );
};

const getFavouriteMovies = async (
  favourite: FavouriteProps[]
): Promise<MovieProps[]> => {
  const favouriteMovies: MovieProps[] = [];

  // Replace with your actual fetching logic
  for (const title of favourite) {
    const movieData = await fetchByName(title.Title, title.Type);
    favouriteMovies.push(movieData);
  }

  return favouriteMovies;
};
