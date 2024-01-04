import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MovieProps from "../utils/types/MovieProps";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useFavourite } from "../utils/CustomHook";
import { Link } from "react-router-dom";

interface DetailSectionInterface {
  movie: MovieProps;
  backButton?: boolean;
}
export const DetailSection: React.FC<DetailSectionInterface> = ({
  movie,
  backButton,
}) => {
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
  const heartIconStyle = favourite.some((m) => m.Title === movie.Title)
    ? "red"
    : "gray";

  return (
    <div className="w-full flex flex-col md:flex-row justify-between flex-1">
      <div className="img w-full h-2/4 md:w-2/5 md:h-auto p-6">
        <img
          src={movie.Poster}
          alt="Poster"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="container w-full md:w-3/5 flex flex-col p-6">
        <span className="text-white text-2xl font-bold">{movie.Title}</span>
        <span className="text-white text-sm font-thin mt-3">
          {movie.Year} | {movie.Type}
        </span>

        <span className="text-white text-sm font-thin mt-6">{movie.Plot}</span>
        <div className="flex gap-4 mt-20">
          <div className="btn">
            <span className="text-xl">Watch now</span>
          </div>
          <div className="favourite rounded-lg p-2 hover">
            <FontAwesomeIcon
              style={{
                color: heartIconStyle,
              }}
              icon={faHeart}
              size="2x"
              onClick={handleToggle}
            />
          </div>
        </div>

        {backButton && (
          <Link to="/">
            <div className="mt-6 btn text-center bg-red-600 hover:bg-red-500">
              <span className="text-xl">Back to home page</span>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};
