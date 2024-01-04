import NavbarMenu from "../components/header/NavbarMenu";
import { useSearch } from "../utils/CustomHook";
import { SidebarMenu } from "../components/header/SidebarMenu";
import { ResultSection } from "../components/ResultSection";
import { HeroSection } from "../components/HeroSection";
import { MovieSection } from "../components/MovieSection";

export const HomePage = () => {
  const { search } = useSearch();
  const isSearching = search.length !== 0;

  return (
    <div className="flex h-screen">
      <div className="hidden w-1/5 md:flex flex-col h-screen">
        <SidebarMenu />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <PageContent isSearching={isSearching} />
      </div>
    </div>
  );
};

const PageContent = ({ isSearching }) => (
  <div
    className="flex-1 overflow-y-auto"
    style={{
      backgroundImage: 'url("/assets/pages/home/HeroSection.jpeg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <NavbarMenu />
    {isSearching ? (
      <ResultSection />
    ) : (
      <>
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
      </>
    )}
  </div>
);

export default HomePage;
