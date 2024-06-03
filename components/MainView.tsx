import * as React from 'react';
import { View, Text, StyleSheet } from "react-native";

type Props = {
  children: React.ReactNode;
};

export default function MainView({children}: Props) {

  return(
   <View style={styles.container}>
    {children}
   </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#313131" 
  }, textColor: {
    color: "#ffffff"
  }
});