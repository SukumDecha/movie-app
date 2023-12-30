import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

interface NavListProps {
  items: ReactNode[];
}
const NavList: React.FC<NavListProps> = ({ items }) => (
  <ul className="flex gap-8">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

export const NavbarMenu = () => {
  return (
    <div className="z-10 p-6 w-full h-[10%]">
      <nav className="flex justify-between text-white text-lg font-light">
        <div className="left">
          <NavList items={["Movies", "Series", "Documentaries"]} />
        </div>

        <div className="right">
          <NavList
            items={[
              <FontAwesomeIcon icon={faMagnifyingGlass} />,
              <FontAwesomeIcon icon={faBell} />,
            ]}
          />
        </div>
      </nav>
    </div>
  );
};
