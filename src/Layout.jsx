import React from 'react'
import { Outlet } from 'react-router-dom';
import Account from './Pages/Account';
import Header from './Header'

const Layout = () => {
  return (
    <div className='p-4 flex-col min-h-screen'><Header/>
    
    <Outlet/>
    </div>
  )
}

export default Layout;