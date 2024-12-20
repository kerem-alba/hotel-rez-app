import { create } from "zustand";

const formatDate = (date: Date) => date.toLocaleDateString("tr-TR", { day: "2-digit", month: "short", year: "numeric" });

const getToday = () => {
  const today = new Date();
  return formatDate(today);
};

const getTomorrow = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return formatDate(tomorrow);
};

type ReservationDetailsState = {
  reservationDetails: {
    city: string;
    startDate: string;
    endDate: string;
    rooms: number;
    roomDetails: { adults: number; children: number }[];
  };
  setReservationDetails: (reservationDetails: Partial<ReservationDetailsState["reservationDetails"]>) => void;
};

export const useReservationDetailsStore = create<ReservationDetailsState>((set) => ({
  reservationDetails: {
    city: "Ankara",
    startDate: getToday(),
    endDate: getTomorrow(),
    rooms: 1,
    roomDetails: [{ adults: 2, children: 0 }],
  },
  setReservationDetails: (reservationDetails) =>
    set((state) => ({
      reservationDetails: {
        ...state.reservationDetails,
        ...reservationDetails,
      },
    })),
}));
