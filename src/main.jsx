import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import TimelineContextProvider from "./Context/TimelineContext";

import router from "./router";

import { Loader2 } from "lucide-react";

createRoot(document.getElementById("root")).render(
  <TimelineContextProvider>
    <RouterProvider
      router={router}
      fallbackElement={
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="w-12 h-12 text-[#1F2937] animate-spin" />
        </div>
      }
    />
    ,
  </TimelineContextProvider>,
);
