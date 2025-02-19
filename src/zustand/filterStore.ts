import { create } from "zustand";

interface FilterState {
  location: string | null;
  field: string | null;
  isOnline: boolean;
  isOffline: boolean;
  minPrice: number | null;
  maxPrice: number | null;
  setFilters: (filters: Partial<FilterState>) => void;
  resetFilters: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  location: null,
  field: null,
  isOnline: true,
  isOffline: true,
  minPrice: null,
  maxPrice: null,
  setFilters: (filters) => set((state) => ({ ...state, ...filters })),
  resetFilters: () => set({ location: null, field: null, isOnline: true, isOffline: true, minPrice: null, maxPrice: null }),
}));