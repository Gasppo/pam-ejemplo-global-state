import { useRefreshOnFocus } from "@/hooks/useRefreshOnFocus";
import { useDuenioInformation } from "@/react-query/useDuenioInformation";
import { Link } from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";

export default function Index() {

  const duenioId = "1";
  const { data, isFetching, isError } = useDuenioInformation(duenioId);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isFetching && <ActivityIndicator />}
      {!isFetching && data && <Text>Bienvenido, {data.nombre}!</Text>}
      {!isFetching && data && (
        <Link href={{ pathname: '/mascotas', params: { duenioId } }} asChild>
          <TouchableOpacity style={styles.button}>
            <Text>Ver mascotas</Text>
          </TouchableOpacity>
        </Link>
      )}
      {isError && <Text>Ha ocurrido un error</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});