import React from 'react';
import Link from 'next/link';
import IconFactory from './IconFactory';

const Footer = ():React.JSX.Element => {
  const date = new Date();
  return (
    <footer className='bg-white dark:bg-black p-4'>
        <section className='text-center'>
            <p className='font-bold text-sm md:text-xl flex-wrap w-4/5 md:w-1/2 m-auto text-black dark:text-white'>
                Hola a todos! Somos una tienda virtual de productos varios con envío a toda Colombia. Esperamos que les gusten nuestros productos.
            </p>
        </section>
        <section className='md:flex md:justify-evenly mt-4'>
            <article>
                <img src="/logo.png" alt="logo_light" className='block dark:hidden h-48 w-48 rounded-full m-auto md:scale-125' />
                <img src="/logo_dark.png" alt="logo_dark" className=' hidden dark:block h-48 w-48 rounded-full m-auto md:scale-125' />
            </article>
            <article className='text-center '>
                <h2 className='text-2xl text-red-700 dark:text-red-900 font-bold'>Nuestro Sitio</h2>
                <ul className='text-black dark:text-white'>
                    <li><Link href={'/'} className='mx-4 font-medium duration-300 text-md transition-all ease-in-out hover:underline hover:decoration-red-700 hover:text-red-700 dark:hover:decoration-red-900 dark:hover:text-red-900 hover:underline-offset-4'>Home</Link></li>
                    <li><Link href={'/'} className='mx-4 font-medium duration-300 text-md transition-all ease-in-out hover:underline hover:decoration-red-700 hover:text-red-700 dark:hover:decoration-red-900 dark:hover:text-red-900 hover:underline-offset-4'>Catálogo</Link></li>
                    {/* <li><Link href={'/'} className='mx-4 font-medium duration-300 text-md transition-all ease-in-out hover:underline hover:decoration-red-700 hover:text-red-700 dark:hover:decoration-red-900 dark:hover:text-red-900 hover:underline-offset-4'>Contáctenos</Link></li> */}
                </ul>
            </article>
            <article className='flex items-center text-center'>
                <p className='text-black dark:text-white font-bold m-auto '>
                    ¡También somos empresa de desarrollo! <br />
                    <a href="https://wa.me/573197750000" target='_blank' className='text-red-700 hover:text-red-900 dark:text-red-900 dark:hover:text-red-700'>
                        Cotice sus sitos web con nosotros 
                    </a>
                </p>
            </article>
        </section>
        <section className='flex justify-evenly mt-4'>
            <article>
                <h2 className='text-2xl font-bold text-black dark:text-white text-center'>Área de ventas</h2>
                <div className='flex justify-evenly mt-2'>
                    <a href="https://wa.me/573136173932" target='_blank'>
                        <IconFactory.Whatsapp size='w-12 h-12' padding='p-2' />   
                    </a>
                    <a href="https://www.facebook.com/angela.mojicavergara" target='_blank'>
                        <IconFactory.Facebook size='w-12 h-12' padding='p-2' />   
                    </a>
                </div>    
            </article>
            <article >
                <h2 className='text-2xl font-bold text-black dark:text-white text-center'>Área de desarrollo</h2>
                <div className='flex justify-evenly mt-2'>
                    <a href="https://wa.me/573197750000" target='_blank'>
                        <IconFactory.Whatsapp size='w-12 h-12' padding='p-2' />
                    </a>
                    <a href="https://github.com/DavidMojica" target='_blank'>
                        <IconFactory.GitHub size='w-12 h-12' padding='p-2' />
                    </a>
                </div>
            </article>
        </section>
        <section className='text-center mt-4 font-bold'>
            <h4 className='text-xl text-black dark:text-white'>Copyright {date.getFullYear()} - Davida Store</h4>
        </section>
    </footer>
  )
}

export default Footer