import { create } from "zustand";

type UserState = {
  userId: string | null;
  favorites: string[];
  reservations: string[];
  setUserId: (id: string | null) => void;
  setFavorites: (favorites: string[]) => void;
  setReservations: (reservations: string[]) => void;
};

export const useUserStore = create<UserState>((set) => ({
  userId: null,
  favorites: [],
  reservations: [],
  setUserId: (id) => set({ userId: id }),
  setFavorites: (favorites) => set({ favorites }),
  setReservations: (reservations) => set({ reservations }),
}));
