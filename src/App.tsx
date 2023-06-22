import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import CountNumber from "./pages/countNumber";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/count-number" />,
  },
  {
    path: "/count-number",
    element: <CountNumber />,
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
