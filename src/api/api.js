import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL //https://64faa299cb9c00518f7a0c72.mockapi.io
})

export const buscar = async (url, setData) => {
    const respuesta = await api.get(url);
    setData(respuesta.data);
}

export const CreateNewVideo = async (nuevoVideoData) => {
    try {
        const response = await api.post('/videos', nuevoVideoData);
        if (response.status === 201) {
            return response.data;
        } else {
            console.error("Error al crear video");
            throw new Error("Error crear");
        }
    } catch (error) {
        console.error("Error al enviar datos: ", error);
    }
}

export const CreateNewCategory = async (newCategoryData) => {
    try {
        const response = await api.post('/categorias', newCategoryData);
        if (response.status === 201) {
            return response.data;
        } else {
            console.error("Error al crear categoría");
            throw new Error("Error crear");
        }
    } catch (error) {
        console.error("Error al enviar datos: ", error);
    }
}

export const UpdateCategory = async (updatedCategory) => {
    try {
        const response = await api.put(`/categorias/${updatedCategory.id}`, updatedCategory);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const DeleteCategory = async (categoryId) => {
    try {
        const response = await api.delete(`/categorias/${categoryId}`);
        if (response.status === 200 || response.status === 204) {
            return { success: true, message: "Categoria borrada exitosamente" };
        } else {
            throw new Error("Error para eliminar");
        }
    } catch (error) {
        throw error;
    }
};