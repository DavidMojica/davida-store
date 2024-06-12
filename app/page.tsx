import Header from "./componentes/header";
import Footer from "./componentes/footer";
import IconFactory from "./componentes/icons";
import TextFactory from "./componentes/TextFactory";
import ButtonFactory from "./componentes/ButtonFactory";

export default function Home():React.JSX.Element {
  return (
    <>
      <Header />
      <main className="mt-12">
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

        <section className="flex justify-evenly items-center py-12">
            <article >
              <TextFactory.RainbowText size="text-xl" mdsize="text-4xl" text="Regalos geniales" from="from-red-800" to="to-pink-500" dark_from="from-pink-600" dark_to="to-red-900" />
            </article>
            <article className="flex">
              <ButtonFactory.SpaceButton text="Catálogo" heigth="h-12" width="w-48" mx="mx-2" />
              <ButtonFactory.SpaceButton text="Contáctenos" heigth="h-12" width="w-48" mx="mx-2" />
            </article>
        </section>
        <section>
          

        </section>
      </main>
      <Footer />
    </>
  );
}
