import { useRecoilValue } from "recoil";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { authState } from "./utils/state/authState";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FavouritePage } from "./pages/FavouritePage";
import { CategoryPage } from "./pages/CategoryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/favourites",
    element: <FavouritePage />,
  },
  {
    path: "/category/:category",
    element: <CategoryPage />,
  },
]);

function App() {
  const isAuth = useRecoilValue(authState);

  if (!isAuth) {
    return <LoginPage />;
  }

  return <RouterProvider router={router} />;
}

export default App;
