import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);
export default router;
