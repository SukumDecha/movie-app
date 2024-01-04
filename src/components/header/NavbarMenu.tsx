import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { Dropdown } from "../Dropdown";
import { SearchBar } from "../Searchbar";

interface NavLink {
  path?: string;
  label: ReactNode;
  className?: string;
}

interface NavListProps {
  items: NavLink[];
}

interface NavbarProps {
  className?: string;
}

const NavList: React.FC<NavListProps> = ({ items }) => {
  const nevigate = useNavigate();

  return (
    <ul className="flex gap-4 md:gap-8">
      {items.map(({ path, label, className }, index) => (
        <li key={index} className={className}>
          <span onClick={() => nevigate(path as string)}>{label}</span>
        </li>
      ))}
    </ul>
  );
};

const NavbarMenu: React.FC<NavbarProps> = ({ className }) => (
  <div className={twMerge("z-30 p-6 w-full h-[10%]", className)}>
    <nav className="flex justify-center md:justify-between text-white text-lg font-light">
      <div className="hidden md:inline-block left-div">
        <NavList
          items={[
            { path: "/category/movie", label: "Movies", className: "hover" },
            { path: "/category/series", label: "Series", className: "hover" },
          ]}
        />
      </div>

      <div className="right-div">
        <NavList
          items={[
            {
              label: <SearchBar />,
            },
            {
              label: <Dropdown />,
            },
          ]}
        />
      </div>
    </nav>
  </div>
);

export default NavbarMenu;
