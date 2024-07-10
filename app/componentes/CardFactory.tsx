import React, { useEffect } from 'react';
import { PresentationProduct } from './models/Product';
import '../styles/magic_card.css';
import ButtonFactory from './ButtonFactory';
import Atropos from 'atropos';
import Link from 'next/link';
import { Product } from './models/Product';
import ClothingSwiper from './ProductSwiper';
import { useRouter } from 'next/router';

interface ProductCardProps{
    size:string,
    product:Product;
}

interface PresentationProductProps{
    size:string,
    margin:string,
    product:PresentationProduct
}

class CardFactory{
    private static phoneNumber = '573136173932';
    private static defaultMessage = 'Hola, estoy interesado en '
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
                                            <Link href={`/catalogo?category=${product.getCategory()}`}>
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
    public static ClothingCard = ({size, product}:ProductCardProps):React.ReactNode => {
        useEffect(() =>{
            const cardElements = document.querySelectorAll('.a-card');
            Array.prototype.forEach.call(cardElements, (element: Element) => {
                if (element instanceof HTMLElement) {
                    Atropos({
                        el: element,
                        activeOffset: 100,
                        highlight:true
                    });
                }
            });
        }, []);

        const formattedPrice = () => {
            const price = product.getPrice();
            return price.toLocaleString('es-ES');
          };

        return (
            <section className={`a-card ${size}  `} >
                <article className='atropos-scale'>
                    <article className='atropos-rotate'>
                        <article className='atropos-inner'>
                            <section className='card-magic '>
                                <div className="card-magic-info overflow-hidden">  
                                <section className=''>
                                    <ClothingSwiper product={product} size="h-60" />
                                </section>
                                <section className="p-4 bg-white rounded shadow-lg">
                                    <h2 className="text-2xl font-bold mb-2 text-yellow-500" data-atropos-offset="5">{product.getName()}</h2>
                                    <p className="text-sm text-gray-700" data-atropos-offset="-4">{product.getDescription()}</p>
    
                                    <blockquote className='text-sm my-2 font-extrabold text-center text-yellow-500'>
                                        <small className='text-wrap uppercase'>{product.getQuote()}</small>
                                    </blockquote>

                                    <p className="text-xl font-semibold text-yellow-500 mb-2">
                                        <span className='text-3xl font-bold'>$</span>
                                        <span className='text-4xl font-bold'>{formattedPrice().split('.')[0]}</span>.
                                        <span className=''>{formattedPrice().split('.')[1]} (COP)</span>

                                    </p>
                                    <article className="text-sm text-gray-600"  data-atropos-offset="-3">
                                        <p><span className="font-semibold">Talla:</span> {product.getSize()}</p>
                                        <p><span className="font-semibold">Color:</span> {product.getColor()}</p>
                                        <p><span className="font-semibold ">ID:</span> {product.getID()}</p>
                                    </article>
                                    <article data-atropos-offset="3">
                                        <a href={`https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(`${this.defaultMessage} ${product.getName()} ID ${product.getID()}`)}`} target='_blank' rel='noopener noreferrer'>
                                            <ButtonFactory.BlankButton margin='mt-4 mb-2' size='h-12 w-full' text='Lo quiero!' />
                                        </a>
                                    </article>
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