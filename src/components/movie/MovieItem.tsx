import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MovieProps from "../../utils/types/MovieProps";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const MovieItem = ({
  Title,
  Year,
  Type,
  Poster,
  imdbID,
}: MovieProps) => {
  return (
    <div className="w-[25%] h-[80%] ">
      <div className="w-full h-[70%] relative">
        <img
          className="w-full h-full object-cover rounded-t-xl"
          src={Poster}
          alt="poster"
        />
        <div className="absolute top-2 right-2 ">
          <FontAwesomeIcon style={{ color: "red" }} icon={faHeart} size="2x" />
        </div>
      </div>

      <div className="w-full h-[30%] bg-white text-sm font-black p-3 rounded-b-xl">
        <div className="font-semibold mb-2">
          {Title} - {Type}
        </div>
        <span className="font-normal">
          {Year} | {imdbID}
        </span>
        <br />
      </div>
    </div>
  );
};
