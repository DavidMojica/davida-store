'use client';
import React from 'react';
import Header from '../componentes/header';
import Footer from '../componentes/footer';
import { Product } from '../componentes/models/Product';
import CardFactory from '../componentes/CardFactory';

const Catalogo = () => {
  // Clothing
  const ropa_1 = new Product(0,'Blusa de cuadros','Blusa de cuadros casual con solapa y botones de marga larga con estampado de Patchwork', 
                              106000, 'ropa', ['ropa_1_1.jpeg', 'ropa_1_2.jpeg', 'ropa_1_3.jpeg'], true, '0XL', 'Vino/Azul/Amarillo');
  const ropa_2 = new Product(1,'Camiseta de mariposa', 'Camiseta con cuello redondo y estampado de marposas camiseta informal de manga corta para todas las ocasiones',
                              99000, 'ropa', ['ropa_2_1.jpeg', 'ropa_2_2.jpeg', 'ropa_2_3.jpeg'], false, 'MX', 'Azul', );
  const ropa_3 = new Product(2, 'Camisa de cuadros', 'Camiseta de verano estampado con bloques multicoleres top vintage de manga corta y cuello redondo.',
                              99000, 'ropa', ['ropa_3_1.jpeg', 'ropa_3_2.jpeg', 'ropa_3_3.jpeg'], false, 'MX', 'Varios', );
  const ropa_4 = new Product (5, 'Blusa estampada floral', 'Blusa con cuello de muesca estampado flora casual con botones decoracion de manga larga',
                              99999, 'ropa', ['ropa_4_1.jpeg','ropa_4_2.jpeg','ropa_4_3.jpeg'], false, 'MX', 'Azul');
  const ropa_5 = new Product(6,'Blusa casual', 'Blusa camiseta manga larga casual para toda ocasion',
                              78000, 'ropa', ['ropa_5_1.jpeg','ropa_5_2.jpeg','ropa_5_3.jpeg'], true, 'M','Vinotinto');
  const ropa_6 = new Product(7, 'Blusa estampada en V', 'blusa con cuello v y  estampado floral etnicos top vintage de manga larga',
                              74000,'ropa', ['ropa_6_1.jpeg','ropa_6_2.jpeg'], true, 'M', 'Vino tinto / Azul');
  const ropa_7 = new Product(8, 'Blusa con cremallera', 'Blusa con cremallera de un cuarto y bloques de color blusa camiseta informal de manga larga',
                              99999, 'ropa', ['ropa_7_1.jpeg','ropa_7_2.jpeg','ropa_7_3.jpeg'], false, 'MX', 'Rosa');
  const ropa_8 = new Product(9, 'Camiseta de rayas', 'Camiseta blusa de cuello muescas a rayas top casual de manga larga',
                              87000,'ropa', ['ropa_8_1.jpeg','ropa_8_2.jpeg','ropa_8_3.jpeg'],true,'M','Beige/Gris');
  const ropa_9 = new Product(10, 'Blusa de cuadros 2', 'Camiseta blusa estampado a cuadros de talla grande top casual manga larga con lazo en parte delantera',
                              89000,'ropa', ['ropa_9_1.jpeg','ropa_9_2.jpeg','ropa_9_3.jpeg'],true,'XL','Beige / Gris');
  const ropa_10 = new Product(11, 'Camiseta estampada', 'Camiseta blusa cuello redondo con estsmpado tortuga manga corta casual y fresca',
                              69000, 'ropa', ['ropa_10_1.jpeg','ropa_10_2.jpeg','ropa_10_3.jpeg'], true, 'M', 'Beige/Azul');
  const ropa_11 = new Product(12, 'Camiseta artesanal', 'Camiseta blusa con estampado azteca etnica con cuello en V',
                              89000, 'ropa', ['ropa_11_1.jpeg','ropa_11_2.jpeg','ropa_11_3.jpeg'], true, 'S', 'Beige')
  const ropa_12 = new Product(13, 'Camiseta cremallera', 'Camiseta blusa con cremallera y estampado floral claro top informal de manga larga fresco y comodo',
                              94000, 'ropa', ['ropa_12_1.jpeg','ropa_12_2.jpeg','ropa_12_3.jpeg'], true, 'M', 'Azul');
  const ropa_13 = new Product(14, 'Camiseta de rayas', 'Camiseta blusa con botones decorativos top casual manga corta comoda y casual',
                              79000, 'ropa', ['ropa_13_1.jpeg','ropa_13_2.jpeg','ropa_13_3.jpeg'], true, 'M', 'Azul');
  const ropa_14 = new Product(15, 'Camiseta de rayas', 'Camiseta blusa con botones decorativos top casual manga corta comoda y casual',
                              77000, 'ropa', ['ropa_14_1.jpeg','ropa_14_2.jpeg','ropa_14_3.jpeg'], true, 'M', 'Azul');
  const ropa_15 = new Product(16, 'Camiseta estampada', 'Camiseta blusa cuello etnico estampado selva manga larga',
                              99999, 'ropa', ['ropa_15_1.jpeg','ropa_15_2.jpeg','ropa_15_3.jpeg'], false, 'MX', 'Azul');
                              // Accesorios
  const accesorio_1 = new Product(3, 'Pulseras 4 piezas', 'Conjunto de pulseras 4pc de moda boehemia con borlas y colgante de arbol de la vida para hombres y dama',
                              40000, 'accesorios',  ['accesorio_1_1.jpeg', 'accesorio_1_2.jpeg', 'accesorio_1_3.jpeg', 'accesorio_1_4.jpeg', 'accesorio_1_5.jpeg'], true, '-', 'Varios');

  const accesorio_2 = new Product(4, 'Reloj Madera', 'Reloj de madera con esfera de flores de moda cuarzo digital vintage eleccion para regalos y detalles',
                                  45000, 'accesorios', ['accesorio_2_1.jpeg'], true, '-','Varios');
  
  

  return (
    <>
        <Header />
        <main className='bg-white dark:bg-black m-auto'>
          <section className="py-10 my-5 rounded-xl flex flex-col md:flex-row bg-cover bg-center" style={{ backgroundImage: "url('/cat_bg.jpg')" }}>
            <article className="w-full md:w-1/2 bg-opacity-50 bg-gray-800 p-8">
              <h4 className="text-xl font-bold text-white">Tienda Online de Variedades</h4>
              <h1 className="text-3xl md:text-6xl lg:text-8xl font-bold text-white mt-2 mb-6">Catálogo virtual</h1>
              <p className="text-xl font-bold text-white">Davida Store ofrece una amplia gama de prendas y productos variados para todos los gustos y edades.</p>
            </article>
            <article className="w-full md:w-1/2"></article>
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
              <CardFactory.ClothingCard size='w-80 mx-2 my-2' product={ropa_4} />
              <CardFactory.ClothingCard size='w-80 mx-2 my-2' product={ropa_5} />
              <CardFactory.ClothingCard size='w-80 mx-2 my-2' product={ropa_6} />
              <CardFactory.ClothingCard size='w-80 mx-2 my-2' product={ropa_7} />
              <CardFactory.ClothingCard size='w-80 mx-2 my-2' product={ropa_8} />
              <CardFactory.ClothingCard size='w-80 mx-2 my-2' product={ropa_9} />
              <CardFactory.ClothingCard size='w-80 mx-2 my-2' product={ropa_10} />
              <CardFactory.ClothingCard size='w-80 mx-2 my-2' product={ropa_11} />
              <CardFactory.ClothingCard size='w-80 mx-2 my-2' product={ropa_12} />
              <CardFactory.ClothingCard size='w-80 mx-2 my-2' product={ropa_13} />
              <CardFactory.ClothingCard size='w-80 mx-2 my-2' product={ropa_14} />
              <CardFactory.ClothingCard size='w-80 mx-2 my-2' product={ropa_15} />
              <CardFactory.ClothingCard size='w-80 mx-2 my-2' product={accesorio_1} />
              <CardFactory.ClothingCard size='w-80 mx-2 my-2' product={accesorio_2} />

          </section>
        </main>

        <Footer />
    </>
  )
}

export default Catalogo