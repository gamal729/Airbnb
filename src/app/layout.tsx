// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
// import './globals.css';
// import Navbar from '@/components/navbar/Navbar';
// import ClientOnly from "@/components/ClientOnly";
// import Footer from "@/components/Footer";
// import BottomNav from "@/components/navbar/BottomNav";


// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Blukh',
//   description: 'Blukh - Find your perfect stay',
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <ClientOnly>
//           <Navbar />
//         </ClientOnly>
//         <div className="pb-20 pt-48">
//           {children}
//         </div>
//         <Footer />
//       </body>
//     </html>
//   );
// }




import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import ClientOnly from "@/components/ClientOnly";
import Footer from "@/components/Footer";
import BottomNav from "@/components/navbar/BottomNav";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Blukh',
  description: 'Blukh - Find your perfect stay',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <Navbar />
        </ClientOnly>

        {/* المحتوى */}
        <div className="pb-20 pt-48">
          {children}
        </div>

        {/* Footer */}
        <Footer />

        {/* BottomNav يظهر فقط على الموبايل */}
        <BottomNav />
      </body>
    </html>
  );
}

