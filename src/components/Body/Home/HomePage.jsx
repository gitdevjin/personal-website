import { useRef, useEffect, useState } from "react";
import Footer from "../../Footer/Footer";
import DotScroll from "./DotScroll";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";

export default function HomePage() {
  const outerRef = useRef();
  const [currentPage, setCurrentPage] = useState(1);
  const [isScrolling, setIsScrolling] = useState(false);

  const getNextPage = (scrollTop, deltaY) => {
    const pageHeight = window.innerHeight;

    if (deltaY > 0) {
      // Scrolling down
      if (scrollTop < pageHeight) return 2;
      if (scrollTop < pageHeight * 2) return 3;
      if (scrollTop < pageHeight * 3) return 4;
      return 4; // Already at the last page
    } else {
      // Scrolling up
      if (scrollTop < pageHeight) return 1; // Already at the first page
      if (scrollTop < pageHeight * 2) return 1;
      if (scrollTop < pageHeight * 3) return 2;
      return 3;
    }
  };

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      if (isScrolling) return;

      const CUSHION_HEIGHT = 5;
      const pageHeight = window.innerHeight;
      const { deltaY } = e;
      const { scrollTop } = outerRef.current;

      const nextPage = getNextPage(scrollTop, deltaY);

      setIsScrolling(true);

      // Scroll logic
      const scrollPosition =
        (nextPage - 1) * pageHeight + CUSHION_HEIGHT * (nextPage - 1);

      outerRef.current.scrollTo({
        top: scrollPosition,
        left: 0,
        behavior: "smooth",
      });

      setCurrentPage(nextPage);

      setTimeout(() => {
        setIsScrolling(false);
      }, 1400);
    };

    const outerRefCurrent = outerRef.current;
    outerRefCurrent.addEventListener("wheel", handleWheel);

    return () => {
      outerRefCurrent.removeEventListener("wheel", handleWheel);
    };
  }, [isScrolling]);

  return (
    <main className="relative top-0 left-0 w-full overflow-hidden m-0 bg-transparent">
      <div ref={outerRef} className="h-screen overflow-y-auto fullpage-wrapper">
        <DotScroll currentPage={currentPage}></DotScroll>
        <div className="h-screen flex justify-center items-center ">
          <SectionOne />
        </div>
        <div className="w-[100%] h-[5px] "></div> {/* Divider */}
        <div className="h-screen flex justify-center items-center text-white text-3xl">
          <SectionTwo />
        </div>
        <div className="w-[100%] h-[5px] "></div> {/* Divider */}
        <div className="h-screen flex justify-center items-center text-white">
          <SectionThree />
        </div>
        <div className="w-[100%] h-[5px] "></div> {/* Divider */}
        <div className="h-screen flex justify-center items-center text-white">
          <Footer />
        </div>
      </div>
    </main>
  );
}

// indigo color
