"use client";
import { useState } from "react";

export default function GalleryClient({ images }) {
  const [active, setActive] = useState(images[0]);

  return (
    <div>
      <img
        src={active}
        alt="Gallery"
        className="w-full h-[320px] md:h-[420px] object-cover rounded-xl shadow-lg mb-4"
      />

      <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => setActive(img)}
            className={`w-28 h-20 object-cover rounded-lg cursor-pointer shadow 
              transition-all duration-200 
              ${img === active ? "ring-4 ring-[#E87524]" : "opacity-80 hover:opacity-100"}`}
          />
        ))}
      </div>
    </div>
  );
}
