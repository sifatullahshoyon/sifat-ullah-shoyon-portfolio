import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Head from "next/head";

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

            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              {/* title  */}
              <div className="flex mb-8 gap-2 items-centers pr-8">
                <div className="avatar">
                  <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    {/* <img src={user?.photoURL || `${userPhoto}`} />{" "} */}
                  </div>
                </div>
                <h1 className="font-bold  pl-3 text-3xl">Jimmy smith</h1>
              </div>
              {/* Sidebar content here */}
              <ul>
                <li>
                  <Link href="">{/* <FaHome /> Admin Home */} home</Link>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </body>
    </html>
  );
}
