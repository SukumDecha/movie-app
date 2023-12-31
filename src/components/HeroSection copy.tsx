import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { fetchRandomMovies } from "../utils/handler/movieHandler";
import MovieProps from "../utils/types/MovieProps";

export const HeroSectionCopy = () => {
  const [movie, setMovie] = useState<MovieProps | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movie = await fetchRandomMovies(1);
        setMovie(movie[0]);
      } catch (e) {
        console.log(e);
      }
    };

    fetchMovie();
  }, []);

  return (
    <div className="w-full h-[40%] md:h-[70%] bg-yellow-700 relative">
      <img
        className="w-full h-auto object-fill object-center absolute bottom-0 z-0 "
        src={movie?.Poster}
        alt="herosection"
      />

      <div className="flex flex-col absolute bottom-2 md:bottom-4 left-4 z-10 text-white">
        <span className="text-xs md:text-5xl font-light md:font-semibold">
          {movie && movie.Title}
        </span>

        <span className="text-xs md:text-sm text-secondary font-thin mt-4">
          {movie && (
            <span>
              {movie.Year} | {movie.Type} | {movie.imdbRating}
            </span>
          )}
        </span>

        <div className="flex mt-8 gap-4">
          <div className="btn px-6">Watch now</div>
          <div className="favourite px-4 py-2 my-auto">
            <FontAwesomeIcon style={{ color: "red" }} icon={faHeart} />
          </div>
        </div>
      </div>
    </div>
  );
};
