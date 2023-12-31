import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MovieProps from "../../utils/types/MovieProps";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useFavourite } from "../../utils/handler/favouriteHandler";
import { useEffect } from "react";

export const MovieItem = (movie: MovieProps) => {
  const { favourite, setFavourite } = useFavourite();

  const handleToggle = () => {
    setFavourite((prev) => {
      const isMovieInFavorites = prev.some((m) => m.Title === movie.Title);

      if (isMovieInFavorites) {
        return prev.filter((m) => m.Title !== movie.Title);
      }

      return [...prev, movie];
    });
  };

  useEffect(() => {
    console.log("movie:", movie);
    console.log("favourite: ", favourite);
  }, [favourite]);

  const heartIconStyle = favourite.some((m) => m.Title === movie.Title)
    ? "red"
    : "white";

  return (
    // <div className="w-[13rem] h-[20rem] flex-shrink-0 hover">
    <div className="w-1/4 h-[20rem] flex-shrink-0 hover">
      <div className="poster h-3/4 relative">
        <img
          className="w-full h-full object-cover rounded-t-xl"
          src={movie.Poster}
          alt="poster"
        />
        <div className="absolute top-2 right-2 ">
          <FontAwesomeIcon
            style={{ color: heartIconStyle }}
            icon={faHeart}
            size="2x"
            onClick={handleToggle}
          />
        </div>
      </div>

      <div className="h-1/4 bg-white text-sm font-black p-3 rounded-b-xl">
        <div className="font-semibold mb-2">{movie.Title}</div>
        <span className="font-normal">
          {movie.Year} | {movie.imdbRating} | {movie.Type}
        </span>
        <br />
      </div>
    </div>
  );
};
