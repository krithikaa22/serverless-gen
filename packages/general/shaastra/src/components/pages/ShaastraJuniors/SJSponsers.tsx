import React from "react";
import {
  Flex,
  Heading,
  Image,
  useColorModeValue,
  Box,
  BoxProps,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import { SJPrevSponsData, SJSponsData } from "./Data";

const MotionBox = motion<BoxProps>(Box);

export const SJSponsers = () => {
  const headingColor = useColorModeValue("#2c262a", "#fee9e1");
  const imgBgColor = useColorModeValue("#fffafa", "#fff");

  return (
    <Flex flexDir={"column"} px={[5, 5, 10, 100]} alignItems={"center"}>
      <Heading
        color={headingColor}
        textAlign={"center"}
        letterSpacing={"widest"}
        fontSize={"5xl"}
        transition={"all 0.6s ease-out"}
        pb={20}
      >
        2021 SPONSERS
      </Heading>
      <Flex
        width="100%"
        flexWrap={"wrap"}
        justifyContent={"center"}
        gridGap={20}
      >
        {SJSponsData.map((spon) => (
          <MotionBox whileHover={{ scale: 1.02 }}>
            <Flex>
              <Image
                style={{ objectFit: "contain" }}
                src={spon.image}
                width="400px"
                height="190px"
                p={8}
                alt={spon.altImage}
                backgroundColor={imgBgColor}
                borderRadius={10}
              />
            </Flex>
          </MotionBox>
        ))}
      </Flex>
      <Heading
        color={headingColor}
        textAlign={"center"}
        letterSpacing={"widest"}
        fontSize={"5xl"}
        transition={"all 0.6s ease-out"}
        py={20}
      >
        PAST SPONSERS
      </Heading>
      <Flex
        width="100%"
        flexWrap={"wrap"}
        justifyContent={"center"}
        gridGap={20}
      >
        {SJPrevSponsData.map((spon) => (
          <MotionBox whileHover={{ scale: 1.02 }}>
            <Flex>
              <Image
                style={{ objectFit: "contain" }}
                src={spon.image}
                width="400px"
                height="190px"
                p={8}
                alt={spon.altImage}
                backgroundColor={imgBgColor}
                borderRadius={10}
              />
            </Flex>
          </MotionBox>
        ))}
      </Flex>
    </Flex>
  );
};
