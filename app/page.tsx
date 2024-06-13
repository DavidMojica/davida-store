'use client';
import Header from "./componentes/header";
import Footer from "./componentes/footer";
import IconFactory from "./componentes/IconFactory";
import TextFactory from "./componentes/TextFactory";
import ButtonFactory from "./componentes/ButtonFactory";
import CardFactory from "./componentes/CardFactory";
import { PresentationProduct } from "./componentes/models/Product";

export default function Home():React.JSX.Element {
  //---------Instancias de productos de presentacion---------//
  const ptt_RopaDama = new PresentationProduct('ptt_ropadama.jpeg', '','Ropa de dama');
  const ptt_Accesorios = new PresentationProduct('ptt_accesorios.jpeg', '', 'Accesorios');
  const ptt_Tecnologia = new PresentationProduct('ptt_tecnologia.jpg', '', 'Tecnología');
  const ptt_Otros = new PresentationProduct('ptt_otros.jpg', '', 'Otros...');

  return (
    <section className="border-x-2 border-red-100 dark:border-stone-900">
      <Header />
      <main className="pt-12 bg-white dark:bg-black pb-8">
        {/* Texto superior y leyendas */}
        <section className="block md:flex md:justify-center text-black dark:text-white bg-white dark:bg-black">
            <article className="flex items-center justify-center md:justify-end md:mr-4 my-4">
              <div className="block md:hidden mr-4 md:mr-0">
                <IconFactory.Bill size="size-8" padding="p-0" />
              </div>
              <p className="font-bold text-xl w-1/2 md:ml-0 md:justify-end mr-2">Envío gratis en Medellín en compras a partir de $100.000.</p>
              <div className="hidden md:block">
                <IconFactory.Bill size="size-8" padding="p-0" />
              </div>
            </article>
            <article className="flex items-center justify-center md:justify-start md:ml-4 my-4">
              <div className="mr-4">
                <IconFactory.Time size="size-8" padding="p-0" />
              </div>
              <p className="font-bold text-xl w-1/2">Entregamos el mismo día de la compra en el área metropolitana.</p>
            </article>
        </section>
        {/* Texto cambiante y botones */}
        <section className="block text-center md:flex md:justify-evenly items-center py-12">
            <article >
              <TextFactory.RainbowText size="text-3xl" mdsize="text-4xl" text="Regalos geniales" from="from-red-800" to="to-pink-500" dark_from="from-pink-600" dark_to="to-red-900" />
            </article>
            <article className="block items-center md:flex">
              <ButtonFactory.SpaceButton text="Catálogo" size="h-12 w-48" margin="m-auto md:mx-2 my-2 md:my-0"  />
              <ButtonFactory.SpaceButton text="Contáctenos" size="h-12 w-48" margin="m-auto md:mx-2 my-2 md:my-0" />
            </article>
        </section>
        {/* Productos seleccionados aleatoriamente */}
        <section className="flex flex-wrap justify-evenly my-6">
          <CardFactory.PresentationCard size="md:h-112 w-80" margin="px-2 py-4" product={ptt_RopaDama} />
          <CardFactory.PresentationCard size="md:h-112 w-80" margin="px-2 py-4" product={ptt_Accesorios} />
          <CardFactory.PresentationCard size="md:h-112 w-80" margin="px-2 py-4" product={ptt_Tecnologia} />
          <CardFactory.PresentationCard size="md:h-112 w-80" margin="px-2 py-4" product={ptt_Otros} />


        </section>
      </main>
      <Footer />
    </section>
  );
}
