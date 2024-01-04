import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

const page = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/favourites",
    name: "Favourite",
  },
  {
    path: "/category/movie",
    name: "Movie",
  },
  {
    path: "/category/series",
    name: "Series",
  },
];

export const Dropdown = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="relative z-40">
      <button
        id="dropdownDefaultButton"
        type="button"
        onClick={() => setActive((prev) => !prev)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {active && (
        <div className="absolute right-0 text-md shadow-2xl bg-white  rounded-lg text-sm p-4 text-black">
          <ul className="flex flex-col gap-2">
            {page.map((item) => {
              return (
                <li>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
