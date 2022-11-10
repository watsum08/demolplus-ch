import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Flex, Button, useBreakpoint } from "@chakra-ui/react";

import { useEffect, useState } from "react";

import AvantApresImage from "./AvantApresImage";

const AAImages = () => {
  const imgList = [
    {
      id: 1,
      src1: "img/realisations/avant1.jpeg",
      src2: "img/realisations/apres1.jpeg",
      name: "Photo 1",
    },
    {
      id: 2,
      src1: "img/realisations/avant2.jpeg",
      src2: "img/realisations/apres2.jpeg",
      name: "Photo 2",
    },
    {
      id: 3,
      src1: "img/realisations/avant3.jpeg",
      src2: "img/realisations/apres3.jpeg",
      name: "Photo 3",
    },
  ];

  const breakpoint = useBreakpoint({ ssr: false });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(false);
    if (breakpoint === "base") {
      setIsMobile(true);
    } else if (breakpoint === "sm") {
      setIsMobile(true);
    } else if (breakpoint === "md") {
      setIsMobile(true);
    }
  }, [breakpoint]);

  const aaImages = imgList.map((e) => {
    return (
      <AvantApresImage avant={e.src1} apres={e.src2} name={e.alt} key={e.id} />
    );
  });

  const totalImages = imgList.length;

  const [displayedImgNum, setDisplayedImgNum] = useState(0);

  const incrementImgNum = () => {
    if (displayedImgNum < totalImages - 1)
      setDisplayedImgNum(displayedImgNum + 1);
  };

  const decrementImgNum = () => {
    if (displayedImgNum > 0) setDisplayedImgNum(displayedImgNum - 1);
  };
  return (
    <Flex
      bg="transparent"
      justify="space-evenly"
      align="center"
      mt={6}
      flexDir={{ base: "column", lg: "row" }}
    >
      {isMobile ? (
        <Flex align="center" justify="space-between" bg="transparent" gap="4%" mb={-12}>
          <IncDecButton
            onClick={decrementImgNum}
            disabled={displayedImgNum === 0}
          />

          {aaImages[displayedImgNum]}

          <IncDecButton
            increment
            onClick={incrementImgNum}
            disabled={displayedImgNum === totalImages - 1}
          />
        </Flex>
      ) : (
        aaImages
      )}
    </Flex>
  );
};

const IncDecButton = (props) => {
  return (
    <Button
      mb={20}
      onClick={props.onClick}
      color="#fff"
      bg="transparent"
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

export default AAImages;
