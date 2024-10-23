import { useContextEjemplo } from "@/context/ContextEjemplo";
import { handleLogin, logOut } from "@/redux/slices/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Link } from "expo-router";
import { ActivityIndicator, Button, Text, View } from "react-native";

export default function Index() {

  const { user, isFetching, isLoggedIn } = useAppSelector((state) => state.user);
  const { isLoggedIn: isLoggedInContext } = useContextEjemplo()
  const dispatch = useAppDispatch();

  const login = () => dispatch(handleLogin({ email: "manu@uca.edu.ar", password: "s3cr370" }))
  const logout = () => dispatch(logOut())

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLoggedInContext && <Text>Estás logueado desde el contexto</Text>}
      {isFetching && <ActivityIndicator size="large" />}
      {isLoggedIn && <Text>Bienvenido, {user.name}!</Text>}
      {!isFetching && !isLoggedIn && <Text>No estás logueado</Text>}
      {!isFetching && !isLoggedIn && < Button title="Log in" onPress={login} />}
      {isLoggedIn && <Button title="Log out" onPress={logout} />}
      {isLoggedIn && <Link href="/perfil-rd">Ver perfil</Link>}
    </View>
  );
}
