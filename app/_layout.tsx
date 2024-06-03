import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          statusBarTranslucent: true,
          statusBarColor: "#00000030",
          statusBarStyle: "light",
        }}
      />
    </Stack>
  );
}
