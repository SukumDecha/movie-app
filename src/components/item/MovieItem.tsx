import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MovieProps from "../../utils/types/MovieProps";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  useCurrentMovie,
  useFavourite,
  useSearch,
} from "../../utils/CustomHook";
import { useLocation, useNavigate } from "react-router-dom";

export const MovieItem = (movie: MovieProps) => {
  const { favourite, setFavourite } = useFavourite();
  const { setCurrentMovie } = useCurrentMovie();
  const { search } = useSearch();
  const navigate = useNavigate();
  const location = useLocation();
  const isSearch = search.length !== 0;
  const isCategory = location.pathname.startsWith("/category") && !isSearch;

  const handleClick = () => {
    setCurrentMovie(movie);
    if (!isCategory) {
      navigate("/movie");
    }
  };

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
    <div className="relative">
      <div
        className="w-[13rem] h-[20rem] flex-shrink-0 hover z-0"
        onClick={handleClick}
      >
        {/* // <div className="w-1/4 h-[20rem] flex-shrink-0 hover" onClick={handleClick}> */}
        <div className="poster h-3/4 relative">
          <img
            className="w-full h-full object-cover rounded-t-xl"
            src={movie.Poster}
            alt="poster"
          />
        </div>

        <div className="h-1/4 bg-white p-3 rounded-b-xl">
          <div className="text-sm font-semibold mb-2">{movie.Title}</div>
          <span className="text-sm font-normal">
            {movie.Year} | {movie.Type}
          </span>
          <br />
        </div>
      </div>
      <div className="absolute top-2 right-2 favourite rounded-lg p-2 z-20">
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
  );
};
