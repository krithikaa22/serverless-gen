import { Flex, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";
import CustomBox from "../../shared/CustomBox";

import { SJHome } from "./SJHome";
import { SJSponsers } from "./SJSponsers";
import { StatsCard } from "./SJStatsCard";
import { SJEvents } from "./SJEvents";
import Footer from "../../shared/Footer";

const ShaastraJuniors = () => {
  const bgColor = useColorModeValue("#fee9e1", "unset");

  return (
    <CustomBox>
      <Flex
        flexDirection={"column"}
        justifyContent={"strech"}
        alignItems="center"
        py={"80px"}
        bgColor={bgColor}
      >
        <SJHome />
        <Flex
          flexWrap={"wrap"}
          px={[5, 5, 10, 100]}
          width={"100%"}
          justifyContent={["center", "center", "center", "space-between"]}
        >
          <StatsCard title={"Registrations"} stat={"4,562"} />
          <StatsCard title={"Competitions"} stat={"11"} />
          <StatsCard title={"Workshops"} stat={"10"} />
          <StatsCard title={"Shows"} stat={"4"} />
        </Flex>
        <SJEvents />
        <SJSponsers />
      </Flex>
      <Footer
        designed={[
          {
            name: "Janith M S",
            mail: "mm19b035@smail.iitm.ac.in",
          },
        ]}
      />
    </CustomBox>
  );
};

export default ShaastraJuniors;
