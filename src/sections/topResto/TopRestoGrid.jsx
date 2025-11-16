"use client";

import TopRestoHeading from "./TopRestoHeading";
import RestoCard from "./RestoCard";

export default function TopRestoGrid({ restos }) {
  const mainResto = restos[0];
  const topResto = restos[1];
  const gridRestos = restos.slice(2, 6);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
      <div className="lg:col-span-7 flex flex-col gap-10">
        <TopRestoHeading />

        <RestoCard resto={mainResto} variant="large" index={1} />
      </div>

      <div className="lg:col-span-5 flex flex-col gap-10">
        <RestoCard resto={topResto} variant="medium" index={2} />

        <div className="grid grid-cols-2 gap-6">
          {gridRestos.map((resto, i) => (
            <RestoCard key={resto.slug} resto={resto} variant="small" index={3 + i} />
          ))}
        </div>
      </div>
    </div>
  );
}