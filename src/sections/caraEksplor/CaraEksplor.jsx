"use client";

import { useState, useEffect } from "react";
import CaraEksplorLeft from "./CaraEksplorLeft";
import CaraEksplorRight from "./CaraEksplorRight";
import CaraEksplorBlobs from "./CaraEksplorBlobs";

export default function CaraEksplor() {
  const [completedSteps, setCompletedSteps] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleStep = (n) => {
    setCompletedSteps((prev) =>
      prev.includes(n) ? prev.filter((i) => i !== n) : [...prev, n]
    );
  };

  return (
    <section
      id="caraEksplor"
      className="w-full relative overflow-hidden bg-gradient-to-br from-bg-warm via-bg-soft to-bg-gold dark:from-bg-warm dark:via-bg-base dark:to-bg-soft transition-colors duration-500"
    >
      <CaraEksplorBlobs />

      <div className="grid grid-cols-1 lg:grid-cols-2 relative min-h-[800px] sm:min-h-[900px] lg:min-h-screen">
        <CaraEksplorLeft />
        <CaraEksplorRight
          isMobile={isMobile}
          completedSteps={completedSteps}
          toggleStep={toggleStep}
        />
      </div>
    </section>
  );
}