import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import SectionLabel from "../components/UI/SectionLabel";

export default function Home() {
  return (
    <Box fontFamily="'Chivo', sans-serif">
      <Head>
        <title>Démolplus Sàrl</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <MainContent />

      <footer></footer>
    </Box>
  );
}