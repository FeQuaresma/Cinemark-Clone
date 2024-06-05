import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Colors } from "@/constants/Colors";

const layout = Dimensions.get('window');

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const App = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
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
        style={styles.tabView}  // Ensure you have styles for TabView
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  redHeader: {
    backgroundColor: 'red',
    padding: 16,
  },
  headerMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  redHeaderDiv: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pinIcon: {
    marginRight: 8,
  },
  searchIcon: {
    marginRight: 16,
  },
  textColor: {
    color: Colors.LightTextColor,
  },
  titleColor: {
    color: Colors.LightTextColor,
    fontSize: 20,
    fontWeight: 'bold',
  },
  tabView: {
    flex: 1,
  },
  scene: {
    flex: 1,
  },
});

export default App;
