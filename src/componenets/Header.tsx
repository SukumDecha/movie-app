import { SidebarMenu } from "./SidebarMenu";
import { NavbarMenu } from "./NavbarMenu";

export const Header = () => {
  return (
    <div className="flex">
      <SidebarMenu />
      <NavbarMenu />
    </div>
  );
};
