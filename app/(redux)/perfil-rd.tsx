import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAppSelector } from '@/redux/store';
import { Link } from 'expo-router';

const Perfil = () => {

    const { user } = useAppSelector((state) => state.user);

    return (
        <View style={styles.container}>
            <Text>Nombre: {user.name}</Text>
            <Text>Correo: {user.email}</Text>
            <Link href="/home-rd">Volver al inicio</Link>
        </View>
    )
}

export default Perfil

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})