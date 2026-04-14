import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen gap-10">
      <Navbar />
      <main className="max-w-285 mx-auto flex grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
