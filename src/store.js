import { createSlice } from '@reduxjs/toolkit'

// Crear el slice
const menuSlice = createSlice({
    name: 'menu', // Nombre del slice
    initialState: " ", // Estado inicial
    reducers: {
        // Reducer para cambiar el índice activo
        setActiveIndex: (state, action) => {
            state.activeIndex = action.payload;
        },
    },
});

// Exportar las acciones generadas automáticamente
export const { setActiveIndex } = menuSlice.actions;

// Exportar el reducer que será utilizado por el store
export default menuSlice.reducer;