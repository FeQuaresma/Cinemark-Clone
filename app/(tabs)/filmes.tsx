import * as React from "react";
import { View, Text, StyleSheet, StatusBar, Image, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

export default function Filmes() {
  return (
    <View style={styles.container}>
      <View style={styles.redHeader}>
        <View style={styles.headerMain}>
          <View style={styles.redHeaderDiv}>
            <Feather
              style={styles.pinIcon}
              name="map-pin"
              size={20}
              color={Colors.LightTextColor}
            />
            <Text style={styles.textColor}>São Paulo</Text>
          </View>
          <View style={styles.redHeaderDiv}>
            <Feather
              style={styles.searchIcon}
              name="search"
              size={24}
              color={Colors.LightTextColor}
            />
            <Feather
              name="shopping-cart"
              size={24}
              color={Colors.LightTextColor}
            />
          </View>
        </View>
        <View style={styles.redHeaderDiv}>
          <Text style={styles.titleColor}>Filmes</Text>
        </View>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "grey",
          tabBarInactiveTintColor: "red",
          tabBarIndicatorStyle: { backgroundColor: "red" },
        }}
      >
        <Tab.Screen name="EM CARTAZ" component={EmCartaz} />
        <Tab.Screen name="PRÉ-VENDA" component={PreVenda} />
        <Tab.Screen name="EM BREVE" component={EmBreve} />
      </Tab.Navigator>
    </View>
  );
}

const EmCartaz = () => (
  <ScrollView contentContainerStyle={styles.scene}>
 {Array.from({ length: 12 }).map((_, index) => (
      <View key={index} style={styles.moviePosterDiv}>
        <Image
          style={styles.moviePoster}
          source={{
            uri: "https://play-lh.googleusercontent.com/bSU-78MeP8ouJN3djUXV6d8pJEBKk9sZyGLKMW4Vme37ErMb4i47kJ065Ap7MvYglkrwXb4n6E-O9O2rCgM",
          }}
        />
        <Text style={styles.moviePosterText}>Enaldinho</Text>
      </View>
    ))}
  </ScrollView>
);

const PreVenda = () => <View style={[styles.scene]} />;

const EmBreve = () => <View style={[styles.scene]} />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  redHeader: {
    paddingTop: StatusBar.currentHeight,
    width: "100%",
    backgroundColor: Colors.RedBackgroundColor,
  },
  headerMain: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  redHeaderDiv: {
    margin: 15,
    flexDirection: "row",
  },
  textColor: {
    color: Colors.LightTextColor,
    fontSize: 15,
  },
  titleColor: {
    color: Colors.LightTextColor,
    fontSize: 20,
  },
  pinIcon: {
    marginRight: 5,
  },
  searchIcon: {
    marginRight: 20,
  },
  scene: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  moviePosterDiv: {
    margin: 10,
  },
  moviePoster: {
    width: 150,
    height: 200,
  },
  moviePosterText: {
    color: Colors.DarkTextColor,
    marginTop: 5,
    fontWeight: "bold"
  },
});
