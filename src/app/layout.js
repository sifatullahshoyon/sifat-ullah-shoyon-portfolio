import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import "animate.css";
import Sidebar from "@/components/Shared/Navbar/Sidebar/Sidebar";
import Info from "@/components/Shared/Navbar/Info";
import MenuBtn from "@/components/Shared/Navbar/MenuBtn/MenuBtn";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "SIFAT ULLAH SHOYON",
  description: "Sifat Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col ">
            {/* menu open btn */}
            <MenuBtn />
            {/* Page content here */}
            {children}
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-[#131313] text-base-content min-h-full w-80 p-4">
              <Info />
              {/* Sidebar content here */}
              <Sidebar />
            </ul>
          </div>
        </div>
      </body>
    </html>
  );
}
