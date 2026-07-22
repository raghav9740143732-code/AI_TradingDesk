import ClientRow from "./ClientRow";

export default function ClientTable({
    clients,
    onDelete,
    onEdit,
}) {

    return (

        <table>

            <thead>

                <tr>

                    <th>ID</th>
                    <th>Name</th>
                    <th>Broker</th>
                    <th>Status</th>
                    <th>Actions</th>

                </tr>

            </thead>

            <tbody>

                {clients.map((client) => (

                    <ClientRow
                        key={client.id}
                        client={client}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />

                ))}

            </tbody>

        </table>

    );

}