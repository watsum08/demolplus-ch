import { Box, List, ListItem, Image, Flex } from "@chakra-ui/react";
import SectionLabel from "./SectionLabel";

const GlassCard = (props) => {
  return (
    <Box
      m="auto"
      mt={props.mt}
      bg="transparent"
      w={{ base: "90%", md: "fit-content" }}
    >
      <SectionLabel text="Nos services" />
      <Box h="auto" zIndex={100} bgColor="rgba(0, 0, 0, 0.7)" rounded="12px">
        <List bg="transparent" p={props.gap}>
          <GlassCardItem
            gap={props.gap}
            text="Démontages de galandages, murs intérieurs et parois"
          />
          <GlassCardItem
            gap={props.gap}
            text="Ouvertures de parois (découpes à la disqueuse)"
          />
          <GlassCardItem gap={props.gap} text="Démontages de faux plafonds" />
          <GlassCardItem gap={props.gap} text="Démontage de planchers" />
          <GlassCardItem gap={props.gap} text="Extractions de carrelages" />
          <GlassCardItem
            gap={props.gap}
            text="Extractions de chapes de bétons"
          />
          <GlassCardItem
            gap={props.gap}
            text="Divers travaux de gainages"
            last
          />
        </List>
      </Box>
    </Box>
  );
};

const GlassCardItem = (props) => {
  return (
    <ListItem bg="transparent" mb={props.last ? 0 : props.gap}>
      <Flex
        bg="transparent"
        align="center"
        color="#fff"
        fontSize={{ base: "18px", lg: "22px" }}
        lineHeight="24px"
      >
        <Image src="img/GreenCheck.svg" bg="transparent" mr={props.gap} w={{ base: "30px", sm: "36px" }} />
        {props.text}
      </Flex>
    </ListItem>
  );
};

export default GlassCard;
