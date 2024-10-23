import { ContextEjemplo, useContextEjemplo } from '@/context/ContextEjemplo'
import { Link } from 'expo-router'
import React, { useContext } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const CambiarNombre = () => {

    const { cambiarNombre } = useContextEjemplo()

    return (
        <View style={styles.container}>
            <TextInput placeholder="Escribe tu nombre" onChangeText={(text) => cambiarNombre(text)} />
            <Link href="/home-ctx" style={styles.link} asChild>
                <TouchableOpacity>
                    <Text> Volver</Text>
                </TouchableOpacity>
            </Link>
        </View>
    )
}

export default CambiarNombre

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