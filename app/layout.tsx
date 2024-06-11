import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";

const Libre_Franklin_init = Libre_Franklin({
  subsets:['latin'],
  weight:['100', '300', '700'],
  variable: '--font-libre-franklin'
});

export const metadata: Metadata = {
  title: {
    absolute:'',
    default: 'Davida Store',
    template: 'Davida Store | %s'
  },
  description: 'Compra hoy, recibe hoy.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${Libre_Franklin_init.variable} dark:bg-black bg-white bg-[linear-gradient(to_right,#33333345_1px,transparent_1px),linear-gradient(to_bottom,#33333345_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808025_1px,transparent_1px),linear-gradient(to_bottom,#80808025_1px,transparent_1px)] bg-[size:88px_88px] sm:w-full md:w-4/5 m-auto`}>
        {children}
      </body>
    </html>
  );
}
