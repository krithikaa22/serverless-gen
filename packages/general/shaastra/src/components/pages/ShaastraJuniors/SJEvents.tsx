import React from "react";
import { Flex, Heading, useColorModeValue } from "@chakra-ui/react";

import { shaastraJunoirsData } from "./Data";
import { Events } from "./SJEvent";

export const SJEvents = () => {
  const headingColor = useColorModeValue("#2c262a", "#fee9e1");
  return (
    <Flex flexDir={"column"} px={[5, 5, 10, 100]}>
      <Heading
        color={headingColor}
        alignSelf={"center"}
        letterSpacing={"widest"}
        fontSize={"5xl"}
        py={20}
        textAlign={"center"}
      >
        EVENTS
      </Heading>
      <Flex flexDir={"column"}>
        {shaastraJunoirsData.map((_item) => (
          <Events
            heading={_item.title}
            description={_item.description}
            image={_item.image}
          />
        ))}
      </Flex>
    </Flex>
  );
};
