import { Box, Flex } from "@chakra-ui/react";
import AvantApresImage from "../AvantApresImage";
import PageContainer from "../UI/PageContainer";
import SectionLabel from "../UI/SectionLabel";

const NextSection = () => {
  return (
    <Box bg="#1F2525" w="full" outline="2px black" pt={12}>
      <PageContainer>
        <ContentSection>
          <SectionLabel text="Nos réalisations" />
          <Box bg="transparent" color="#fff" fontSize="22px" fontWeight={300} mt={4} ml={6}>
            Démolition d'une salle de bain
          </Box>
          <Flex bg="transparent" justify="space-evenly" mt={6}>
            <AvantApresImage
              avant="img/realisations/avant1.jpeg"
              apres="img/realisations/apres1.jpeg"
              name="Démolition d'une salle de bain"
            />
            <AvantApresImage
              avant="img/realisations/avant2.jpeg"
              apres="img/realisations/apres2.jpeg"
              name="Démolition d'une salle de bain"
            />
            <AvantApresImage
              avant="img/realisations/avant3.jpeg"
              apres="img/realisations/apres3.jpeg"
              name="Démolition d'une salle de bain"
            />
          </Flex>
        </ContentSection>

        <ContentSection last>
          <SectionLabel text="Contactez-nous" />
        </ContentSection>
      </PageContainer>
    </Box>
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
      px={12}
      mb={props.last ? 0 : 12}
    >
      {props.children}
    </Box>
  );
};

export default NextSection;
