import { useEffect, useState } from "react";
import { useSearch } from "../utils/CustomHook";
import MovieProps from "../utils/types/MovieProps";
import { searchByName } from "../utils/api/api";
import { LoadingItem } from "./item/LoadingItem";
import { EmptyItem } from "./item/EmptyItem";
import { MovieItem } from "./item/MovieItem";
import { debounce } from "lodash";

export const ResultSection = () => {
  const { search } = useSearch();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    const searchMovie = async () => {
      try {
        const result = await searchByName(search);
        setMovies(result);
      } finally {
        setLoading(false);
      }
    };

    const debounceSearch = debounce(() => searchMovie(), 300);

    debounceSearch();
  }, [search]);
  return (
    <div className="bg-[#343330] flex-1 overflow-hidden p-6 ">
      <span className="text-white text-xl underline md:text-2xl">
        {`Searching: ${search}`}
      </span>

      <div className="flex flex-wrap overflow-x-hidden overflow-y-auto gap-5 pt-5 scrollbar-hide">
        {loading ? (
          <LoadingItem />
        ) : movies.length === 0 ? (
          <EmptyItem />
        ) : (
          movies.map((movie, index) => <MovieItem key={index} {...movie} />)
        )}
      </div>
    </div>
  );
};
