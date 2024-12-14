import { create } from "zustand";

type UserState = {
  userId: string | null;
  favorites: string[];
  setUserId: (id: string | null) => void;
  setFavorites: (favorites: string[]) => void;
};

export const useUserStore = create<UserState>((set) => ({
  userId: null,
  favorites: [],
  setUserId: (id) => set({ userId: id }),
  setFavorites: (favorites) => set({ favorites }),
}));
