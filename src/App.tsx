import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import CountNumber from "./pages/countNumber";
import SecondPage from "./pages/secondPage";
import ThirdPage from "./pages/thirdPage";
import FourthPage from "./pages/fourthPage";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/count-number" />,
  },
  {
    path: "/count-number",
    element: <CountNumber />,
  },
  {
    path: "/second-page",
    element: <SecondPage />,
  },
  { path: "/third-page", element: <ThirdPage /> },
  { path: "/fourth-page", element: <FourthPage /> },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
