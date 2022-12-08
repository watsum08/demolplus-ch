import { Text, Tag, TagLabel, Img, Link } from "@chakra-ui/react";

const ContactBtn = (props) => {
  return (
    <Tag bg="transparent">
      <Link
        pt={3}
        bg="transparent"
        href={props.href}
        _hover={{ textDecoration: "none", fontWeight: 600 }}
      >
        <Img
          src={props.img}
          alt={props.name}
          w={{ base: "48px", md: "72px" }}
          m="auto"
          mb={{ base: 2, md: 3 }}
          bg="transparent"
          _hover={{ cursor: "pointer", filter: "saturate(200%)" }}
          _active={{ filter: "saturate(50%) " }}
        />
        <TagLabel textAlign="center" bg="transparent">
          <Text
            fontFamily="'Bebas Neue', cursive"
            fontSize={{ base: "16px", md: "18px" }}
            letterSpacing="2px"
            textTransform="uppercase"
            bg="transparent"
          >
            {props.name}
          </Text>
        </TagLabel>
      </Link>
    </Tag>
  );
};

export default ContactBtn;
