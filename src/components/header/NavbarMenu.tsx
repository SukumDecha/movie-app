import React, { ReactNode } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { twMerge } from "tailwind-merge";

interface NavLink {
  path: string;
  label: ReactNode;
}

interface NavListProps {
  items: NavLink[];
}

interface NavbarProps {
  className?: string;
}

const NavList: React.FC<NavListProps> = ({ items }) => (
  <ul className="flex gap-8">
    {items.map(({ path, label }, index) => (
      <li key={index} className="hover">
        <Link to={path}>{label}</Link>
      </li>
    ))}
  </ul>
);

const NavbarMenu: React.FC<NavbarProps> = ({ className }) => (
  <div className={twMerge("z-0 p-6 w-full h-[10%]", className)}>
    <nav className="flex justify-between text-white text-lg font-light">
      <div className="left-div">
        <NavList
          items={[
            { path: "/category/movie", label: "Movies" },
            { path: "/category/series", label: "Series" },
            { path: "/category/documentaries", label: "Documentaries" },
          ]}
        />
      </div>

      <div className="right-div">
        <NavList
          items={[
            {
              path: "/search",
              label: <FontAwesomeIcon icon={faMagnifyingGlass} />,
            },
            {
              path: "/notifications",
              label: <FontAwesomeIcon icon={faBell} />,
            },
          ]}
        />
      </div>
    </nav>
  </div>
);

export default NavbarMenu;
