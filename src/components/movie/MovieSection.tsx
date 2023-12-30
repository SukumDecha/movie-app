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
        const randomMovies = await fetchRandomMovies(15);
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
    <div className="p-4 h-[100vh] bg-blue-950 overflow-hidden">
      <span className="text-white text-xl md:text-2xl">{title}</span>

      <div className="flex overflow-x-auto gap-5 pt-5 scrollbar-hide">
        {movies.map((movie, index) => (
          <MovieItem key={index} {...movie} />
        ))}
      </div>
    </div>
  );
};
