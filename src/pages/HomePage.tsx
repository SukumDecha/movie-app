import { NavbarMenu } from "../components/header/NavbarMenu";
import { SidebarMenu } from "../components/header/SidebarMenu";
import { HeroSection } from "../components/HeroSection";
import { MovieSection } from "../components/movie/MovieSection";

export const HomePage = () => {
  console.log(location);
  return (
    <div className="flex w-full h-[100vh] border-red-500">
      <div className="w-1/5">
        <SidebarMenu />
      </div>
      <div className="container flex flex-col w-4/5">
        <NavbarMenu />
        <HeroSection />
        <MovieSection title="Trending..." />
      </div>
    </div>
  );
};
