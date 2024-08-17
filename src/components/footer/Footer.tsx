import React from 'react';
import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'



const Footer = () => {
    return (
        <footer className='w-full bg-indigo-900 text-white text-center py-4'>
            <p>&copy; 2024 Farmacia. Todos os direitos reservados.| LS</p>
            <p className='text-lg'>Acesse nossas redes sociais: </p>
            <div className='flex gap-2'>
                <LinkedinLogo size={48} weight='bold' />
                <InstagramLogo size={48} weight='bold' />
                <FacebookLogo size={48} weight='bold' />
            </div>
        </footer>
    );
};

export default Footer;
