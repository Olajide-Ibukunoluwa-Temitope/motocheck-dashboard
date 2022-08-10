import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AdminFrame from './components/AdminFrame';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <div className="bg-body-bg w-full h-auto">
      <AdminFrame>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </AdminFrame>
      
    </div>
  );
}

export default App;
