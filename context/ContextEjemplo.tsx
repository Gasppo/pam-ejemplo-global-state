import { createContext, useContext, useState } from "react";

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

    const cambiarNombre = (nombre: string) => {
        setNombre(nombre);
    }

    const login = () => {
        setIsLoggedIn(true);
    }

    const logout = () => {
        setIsLoggedIn(false);
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