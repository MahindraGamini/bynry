import React from 'react';
import { Link } from 'react-router-dom';

const profiles = [
  {
    id: 1,
    name: "Ravi Kumar",
    description: "Software Engineer based in New Delhi.",
    photo: "https://cdn.pixabay.com/photo/2018/08/18/16/23/indian-man-3615047_1280.jpg",
    lat: 28.6139,
    lng: 77.2090,
    address: "New Delhi, Delhi",
  },
  {
    id: 2,
    name: "Priya Singh",
    description: "Data Scientist based in Mumbai.",
    photo: "https://cdn.pixabay.com/photo/2018/08/18/16/23/indian-man-3615047_1280.jpg",
    lat: 19.0760,
    lng: 72.8777,
    address: "Mumbai, Maharashtra",
  },
];

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row sm:ml-4 md:ml-0 p-4 sm:p-6 bg-white shadow-md rounded-lg">
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-6 sm:text-left">
          Dashboard Overview
        </h1>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={profile.photo}
                alt={profile.name}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h2 className="text-xl font-semibold">{profile.name}</h2>
              <p className="text-gray-600 mb-3">{profile.description}</p>
              <Link
                to={`/profile/${profile.id}`}
                state={{ profile }}
                className="text-blue-600 hover:text-blue-800"
              >
                View in Detail
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
