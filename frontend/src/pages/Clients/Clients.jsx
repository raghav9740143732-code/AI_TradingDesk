import { useEffect, useState } from "react";
import { getClients, createClient, deleteClient } from "../../services/clientService";
import ClientForm from "../../components/clients/ClientForm";
import ClientTable from "../../components/clients/ClientTable";

export default function Clients() {

    const [clients, setClients] = useState([]);
    

    useEffect(() => {

        loadClients();

    }, []);

    const loadClients = async () => {

        try {

            const data = await getClients();

            setClients(data);

        } catch (err) {

            console.error(err);

        }

    };

    const handleSave = async (client) => {

        try {

            await createClient(client);

            await loadClients();

        } catch (err) {

            console.error(err);

            alert("Unable to save client.");

        }

    };

    const handleDelete = async (id) => {

    const confirmed = window.confirm(
        "Are you sure you want to delete this client?"
    );

    if (!confirmed) return;

    try {

        await deleteClient(id);

        await loadClients();

    } catch (err) {

        console.error(err);

        alert("Unable to delete client.");

    }

    };

    const handleEdit = (client) => {

    console.log("Edit Client:", client);

    };

    return (

        <div>

<div
    style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px",
    }}
>
    <>
        <h2>Client Management</h2>
        <p>
            Manage all trading clients from this page.
        </p>
    </>
    <button>
        Add Client
    </button>
</div>

<ClientForm onSave={handleSave} />

<ClientTable
    clients={clients}
    onDelete={handleDelete}
    onEdit={handleEdit}
/>

        </div>

    );

}