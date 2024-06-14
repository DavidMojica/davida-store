'use client';
import React from 'react';
import Header from '../componentes/header';
import Footer from '../componentes/footer';
import { Clothing } from '../componentes/models/Product';
import CardFactory from '../componentes/CardFactory';

const Catalogo = () => {
  // Clothing
  const BlusaCuadros_1 = new Clothing('Blusa Casual','Blusa de cuadros casual con solapa y botones de marga larga con estampado de Patchwork', 
                                      65000, 'ropa', ['ropa_1_1.jpeg', 'ropa_1_2.jpeg', 'ropa_1_3.jpeg'], true, 'M', 'Vino/Azul/Amarillo','Tela');



  return (
    <>
        <Header />
        <main className='bg-white dark:bg-black'>
        <section className="py-10 my-5  rounded-xl flex bg-cover bg-center" style={{ backgroundImage: "url('/cat_bg.jpg')" }}>
          <article className="w-1/2 bg-opacity-50 bg-gray-800 p-8">
            <h4 className="text-xl font-bold text-white">Tienda Online de Variedades</h4>
            <h1 className="text-8xl font-bold text-white mt-2 mb-6">Catálogo virtual</h1>
            <p className="text-xl font-bold text-white">Davida Store ofrece una amplia gama de prendas y productos variados para todos los gustos y edades.</p>
          </article>
          <article className="w-1/2"></article>
        </section>

        {/* <section>
          <select name="f_type" id="f_type" className='text-black'>
            <option value="" selected>Seleccione tipo</option>
          </select>
        </section> */}

        <section>
            <CardFactory.ClothingCard size='h-112 w-80' product={BlusaCuadros_1} />
        </section>

        </main>

        <Footer />
    </>
  )
}

export default Catalogo