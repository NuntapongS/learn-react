import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import CountNumber from "./pages/countNumber";
import SecondPage from "./pages/secondPage";

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
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
