// Import the React router
import { Routes, Route } from "react-router-dom";
// Import the pages
import Dashboard from "../pages/Dashboard";
import DetailsPage from "../pages/DetailsPage";

export default function AppRoutes() {
    return (
        <Routes>
            <Route
                path="/"
                element={<Dashboard />}
            />
            <Route
                path="/movie/:id"
                element={<DetailsPage />}
            />
        </Routes>
    );
}