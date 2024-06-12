import React from 'react';
import Product from './models/Product';
import '../styles/magic_card.css';

interface ProductCardProps{
    size:string,
    // product:Product;
}

class CardFactory{
    //------------Card to introduce the product / Category----------//
    public static PresentationCard({size}:ProductCardProps):React.ReactNode{
        return (
            <article className={`card-magic ${size}`}>
                <div className="card-magic-info bg-red-600">
                    <header className='bg-black  dark:bg-white py-2 rounded-t-lg text-black'>
                        <h2 className='font-bold text-2xl ml-4'>Tipo Producto</h2>
                    </header>
                    
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