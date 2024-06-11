import React from 'react';
import Link from 'next/link';
import IconFactory from './icons';

const Footer = ():React.JSX.Element => {
  return (
    <footer className='bg-white dark:bg-black p-4'>
        <section className='text-center'>
            <p className='font-bold text-xl flex-wrap w-1/2 m-auto'>
                Hola a todos! Somos una tienda virtual de productos varios con envío a toda Colombia. Esperamos que les gusten nuestros productos.
            </p>
        </section>
        <section className='flex justify-evenly mt-4'>
            <article>
                <img src="/logo.png" alt="logo_light" className='block dark:hidden h-48 w-48 rounded-full scale-125' />
                <img src="/logo_dark.png" alt="logo_dark" className=' hidden dark:block h-48 w-48 rounded-full scale-125' />
            </article>
            <article className='text-center '>
                <h2 className='text-2xl text-red-700 dark:text-red-900 font-bold'>Nuestro Sitio</h2>
                <ul className=''>
                    <li><Link href={'/'} className='text-black dark:text-white mx-4 font-medium duration-300 text-md transition-all ease-in-out hover:underline hover:decoration-red-700 hover:text-red-700 dark:hover:decoration-red-900 dark:hover:text-red-900 hover:underline-offset-4'>Home</Link></li>
                    <li><Link href={'/'} className='text-black dark:text-white mx-4 font-medium duration-300 text-md transition-all ease-in-out hover:underline hover:decoration-red-700 hover:text-red-700 dark:hover:decoration-red-900 dark:hover:text-red-900 hover:underline-offset-4'>Catálogo</Link></li>
                    <li><Link href={'/'} className='text-black dark:text-white mx-4 font-medium duration-300 text-md transition-all ease-in-out hover:underline hover:decoration-red-700 hover:text-red-700 dark:hover:decoration-red-900 dark:hover:text-red-900 hover:underline-offset-4'>Conócenos</Link></li>
                    <li><Link href={'/'} className='text-black dark:text-white mx-4 font-medium duration-300 text-md transition-all ease-in-out hover:underline hover:decoration-red-700 hover:text-red-700 dark:hover:decoration-red-900 dark:hover:text-red-900 hover:underline-offset-4'>Contáctenos</Link></li>
                </ul>
            </article>
            <article className='flex items-center text-center'>
                <p className=''>
                    ¡También somos empresa de desarrollo! <br />
                    <Link href={'/'} className='text-red-700 hover:text-red-900 dark:text-red-900 dark:hover:text-red-700'>Cotice sus sitos web y apliaciones con nosotros </Link>
                    
                </p>
            </article>
        </section>
        <section className='flex justify-evenly mt-4'>
            <article>
                <h2 className='text-2xl font-bold'>Área de ventas</h2>
                <div className='flex justify-evenly mt-2'>
                    <IconFactory.Whatsapp size='w-12 h-12' padding='p-2' />   
                    <IconFactory.Facebook size='w-12 h-12' padding='p-2' />   
                </div>    
            </article>
            <article >
                <h2 className='text-2xl font-bold'>Área de desarrollo</h2>
                <div className='flex justify-evenly mt-2'>
                    <IconFactory.Whatsapp size='w-12 h-12' padding='p-2' />
                    <IconFactory.GitHub size='w-12 h-12' padding='p-2' />
                </div>
            </article>
        </section>
        <section className='text-center mt-4'>
            <h4 className='text-xl'>Copyrigth 2024 - Desarrollado por: David Mojica</h4>
        </section>
    </footer>
  )
}

export default Footer