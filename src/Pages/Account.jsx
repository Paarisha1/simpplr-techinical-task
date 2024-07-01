import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PlacesPage from './PlacesPage';
import Nav from './Nav';
import Footer from './Footer';
const Account = () => {

  const { pathname } = useLocation();



  let subpage = pathname.split('/')[2];
  if (subpage   === undefined) {
    subpage =   'profile';
  }

  
  function buttonClasses(type) {
    let classes = 'inline-flex gap-4  py-3 px-6 rounded-full  transition duration-300';
          if (type === subpage) {
           classes += ' bg-gradient-to-r from-purple-500  to-pink-500 text-white   hover:from-purple-600    hover:to-pink-600';}
    else {
      classes += ' bg-gray-200 text-gray-600 hover:bg-gray-300';}
    
    return classes;}
  

  return (
    <div className="bg-gray-100 min-h-screen">
      
      <PlacesPage />
      {subpage === 'profile' && (
        <div className="max-w-lg    mx-auto text-center mt-8">
          <button
         className= {buttonClasses('profile')}
            style={{
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
            }}
          >
     <Link to={'/login'} className="text-xl  font-semibold">
              Log Out
            </Link>
        </button>
         
        </div>
      )}
       <Footer/>
    </div>
    
  );
};

export default Account;



