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
import { useLocation, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const isActive = path ? location.pathname === path : false;
  const textColor = isActive && "text-white font-semibold";

  const handleClick = () => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`flex items-center hover:cursor-pointer hover:text-primary ${textColor} text-sm md:text-base `}
    >
      {icon}
      <span className="px-3 md:px-4">{text}</span>
    </div>
  );
};

const SidebarList: React.FC<SidebarListProps> = ({ items }) => (
  <ul className="flex flex-col gap-6 items-start pl-3 lg:pl-0 text-secondary font-thin">
    {items.map((item, index) => (
      <li key={index}>
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
  },
  {
    icon: <FontAwesomeIcon icon={faComment} />,
    text: "Social",
  },
];

const sidebarItemsC: SidebarItemProps[] = [
  { icon: <FontAwesomeIcon icon={faGear} />, text: "Settings" },
  { icon: <FontAwesomeIcon icon={faRightFromBracket} />, text: "Logout" },
];

export const SidebarMenu: React.FC = () => {
  return (
    <div className="flex flex-col flex-1 items-center z-10 bg-[#21201e]">
      <div className="flex-grow">
        <div className="text-white text-xl px-2 lg:text-2xl lg:px-0 font-semibold my-6">
          <FontAwesomeIcon icon={faMugHot} />
          <span className="px-2 lg:px-4">WATCH</span>
        </div>

        {/* Additional content goes here */}
        <div className="flex flex-col gap-[6em] mt-6">
          <SidebarList items={sidebarItemsA} />
          <SidebarList items={sidebarItemsB} />
          <SidebarList items={sidebarItemsC} />
        </div>
      </div>
    </div>
  );
};
