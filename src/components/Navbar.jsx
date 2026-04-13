import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <main>
      <div>
        <div>
          <h1>KeenKeeper</h1>
        </div>

        <ul>
          <NavLink></NavLink>
          <NavLink></NavLink>
          <NavLink></NavLink>
        </ul>
      </div>
    </main>
  );
}
