import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

import { Loader2 } from "lucide-react";

const Layout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="flex flex-col min-h-screen">
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <main className="flex flex-col grow bg-[#F8FAFC]">
        {isLoading ? (
          <div className="grow flex flex-col items-center justify-center">
            <Loader2 className="w-12 h-12 text-[#1F2937] animate-spin mb-4" />
            <h2 className="text-xl font-medium text-gray-600 animate-pulse">
              Loading data...
            </h2>
          </div>
        ) : (
          <Outlet />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
