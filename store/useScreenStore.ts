import { create } from "zustand";

interface ScreenState {
  isMobile: boolean;
  isTablet: boolean;
  checkScreenSize: () => void;
}

export const useScreenStore = create<ScreenState>((set) => {
  const checkScreenSize = () => {
    const width = window.innerWidth;
    set({
      isMobile: width < 768,
      isTablet: width >= 768 && width < 1390,
    });
  };

  if (typeof window !== "undefined") {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
  }

  return {
    isMobile: false,
    isTablet: false,
    checkScreenSize,
  };
});
