import store from "@/redux/store";
import { Stack } from "expo-router";
import { Provider } from "react-redux";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home-rd" options={{ title: "Inicio" }} />
        <Stack.Screen name="perfil-rd" options={{ title: "Perfil" }} />
      </Stack>
    </Provider>
  );
}
