import { Pressable, StyleSheet, Text, View, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import { useAppSelector } from '@/redux/store';
import { Link, useLocalSearchParams } from 'expo-router';
import { useDuenioInformation } from '@/react-query/useDuenioInformation';

const Mascotas = () => {

    const { duenioId } = useLocalSearchParams<{ duenioId?: string }>();

    const { data, isFetching } = useDuenioInformation(duenioId);

    if (!duenioId) return <Text>No seleccionaste un usuario</Text>

    return (
        <View style={styles.container}>
            <View />
            {!isFetching && data && <FlatList data={data.mascota} renderItem={({ item }) => (
                <View style={styles.mascotaContainer}>
                    <Text style={styles.label}>Nombre:</Text>
                    <Text style={styles.mascotaText}>{item.nombre}</Text>
                    <Text style={styles.label}>Raza:</Text>
                    <Text style={styles.mascotaText}>{item.raza}</Text>
                </View>
            )
            } />}
            {isFetching && <ActivityIndicator color="#0000ff" />}
            <View style={{ marginTop: 20 }}>
                <Link href={{ pathname: '/agregar', params: { duenioId } }} asChild >
                    <TouchableOpacity style={styles.button}>
                        <Text>Agregar mascota</Text>
                    </TouchableOpacity>
                </Link >

                <Link href="/home-rq" asChild>
                    <TouchableOpacity style={styles.button}>
                        <Text>Volver</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </View >
    )
}

export default Mascotas

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    mascotaContainer: {
        flexDirection: 'column',
        padding: 20,
        margin: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        width: 200,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginVertical: 5,
        textAlign: 'left',
        width: '100%',
    },
    mascotaText: {
        fontSize: 16,
        color: '#333',
        marginVertical: 5,
        textAlign: 'left',
        width: '100%',
    },
    button: {
        padding: 10,
        margin: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
})