import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

async function registerUser(e) {
       e.preventDefault();
   await axios.post('/register', {
   name, email, password,
  });
        alert('Registration Complete .. Try LogIn');
    }
    return (
   <div className="mt-4 grow flex items-center justify-around" style={{ backgroundImage: 'url(https://th.bing.com/th/id/OIP.ZM3TX6oqEQ8szaKlBFNgNQHaCt?w=316&h=128&c=7&r=0&o=5&dpr=1.3&pid=1.7)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
 <div className="bg-white p-8 rounded-lg shadow-lg">
         <h1 className="text-4xl text-center mb-4">Register Here</h1>
   <form className="max-w-2xl mx-auto border p-4 bg-white rounded-lg" onSubmit={registerUser}>
<input type="text" placeholder="Name" value={name} onChange={ev => setName(ev.target.value)} className="block w-full p-2 mb-4 border rounded" />
 <input type="email" value={email} placeholder="Enter your Email Id" onChange={ev => setEmail(ev.target.value)} className="block w-full p-2 mb-4 border rounded" />
    <input type="password" value={password} placeholder="Enter your password" onChange={ev => setPassword(ev.target.value)} className="block w-full p-2 mb-4 border rounded" />
 <button className="p-2 my-4 w-full text-white bg-blue-500 rounded-full"><Link to={'/login'}>Register</Link></button>
     <div className="text-center p-2">
  Already a member? <span></span><Link className="bg-gray-300 rounded-full p-1" to={'/login'}>LOGIN</Link>
  </div>
 </form>
  </div>
</div>
    )
}

export default Register;
