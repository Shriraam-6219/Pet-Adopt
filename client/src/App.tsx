import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/homePage/Home";
import Error from "./pages/Error/Error";
import LoginForm from "./pages/Auth/Login/LoginForm"; // Adjust the import path if needed

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Simulated authentication state update for demo purposes
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/login"
          element={<LoginForm onLoginSuccess={handleLoginSuccess} />}
        />

        {/* Protected Routes */}
        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/" index element={<Home />} />
        </Route>

        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
