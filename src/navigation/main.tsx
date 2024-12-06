import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "./type";
import HotelsScreen from "../screens/HotelsScreen/HotelsScreen";
import FavoritesScreen from "../screens/FavoritesScreen/FavoritesScreen";
import ReservationsScreen from "../screens/ReservationsScreen/ReservationsScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import { BACKGROUND_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, TEXT_COLOR, TEXT_LIGHT } from "../utils/colors";

const Tab = createBottomTabNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: BACKGROUND_COLOR,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderWidth: 0.1,
          borderRadiusColor: SECONDARY_COLOR,
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
        tabBarActiveTintColor: PRIMARY_COLOR,
        tabBarInactiveTintColor: TEXT_LIGHT,
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
  return <Stack.Navigator screenOptions={{ headerShown: false, animation: "none" }}></Stack.Navigator>;
}

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
