import { useEffect, useState } from "react";

export const useMenuMobile = () => {
  const [menuMobile, setMenuMobile] = useState(false);
  useEffect(() => {
    if (menuMobile) {
      document.body.style.overflow = "hiden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuMobile]);
  return { menuMobile, setMenuMobile };
};
