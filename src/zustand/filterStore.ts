import { create } from "zustand";

interface FilterState {
  location: string | null;
  field: string | null;
  isOnline: boolean;
  isOffline: boolean;
  minPrice: number | null;
  maxPrice: number | null;
  setFilters: (filters: Partial<FilterState>) => void;
  resetFilters: () => void;  // resetFilters 정의
}

export const useFilterStore = create<FilterState>((set) => ({
  location: null,
  field: null,
  isOnline: true,
  isOffline: true,
  minPrice: null,
  maxPrice: null,
  setFilters: (filters) => set((state) => ({ ...state, ...filters })),
  resetFilters: () => set({ location: null, field: null, isOnline: true, isOffline: true, minPrice: null, maxPrice: null }),  // 필터 초기화
}));
