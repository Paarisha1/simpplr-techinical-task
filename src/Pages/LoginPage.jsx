import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='mt-4 grow flex items-center justify-around' style={{ backgroundImage: 'url(https://th.bing.com/th/id/OIP.ZM3TX6oqEQ8szaKlBFNgNQHaCt?w=316&h=128&c=7&r=0&o=5&dpr=1.3&pid=1.7)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
       <div className='bg-white p-8 rounded-lg shadow-lg'>
       <h1 className='text-4xl text-center mb-4 sticky top-0 bg-white p-4 rounded-lg'>Login Here</h1>
        <form className='max-w-2xl mx-auto border p-4 bg-white rounded-lg'>
         <input type='email' placeholder='Enter your Email Id' value={email} onChange={ev => setEmail(ev.target.value)} 
         className='block w-full p-2 mb-4 border rounded' />
      <input type='password' placeholder='Enter your password' value={password} onChange={ev => setPassword(ev.target.value)}
       className='block w-full p-2 mb-4 border rounded' />
      <button className='p-2 my-4 w-full text-white bg-blue-500 rounded-full'><Link to={'/account'}>Login</Link></button>
   <div className='text-center p-2'>
       Don't have an account? Let's create <span></span><Link className='bg-gray-300 rounded-full p-1' to={'/register'}>REGISTER</Link>
       </div>
     </form>
     </div>
    </div>
    );
}

export default LoginPage;
