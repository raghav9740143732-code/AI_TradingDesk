import { useState } from "react";

export default function ClientForm({ onSave }) {
    const [client, setClient] = useState({
        client_name: "",
        broker: "",
        api_key: "",
        access_token: "",
        refresh_token: "",
    });

    const handleChange = (e) => {
        setClient({
            ...client,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(client);

        setClient({
            client_name: "",
            broker: "",
            api_key: "",
            access_token: "",
            refresh_token: "",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="client_name"
                placeholder="Client Name"
                value={client.client_name}
                onChange={handleChange}
            />

            <input
                name="broker"
                placeholder="Broker"
                value={client.broker}
                onChange={handleChange}
            />

            <button type="submit">
                Save Client
            </button>
        </form>
    );
}