import { useEffect, useState } from "react";

interface NavbarOptions {
  scrollTreshold: number;
  hideOnScroll: boolean;
  changeBackground: boolean;
}

export const useNavPosition = ({
  scrollTreshold = 50,
  hideOnScroll = true,
  changeBackground = true,
}: NavbarOptions) => {
  const [fixed, setFixed] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [hasBackground, setHasBackground] = useState(false);

  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setFixed(currentScroll > scrollTreshold);

      if (changeBackground) {
        setHasBackground(currentScroll > scrollTreshold);
      }

      if (hideOnScroll) {
        if (currentScroll > lastScrollY) {
          setHidden(true);
        } else {
          setHidden(false);
        }
      }
      setLastScrollY(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollTreshold, hideOnScroll, changeBackground, lastScrollY]);
  return {
    fixed,
    hidden,
    hasBackground,
  };
};
