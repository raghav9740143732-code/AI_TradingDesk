import apiClient from "../api/apiClient";

export const getClients = async () => {
    const response = await apiClient.get("/clients");
    return response.data;
};

export const createClient = async (client) => {
    const response = await apiClient.post("/clients", client);
    return response.data;
};

export async function deleteClient(id) {
    const response = await apiClient.delete(`/clients/${id}`);
    return response.data;
};