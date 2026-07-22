export default function ClientRow({
    client,
    onDelete,
    onEdit,
}) {
    return (
        <tr>
            <td>{client.id}</td>
            <td>{client.client_name}</td>
            <td>{client.broker}</td>
            <td>{client.is_active ? "Active" : "Inactive"}</td>

            <td>
                <button
                    onClick={() => onEdit(client)}
                >
                    Edit
                </button>

                <button
                    onClick={() => onDelete(client.id)}
                    style={{ marginLeft: "8px" }}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
}