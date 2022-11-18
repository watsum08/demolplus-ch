import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Box fontFamily="'Chivo', sans-serif">
      <Head>
        <title>Démolplus Sàrl</title>
        <meta name="description" content="Entreprise de démolition suisse" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="construction, démolition, rénovation intérieure, évacuation, " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <MainContent />

      <Footer />
    </Box>
  );
}
