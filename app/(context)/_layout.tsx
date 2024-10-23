import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home-ctx" options={{ title: "Inicio" }} />
      <Stack.Screen name="cambiarNombre" options={{ title: "Cambiar Nombre", presentation: 'modal', headerShown: true }} />
    </Stack>
  );
}
