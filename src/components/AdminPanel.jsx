import React, { useContext, useState } from 'react';
import { Edit, Trash2, PlusCircle, XCircle } from 'lucide-react';
import { AdminContext } from '../context/AdminContext';

const AdminPanel = () => {
  const { profiles, addProfile, deleteProfile } = useContext(AdminContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProfile, setNewProfile] = useState({ name: "", email: "" });

  const handleAddProfile = () => {
    addProfile(newProfile);
    setNewProfile({ name: "", email: "" });
    setIsModalOpen(false);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-3">
        <Edit className="text-blue-600" /> Admin Panel
      </h1>

      <div className="bg-white shadow-md rounded-lg p-6 relative">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Manage Profiles</h2>
          <button
            onClick={toggleModal}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <PlusCircle /> Add New Profile
          </button>
        </div>

        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {profiles.map((profile) => (
              <tr key={profile.id} className="border-b">
                <td className="p-3">{profile.id}</td>
                <td className="p-3">{profile.name}</td>
                <td className="p-3">{profile.email}</td>
                <td className="p-3 text-right">
                  <button className="text-blue-600 hover:text-blue-800 mr-3">
                    <Edit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => deleteProfile(profile.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-start justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg sm:max-w-md absolute top-20">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Add New Profile</h2>
              <button onClick={toggleModal} className="text-gray-500 hover:text-gray-800">
                <XCircle className="w-6 h-6" />
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddProfile();
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  value={newProfile.name}
                  onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
                  className="w-full border-gray-300 rounded-lg p-2 mt-1"
                  placeholder="Enter name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  value={newProfile.email}
                  onChange={(e) => setNewProfile({ ...newProfile, email: e.target.value })}
                  className="w-full border-gray-300 rounded-lg p-2 mt-1"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={toggleModal}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
