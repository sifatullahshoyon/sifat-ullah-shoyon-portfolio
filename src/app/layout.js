import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import profilePic from "../assets/images/profile-pic.png"
import Image from "next/image";
import Sidebar from "@/components/Sidebar";

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
        <link rel="icon" href="/src/app/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body>
      <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col ">
            <label
              htmlFor="my-drawer-2"
              className=" ml-80 -mb-2 drawer-button text-white  lg:hidden"
            >
              {/* <MdMenuOpen className='h-8 w-8 '></MdMenuOpen> */} close
            </label>
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
              {/* title  */}
              <div className="flex gap-2 items-centers">
                {/* Info Start */}
                <div className="flex items-center gap-5 my-10">
                <div className="avatar">
                  <div className="w-12 h-12 rounded">
                    <Image src={profilePic} alt="profile pic" loading="lazy" />
                  </div>
                </div>
                <div className="flex flex-col">
                <h1 className="font-bold text-base text-white">SIFAT ULLAH SHOYON</h1>
                <p className="text-sm mt-1">Front End Developer</p>
                </div>
                </div>
                {/* Info Ends */}
              </div>
              {/* Sidebar content here */}
              <Sidebar />
            </ul>
          </div>
        </div>
      </body>
    </html>
  );
}
