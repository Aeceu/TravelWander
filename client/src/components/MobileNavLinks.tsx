import { RefObject } from "react";
import NavStore from "../state/NavStore";

export const MobileNavLinks = () => {
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

  const handleClick = (ref: RefObject<HTMLDivElement> | null) => {
    handleScroll(ref);
  };

  return (
    <>
      {Links.map((link, i) => (
        <button key={i} onClick={() => handleClick(link.ref)}>
          {link.name}
        </button>
      ))}
    </>
  );
};
