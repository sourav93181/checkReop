
import './App.css';
import { Home, SingleScreen } from './Screen';
import React, { useState,useEffect } from "react";
import {
  BrowserRouter as Router,Routes,Route,useLocation,
useNavigate,
} from "react-router-dom";
import AppRoutes from "./routes";
function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <SingleScreen /> */}
      <Routes>
        {AppRoutes.map((appRoute) => (
          <Route path={appRoute.path} element={appRoute.comp} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
