import NavStore from "../state/NavStore";
import { Link } from "react-router-dom";

export const MobileNavLinks = () => {
  const heroRef = NavStore((state) => state.heroRef);
  const aboutRef = NavStore((state) => state.aboutRef);
  const contactRef = NavStore((state) => state.contactRef);

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
    <>
      {Links.map((link, i) => (
        <Link key={i} to={link.path}>
          {link.name}
        </Link>
      ))}
    </>
  );
};
