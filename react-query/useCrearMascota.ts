import { BACKEND_URL } from "@/constants/env";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type Mascota = {
    id: number;
    nombre: string;
    duenoId: number;
    raza: string;
}

const postNewMascota = async (params: { nombre: string, raza: string, duenioId?: string }) => {
    // Wait 2 seconds
    await new Promise((resolve) => setTimeout(resolve, 2000));

    if (!params.duenioId) {
        throw new Error("No se ha especificado el ID del dueño");
    }

    const response = await fetch(`${BACKEND_URL}/mascotas`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombre: params.nombre,
            raza: params.raza,
            duenoId: params.duenioId
        })
    });

    return response.json() as Promise<Mascota>
}


export const useCrearMascota = (duenioId?: string) => {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (params: { nombre: string, raza: string }) => postNewMascota({ ...params, duenioId }),
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: ["dueno", duenioId] // Invalida la información del dueño, provocando que se vuelva a cargar
            })
        }
    });

}
