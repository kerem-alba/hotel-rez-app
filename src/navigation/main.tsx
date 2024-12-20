import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "./type";
import HotelsScreen from "../screens/Hotels/HotelsScreen";
import FavoritesScreen from "../screens/Favorites/FavoritesScreen";
import ReservationsScreen from "../screens/Reservations/ReservationsScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import IntroductionScreen from "../screens/Intro/IntroductionScreen";
import HotelDetailsScreen from "../screens/HotelDetails/HotelDetailsScreen";
import RoomsScreen from "../screens/Rooms/RoomsScreen";
import SearchResultsScreen from "../screens/SearchResults/SearchResultsScreen";
import CityResultsScreen from "../screens/SearchResults/CityResultsScreen";
import RegisterScreen from "../screens/Register/RegisterScreen";
import ReservationDetailsScreen from "../screens/ReservationDetails/ReservationDetailsScreen";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../utils/colors";

const Tab = createBottomTabNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: colors.BACKGROUND_COLOR,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderWidth: 0.1,
          borderRadiusColor: colors.SECONDARY_COLOR,
          opacity: 0.96,
          position: "absolute",
          elevation: 2,
        },
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;

          if (route.name === "Hotels") {
            iconName = focused ? "bed" : "bed-outline";
          } else if (route.name === "Favorites") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "Reservations") {
            iconName = focused ? "calendar" : "calendar-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.PRIMARY_COLOR,
        tabBarInactiveTintColor: colors.SECONDARY_COLOR,
      })}
    >
      <Tab.Screen name="Hotels" component={HotelsScreen} options={{ tabBarLabel: "Oteller" }} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} options={{ tabBarLabel: "Favoriler" }} />
      <Tab.Screen name="Reservations" component={ReservationsScreen} options={{ tabBarLabel: "Rezervasyonlar" }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarLabel: "Profil" }} />
    </Tab.Navigator>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: "none" }}>
      <Stack.Screen name="Intro" component={IntroductionScreen} />
      <Stack.Screen name="Main" component={BottomTabNavigation} />
      <Stack.Screen name="HotelDetails" component={HotelDetailsScreen} />
      <Stack.Screen name="Rooms" component={RoomsScreen} />
      <Stack.Screen name="SearchResults" component={SearchResultsScreen} />
      <Stack.Screen name="CityResults" component={CityResultsScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ReservationDetails" component={ReservationDetailsScreen} />
    </Stack.Navigator>
  );
}

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
