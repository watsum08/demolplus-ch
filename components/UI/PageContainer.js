import { Container } from "@chakra-ui/react";

const PageContainer = (props) => {
  return <Container minW={0} p={{ base: 4, sm: 6, md: 8 }} maxW="1600px" bg="transparent">{props.children}</Container>;
};

export default PageContainer;
