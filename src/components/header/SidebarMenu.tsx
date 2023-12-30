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
import { useLocation } from "react-router-dom";

interface SidebarItemProps {
  icon: ReactNode;
  text: string;
  path?: string;
}

interface SidebarListProps {
  items: SidebarItemProps[];
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, path }) => {
  const location = useLocation();
  const isActive = path ? location.pathname === path : false;
  const textColor = isActive && "text-white font-semibold";

  return (
    <div
      className={`flex items-center hover:cursor-pointer hover:text-primary ${textColor}`}
    >
      {icon}
      <span className="px-4">{text}</span>
    </div>
  );
};

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
  { icon: <FontAwesomeIcon icon={faFilm} />, text: "Home", path: "/" },
  {
    icon: <FontAwesomeIcon icon={faHeart} />,
    text: "Favourites",
    path: "/favourites",
  },
  {
    icon: <FontAwesomeIcon icon={faArrowTrendUp} />,
    text: "Trending",
    path: "trending",
  },
  {
    icon: <FontAwesomeIcon icon={faFilm} />,
    text: "Coming Soon",
  },
];

const sidebarItemsB: SidebarItemProps[] = [
  {
    icon: <FontAwesomeIcon icon={faPeopleGroup} />,
    text: "Community",
    path: "/community",
  },
  {
    icon: <FontAwesomeIcon icon={faComment} />,
    text: "Social",
    path: "/social",
  },
];

const sidebarItemsC: SidebarItemProps[] = [
  { icon: <FontAwesomeIcon icon={faGear} />, text: "Settings" },
  { icon: <FontAwesomeIcon icon={faRightFromBracket} />, text: "Logout" },
];

export const SidebarMenu: React.FC = () => {
  return (
    <div className="h-full bg-[#21201E] flex flex-col items-center">
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
