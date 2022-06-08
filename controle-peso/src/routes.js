import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from './screens/signin_screen.js';
import Login from './screens/login_screen.js';
import AccConfig from './screens/acc_config_screen.js';
import Dashboard from './screens/dashboard_screen.js';

export default function CustomRoutes() {
    return (
        <Routes>
            <Route 
                path="/" 
                element={<SignIn />}
            />
            <Route 
                path="/login" 
                element={<Login />}
            />
            <Route 
                path="/config" 
                element={<AccConfig />}
            />
            <Route 
                path="/dashboard" 
                element={<Dashboard />}
            />
        </Routes>
    );
};