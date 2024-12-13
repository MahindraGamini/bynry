import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Navigate, 
  Link, 
  Outlet 
} from 'react-router-dom'
import { AdminProvider } from './context/AdminContext'

import Sidebar from './components/NavBar'

import Dashboard from './components/DashBoard'
import ProfileDetails from './components/ProfileDetails'
import AdminPanel from './components/AdminPanel'
import MapView from './components/MapView'

const AppLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="lg:ml-64 flex-grow p-6">
        <Outlet />
      </main>
    </div>
  );
};

const App = () => {
  return (
    <AdminProvider> {/* Move AdminProvider here */}
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Navigate to="/profiles" replace />} />
            <Route path="profiles" element={<Dashboard />} />
            <Route path="profile/:id" element={<ProfileDetails />} />
            <Route path="map" element={<MapView />} />
            <Route path="admin" element={<AdminPanel />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </AdminProvider>
  );
};

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
      <Link 
        to="/profiles" 
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Return to Profiles
      </Link>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
