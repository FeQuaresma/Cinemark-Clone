import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

export default function Club() {
  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>
        Club
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.DarkBackgroundColor
  }, textColor: {
    color: Colors.LightTextColor
  }
});