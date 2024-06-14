import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Clothing} from './models/Product';

interface ClothingSwiperProps {
  size:string,
  product:Clothing;
}

const ClothingSwiper: FC<ClothingSwiperProps> = ({ product, size }:ClothingSwiperProps) => {
  const isAvailable = product.getAvailable();

  return (
    <Swiper pagination={true} modules={[Pagination]} className={`mySwiper ${size}`}>
      <section className={`bg-opacity-35 p-4 ${isAvailable ? 'bg-green-500' : 'bg-red-500'}`}>
      <p className="text-white text-xl font-bold">
        {isAvailable ? 'Disponible' : 'No disponible'}
      </p>
    </section>
      {product.getImages().map((url, index) => (
        <SwiperSlide key={index}>
          

          <img src={url} alt={`Slide ${index + 1}`} className="w-full h-auto" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ClothingSwiper;
