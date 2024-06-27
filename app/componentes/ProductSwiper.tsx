import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Product } from './models/Product';

interface ProductSwiperProps {
  size:string,
  product:Product;
}

const ClothingSwiper: FC<ProductSwiperProps> = ({ product, size }) => {
  return (
      <Swiper pagination={true} modules={[Pagination]} className={`mySwiper ${size}`}>
          {product.getImages().map((url, index) => (
              <SwiperSlide key={index}>
                  <div className="relative">
                      <img src={url} alt={`Slide ${index + 1}`} className="w-full h-60 object-cover"  />
                      <div data-atropos-offset="4" className={`absolute top-2 left-2 px-2 py-1 text-white text-xs font-bold rounded ${product.getAvailable() ? 'bg-green-500' : 'bg-red-500'}`}>
                          {product.getAvailable() ? 'Disponible' : 'Proximamente'}
                      </div>
                  </div>
              </SwiperSlide>
          ))}
      </Swiper>
  );
};

export default ClothingSwiper;
