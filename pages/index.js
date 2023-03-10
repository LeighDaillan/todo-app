import Head from "next/head";
import Image from "next/image";
import Pencil from "../public/pencil.png";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="h-screen bg-slate-50 grid md:grid-cols-2 justify-items-center content-center px-20 md:px-40">
        <div className="">
          <h1 className="text-7xl font-bold border-l-8 inline-block border-blue-900 px-3">
            Stream
          </h1>
          <p className="my-2 text-3xl">Manage your task responsibly.</p>
          <p className="leading-7 opacity-60">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
            deserunt exercitationem quaerat, facere quas possimus placeat a.
          </p>
          <button
            onClick={() => router.push("Todos")}
            className="text-xl rounded-xl mt-5 bg-blue-600 text-white px-4 py-2"
          >
            Get Started.
          </button>
        </div>
        <Image
          className="rotate-12 md:relative"
          src={Pencil}
          width="300"
          height="200"
          alt="Boy Image"
        />
      </main>
    </>
  );
}
