import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clients from "./pages/Clients/Clients";
import MainLayout from "./layouts/MainLayout";

function Login() {
    return <h1>Login</h1>;
}

function Dashboard() {
    return <h1>Dashboard</h1>;
}

function Brokers() {
    return <h1>Brokers</h1>;
}

function Strategies() {
    return <h1>Strategies</h1>;
}

function Agents() {
    return <h1>AI Agents</h1>;
}

function Orders() {
    return <h1>Orders</h1>;
}

function Portfolio() {
    return <h1>Portfolio</h1>;
}

function Settings() {
    return <h1>Settings</h1>;
}

export default function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Login />} />

                <Route element={<MainLayout />}>

                    <Route
                        path="/dashboard"
                        element={<Dashboard />}
                    />

                    <Route
                        path="/clients"
                        element={<Clients />}
                    />

                    <Route
                        path="/brokers"
                        element={<Brokers />}
                    />

                    <Route
                        path="/strategies"
                        element={<Strategies />}
                    />

                    <Route
                        path="/agents"
                        element={<Agents />}
                    />

                    <Route
                        path="/orders"
                        element={<Orders />}
                    />

                    <Route
                        path="/portfolio"
                        element={<Portfolio />}
                    />

                    <Route
                        path="/settings"
                        element={<Settings />}
                    />

                </Route>

            </Routes>

        </BrowserRouter>

    );

}