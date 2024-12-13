import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const ProfileDetail = () => {
  const location = useLocation();
  const { id } = useParams();
  const mapContainerRef = useRef();

  const [profile, setProfile] = useState(
    location.state?.profile 
  );
  const [isLoading, setIsLoading] = useState(!profile);

 



  useEffect(() => {
    if (!profile || !mapContainerRef.current) return;

    mapboxgl.accessToken = 'pk.eyJ1IjoibWFoaWkwNyIsImEiOiJjbTRsbXcxemkwMzl2MmlzM2xuMW1yNjYyIn0.Fl-SlD2tQss_Md5u2BqunA';

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [profile.lng, profile.lat],
      zoom: 10,
      // Add responsive options
      attributionControl: false,
      interactive: true,
    });

    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    const marker = new mapboxgl.Marker()
      .setLngLat([profile.lng, profile.lat])
      .addTo(map);


    const handleResize = () => {
      map.resize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      marker.remove();
      map.remove();
    };
  }, [profile]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full text-blue-500"></div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="text-center text-red-500 h-screen flex items-center justify-center text-2xl">
        Profile not found
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 md:flex md:justify-between">
      <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 order-2 md:order-1 md:w-full md:max-w-md">
        <img
          src={profile.photo || 'https://via.placeholder.com/150'}
          alt={profile.name}
          className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-4 object-cover"
        />
        <h2 className="text-lg md:text-xl font-bold text-center">
          {profile.name}
        </h2>
        <p className="text-sm md:text-base text-gray-600 text-center mt-2">
          {profile.description}
        </p>
        <p className="text-sm md:text-base text-gray-600 text-center mt-4">
          <strong>Address:</strong> {profile.address}
        </p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 order-1 md:order-2 md:flex-1 md:h-96 md:ml-6">
        <div
          ref={mapContainerRef}
          className="w-full h-64 sm:h-80 lg:h-96 rounded-lg"
          style={{ minHeight: '250px' }}
        ></div>
      </div>
    </div>
  );
};

export default ProfileDetail;