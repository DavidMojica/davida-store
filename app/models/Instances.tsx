import { Product } from "./Product";

// Clothing
const ropa_1 = new Product(0, 'Blusa de cuadros', 'Blusa de cuadros casual con solapa y botones de marga larga.',
    106000, 'ropa', ['ropa_1_1.jpeg', 'ropa_1_2.jpeg', 'ropa_1_3.jpeg'], true, '0XL', 'Vino/Azul/Amarillo', 'El estilo y el estado de ánimo es la autoexpresión de quien soy y como me siento.');
const ropa_2 = new Product(1, 'Camiseta de mariposa', 'Camiseta con cuello redondo y estampado de marposas camiseta informal de manga corta para todas las ocasiones',
    77000, 'ropa', ['ropa_2_1.jpeg', 'ropa_2_2.jpeg', 'ropa_2_3.jpeg'], true, 'M', 'Azul', 'Sentirme bien con lo que llevo puesto mejora mi confianza y actitud.');
const ropa_3 = new Product(2, 'Camisa de cuadros', 'Camiseta de verano estampado con bloques multicoleres top vintage de manga corta y cuello redondo.',
    88000, 'ropa', ['ropa_3_1.jpeg', 'ropa_3_2.jpeg', 'ropa_3_3.jpeg'], true, 'M', 'Varios', 'La experiencia de comprar lo nuevo me generan placer y emociones positivas.');
const ropa_4 = new Product(5, 'Blusa estampada floral', 'Blusa con cuello de muesca estampado flora casual con botones decoracion de manga larga',
    79000, 'ropa', ['ropa_4_1.jpeg', 'ropa_4_2.jpeg', 'ropa_4_3.jpeg'], true, 'MX', 'Azul', 'La satisfacción de cuidarse a uno mismo te recompensa.');
const ropa_5 = new Product(6, 'Blusa casual', 'Blusa camiseta manga larga casual para toda ocasion',
    78000, 'ropa', ['ropa_5_1.jpeg', 'ropa_5_2.jpeg', 'ropa_5_3.jpeg'], true, 'M', 'Vinotinto', 'Amo la forma de sentirme actualizada y conectada con el mundo.');
const ropa_6 = new Product(7, 'Blusa estampada en V', 'blusa con cuello v y  estampado floral etnicos top vintage de manga larga',
    74000, 'ropa', ['ropa_6_1.jpeg', 'ropa_6_2.jpeg'], true, 'M', 'Vino tinto / Azul', 'El día a día como nos presentamos al mundo.');
const ropa_7 = new Product(8, 'Blusa con cremallera', 'Blusa con cremallera de un cuarto y bloques de color blusa camiseta informal de manga larga',
    86000, 'ropa', ['ropa_7_1.jpeg', 'ropa_7_2.jpeg', 'ropa_7_3.jpeg'], true, 'M', 'Rosa', 'Conexión y colores que evocan recuerdos significativos.');
const ropa_8 = new Product(9, 'Camiseta de rayas', 'Camiseta blusa de cuello muescas a rayas top casual de manga larga',
    87000, 'ropa', ['ropa_8_1.jpeg', 'ropa_8_2.jpeg', 'ropa_8_3.jpeg'], true, 'M', 'Beige/Gris', 'La sensación de felicidad extrema que resalta mi estilo.');
const ropa_9 = new Product(10, 'Blusa de cuadros 2', 'Camiseta blusa estampado a cuadros de talla grande top casual manga larga con lazo en parte delantera',
    89000, 'ropa', ['ropa_9_1.jpeg', 'ropa_9_2.jpeg', 'ropa_9_3.jpeg'], true, 'XL', 'Beige / Gris', 'Figura y personalidad que me hace sentir poderosa.');
const ropa_10 = new Product(11, 'Camiseta estampada', 'Camiseta blusa cuello redondo con estsmpado tortuga manga corta casual y fresca',
    69000, 'ropa', ['ropa_10_1.jpeg', 'ropa_10_2.jpeg', 'ropa_10_3.jpeg'], true, 'M', 'Beige/Azul', 'Fascinación que despierta mi interés por la comodidad.');
const ropa_11 = new Product(12, 'Camiseta artesanal', 'Camiseta blusa con estampado azteca etnica con cuello en V',
    89000, 'ropa', ['ropa_11_1.jpeg', 'ropa_11_2.jpeg', 'ropa_11_3.jpeg'], true, 'S', 'Beige', 'Entusiasmo que contagia mi espíritu juvenil.')
const ropa_12 = new Product(13, 'Camiseta cremallera', 'Camiseta blusa con cremallera y estampado floral claro top informal de manga larga fresco y comodo',
    94000, 'ropa', ['ropa_12_1.jpeg', 'ropa_12_2.jpeg', 'ropa_12_3.jpeg'], true, 'M', 'Azul', 'Colores vibrantes y estampados alegres que iluminan mi dia.');
const ropa_13 = new Product(14, 'Camiseta de rayas', 'Camiseta blusa con botones decorativos top casual manga corta comoda y casual',
    79000, 'ropa', ['ropa_13_1.jpeg', 'ropa_13_2.jpeg', 'ropa_13_3.jpeg'], true, 'M', 'Azul', 'Admiración profunda por lo que hago.');
const ropa_14 = new Product(15, 'Camiseta de rayas', 'Camiseta blusa con botones decorativos top casual manga corta comoda y casual',
    77000, 'ropa', ['ropa_14_1.jpeg', 'ropa_14_2.jpeg', 'ropa_14_3.jpeg'], true, 'M', 'Azul', 'La gratificación de la sensación de comodidad y estilo.');
const ropa_15 = new Product(16, 'Camiseta estampada', 'Camiseta blusa cuello etnico estampado selva manga larga',
    79000, 'ropa', ['ropa_15_1.jpeg', 'ropa_15_2.jpeg', 'ropa_15_3.jpeg'], true, 'M', 'Azul', 'Nueva adquisición que resalta mis mejores atributos.');
const ropa_16 = new Product(23, 'Blazer manga corta', 'Blazer manga corta elegante para eventos importantes.',
    86000, 'ropa', ['ropa_16_1.jpeg','ropa_16_2.jpeg','ropa_16_3.jpeg'], true, 'M', 'Caqui', 'La satisfacción de cuidarse a uno mismo te recompensa.');

    // Accesorios
const accesorio_1 = new Product(3, 'Pulseras 4 piezas', 'Conjunto de pulseras 4pc de moda boehemia con borlas y colgante de arbol de la vida para hombres y dama',
    20000, 'accesorios', ['accesorio_1_1.jpeg'], true, '-', 'Varios', 'Inspiración para expresar la creatividad.');
const accesorio_2 = new Product(19, 'Pulseras 4 piezas', 'Conjunto de pulseras 4pc de moda boehemia con borlas y colgante de arbol de la vida para hombres y dama',
    20000, 'accesorios', ['accesorio_1_2.jpeg'], true, '-', 'Varios', 'Prendas que representan mi fuerza y determinación como mujer.');
const accesorio_3 = new Product(20, 'Pulseras 4 piezas', 'Conjunto de pulseras 4pc de moda boehemia con borlas y colgante de arbol de la vida para hombres y dama',
    20000, 'accesorios', ['accesorio_1_3.jpeg'], true, '-', 'Varios', 'Fuerza y poder en los colores.');

const accesorio_4 = new Product(4, 'Reloj Madera', 'Reloj de madera con esfera de flores de moda cuarzo digital vintage eleccion para regalos y detalles',
    35000, 'accesorios', ['accesorio_2_1.jpeg'], true, '-', 'Varios', 'El estilo y el estado de ánimo es la autoexpresión de quien soy y como me siento.'); //45000
//Bolsos
const accesorio_5 = new Product(21, 'Bolso de viaje Negro', 'Bolso con cargador para celulares y gran capacidad, cómodo diseñado para viajes largos.',
    249000, 'accesorios', ['accesorio_3_1.jpg', 'accesorio_3_2.jpg', 'accesorio_3_3.jpg', 'accesorio_3_4.jpg', 'accesorio_3_5.jpg', 'accesorio_3_6.jpg'], true, '-', 'Negro', 'La gratificación de la sensación de comodidad y estilo.')
const accesorio_6 = new Product(22, 'Bolso de viaje Gris', 'Bolso con cargador para celulares y gran capacidad, cómodo diseñado para viajes largos.',
    249000, 'accesorios', ['accesorio_4_1.jpg', 'accesorio_4_2.jpg', 'accesorio_4_3.jpg', 'accesorio_4_4.jpg', 'accesorio_4_5.jpg', 'accesorio_4_6.jpg'], true, '-', 'Gris', 'Fuerza y poder en los colores.')

// tec
const tecnologia_1 = new Product(17, 'Drone con camara', 'Drone con camara, toma fotos y video. 1080p HD, regalo perfecto.',
    215000, 'tecnologia', ['tec_1_1.jpg', 'tec_1_2.jpg', 'tec_1_3.jpg', 'tec_1_4.jpg', 'tec_1_5.jpg',], true, '-', 'Negro', 'El poder de experimentar lo nuevo.');
//otros
const otros_1 = new Product(18, 'Gafas pixeladas', 'Perfecto para fiestas o para pasar el rato con tus amigos.',
    15000, 'otros', ['otro_1_1.jpg', 'otro_1_2.jpg', 'otro_1_3.png'], true, '-', 'Negro', 'La experiencia de comprar lo nuevo me generan placer y emociones positivas.')


//-----------Lista de productos-------------//
const Products: Product[] = [accesorio_5, accesorio_6, ropa_1, ropa_2, ropa_3, ropa_4, ropa_5, ropa_6, ropa_7, ropa_8, ropa_9, ropa_10, ropa_11, ropa_12, ropa_13, ropa_14, ropa_15, ropa_16, accesorio_1, accesorio_2, accesorio_3, accesorio_4, tecnologia_1, otros_1];

export default Products;