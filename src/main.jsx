import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import TimelineContextProvider from "./Context/TimelineContext";

import router from "./router";

createRoot(document.getElementById("root")).render(
  <TimelineContextProvider>
    <RouterProvider
      router={router}
      fallbackElement={
        <div className="p-10 text-center font-bold text-gray-500">
          Loading KeenKeeper...
        </div>
      }
    />
    ,
  </TimelineContextProvider>,
);
