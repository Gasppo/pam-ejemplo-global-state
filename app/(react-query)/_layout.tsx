import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home-rq" options={{ title: "Inicio" }} />
        <Stack.Screen name="mascotas" options={{ title: "Mascotas" }} />
        <Stack.Screen name="agregar" options={{ title: "Agregar mascota", presentation: 'modal', headerShown: true }} />
      </Stack>
    </QueryClientProvider>
  );
}
