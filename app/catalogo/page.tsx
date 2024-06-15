'use client';
import React from 'react';
import Header from '../componentes/header';
import Footer from '../componentes/footer';
import { Product } from '../componentes/models/Product';
import CardFactory from '../componentes/CardFactory';

const Catalogo = () => {
  // Clothing
  const ropa_1 = new Product(0,'Blusa de cuadros','Blusa de cuadros casual con solapa y botones de marga larga con estampado de Patchwork', 
                              65000, 'ropa', ['ropa_1_1.jpeg', 'ropa_1_2.jpeg', 'ropa_1_3.jpeg'], true, 'M', 'Vino/Azul/Amarillo','Tela');
  const ropa_2 = new Product(1,'Camiseta de mariposa', 'camiseta con cuello redondo y estampado de marposas camiseta informal de manga corta para todas las ocasiones',
                              55000, 'ropa', ['ropa_2_1.jpeg', 'ropa_2_2.jpeg', 'ropa_2_3.jpeg'], true, 'M', 'Azul', 'Poliester')
  const ropa_3 = new Product(2, 'Camisa de cuadros', 'camisets de verano estampado con bloques multicoleres top vintage de manga corta y cuello redondo.',
                              45000, 'ropa', ['ropa_3_1.jpeg', 'ropa_3_2.jpeg', 'ropa_3_3.jpeg'], true, 'M', 'Varios', 'Poliester')
  
  // Accesorios
  const accesorio_1 = new Product(3, 'Conjunto de pulseras 4pc', 'conjunto de pulseras 4pc de moda boehemia con borlas y colgante de arbol de la vida para hombres y dama',
                              40000, 'accesorios',  ['accesorio_1_1.jpeg', 'accesorio_1_2.jpeg', 'accesorio_1_3.jpeg', 'accesorio_1_4.jpeg'], true, '-', 'Varios',  '-')



  return (
    <>
        <Header />
        <main className='bg-white dark:bg-black m-auto'>
        <section className="py-10 my-5  rounded-xl flex bg-cover bg-center" style={{ backgroundImage: "url('/cat_bg.jpg')" }}>
          <article className="w-1/2 bg-opacity-50 bg-gray-800 p-8">
            <h4 className="text-xl font-bold text-white">Tienda Online de Variedades</h4>
            <h1 className="text-3xl md:text-8xl font-bold text-white mt-2 mb-6">Catálogo virtual</h1>
            <p className="text-xl font-bold text-white">Davida Store ofrece una amplia gama de prendas y productos variados para todos los gustos y edades.</p>
          </article>
          <article className="w-1/2"></article>
        </section>

        {/* <section>
          <select name="f_type" id="f_type" className='text-black'>
            <option value="" selected>Seleccione tipo</option>
          </select>
        </section> */}

        <section className='flex flex-wrap justify-evenly h-auto py-12'>
            <CardFactory.ClothingCard size='w-80 mx-2 my-2' product={ropa_1} />
            <CardFactory.ClothingCard size='w-80 mx-2 my-2' product={ropa_2} />
            <CardFactory.ClothingCard size='w-80 mx-2 my-2' product={ropa_3} />
            <CardFactory.ClothingCard size='w-80 mx-2 my-2' product={accesorio_1} />

        </section>

        </main>

        <Footer />
    </>
  )
}

export default Catalogo