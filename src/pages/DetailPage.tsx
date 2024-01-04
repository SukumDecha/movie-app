import { useEffect, useState } from "react";
import { SidebarMenu } from "../components/header/SidebarMenu";
import NavbarMenu from "../components/header/NavbarMenu";
import { DetailSection } from "../components/DetailSection";
import { useCurrentMovie, useSearch } from "../utils/CustomHook";
import { fetchByName } from "../utils/api/api";
import { ResultSection } from "../components/ResultSection";
import { LoadingItem } from "../components/item/LoadingItem";
import { EmptyItem } from "../components/item/EmptyItem";

export const DetailPage = () => {
  const { search } = useSearch();
  const { currentMovie, setCurrentMovie } = useCurrentMovie();
  const isSearching = search.length !== 0;

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      if (!currentMovie) return;

      console.log("movie", currentMovie);
      
      try {
        const data = await fetchByName(currentMovie.Title, currentMovie.Type);
        setCurrentMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [currentMovie, setCurrentMovie]);

  return (
    <div className="flex h-screen">
      <div className="w-1/5 flex flex-col h-screen">
        <SidebarMenu />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden bg-[#343330]">
        <NavbarMenu />
        <div className="flex-1 overflow-y-auto p-6 relative z-0">
          {isSearching ? (
            <ResultSection />
          ) : (
            <>
              {isLoading ? (
                <LoadingItem />
              ) : currentMovie ? (
                <DetailSection movie={currentMovie} backButton={true} />
              ) : (
                <EmptyItem />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
