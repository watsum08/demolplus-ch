import { Box } from "@chakra-ui/react";

const SectionLabel = (props) => {
    return (
        <Box textTransform="uppercase" color="#F34949" fontSize="24px" bg="transparent">{props.text}</Box>
    );
};

export default SectionLabel;