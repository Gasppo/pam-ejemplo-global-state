import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useCrearMascota } from '@/react-query/useCrearMascota';

const AgregarMascota = () => {

    const { duenioId } = useLocalSearchParams<{ duenioId?: string }>();
    const { mutate } = useCrearMascota(duenioId);
    const { goBack } = useNavigation();
    const [nombre, setNombre] = useState('');
    const [raza, setRaza] = useState('');

    if (!duenioId) return <Text>No seleccionaste un usuario</Text>

    const handleChangeNombre = (text: string) => {
        setNombre(text);
    }

    const handleChangeRaza = (text: string) => {
        setRaza(text);
    }

    const handleAgregarMascota = () => {
        mutate({ nombre, raza });
        goBack();
    }

    return (
        <View style={styles.container}>
            <TextInput placeholder="Nombre" style={styles.input} onChangeText={handleChangeNombre} defaultValue={nombre} />
            <TextInput placeholder="Raza" style={styles.input} onChangeText={handleChangeRaza} defaultValue={raza} />
            <TouchableOpacity style={styles.button} onPress={handleAgregarMascota}>
                <Text>Agregar mascota</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AgregarMascota

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        width: 200,
        padding: 10,
        margin: 10,
    },
    button: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 5,
        margin: 10,
    }
})