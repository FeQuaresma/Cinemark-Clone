import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  useWindowDimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { TabView, SceneMap } from "react-native-tab-view";

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#ff4081" }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function Filmes() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);
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
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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
});
