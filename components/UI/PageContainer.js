import { Container } from "@chakra-ui/react";

const PageContainer = (props) => {
  return <Container minW={0} p={props.p ?? { base: 4, sm: 6, md: 8 }} maxW="1600px" bg={props.bg ?? "transparent"}>{props.children}</Container>;
};

export default PageContainer;
