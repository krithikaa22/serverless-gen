import {
  Flex,
  Heading,
  Text,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import React from "react";
import sjBlack from "../../../images/JuniorShaastra/sj_logo_b&w.png";
import sjColor from "../../../images/JuniorShaastra/sj_logo_color.png";
import spark from "../../../images/JuniorShaastra/sj.jpg";

export const SJHome = () => {
  const headingColor = useColorModeValue("#2c262a", "#fee9e1");
  const logo = useColorModeValue(sjColor, sjBlack);

  return (
    <Flex
      minH={"calc(100vh - 80px)"}
      flexDir={"column"}
      alignItems={"center"}
      px={[5, 5, 10, 100]}
      width={"100%"}
      justifyContent={"space-between"}
    >
      <Flex
        m={0}
        alignItems={"center"}
        flexDir={["column-reverse", "column-reverse", "row"]}
      >
        <Image src={logo} height={"100px"} />
        <Heading
          color={headingColor}
          letterSpacing={"widest"}
          fontSize={["5xl", "5xl", "7xl"]}
          textAlign={"center"}
        >
          SHAASTRA JUNIORS
        </Heading>
      </Flex>
      <Flex
        height={"100%"}
        width={"100%"}
        justifyContent={"space-between"}
        alignItems={"stretch"}
        m={"auto"}
        borderRadius={10}
        flexDir={["column", "column", "column", "row"]}
      >
        <Text
          width={["unset", "unset", "unset", "50vw"]}
          py={[10, 10, 10, "unset"]}
          height={"100%"}
          textAlign={"center"}
          fontSize={22}
        >
          Shaastra Juniors 2020, form Shaastra IIT Madras, is the first-ever
          completely online two-day Tech fest specially aimed at apreading
          awareness about technology among school students. A fun-filled weekend
          filled with events, shows, lectures and workshops is sure to have each
          and every student yearning for more.
          <br />
          <br />
          Shaastra Juniors is conducted online so each and every student can
          participate from the comfort of their home. Shaastra Juniors has
          special trophies for the beat school and excellent students, with
          schools competing against one another to win the Shaastra Juniors
          Championship
        </Text>
        <Image
          src={spark}
          width={["100%", "100%", "100%", "25vw"]}
          ml={[0, 0, 0, 10]}
        />
      </Flex>
    </Flex>
  );
};
