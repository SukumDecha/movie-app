import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HeroSection = () => {
  return (
    <div className="w-full h-[40%] bg-yellow-700 relative">
      <img
        className="w-full h-[135%] object-cover object-center absolute bottom-0 z-0"
        src="/public/assets/pages/home/HeroSection.jpeg"
        alt="herosection"
      />

      <div className="flex flex-col absolute bottom-4 left-4 z-10 text-white">
        <span className="text-5xl font-semibold">Insider</span>

        <span className="text-sm text-secondary font-thin mt-4">
          2022 | Comdedy horror | season
        </span>

        <div className="flex mt-8 gap-4">
          <div className="btn px-6">Watch now</div>
          <div className="favourite px-4 py-2 my-auto">
            <FontAwesomeIcon style={{ color: "red" }} icon={faHeart} />
          </div>
        </div>
      </div>
    </div>
  );
};
