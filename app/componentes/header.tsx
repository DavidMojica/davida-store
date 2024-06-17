import React from 'react';
import Link from 'next/link';
import Switch_day from './switch_day';

const Header = ():React.JSX.Element => {
  return (
    <header className='grid sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4 place-items-center p-4 bg-white dark:bg-black'>
        <section className='sm:flex sm:items-center'>
            <h2 className='text-black dark:text-white font-bold text-3xl'>DAVIDA <span className='text-red-700 dark:text-red-900'>STORE</span></h2>
        </section>
        <section className='sm:col-span-1 md:col-span-2 flex items-center'>
            <ul className='sm:block md:flex text-center'>
                <li><Link href={'/'} className='text-black dark:text-white mx-2 font-medium duration-300 text-2xl transition-all ease-in-out hover:underline hover:decoration-red-700 hover:text-red-700 dark:hover:decoration-red-900 dark:hover:text-red-900 hover:underline-offset-4'>Home</Link></li>
                <li><Link href={'/catalogo'} className='mr-4 text-black dark:text-white mx-2 font-medium duration-300 text-2xl transition-all ease-in-out hover:underline hover:decoration-red-700 hover:text-red-700 dark:hover:decoration-red-900 dark:hover:text-red-900 hover:underline-offset-4'>Catálogo</Link></li>
                {/* <li><Link href={'/'} className='text-black dark:text-white ml-2 mr-4 font-medium duration-300 text-lg md:text-2xl transition-all ease-in-out hover:underline hover:decoration-red-700 hover:text-red-700 dark:hover:decoration-red-900 dark:hover:text-red-900 hover:underline-offset-4'>Contáctenos</Link></li> */}
            </ul>
            <article className='hidden md:block'>
                <Switch_day />
            </article>
        </section>
    </header>
  )
}

export default Header
