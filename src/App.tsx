import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import SecondPage from "./pages/secondPage";
import ThirdPage from "./pages/thirdPage";
import FourthPage from "./pages/fourthPage";
import FirstPage from "./pages/firstPage";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/first-page" />,
  },
  {
    path: "/first-page",
    element: <FirstPage />,
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
