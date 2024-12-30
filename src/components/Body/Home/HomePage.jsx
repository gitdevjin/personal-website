import { useRef, useEffect, useState } from "react";
import Footer from "../../Footer/Footer";

export default function HomePage() {
  const outerRef = useRef();
  const [currentPage, setCurrentPage] = useState(1);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      if (isScrolling) return;

      const CUSHION_HEIGHT = 5;
      const pageHeight = window.innerHeight;
      const { deltaY } = e;
      const { scrollTop } = outerRef.current;

      const getNextPage = (scrollTop) => {
        if (scrollTop < pageHeight) return 1;
        if (scrollTop < pageHeight * 2) return 2;
        if (scrollTop < pageHeight * 3) return 3;
        return 4;
      };

      const nextPage = getNextPage(scrollTop);
      console.log(nextPage);

      setIsScrolling(true);

      // Scroll logic
      let scrollPosition;
      if (deltaY > 0) {
        scrollPosition = nextPage * pageHeight + CUSHION_HEIGHT * nextPage;
      } else {
        scrollPosition = (nextPage - 2) * pageHeight + CUSHION_HEIGHT * Math.abs(nextPage - 2);
      }

      outerRef.current.scrollTo({
        top: scrollPosition,
        left: 0,
        behavior: "smooth",
      });

      setCurrentPage(nextPage);

      setTimeout(() => {
        setIsScrolling(false);
      }, 1400); // Adjust time based on scroll duration
    };

    const outerRefCurrent = outerRef.current;
    outerRefCurrent.addEventListener("wheel", handleWheel);

    return () => {
      outerRefCurrent.removeEventListener("wheel", handleWheel);
    };
  }, [isScrolling]);

  return (
    <main className="h-screen overflow-hidden m-0">
      <div ref={outerRef} className="h-screen overflow-y-auto fullpage-wrapper">
        <div className="h-screen flex justify-center items-center ">
          1
          <img className="animate-spin" src="src/assets/logo-letters.png" alt="" />
        </div>
        <div className="w-[100%] h-[5px] bg-gray-800"></div>
        <div className="h-screen flex justify-center items-center bg-blue-300">2</div>
        <div className="w-[100%] h-[5px] bg-gray-900"></div>
        <div className="h-screen flex justify-center items-center bg-purple-300">3</div>
        <div className="w-[100%] h-[5px] bg-gray-900"></div>
        <div className="h-screen flex justify-center items-center bg-green-200">
          <Footer />
        </div>
      </div>
    </main>
  );
}

// indigo color
