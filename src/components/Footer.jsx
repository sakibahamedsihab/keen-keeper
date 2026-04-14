import fb from "../assets/facebook.png";
import insta from "../assets/instagram.png";
import x from "../assets/twitter.png";

export default function Footer() {
  return (
    <footer className="bg-[#244D3F] py-20">
      <main className="max-w-285 mx-auto flex flex-col gap-5">
        <div className="text-white flex flex-col gap-3 items-center justify-center">
          <h1 className="text-4xl font-bold">KeenKeeper</h1>
          <p className="text-[#fafafa80]">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <p className="text-white font-semibold text-[20px]">Social Links</p>
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
        <div className="flex justify-between text-[#fafafa80]">
          <span>
            <h1>© 2026 KeenKeeper. All rights reserved.</h1>
          </span>

          <ul className="flex gap-5">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookies</li>
          </ul>
        </div>
      </main>
    </footer>
  );
}
