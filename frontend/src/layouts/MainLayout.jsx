import { Link, Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div style={{ display: "flex", height: "100vh" }}>

            <aside
                style={{
                    width: "240px",
                    background: "#1f2937",
                    color: "white",
                    padding: "20px",
                }}
            >
                <h2>Nexus</h2>

                <nav
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                        marginTop: "30px",
                    }}
                >
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/clients">Clients</Link>
                    <Link to="/brokers">Brokers</Link>
                    <Link to="/strategies">Strategies</Link>
                    <Link to="/agents">AI Agents</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/settings">Settings</Link>
                </nav>
            </aside>

            <main
                style={{
                    flex: 1,
                    padding: "30px",
                    background: "#f3f4f6",
                }}
            >
                <Outlet />
            </main>

        </div>
    );
}