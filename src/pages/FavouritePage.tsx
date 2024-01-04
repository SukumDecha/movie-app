import { useEffect, useState } from "react";
import { SidebarMenu } from "../components/header/SidebarMenu";
import { fetchByName } from "../utils/api/api";
import MovieProps from "../utils/types/MovieProps";
import FavouriteProps from "../utils/types/FavouriteProps";
import NavbarMenu from "../components/header/NavbarMenu";
import { useFavourite, useSearch } from "../utils/CustomHook";
import { ResultSection } from "../components/ResultSection";
import { MovieSection } from "../components/MovieSection";

export const FavouritePage = () => {
  const { favourite } = useFavourite();
  const { search } = useSearch();
  const isSearching = search.length !== 0;

  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    const fetchFavouriteMovies = async () => {
      const favouriteMovies = await getFavouriteMovies(favourite);
      setMovies(favouriteMovies);
    };

    fetchFavouriteMovies();
  }, [favourite]);

  return (
    <div className="flex h-screen">
      <div className="hidden w-1/5 md:flex flex-col h-screen">
        <SidebarMenu />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden bg-[#343330]">
        <NavbarMenu />
        <div className="flex-1 overflow-y-auto p-6 relative z-0">
          {isSearching ? (
            <ResultSection />
          ) : (
            <>
              <MovieSection
                title="Favourite - Movie"
                type="movie"
                favouriteMovies={filterMoviesByType(movies, "movie")}
              />
              <MovieSection
                title="Favourite - Series"
                type="series"
                favouriteMovies={filterMoviesByType(movies, "series")}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const filterMoviesByType = (movies: MovieProps[], type: string) => {
  return movies.filter((m) => m.Type === type);
};

const getFavouriteMovies = async (
  favourite: FavouriteProps[]
): Promise<MovieProps[]> => {
  const favouriteMovies: MovieProps[] = [];

  for (const title of favourite) {
    const movieData = await fetchByName(title.Title, title.Type);
    favouriteMovies.push(movieData);
  }

  return favouriteMovies;
};
