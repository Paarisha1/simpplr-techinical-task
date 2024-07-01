
import './App.css'
import axios from 'axios';
import Layout from './Layout.jsx'
import Index from './Pages/Index.jsx';
import LoginPage from './Pages/LoginPage.jsx'
import { Routes  , Route} from 'react-router-dom'
import Register from './Pages/Register.jsx'
import Account from './Pages/Account.jsx';
import PlacesPage from './Pages/PlacesPage.jsx';
import Contact from './Pages/Contact.jsx';
import MyBookings from './Pages/MyBookings.jsx';
axios.defaults.baseURL='http://localhost:4000';
function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Index/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/account' element={<Account/>}/>
      <Route path='/account/places' element={<PlacesPage/>}/>
      <Route path='/account/bookings' element={<MyBookings/>}/>
      <Route path='/account/contact' element={<Contact/>}/></Route>
      
    </Routes>
    
  )
}

export default App
