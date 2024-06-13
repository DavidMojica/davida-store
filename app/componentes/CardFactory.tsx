import React from 'react';
import { PresentationProduct } from './models/Product';
import '../styles/magic_card.css';
import ButtonFactory from './ButtonFactory';


interface ProductCardProps{
    size:string,
    // product:Product;
}

class CardFactory{
    //------------Card to introduce the product / Category----------//
    public static PresentationCard({size}:ProductCardProps):React.ReactNode{
        return (
            <article className={`card-magic ${size}  `}>
                <div className="card-magic-info ">
                    <header className='bg-black py-2 dark:bg-white  rounded-t-lg text-black'>
                        <h2 className='font-bold text-2xl ml-4'>Tipo Producto</h2>
                    </header>
                    <section className='w-full h-97 relative'>
                        <img src="/example.jpeg" alt="example_image" className='absolute top-0 left-0 w-full h-full object-cover rounded-b-lg' />
                        <div className='absolute bottom-4 mx-auto left-1/2 transform -translate-x-1/2'>
                            <ButtonFactory.BlankButton text='link' margin='m-0' size='h-12 w-48'  />
                        </div>
                    </section>
                </div>
            </article>
        )
    }

    //------------Card to detail the product------------//
    public static ProductCard = ({size}:ProductCardProps):React.ReactNode => {
        return (
        <article className={`card-magic ${size}`}>
            <div className="card-magic-info">

            </div>
        </article>
      )
    }
}

export default CardFactory;