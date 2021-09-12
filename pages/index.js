import Head from "next/head";
import React from "react";
import Landing from "../components/landing";
import NavBar from "../components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dubari - Satindra Kumar Nath</title>
        <meta
          title="description"
          content="Dubari - an assamese literature website"
        />
      </Head>
      <NavBar />
      <Landing />
    </>
  );
}
