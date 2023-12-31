import { useEffect, useState } from "react";
import MovieProps from "../../utils/types/MovieProps";
import { MovieItem } from "./MovieItem";
import { twMerge } from "tailwind-merge";
import { fetchRandomMovie } from "../../utils/handler/movieHandler";

interface MovieSectionProps {
  title: string;
  type: string;
  className?: string;
  favouriteMovies?: MovieProps[];
}

export const MovieSection: React.FC<MovieSectionProps> = ({
  title,
  type,
  favouriteMovies,
  className,
}) => {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!favouriteMovies) {
          const randomMovies = await fetchRandomMovie(9, type);
          setMovies(randomMovies);
        } else {
          setMovies(favouriteMovies);
        }
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchData();
  }, [favouriteMovies]);

  return (
    <div className={twMerge("bg-[#343330] overflow-hidden p-4 ", className)}>
      <span className="text-white text-xl underline md:text-2xl">{title}</span>

      <div className="flex overflow-x-auto overflow-y-hidden gap-5 pt-5 scrollbar-hide">
        {movies &&
          movies.map((movie, index) => <MovieItem key={index} {...movie} />)}
      </div>
    </div>
  );
};
