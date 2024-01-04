import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSearch } from "../utils/CustomHook";
import { ChangeEvent, useEffect } from "react";

export const SearchBar = () => {
  const { search, setSearch } = useSearch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setSearch("");
  }, []);

  return (
    <div className="flex gap-2 items-center">
      <input
        type="text"
        placeholder="Search your movie..."
        value={search}
        onChange={handleChange}
        className="px-10 md:px-20 py-1 rounded-xl bg-white text-gray-400 text-sm"
      />
      <FontAwesomeIcon className="mb-0" icon={faMagnifyingGlass} />
    </div>
  );
};
