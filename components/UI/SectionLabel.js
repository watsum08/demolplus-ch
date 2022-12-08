import { Heading } from "@chakra-ui/react";

const SectionLabel = (props) => {
  return (
    <Heading
      as="h2"
      textTransform="uppercase"
      color="#F34949"
      fontSize={{ base: "20px", md: "24px", lg: "28px" }}
      bg="transparent"
      textShadow="-1px -1px 0 #000,  
      1px -1px 0 #000,
      -1px 1px 0 #000,
       1px 1px 0 #000"
       p={props.p ?? 0}
       mb={props.mb ?? 0}
    >
      {props.text}
    </Heading>
  );
};

export default SectionLabel;
