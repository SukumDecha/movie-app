import { useEffect, useState } from "react";
import MovieProps from "../utils/types/MovieProps";
import { useParams } from "react-router-dom";
import { fetchRandomMovie } from "../utils/handler/movieHandler";
import { SidebarMenu } from "../components/header/SidebarMenu";
import { MovieSection } from "../components/movie/MovieSection";
import NavbarMenu from "../components/header/NavbarMenu";

export const CategoryPage = () => {
  const { category } = useParams();
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const allMovies = await fetchRandomMovie(
        16,
        category ? category : "movie"
      );
      setMovies(allMovies);
    };

    fetchMovies();
  }, [category]);

  return (
    <div className="flex h-screen">
      <div className="w-1/5 flex flex-col h-screen">
        <SidebarMenu />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden bg-[#343330]">
        <div>
          <NavbarMenu />
        </div>
        <div className="flex-1 overflow-y-auto p-6 relative z-0">
          <MovieSection title={`${category}`} favouriteMovies={movies} />
        </div>
      </div>
    </div>
  );
};
