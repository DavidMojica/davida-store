'use client';
import React, { useEffect, useState, Suspense } from 'react';
import Header from '../componentes/header';
import Footer from '../componentes/footer';
import Products from '../models/Instances';
import CardFactory from '../componentes/CardFactory';
import { useSearchParams } from 'next/navigation';


const Catalogo = () => {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || ''; 
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  useEffect(() => {
    const categoryFromUrl = searchParams.get('category') || '';
    if (categoryFromUrl !== selectedCategory) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [searchParams]); 

  const handleCategoryChange = (event:any) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = selectedCategory
    ? Products.filter(product => product.getCategory() === selectedCategory)
    : Products;
  return (
    <Suspense fallback={<article>Cargando...</article>}>
        <Header />
        <main className='bg-white dark:bg-black m-auto'>
          <section className="py-10 my-5 rounded-xl flex flex-col md:flex-row bg-cover bg-center" style={{ backgroundImage: "url('/cat_bg.jpg')" }}>
            <article className="w-full md:w-1/2 bg-opacity-50 bg-black p-8">
              <h4 className="text-xl font-bold text-white">Tienda Online de Variedades</h4>
              <h1 className="text-3xl md:text-6xl lg:text-6xl font-bold text-white mt-2 mb-6">Catálogo virtual</h1>
              <p className="text-xl font-bold text-white">Davida Store ofrece una amplia gama de prendas y productos variados para todos los gustos y edades.</p>
            </article>
            <article className="w-full md:w-1/2"></article>
          </section>


          <section className='py-6'>
            <select name="f_type" id="f_type" className='mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' onChange={handleCategoryChange}>
              <option value="">Filtra por categoría</option>
              <option value="ropa">Ropa</option>
              <option value="accesorios">Accesorios</option>
              <option value="tecnologia">Tecnología</option>
              <option value="otros">Otros</option>
            </select>
          </section>

          <section className='flex flex-wrap justify-evenly h-auto py-6'>
                {filteredProducts.map(product => (
                  <CardFactory.ClothingCard key={product.getID()} size='w-80 mx-2 my-2' product={product} />
                ))}
          </section>
        </main>

        <Footer />
    </Suspense>
  )
}

export default Catalogo