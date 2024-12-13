import React, { createContext, useState } from 'react';

const AdminContext = createContext();

const AdminProvider = ({ children }) => {
  const [profiles, setProfiles] = useState([
    { id: 1, name: "Priya Singh", email: "Priya@example.com" },
    { id: 2, name: "Rakesh Kumar", email: "Rakesh@example.com" }
  ]);

  const addProfile = (profile) => {
    setProfiles([...profiles, { ...profile, id: Date.now() }]);
  };

  const deleteProfile = (id) => {
    setProfiles(profiles.filter((profile) => profile.id !== id));
  };

  return (
    <AdminContext.Provider value={{ profiles, addProfile, deleteProfile }}>
      {children}
    </AdminContext.Provider>
  );
};

export { AdminContext, AdminProvider };
