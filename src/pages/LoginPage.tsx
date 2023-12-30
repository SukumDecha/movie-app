import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { useSetRecoilState } from "recoil";
import { authState } from "../utils/state/authState";

export const LoginPage = () => {
  const setAuth = useSetRecoilState(authState);

  return (
    <div className="bg-login bg-cover bg-center h-[100vh]">
      <div className="flex justify-center items-center bg-gray-500 bg-opacity-50 h-[100vh]">
        <div className="flex flex-col items-center">
          <div className="text-white text-lg font-semibold">
            <FontAwesomeIcon icon={faMugHot} /> WATCH
          </div>

          <div className="text-white text-md font-light mt-2">
            Enjoy the newest movies
          </div>

          <div className="btn mt-8" onClick={() => setAuth(true)}>
            Login
          </div>
          <div className="text-white text-base font-light mt-4">
            No account?
            <span className="font-bold underline pl-3">Sign up</span>
          </div>
        </div>
      </div>
    </div>
  );
};
