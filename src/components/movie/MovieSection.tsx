import { useEffect, useState } from "react";
import { fetchRandomMovies } from "../../utils/handler/movieHandler";
import MovieProps from "../../utils/types/MovieProps";
import { MovieItem } from "./MovieItem";

interface MovieSectionProps {
  title: string;
}

export const MovieSection: React.FC<MovieSectionProps> = ({ title }) => {
  const [movies, setMovies] = useState<MovieProps[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const randomMovies = await fetchRandomMovies();
        setMovies(randomMovies);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchData();
  }, []);

  if (!movies) {
    // Todo make it render empty card
    return <>No movie</>;
  }

  return (
    <div className="p-4 w-full h-[50%] bg-blue-950">
      <span className="text-white text-xl">{title}</span>
      <br />
      <div className="flex gap-4">
        {movies.map((movie) => (
          <MovieItem key={movie.imdbID} {...movie} />
        ))}
      </div>
    </div>
  );
};
