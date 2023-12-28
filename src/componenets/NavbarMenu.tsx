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
    <div className="bg-black p-6 w-full">
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
