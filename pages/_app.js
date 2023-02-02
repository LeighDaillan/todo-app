import { SessionProvider } from "next-auth/react";
import TaskProvider from "../components/ContextProvider/TaskContextProvider";
import Layout from "../components/Layouts/layout";
import { Poppins } from "@next/font/google";
import "../styles/globals.css";

const poppins = Poppins({ weight: ["400"], subsets: ["latin"] });

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <TaskProvider>
        <main className={poppins.className}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </TaskProvider>
    </SessionProvider>
  );
}
