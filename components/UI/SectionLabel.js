import { Heading } from "@chakra-ui/react";

const SectionLabel = (props) => {
  return (
    <Heading
      as="h2"
      textTransform="uppercase"
      color="#F34949"
      fontSize={{ base: "20px", md: "24px" }}
      bg="transparent"
    >
      {props.text}
    </Heading>
  );
};

export default SectionLabel;
