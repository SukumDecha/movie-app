import { useEffect, useRef, useState } from "react";
import MovieProps from "../utils/types/MovieProps";
import { useParams } from "react-router-dom";
import { fetchRandomMovie } from "../utils/api/api";
import { SidebarMenu } from "../components/header/SidebarMenu";
import { MovieSection } from "../components/MovieSection";
import NavbarMenu from "../components/header/NavbarMenu";
import { useCurrentMovie, useSearch } from "../utils/CustomHook";
import { DetailSection } from "../components/DetailSection";
import { ResultSection } from "../components/ResultSection";

export const CategoryPage = () => {
  const { search } = useSearch();
  const { category } = useParams();
  const { currentMovie, setCurrentMovie } = useCurrentMovie();
  const isSearching = search.length !== 0;
  const cachedMovie = useRef(currentMovie);

  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const allMovies = await fetchRandomMovie(
        16,
        category ? category : "movie"
      );
      setMovies(allMovies);
    };

    if (movies.length === 0) {
      setCurrentMovie(null);
    }

    if (cachedMovie.current?.Title !== currentMovie?.Title) {
      cachedMovie.current = currentMovie;
      return;
    }

    fetchMovies();
  }, [category, currentMovie]);

  return (
    <div className="flex h-screen">
      <div className="hidden md:flex w-1/5 flex-col h-screen">
        <SidebarMenu />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden bg-[#343330]">
        <NavbarMenu />
        {isSearching ? (
          <ResultSection />
        ) : (
          <div className="flex-1 overflow-y-auto p-6 relative z-0">
            <MovieSection
              title={`${colorfulTitle(category)}`}
              type={`${category}`}
              favouriteMovies={movies}
            />
            <div>{currentMovie && <DetailSection movie={currentMovie} />}</div>
          </div>
        )}
      </div>
    </div>
  );
};

const colorfulTitle = (title?: string) => {
  switch (title) {
    case "movie":
      return "Displaying recommend Movie...";
    case "series":
      return "Displaying recommend Series...";
    default:
      return "Unknown type...";
  }
};
