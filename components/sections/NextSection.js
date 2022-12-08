import { Box, Divider, Grid, Heading, Text } from "@chakra-ui/react";

import PageContainer from "../UI/PageContainer";
import SectionLabel from "../UI/SectionLabel";
import ContactForm from "../ContactForm";
import AAImages from "../AAImages";
import ClickableImage from "../ClickableImage";
import ClickableVideo from "../ClickableVideo";
import MobileGrouper from "../MobileGrouper";

const NextSection = () => {
  const imagesSalleDeBain = [
    {
      id: 1,
      src1: "img/realisations/avant1.jpeg",
      src2: "img/realisations/apres1.jpeg",
      name: "Photo 1",
    },
    {
      id: 2,
      src1: "img/realisations/avant2.jpeg",
      src2: "img/realisations/apres2.jpeg",
      name: "Photo 2",
    },
    {
      id: 3,
      src1: "img/realisations/avant3.jpeg",
      src2: "img/realisations/apres3.jpeg",
      name: "Photo 3",
    },
  ];

  const contentRomont = [
    {
      id: 1,
      src: "img/realisations/romont/romont01.jpeg",
      name: "Photo 1",
      type: "img/jpeg",
    },
    {
      id: 2,
      src: "img/realisations/romont/romont02.jpeg",
      name: "Photo 2",
      type: "img/jpeg",
    },
    {
      id: 3,
      src: "img/realisations/romont/romont03.jpeg",
      name: "Photo 3",
      type: "img/jpeg",
    },
    {
      id: 4,
      src: "img/realisations/romont/romont04.jpeg",
      name: "Photo 4",
      type: "img/jpeg",
    },
    {
      id: 5,
      src: "img/realisations/romont/romont05.jpeg",
      name: "Photo 5",
      type: "img/jpeg",
    },
    {
      id: 6,
      src: "img/realisations/romont/romont06.jpeg",
      name: "Photo 6",
      type: "img/jpeg",
    },
    {
      id: 7,
      src: "img/realisations/romont/romont07.jpeg",
      name: "Photo 7",
      type: "img/jpeg",
    },
    {
      id: 8,
      src: "img/realisations/romont/romont08.jpeg",
      name: "Photo 8",
      type: "img/jpeg",
    },
    {
      id: 9,
      src: "img/realisations/romont/romont09.jpeg",
      name: "Photo 9",
      type: "img/jpeg",
    },
    {
      id: 10,
      src: "img/realisations/romont/romont10.jpeg",
      name: "Photo 10",
      type: "img/jpeg",
    },
    {
      id: 11,
      src: "img/realisations/romont/romont11.jpeg",
      name: "Photo 11",
      type: "img/jpeg",
    },
    {
      id: 12,
      src: "videos/romont/romontvid1.mp4",
      name: "Video 1",
      type: "video/mp4",
    },
    {
      id: 13,
      src: "videos/romont/romontvid2.mp4",
      name: "Video 2",
      type: "video/mp4",
    },
  ];

  return (
    <PageContainer bg="#262525">
      <ContentSection mt={12}>
        <SectionLabel text="Nos réalisations" />
        <Box
          bg="transparent"
          color="#fff"
          fontSize={{ base: "20px", md: "22px", lg: "24px" }}
          fontWeight={400}
          mt={14}
          mb={12}
          textAlign="center"
          ml={{ base: 0, md: 6 }}
        >
          Démolition d&apos;une salle de bain
        </Box>
        <AAImages imgList={imagesSalleDeBain} />

        <Divider mt={12} />

        <Box
          bg="transparent"
          color="#fff"
          fontSize={{ base: "20px", md: "22px", lg: "24px" }}
          fontWeight={400}
          mt={14}
          textAlign="center"
          ml={{ base: 0, md: 6 }}
          mb={12}
        >
          Évacuation de chantier à Romont
        </Box>

        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }}
          bg="transparent"
          mt={10}
          gap={{ base: 20, xl: 12, "2xl": 24 }}
          w="fit-content"
          mx="auto"
          display={{ base: "none", lg: "grid" }}
          mb={12}
          transition="0.5s all"
        >
          {contentRomont.map((e) => (
            <Box w="350px" h="auto" m="auto" key={e.id}>
              {e.type !== "video/mp4" ? (
                <ClickableImage imgSrc={e.src} alt={e.name} noCaption imgH="480px" />
              ) : (
                <ClickableVideo videoSrc={e.src} name={e.name} noCaption />
              )}
            </Box>
          ))}
        </Grid>
        <Box mb={12} w="full">
          <MobileGrouper contentList={contentRomont} />
        </Box>
      </ContentSection>

      <ContentSection last>
        <SectionLabel text="Contactez-nous" />
        <Box bg="transparent" w={{ base: "100%", md: "75%" }} m="auto" mt={10}>
          <Heading
            as="h3"
            bg="transparent"
            color="#fff"
            fontWeight={600}
            fontSize={{ base: "36px", md: "48px" }}
          >
            Fornay Marc
          </Heading>
          <address
            style={{
              backgroundColor: "transparent",
              color: "#fff",
              marginTop: "24px",
            }}
          >
            <Text
              fontStyle="normal"
              fontWeight={300}
              fontSize={{ base: "20px", md: "24px" }}
              bg="transparent"
            >
              Case postale 56
              <br />
              1897 Le Bouveret
              <br />
              076 310 06 92
              <br />
              fornaymarc92@gmail.com
            </Text>
          </address>
          <ContactForm />
        </Box>
      </ContentSection>
    </PageContainer>
  );
};

const ContentSection = (props) => {
  return (
    <Box
      bg="transparent"
      border="1px solid #bbb"
      w="full"
      h="auto"
      p={8}
      px={{ base: 6, sm: 8, md: 12 }}
      mb={props.last ? 0 : 12}
      mt={props.mt ?? 0}
      transition="1s all"
    >
      {props.children}
    </Box>
  );
};

export default NextSection;
