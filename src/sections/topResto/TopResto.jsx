"use client";

import { UMKM_DATA } from "@/data/umkmData";
import { FEATURED_SLUGS } from "./topRestoConfig";
import TopRestoHeading from "./TopRestoHeading";
import TopRestoGrid from "./TopRestoGrid";

const RESTOS_DATA = FEATURED_SLUGS.map(
  (slug) => UMKM_DATA.find((item) => item.slug === slug)
).filter(Boolean);

export default function TopResto() {
  return (
    <section
      id="topResto"
      className="relative pt-20 md:pt-20 pb-20 md:pb-28 overflow-hidden
                 bg-gradient-to-b from-bg-warm via-bg-soft to-bg-base
                 dark:from-bg-warm dark:via-bg-soft dark:to-bg-base
                 transition-colors duration-500"
    >
      <TopRestoGrid restos={RESTOS_DATA} />
    </section>
  );
}