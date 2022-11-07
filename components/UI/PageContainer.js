import { Container } from "@chakra-ui/react";

const PageContainer = (props) => {
  return <Container maxW="1600px" bg="transparent">{props.children}</Container>;
};

export default PageContainer;
