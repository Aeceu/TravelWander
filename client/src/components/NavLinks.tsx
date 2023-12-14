import { useLocation } from "react-router-dom";
import NavStore from "../state/NavStore";

export const NavLinks = () => {
  const path = useLocation();
  const heroRef = NavStore((state) => state.heroRef);
  const aboutRef = NavStore((state) => state.aboutRef);
  const contactRef = NavStore((state) => state.contactRef);
  const handleScroll = NavStore((state) => state.handleScroll);
  const Links = [
    {
      name: "Home",
      path: "/",
      ref: heroRef,
    },
    {
      name: "About",
      path: "/about",
      ref: aboutRef,
    },
    {
      name: "Contact",
      path: "/contact",
      ref: contactRef,
    },
  ];
  return (
    <span className="hidden md:flex items-center gap-8 text-slate-950">
      {Links.map((link, i) => (
        <button
          onClick={() => {
            handleScroll(link.ref);
          }}
          key={i}
          className={`${
            path.pathname === link.path && " text-emerald-900 font-bold"
          } text-sm`}
        >
          {link.name}
        </button>
      ))}
    </span>
  );
};
