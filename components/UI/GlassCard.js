import { Box, List, ListItem, Img, Flex } from "@chakra-ui/react";
import SectionLabel from "./SectionLabel";

const cardOpacityDelay = 1.5;

const GlassCard = (props) => {
  return (
    <Box
      m="auto"
      mt={props.mt}
      bg="transparent"
      w={{ base: "90%", md: "fit-content" }}
      opacity={0}
      animation={`fullOpacity 0.7s forwards ${cardOpacityDelay}s`}
    >
      
      <Box h="auto" zIndex={100} bgColor="rgba(0, 0, 0, 0.7)" rounded="12px">
      <SectionLabel text="Nos services" p={props.gap} mb={-6}/>
        <List bg="transparent" p={props.gap}>
          <GlassCardItem
            gap={props.gap}
            text="Démontages de galandages, murs intérieurs et parois"
            order={1}
            first
          />
          <GlassCardItem
            gap={props.gap}
            text="Ouvertures de parois (découpes à la disqueuse)"
            order={2}
          />
          <GlassCardItem
            gap={props.gap}
            text="Démontages de faux plafonds"
            order={3}
          />
          <GlassCardItem
            gap={props.gap}
            text="Démontage de planchers"
            order={4}
          />
          <GlassCardItem
            gap={props.gap}
            text="Extractions de carrelages"
            order={5}
          />
          <GlassCardItem
            gap={props.gap}
            text="Extractions de chapes de bétons"
            order={6}
          />
          <GlassCardItem
            gap={props.gap}
            text="Divers travaux de gainages"
            last
            order={7}
          />
        </List>
      </Box>
    </Box>
  );
};

const GlassCardItem = (props) => {
  const delayInSeconds = 0.3;
  return (
    <ListItem bg="transparent" mb={props.last ? 0 : props.gap} mt={props.first ? 0 : props.gap}>
      <Flex
        bg="transparent"
        align="center"
        color="#fff"
        fontSize={{ base: "18px", lg: "22px" }}
        lineHeight="24px"
        opacity={0}
        animation={`fullOpacity 0.5s forwards ${props.order * delayInSeconds + cardOpacityDelay + 0.3}s`}
      >
        <Img
          src="img/GreenCheck.svg"
          bg="transparent"
          mr={props.gap}
          w={{ base: "30px", sm: "36px" }}
        />
        {props.text}
      </Flex>
    </ListItem>
  );
};

export default GlassCard;
