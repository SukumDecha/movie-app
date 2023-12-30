import { NavbarMenu } from "../components/header/NavbarMenu";
import { SidebarMenu } from "../components/header/SidebarMenu";
import { HeroSection } from "../components/HeroSection";
import { MovieSection } from "../components/movie/MovieSection";

export const HomePage = () => {
  console.log(location);
  return (
    <div className="flex w-full border-1 border-red-500">
      <SidebarMenu />
      <div className="container flex flex-col">
        <NavbarMenu />
        <HeroSection />
        <MovieSection title="Trending..." />
      </div>
    </div>
  );
};
