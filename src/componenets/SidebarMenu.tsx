import {
  faArrowTrendUp,
  faComment,
  faFilm,
  faGear,
  faHeart,
  faMugHot,
  faPeopleGroup,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

interface SidebarItemProps {
  icon: ReactNode;
  text: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text }) => (
  <div className="flex items-center">
    {icon}
    <span className="px-4">{text}</span>
  </div>
);

interface SidebarListProps {
  items: SidebarItemProps[];
}

const SidebarList: React.FC<SidebarListProps> = ({ items }) => (
  <ul className="flex flex-col gap-6 text-secondary text-normal font-thin">
    {items.map((item, index) => (
      <li key={index} className="items-start">
        <SidebarItem {...item} />
      </li>
    ))}
  </ul>
);

const sidebarItemsA: SidebarItemProps[] = [
  { icon: <FontAwesomeIcon icon={faFilm} />, text: "Home" },
  { icon: <FontAwesomeIcon icon={faHeart} />, text: "Favourites" },
  { icon: <FontAwesomeIcon icon={faArrowTrendUp} />, text: "Trending" },
  { icon: <FontAwesomeIcon icon={faFilm} />, text: "Coming Soon" },
];

const sidebarItemsB: SidebarItemProps[] = [
  { icon: <FontAwesomeIcon icon={faPeopleGroup} />, text: "Community" },
  { icon: <FontAwesomeIcon icon={faComment} />, text: "Social" },
];

const sidebarItemsC: SidebarItemProps[] = [
  { icon: <FontAwesomeIcon icon={faGear} />, text: "Settings" },
  { icon: <FontAwesomeIcon icon={faRightFromBracket} />, text: "Logout" },
];

export const SidebarMenu: React.FC = () => {
  return (
    <div className="w-[25%] h-[100vh] bg-[#21201E] flex flex-col items-center">
      <div className="text-white text-2xl font-semibold my-6">
        <FontAwesomeIcon icon={faMugHot} />
        <span className="px-4">WATCH</span>
      </div>

      {/* Additional content goes here */}
      <div className="flex flex-col gap-[6em] mt-6">
        <SidebarList items={sidebarItemsA} />
        <SidebarList items={sidebarItemsB} />
        <SidebarList items={sidebarItemsC} />
      </div>
    </div>
  );
};
