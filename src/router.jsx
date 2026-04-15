import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Timeline from "./pages/Timeline";
import Stats from "./pages/Stats";
import FriendDetail from "./pages/FriendDetail";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/friend.json"),
      },
      {
        path: "timeline",
        Component: Timeline,
      },
      {
        path: "stats",
        Component: Stats,
      },
      {
        path: "details/:id",
        Component: FriendDetail,
        loader: async ({ params }) => {
          const res = await fetch("/friend.json");
          const friends = await res.json();

          return friends.find((friend) => friend.id === Number(params.id));
        },
      },
    ],
  },
]);

export default router;
