import React, { useEffect } from 'react';
import { PresentationProduct } from './models/Product';
import '../styles/magic_card.css';
import ButtonFactory from './ButtonFactory';
import Atropos from 'atropos';
import Link from 'next/link';
import { Clothing } from './models/Product';
import ProductSwiper from './ProductSwiper';

interface ClothingCardProps{
    size:string,
    product:Clothing;
}

interface PresentationProductProps{
    size:string,
    margin:string,
    product:PresentationProduct
}

class CardFactory{
    //------------Card to introduce the product / Category----------//
    public static PresentationCard({size, product, margin}:PresentationProductProps):React.ReactNode{
        useEffect(() =>{
            const cardElements = document.querySelectorAll('.a-card');
            Array.prototype.forEach.call(cardElements, (element: Element) => {
                if (element instanceof HTMLElement) {
                    Atropos({
                        el: element,
                        activeOffset: 100,
                        
                    });
                }
            });
        }, []);

        return (
            <section className={`a-card ${size} ${margin} `} >
                <article className='atropos-scale'>
                    <article className='atropos-rotate'>
                        <article className='atropos-inner'>
                            <section className='card-magic '>
                                <div className="card-magic-info overflow-hidden">
                                    
                                    <section className='h-97 relative w-expand-sm'>
                                        <img src={`${product.getPresentationImageUrl()}`} alt="example_image" className='absolute -top-3 -left-3 w-expand-sm h-expand-md rounded-b-lg' data-atropos-offset="3.1" />
                                        <div className='absolute bottom-4 mx-auto left-1/2 transform -translate-x-1/2'>
                                            <Link href={`${product.getLinkString()}`}>
                                                <ButtonFactory.BlankButton text={`${product.getCategory()}`} margin='m-0' size='h-8 w-48' />
                                            </Link>
                                        </div>
                                    </section>
                                </div>  
                            </section>
                        </article>
                    </article>
                </article>
            </section>
        )
    }

    //------------Card to detail the product------------//
    public static ClothingCard = ({size, product}:ClothingCardProps):React.ReactNode => {
        useEffect(() =>{
            const cardElements = document.querySelectorAll('.a-card');
            Array.prototype.forEach.call(cardElements, (element: Element) => {
                if (element instanceof HTMLElement) {
                    Atropos({
                        el: element,
                        activeOffset: 100,
                        
                    });
                }
            });
        }, []);

        return (
            <section className={`a-card ${size} `} >
                <article className='atropos-scale'>
                    <article className='atropos-rotate'>
                        <article className='atropos-inner'>
                            <section className='card-magic '>
                                <div className="card-magic-info overflow-hidden">
                                    <section className='h-112 w-expand-sm'>
                                        <ProductSwiper product={product} size="h-96" />

                                    </section>
                                </div>  
                            </section>
                        </article>
                    </article>
                </article>
            </section>
      )
    }
}

export default CardFactory;