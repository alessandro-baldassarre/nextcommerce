import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

function Navbar() {
  return (
    <nav className="grid grid-cols-2 bg-black p-5 text-white">
      <div className="flex items-center gap-3">
        <div className="font-extrabold">NextCommerce</div>
        <div className="hidden md:block md:w-[300px] ">
          <form>
            <input
              type="text"
              className="w-full rounded-xl border border-white bg-transparent p-1 px-2 font-thin"
              placeholder="Search products..."
            />
          </form>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2">
        <div>Links</div>
        <div>Accounts</div>
      </div>
    </nav>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>NextCommerce</title>
        <meta name="description" content="Nextjs 13 app for learing purpose" />
      </Head>
      <main className={` ${inter.className}`}>
        <Navbar />
      </main>
    </>
  );
}
