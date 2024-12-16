import { Hotel } from "../utils/types";

export type RootStackParamList = {
  Hotels: undefined;
  Favorites: undefined;
  Reservations: undefined;
  Profile: undefined;
  Main: { screen: "Hotels" | "Favorites" | "Reservations" | "Profile" };
  Intro: undefined;
  Search: undefined;
  HotelDetails: { id: string };
  Rooms: { data: Hotel };
  SearchResults: { data: Hotel };
  CityResults: { city: string };
  Register: undefined;
};
