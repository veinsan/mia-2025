export const getNavButtonStyles = (darkMode) =>
  `rounded-full w-[48px] h-[48px] transition-all duration-300 flex items-center justify-center ${
    darkMode ? "bg-bg-soft text-white" : "bg-bg-base text-text-primary"
  }`;