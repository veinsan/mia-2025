"use client";

import { motion } from "framer-motion";
import { ANIMATION_CONFIG, STEPS } from "./caraEksplorConfig";
import StepItem from "./StepItem";

export default function CaraEksplorRight({ isMobile, completedSteps, toggleStep }) {
  return (
    <div className="relative w-full min-h-[600px] sm:min-h-[700px] lg:min-h-full">
      <img
        src="/assets/tentang/t1.jpg"
        alt="Suasana kuliner Gelap Nyawang"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 lg:bg-gradient-to-r lg:from-black/70 lg:via-black/60 lg:to-black/50" />

      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-10 sm:py-12 lg:py-16 text-white">
        <motion.header
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={ANIMATION_CONFIG.FADE_UP}
          className="w-full max-w-xl lg:max-w-2xl mb-6 sm:mb-8 text-center lg:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 sm:mb-3 drop-shadow-lg">
            Cara Explore
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 drop-shadow-md">
            Biar gak bingung, ikutin alurnya ya!
          </p>
        </motion.header>

        <motion.div
          variants={ANIMATION_CONFIG.STAGGER}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-4 sm:space-y-5 md:space-y-6 w-full max-w-xl lg:max-w-2xl"
        >
          {STEPS.map((step) => (
            <StepItem
              key={step.number}
              step={step}
              completed={completedSteps.includes(step.number)}
              toggle={toggleStep}
              isMobile={isMobile}
            />
          ))}
        </motion.div>

        {completedSteps.length === STEPS.length && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="mt-6 sm:mt-8 bg-green-500/20 backdrop-blur-md border-2 border-green-400/50 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-center"
          >
            <p className="text-white font-semibold text-sm sm:text-base md:text-lg flex items-center justify-center gap-2">
              Siap explore Gelap Nyawang! 🎉
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}