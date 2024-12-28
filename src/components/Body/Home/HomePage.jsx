import { useEffect, useState } from "react";

export default function HomePage() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (window.fullpage_api) {
        window.fullpage_api.reBuild(); // Ensure fullpage.js recalculates dimensions
      }
    }, 200); // Delay to let animations stabilize

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-lvh flex flex-row items-center">
      <h1 className="text-white mr-4">Section 1</h1>
      <img className="animate-spin w-[500px]" src="src/assets/logo-letters.png" alt="logo" />
      <p>test</p>
    </div>
  );
}

// indigo color
