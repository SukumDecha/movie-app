import NavbarMenu from "../components/header/NavbarMenu";
import { SidebarMenu } from "../components/header/SidebarMenu";
import { HeroSection } from "../components/HeroSection";
import { MovieSection } from "../components/movie/MovieSection";

export const HomePage = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/5 flex flex-col h-screen">
        <SidebarMenu />
      </div>
      <div
        className="flex-1 flex flex-col overflow-hidden"
        style={{
          backgroundImage: 'url("/public/assets/pages/home/HeroSection.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <NavbarMenu />
        <div className="flex-1 overflow-y-auto">
          <HeroSection />
          <MovieSection
            title="Recommend Movie..."
            type="movie"
            className="bg-[#343330]"
          />
          <MovieSection
            title="Recommend Series..."
            type="series"
            className="bg-[#343330]"
          />
        </div>
      </div>
    </div>
  );
};
