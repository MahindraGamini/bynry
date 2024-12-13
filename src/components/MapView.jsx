import React, { useEffect, useRef, useState, useCallback } from 'react';
import { MapPin } from 'lucide-react';
import mapboxgl from 'mapbox-gl';

const MapView = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredLocations, setFilteredLocations] = useState([]);

  const locations = [
    { id: 1, name: 'Ravi Kumar', lat: 28.6139, lng: 77.2090, address: 'New Delhi, Delhi', description: 'Software Engineer at XYZ' },
    { id: 2, name: 'Priya Singh', lat: 19.0760, lng: 72.8777, address: 'Mumbai, Maharashtra', description: 'Graphic Designer at ABC' },
    { id: 3, name: 'Arvind Patel', lat: 12.9716, lng: 77.5946, address: 'Bengaluru, Karnataka', description: 'Data Scientist at DEF' },
    { id: 4, name: 'Sneha Verma', lat: 22.5726, lng: 88.3639, address: 'Kolkata, West Bengal', description: 'Content Writer at GHI' },
    { id: 5, name: 'Manoj Yadav', lat: 25.5941, lng: 85.1376, address: 'Patna, Bihar', description: 'Digital Marketer at JKL' },
  ];

  useEffect(() => {
    
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFoaWkwNyIsImEiOiJjbTRsbXcxemkwMzl2MmlzM2xuMW1yNjYyIn0.Fl-SlD2tQss_Md5u2BqunA';
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [77.2090, 28.6139],
      zoom: 5,
    });

    return () => {
      if (mapRef.current) mapRef.current.remove();
    };
  }, []);

  useEffect(() => {
    if (selectedLocation && mapRef.current) {
      const map = mapRef.current;
      map.flyTo({
        center: [selectedLocation.lng, selectedLocation.lat],
        zoom: 10,
      });

      new mapboxgl.Popup({ offset: 25 })
    
        .setHTML(
          `<b>${selectedLocation.name}</b><br>${selectedLocation.address}`
        )
        .addTo(map);
    }
  }, [selectedLocation]);

  useEffect(() => {
   
    const lowerCaseQuery = searchQuery.toLowerCase();
    const filtered = locations.filter(
      (location) =>
        location.name.toLowerCase().includes(lowerCaseQuery) ||
        location.address.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredLocations(filtered);
  }, [searchQuery]);

  const handleSearch = useCallback(
    (event) => {
      const value = event.target.value;
      setSearchQuery(value);
    },
    []
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-3">
        <MapPin className="text-blue-600" /> Profile Locations
      </h1>

      
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by name or city..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="bg-white shadow-md rounded-lg p-6">
          <div
            ref={mapContainerRef}
            style={{ width: '100%', height: '400px', borderRadius: '8px' }}
          ></div>
        </div>

    
        <div>
          <h2 className="text-xl font-semibold mb-4">Location List</h2>
          {filteredLocations.length > 0 ? (
            filteredLocations.map((location) => (
              <div
                key={location.id}
                className="bg-gray-100 p-4 rounded-lg mb-4 flex flex-col md:flex-row justify-between items-start md:items-center"
              >
                <div>
                  <h3 className="font-bold">{location.name}</h3>
                  <p className="text-gray-600">{location.address}</p>
                  <p className="text-gray-500 text-sm">{location.description}</p>
                </div>
                <button
                  onClick={() => setSelectedLocation(location)}
                  className="text-blue-600 hover:text-blue-800 mt-3 md:mt-0"
                >
                  View
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No locations found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MapView;
