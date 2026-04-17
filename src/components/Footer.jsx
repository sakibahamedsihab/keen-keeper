import fb from "../assets/facebook.png";
import insta from "../assets/instagram.png";
import x from "../assets/twitter.png";

export default function Footer() {
  return (
    <footer className="bg-[#244D3F] py-10 sm:py-20">
      <main className="max-w-285 mx-auto flex flex-col gap-5 px-4 sm:px-0">
        <div className="text-white flex flex-col gap-3 items-center justify-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            KeenKeeper
          </h1>
          <p className="text-[#fafafa80] text-xs sm:text-sm text-center max-w-xl">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <p className="text-white font-semibold text-base sm:text-[20px]">
            Social Links
          </p>
          <div className="flex gap-5">
            <span>
              <img src={insta} alt="" />
            </span>
            <span>
              <img src={fb} alt="" />
            </span>
            <span>
              <img src={x} alt="" />
            </span>
          </div>
        </div>
        <hr className="text-[#fafafa80]" />
        <div className="flex flex-col sm:flex-row gap-4 sm:justify-between text-[#fafafa80] text-xs sm:text-sm text-center sm:text-left">
          <span>
            <h1>© 2026 KeenKeeper. All rights reserved.</h1>
          </span>

          <ul className="flex gap-3 sm:gap-5 justify-center sm:justify-end">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookies</li>
          </ul>
        </div>
      </main>
    </footer>
  );
}
