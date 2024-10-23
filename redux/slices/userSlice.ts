// src/redux/slices/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

type Credentials = { email: string, password: string }
// Acción asíncrona para manejar el login del usuario
export const handleLogin = createAsyncThunk(
    'user/login',
    async (credentials: Credentials) => {
        // Simulación de una llamada a una API de autenticación
        const response = await fakeApiLogin(credentials)
        return response.data;
    }
);

// Función simulada de API
const fakeApiLogin = async (credentials: Credentials): Promise<{ data: { email: string, name: string } }> => {

    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (credentials.email === "manu@uca.edu.ar" && credentials.password === "s3cr370") {
        return { data: { email: credentials.email, name: "Manu" } };
    }

    throw new Error("Credenciales inválidas");
};

const initialState: {
    user: { email?: string, name?: string },
    isFetching: boolean,
    error: Error | null,
    isLoggedIn: boolean,
} = {
    user: {},
    isFetching: false,
    error: null,
    isLoggedIn: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logOut(state) {
            state.isLoggedIn = false;
            state.user = {};
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(handleLogin.pending, (state) => {
                state.isFetching = true;
                state.error = null;
            })
            .addCase(handleLogin.fulfilled, (state, action) => {
                state.isFetching = false;
                state.isLoggedIn = true;
                state.user = action.payload;
            })
            .addCase(handleLogin.rejected, (state, action) => {
                state.isFetching = false;
                state.error = action.payload as Error;
                state.isLoggedIn = false;
            });
    },
});

export const { logOut } = userSlice.actions;
export default userSlice.reducer;
