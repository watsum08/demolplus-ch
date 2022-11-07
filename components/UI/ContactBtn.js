import { Text, Tag, Box, TagLabel, Image } from "@chakra-ui/react";

const ContactBtn = (props) => {
  return (
    <Tag bg="transparent">
      <Box pt={3} bg="transparent">
        <Image
          src={props.img}
          alt={props.name}
          w="72px"
          mb={3}
          bg="transparent"
        />
        <TagLabel textAlign="center" bg="transparent">
          <Text
            fontFamily="'Bebas Neue', cursive"
            fontSize="18px"
            letterSpacing="2px"
            textTransform="uppercase"
            bg="transparent"
          >
            {props.name}
          </Text>
        </TagLabel>
      </Box>
    </Tag>
  );
};

export default ContactBtn;
