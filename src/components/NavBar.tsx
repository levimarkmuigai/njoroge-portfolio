import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/stories", label: "Stories" },
  { to: "/about", label: "About" },
] as const;

export function NavBar() {
  return (
    <nav
      className="flex items-stretch justify-center  gap-4 text-light-ink
      font-title font-semibold tracking-widest"
    >
      <ul className="flex gap-2">
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) => (isActive ? "text-[#191919] underline" : undefined)}
              end
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
