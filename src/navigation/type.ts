import { Hotel } from "../utils/types";

export type RootStackParamList = {
  Hotels: undefined;
  Favorites: undefined;
  Reservations: undefined;
  Profile: undefined;
  Main: { screen: "Hotels" | "Favorites" | "Reservations" | "Profile" };
  Intro: undefined;
  HotelDetails: { id: string };
  Rooms: { data: Hotel };
  SearchResults: { city: string; startDate: string; endDate: string; rooms: number; roomDetails: { adults: number; children: number }[] };
  CityResults: { city: string };
  Register: undefined;
  CitySelectorModal: undefined;
};
