// Import the React router
import { BrowserRouter } from "react-router-dom";
//Import components
import Navbar from "./components/Navbar";
// Import the App router
import AppRoutes from "./routes/AppRoutes";
// Import the CSS styles
import "./styles/Dashboard.css";
import "./styles/Details.css";
export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <AppRoutes />
        </BrowserRouter>
    );
}