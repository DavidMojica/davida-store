import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import TextFactory from './TextFactory'; // Ajusta la ruta según tu estructura de archivos

class TextRotator {
  private static frasesIndex = [
    "Regalos geniales",
    "Descuentos increíbles",
    "Ofertas exclusivas",
    "Promociones imperdibles",
    "Productos únicos",
  ];

  public static RainbowTextRotator = () => {
    const [textoActual, setTextoActual] = useState(TextRotator.frasesIndex[0]);

    useEffect(() => {
      const interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * TextRotator.frasesIndex.length);
        const nuevaFrase = TextRotator.frasesIndex[randomIndex];
        
        gsap.to(".rainbow-text", {
          duration: 0.5,
          opacity: 0,
          y: -20,
          onComplete: () => {
            setTextoActual(nuevaFrase);
            gsap.to(".rainbow-text", {
              duration: 0.5,
              opacity: 1,
              y: 0,
            });
          },
        });
        
      }, 5000); 

      return () => clearInterval(interval);
    }, []);

    return (
      <article>
        <TextFactory.RainbowText
          size="text-3xl"
          mdsize="text-6xl"
          text={textoActual}
          from="from-red-800"
          to="to-pink-500"
          dark_from="from-pink-600"
          dark_to="to-red-900"
        />
      </article>
    );
  };
}

export default TextRotator;
