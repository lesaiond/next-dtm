import { create } from "zustand";

interface PageStore {
  currentPage: string;
  setCurrentPage: (pathname: string) => void;
}

export const usePageStore = create<PageStore>((set) => ({
  currentPage: "",
  setCurrentPage: (pathname) => set({ currentPage: pathname }),
}));
