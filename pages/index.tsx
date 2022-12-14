import type { NextPage } from "next";
import Head from "next/head";
import Summary from "@/components/Dashboard/Summary/Summary";
import { UserData } from "@/components/Dashboard/UserData/UserData";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Summary />
        <UserData />
      </main>
    </div>
  );
};

export default Home;
