import Banner from "@/components/Banner";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full container mx-auto">
      <Banner />
      </div>
    </div>
  );
}
