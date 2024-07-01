

import React, { useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import './st.css'; // Assuming you have your CSS styles imported here

export default function PlacesPage() {
  // Initialize places with liked state
  const [places, setPlaces] = useState([
    { id: 1, name: 'Burj Al Arab ', imageUrl: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600', location: 'MUMBAI', cost: '$300', rooms: 2, distance: '25km', date: '2024-06-05' },
    { id: 2, name: 'The Ritz-Carlton', imageUrl: 'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=600', location: 'TOKYO', cost: '$150', rooms: 3, distance: '10km', date: '2024-06-02' },
    { id: 3, name: 'Marina Bay Sands', imageUrl: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600', location: 'BALI', cost: '$350', rooms: 3, distance: '30km', date: '2024-06-06' },
    { id: 4, name: 'The Peninsula ', imageUrl: 'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=600', location: 'SPAIN', cost: '$400', rooms: 4, distance: '35km', date: '2024-06-07' },
    { id: 5, name: 'Hotel de Crillon', imageUrl: 'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=600', location: 'MALDIVES', cost: '$300', rooms: 2, distance: '25km', date: '2024-06-05' },
    { id: 6, name: 'Mandarin Oriental -', imageUrl: 'https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=600', location: 'PARIS', cost: '$350', rooms: 3, distance: '30km', date: '2024-06-06' },
    { id: 7, name: 'Aman Tokyo ', imageUrl: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600', location: 'ABU-DHABI', cost: '$400', rooms: 4, distance: '35km', date: '2024-06-07' },
    { id: 8, name: 'The Savoy', imageUrl: 'https://images.pexels.com/photos/2029722/pexels-photo-2029722.jpeg?auto=compress&cs=tinysrgb&w=600', location: 'DELHI', cost: '$300', rooms: 2, distance: '25km', date: '2024-06-05' },
    { id: 9, name: 'The Plaza', imageUrl: 'https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=600', location: 'DUBAI', cost: '$300', rooms: 2, distance: '25km', date: '2024-06-05' },
    { id: 10, name: 'The Ritz-Carlton ', imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', location: 'JAKARTA', cost: '$600', rooms: 4, distance: '55km', date: '2024-06-11' },
    { id: 11, name: 'Four Seasons Hotel ', imageUrl: 'https://images.pexels.com/photos/3754595/pexels-photo-3754595.jpeg?auto=compress&cs=tinysrgb&w=600', location: 'MALDRID', cost: '$600', rooms: 4, distance: '55km', date: '2024-06-11' },

    { id: 12, name: 'Taj Mahal Palace', imageUrl: 'https://images.pexels.com/photos/3754594/pexels-photo-3754594.jpeg?auto=compress&cs=tinysrgb&w=600', location: 'LONDON', cost: '$350', rooms: 3, distance: '30km', date: '2024-06-06' },
    { id: 13, name: 'Fairmont Banff Springs ', imageUrl: 'https://images.pexels.com/photos/827528/pexels-photo-827528.jpeg?auto=compress&cs=tinysrgb&w=600', location: 'NEWYORK', cost: '$400', rooms: 4, distance: '35km', date: '2024-06-07' },

    { id: 14, name: 'Badrutt ', imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', location: 'LADAKH', cost: '$150', rooms: 3, distance: '10km', date: '2024-06-02' },

    { id: 15, name: 'The Oberoi Udaivilas ', imageUrl: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=600', location: 'BUDAPEST', cost: '$300', rooms: 2, distance: '25km', date: '2024-06-05' },
   
]);

  // Handle like button click
  const handleLike = (id) => {
    const updatedPlaces = places.map(place => {
      if (place.id === id) {
        return { ...place, liked: !place.liked }; // Toggle liked state
      }
      return place;
    });
     setPlaces(updatedPlaces);
  };
  //phele place array ko traverse karenge aur agar user ne jis place pe click kia hai uski aur handle like ki id match ho gyi to (...place)
  //us place ki saari prop. ko current place me copy kr lenge  return { ...place, liked: !place.liked } agar like hai to unlike ho jaaegi and vice versa
  //setPlaces(updatedPlaces); jo updated values hai vo setplace me show ho jaaengi

  return (
    <div>
        <Nav/>     <div style={{ textAlign: 'center', fontSize: '2rem', color: 'grey', animation: 'fadeIn 2s ease-in-out' }}>
   <h1 style={{ color: 'red' }}>Welcome to Airbnb</h1>
  <p>"Your Home Away from Home"</p>
    </div>
     <div className="grid-container">
     {places.map(place => (
          <div key={place.id} className="grid-item">
          <img src={place.imageUrl} alt={place.name} />
    <h3>{place.name}</h3>
            <div className="details">
        <p><strong>Location:</strong> {place.location}</p>
            <p><strong>Cost:</strong> {place.cost}</p>
      </div>
            <div className="details">
              <p><strong>Rooms:</strong> {place.rooms}</p>
        <p><strong>Distance:</strong> {place.distance}</p>
            </div>
      <button className={place.liked ? 'like-button liked' : 'like-button'} onClick={() => handleLike(place.id)}>
              
            </button>
          </div>
        ))}
      </div>
      
      <Link to="/liked" className="liked-link"></Link>
    </div>
  );
}

