import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "white",
          headerShown: false,
          tabBarActiveBackgroundColor: "#202020",
          tabBarInactiveBackgroundColor: "#202020",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="home" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="filmes"
          options={{
            title: "Filmes",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                size={28}
                name="movie-open-outline"
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="cinemas"
          options={{
            title: "Cinemas",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="theater" size={28} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="snack-bar"
          options={{
            title: "Snack Bar",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="popcorn" size={28} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="club"
          options={{
            title: "Club",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="ticket" size={28} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="mais"
          options={{
            title: "Mais",
            tabBarIcon: ({ color }) => (
              <Ionicons
                name="ellipsis-horizontal-outline"
                size={40}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
  );
}
