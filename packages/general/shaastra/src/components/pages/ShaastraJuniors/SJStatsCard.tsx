import React from "react";
import { Box, BoxProps, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface Probs {
  stat: string;
  title: string;
}

const MotionBox = motion<BoxProps>(Box);

export const StatsCard = (probs: Probs) => {
  const cardColor = useColorModeValue("secondary.100", "primary.450");

  return (
    <MotionBox whileHover={{ scale: 1.05 }} mt={20}>
      <Flex
        bgColor={cardColor}
        flexDir={"column"}
        borderRadius={10}
        py={4}
        fontSize={25}
        textAlign={"center"}
        boxShadow={"xl"}
        width={"300px"}
      >
        <Text fontSize={60} fontWeight={"bold"} letterSpacing={"wide"}>{probs.stat}</Text>
        <Text>{probs.title}</Text>
      </Flex>
    </MotionBox>
  );
};
