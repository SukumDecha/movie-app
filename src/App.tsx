import { useRecoilValue } from "recoil";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { authState } from "./utils/state/authState";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/say",
    element: <div>Hi</div>,
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
