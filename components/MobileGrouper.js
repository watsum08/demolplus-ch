import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Flex, Button } from "@chakra-ui/react";

import { useState } from "react";

import ClickableImage from "./ClickableImage";
import ClickableVideo from "./ClickableVideo";

import { Box } from "@chakra-ui/react";

const MobileGrouper = (props) => {
  const content = props.contentList.map((e) => {
    return (
      <Box w="full" h="auto" m="auto" key={e.id}>
        {e.type !== "video/mp4" ? (
          <ClickableImage imgSrc={e.src} alt={e.name} imgH="480px" />
        ) : (
          <ClickableVideo videoSrc={e.src} name={e.name} />
        )}
      </Box>
    );
  });

  const totalContent = props.contentList.length;

  const [displayedContentNum, setDisplayedContentNum] = useState(0);

  const incrementContentNum = () => {
    if (displayedContentNum < totalContent - 1)
      setDisplayedContentNum(displayedContentNum + 1);
  };

  const decrementContentNum = () => {
    if (displayedContentNum > 0)
      setDisplayedContentNum(displayedContentNum - 1);
  };
  return (
    <Flex
      justify="center"
      align="center"
      mt={6}
      display={{ base: "block", lg: "none" }}
    >
      <Flex
        align="center"
        justify="center"
        gap="5%"
      >
        <IncDecButton
          onClick={decrementContentNum}
          disabled={displayedContentNum === 0}
        />

        {content[displayedContentNum]}

        <IncDecButton
          increment
          onClick={incrementContentNum}
          disabled={displayedContentNum === totalContent - 1}
        />
      </Flex>
    </Flex>
  );
};

const IncDecButton = (props) => {
  return (
    <Button
      onClick={props.onClick}
      color="#fff"
      bg="transparent"
      m="auto"
      p={0}
      disabled={props.disabled}
      _active={{ bg: "transparent", outline: "none" }}
      _hover={{ bg: "transparent", outline: "none" }}
    >
      {props.increment ? (
        <ArrowRightIcon bg="transparent" />
      ) : (
        <ArrowLeftIcon bg="transparent" />
      )}
    </Button>
  );
};

export default MobileGrouper;
