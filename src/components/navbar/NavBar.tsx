import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='w-full bg-indigo-900 text-white'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6'>
        <div className='text-2xl font-bold uppercase'>Farmacia</div>
        <div className='flex gap-6'>
          <Link className='hover:underline' to="/">Home</Link>
          <Link className='hover:underline' to="/sobre">Sobre</Link>
          <Link className='hover:underline' to="/contato">Contato</Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
