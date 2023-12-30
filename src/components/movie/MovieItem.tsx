import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MovieProps from "../../utils/types/MovieProps";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const MovieItem = ({
  Title,
  Year,
  Type,
  Poster,
  imdbRating,
}: MovieProps) => {
  return (
    <div className="w-[13rem] h-[20rem] flex-shrink-0 hover">
      <div className="poster h-3/4 relative">
        <img
          className="w-full h-full object-cover rounded-t-xl"
          src={Poster}
          alt="poster"
        />
        <div className="absolute top-2 right-2 ">
          <FontAwesomeIcon style={{ color: "red" }} icon={faHeart} size="2x" />
        </div>
      </div>

      <div className="h-1/4 bg-white text-sm font-black p-3 rounded-b-xl">
        <div className="font-semibold mb-2">{Title}</div>
        <span className="font-normal">
          {Year} | {imdbRating} | {Type}
        </span>
        <br />
      </div>
    </div>
  );
};
