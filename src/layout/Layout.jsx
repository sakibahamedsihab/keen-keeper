import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="max-w-285 mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
