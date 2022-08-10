import React from 'react';
import './App.css';
import AdminFrame from './components/AdminFrame';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="bg-body-bg w-full h-screen">
      <AdminFrame>
        <Dashboard />
      </AdminFrame>
    </div>
  );
}

export default App;
