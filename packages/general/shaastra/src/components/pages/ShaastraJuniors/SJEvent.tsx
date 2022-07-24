import React from "react";
import {
  Flex,
  Heading,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

interface Probs {
  heading: string;
  description: string;
  image: string;
}

export const Events = (probs: Probs) => {
  const cardColor = useColorModeValue("secondary.100", "primary.450");

  return (
    <Flex
      bgColor={cardColor}
      mb={10}
      borderRadius={10}
      boxShadow={"lg"}
      flexDir={["column-reverse", "column-reverse", "column-reverse", "row"]}
    >
      <Flex
        flexDir={"column"}
        p={[2, 3, 3, 10]}
        pb={[10, 10, 10, 10]}
        my={"auto"}
        justifyContent={"space-evenly"}
        h={"100%"}
      >
        <Heading textAlign={"center"} mb={5}>
          {probs.heading}
        </Heading>
        <Text
          fontSize={18}
          mb={"auto"}
          textAlign={["center", "center", "center", "start"]}
        >
          {probs.description}
        </Text>
      </Flex>
      <Image
        src={probs.image}
        minW={"30vw"}
        w={["unset", "unset", "unset", "30vw"]}
        minH={["100%", "100%", "100%", "unset"]}
        objectFit={"cover"}
        borderRadius={10}
      />
    </Flex>
  );
};
