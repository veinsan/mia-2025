"use client";

import { motion } from "framer-motion";
import { ANIMATION_CONFIG, STATS } from "./testimoniConfig";

export default function StatsSection() {
  return (
    <motion.div variants={ANIMATION_CONFIG.STAGGER} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} className="flex flex-wrap justify-center gap-8 sm:gap-12 mt-12 mb-16">
      {STATS.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div key={index} variants={ANIMATION_CONFIG.STAT_NUMBER} className="text-center">
            <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 rounded-full bg-primary/10 dark:bg-accent/20">
              <Icon className="text-primary dark:text-accent" size={32} />
            </div>

            <p className="text-3xl sm:text-4xl font-extrabold text-primary dark:text-accent mb-1">{stat.value}</p>
            <p className="text-sm sm:text-base text-text-muted dark:text-text-secondary">{stat.label}</p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}