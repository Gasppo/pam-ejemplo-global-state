import { BACKEND_URL } from "@/constants/env";
import { useQuery } from "@tanstack/react-query";

type Mascota = {
    id: number;
    nombre: string;
    duenoId: number;
    raza: string;
}

type DuenioInformation = {
    id: number;
    nombre: string;
    apellido: string;
    mascota: Mascota[];
}


const fetchDuennioInformation = async (duenioId?: string) => {
    // Wait 2 seconds
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await fetch(`${BACKEND_URL}/duenos/${duenioId}`);

    if (!response.ok) {
        throw new Error("Error al obtener la información del dueño");
    }

    return response.json() as Promise<DuenioInformation>
}

// Obtiene la información de un usuario (nombre y correo) a partir de su ID
export const useDuenioInformation = (duenioId?: string) => {

    return useQuery({
        queryKey: ["dueno", duenioId],
        enabled: !!duenioId, // Solo se ejecuta si el ID del dueño está definido
        queryFn: () => fetchDuennioInformation(duenioId)
    });

}