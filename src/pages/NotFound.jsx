import React from "react";
import { Link } from "react-router-dom";
import { Home, AlertCircle } from "lucide-react";

const NotFound = () => {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      {/* বড় আইকন */}
      <div className="bg-red-50 p-6 rounded-full mb-6">
        <AlertCircle size={100} className="text-red-500" />
      </div>

      {/* টেক্সট সেকশন */}
      <h1 className="text-9xl font-extrabold text-[#1F2937] tracking-widest">
        404
      </h1>

      <p className="text-gray-500 text-lg mt-4 max-w-md">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>

      {/* হোম পেজে ফিরে যাওয়ার বাটন */}
      <Link
        to="/"
        className="mt-10 flex items-center gap-2 bg-[#1F2937] hover:bg-black text-white px-8 py-3 rounded-lg font-medium transition-all shadow-lg active:scale-95"
      >
        <Home size={20} />
        Back to Home
      </Link>
    </main>
  );
};

export default NotFound;
