import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useContextEjemplo } from '@/context/ContextEjemplo'
import { Link } from 'expo-router'

const HomeCTX = () => {

    const { nombre, isLoggedIn, login, logout,  } = useContextEjemplo()

    if (!isLoggedIn) {
        return (
            <View style={styles.container}>
                <Text>No estás logueado</Text>
                <Button title="Login" onPress={login} />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text>Bienvenido al ejemplo de context {nombre}</Text>
            <Link href="/cambiarNombre" style={styles.link} asChild>
                <TouchableOpacity>
                    <Text> Ir a la página de ejemplo</Text>
                </TouchableOpacity>
            </Link>
            <Button title="Logout" onPress={logout} />
        </View>
    )
}

export default HomeCTX

const styles = StyleSheet.create({
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
})