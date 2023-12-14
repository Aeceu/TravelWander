import { RefObject } from "react";
import { create } from "zustand";

type TProps = {
  heroRef: RefObject<HTMLDivElement> | null;
  aboutRef: RefObject<HTMLDivElement> | null;
  contactRef: RefObject<HTMLDivElement> | null;
  setHeroRef: (ref: RefObject<HTMLDivElement> | null) => void;
  setAboutRef: (ref: RefObject<HTMLDivElement> | null) => void;
  setContactRef: (ref: RefObject<HTMLDivElement> | null) => void;
  handleScroll: (ref: RefObject<HTMLDivElement> | null) => void;
};

const NavStore = create<TProps>()((set) => ({
  heroRef: null,
  aboutRef: null,
  carRef: null,
  googleRef: null,
  infoRef: null,
  contactRef: null,
  setHeroRef: (ref) => {
    set({ heroRef: ref });
  },
  setAboutRef: (ref) => {
    set({ aboutRef: ref });
  },
  setContactRef: (ref) => {
    set({ contactRef: ref });
  },
  handleScroll: (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  },
}));

export default NavStore;
