import React from 'react';
import Link from 'next/link';
import Switch_day from './switch_day';

const Header = ():React.JSX.Element => {
  return (
    <header className='grid sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center p-4 bg-white dark:bg-black'>
        <section className='sm:flex sm:items-center'>
            <img src="/logo.png" alt="logo_light" className='block dark:hidden h-48 w-48 rounded-full scale-125' />
            <img src="/logo_dark.png" alt="logo_dark" className=' hidden dark:block h-48 w-48 rounded-full scale-125' />
        </section>
        <section className='sm:col-span-1 md:col-span-2'>
            <ul className='sm:block md:flex text-center md:divide-x-2 md:divide-black md:dark:divide-white'>
                <li><Link href={'/'} className='text-black dark:text-white mx-4 font-medium duration-300 text-lg md:text-3xl transition-all ease-in-out hover:underline hover:decoration-red-700 hover:text-red-700 dark:hover:decoration-red-900 dark:hover:text-red-900 hover:underline-offset-4'>Home</Link></li>
                <li><Link href={'/'} className='text-black dark:text-white mx-4 font-medium duration-300 text-lg md:text-3xl transition-all ease-in-out hover:underline hover:decoration-red-700 hover:text-red-700 dark:hover:decoration-red-900 dark:hover:text-red-900 hover:underline-offset-4'>Catálogo</Link></li>
                <li><Link href={'/'} className='text-black dark:text-white mx-4 font-medium duration-300 text-lg md:text-3xl transition-all ease-in-out hover:underline hover:decoration-red-700 hover:text-red-700 dark:hover:decoration-red-900 dark:hover:text-red-900 hover:underline-offset-4'>Conócenos</Link></li>
                <li><Link href={'/'} className='text-black dark:text-white mx-4 font-medium duration-300 text-lg md:text-3xl transition-all ease-in-out hover:underline hover:decoration-red-700 hover:text-red-700 dark:hover:decoration-red-900 dark:hover:text-red-900 hover:underline-offset-4'>Contáctenos</Link></li>
            </ul>
        </section>
        <section className='hidden md:block'>
            <Switch_day />
        </section>
    </header>
  )
}

export default Header
