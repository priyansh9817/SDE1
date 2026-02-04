import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from './components/login';
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;

