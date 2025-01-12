"use client";

import { useEffect, useState } from "react";
import GridFooterLayout from "./GridFooterLayout";
import AccordionFooter from "./AccordionFooter";

function Footer() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      }
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div>{windowWidth < 768 ? <AccordionFooter /> : <GridFooterLayout />}</div>
  );
}

export default Footer;
