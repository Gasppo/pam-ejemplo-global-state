import { createContext, useContext, useState, useEffect } from "react";
import *  as SecureStore from 'expo-secure-store'

export const ContextEjemplo = createContext({
    nombre: "Ejemplo",
    isLoggedIn: false,
    cambiarNombre: (nombre: string) => { },
    login: () => { },
    logout: () => { },
});


export const ContextEjemploProvider = ({ children }: { children: React.ReactNode }) => {

    const [nombre, setNombre] = useState("Ejemplo");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const storedLogged = await SecureStore.getItemAsync('isLogged');
                const storedName = await SecureStore.getItemAsync('loginName');
                if (storedLogged === 'true') {
                    setIsLoggedIn(true);
                } else {
                    setIsLoggedIn(false);
                }
                if (storedName) {
                    setNombre(storedName);
                }
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);

    const cambiarNombre = async (nombre: string) => {
        setNombre(nombre);
        await SecureStore.setItemAsync('loginName', nombre).catch(() => { });
    }

    const login = async () => {
        setIsLoggedIn(true);
        await SecureStore.setItemAsync('isLogged', 'true').catch(() => { });
    }

    const logout = async () => {
        setIsLoggedIn(false);
        await SecureStore.setItemAsync('isLogged', 'false').catch(() => { });
        await SecureStore.deleteItemAsync('loginName').catch(() => { });
        setNombre('Ejemplo');
    }

    return (
        <ContextEjemplo.Provider value={{ nombre, cambiarNombre, isLoggedIn, login, logout }}>
            {children}
        </ContextEjemplo.Provider>
    );
}

export const useContextEjemplo = () => {
    return useContext(ContextEjemplo);
}