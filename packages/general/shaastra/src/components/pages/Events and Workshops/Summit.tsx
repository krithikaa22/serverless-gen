import React from "react";
import {
  Text,
  Stack,
  Flex,
  Center,
  Box,
  Heading,
  Image,
  SimpleGrid,
  Container,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Pagination, Autoplay
  } from 'swiper';
  
import 'swiper/swiper-bundle.min.css'  
import 'swiper/swiper.min.css'

import "../../../styles/Summit.css"

import gaming from "../../../images/EventsWorkshops/summit/gaming.jpg"
import summit1 from "../../../images/EventsWorkshops/summit/Summit_news.jpg";
import summit2 from "../../../images/EventsWorkshops/summit/summit_2.jpg";
import summit3 from "../../../images/EventsWorkshops/summit/summit_3.jpg";
import summit4 from "../../../images/EventsWorkshops/summit/summit_4.jpg";
import summit5 from "../../../images/EventsWorkshops/summit/summit_5.jpg";
import summit6 from "../../../images/EventsWorkshops/summit/summit_6.jpg";
import summit7 from "../../../images/EventsWorkshops/summit/summit_7.jpg";
import { useColorModeValue } from "@chakra-ui/color-mode";
import CustomBox from "../../shared/CustomBox";
import Footer from "../../shared/Footer";

SwiperCore.use([Pagination, Autoplay]);

const Summit = () => {
  return(
    <CustomBox>
        <Box className="summit" position={"relative"}>
          <Stack
                 textAlign={'center'}
                 align={'center'}
                 spacing={{ base: 8, md: 8 }}
                 py={{ base: 20, md: 20 }}
          >
            <Box height="100vh" width="100vw" top="0" left="0" position="absolute" backgroundImage={gaming}  backgroundSize={"cover"} backgroundRepeat={"no-repeat"} backgroundPosition={"left"} content=""></Box>
            {/* <Box content="" position={"absolute"} top="0" height="100vh" width="100vw" paddingTop={"0"} backgroundColor={"rgba(0, 0, 0, 0.8)"}></Box> */}
            <Flex  marginTop={"0"} flexDirection={"column"} width="100vw" className="gaming-intro-flex" height={["75vh","81vh"]} zIndex={2} alignItems={"center"}>
                <Heading color="white" fontSize={["10vw","7xl"]} marginBottom={"10vh"}>SUMMIT</Heading>
                <Text color="white" backdropBlur={"50px"} width={["90vw","50vw"]} fontSize={["3.5vw","1.5vw"]} fontWeight={"600"} marginBottom={"5vh"}>
                  This year’s Summit delves into the domain of Gaming Technology. This evolving industry is 
                  revolutionizing our world, unfazed by the pandemic. Cutting-edge technology built here often seeps 
                  out to numerous others. Our Summit will focus on several relevant themes while approaching gaming 
                  from multiple viewpoints. Through informative lectures, demonstrations, and hands-on workshops by 
                  eminent personalities, we aim to bridge the gap between gaming academia, industry, and enthusiasts.
                </Text>
                <Box className="gaming" width="fit-content" padding={["3vw 6vw","1vw 2vw"]} fontSize={["5.5vw","1.5vw"]}  margin="0 auto" marginTop={"2vh"} backgroundColor={"white"} color="#0e101b" borderRadius={"24px"}>
              <a  target="_blank" href="https://summit.shaastra.org/">Gaming Tech Summit</a>
            </Box>
            </Flex>
           <Box position={"relative"}>
            <Swiper
                slidesPerView={1}
                // pagination={true}
                autoplay={{delay: 2000}}
              >
                <SwiperSlide>
                  <Image width="100vw" height={["35vh","50vh"]} objectFit={"cover"} src={summit3}></Image>
                </SwiperSlide>
                <SwiperSlide>
                  <Image width="100vw" height={["35vh","50vh"]} objectFit={"cover"} src={summit2}></Image>
                </SwiperSlide>
                <SwiperSlide>
                  <Image width="100vw" height={["35vh","50vh"]} objectFit={"cover"} src={summit4}></Image>
                </SwiperSlide>
                <SwiperSlide>
                  <Image width="100vw" height={["35vh","50vh"]} objectFit={"cover"} src={summit5}></Image>
                </SwiperSlide>
                <SwiperSlide>
                  <Image width="100vw" height={["35vh","50vh"]} objectFit={"cover"} src={summit6}></Image>
                </SwiperSlide>
              </Swiper>
              <Box className="overlay" content="" position={"absolute"} top="0" width="100vw" height={["35vh","50vh"]} zIndex={1} backgroundColor={"rgba(0, 0, 0, 0.8)"}></Box>
              <Flex flexDirection={"column"} className="intro-text" position={"absolute"} top="0" width="100vw" zIndex={2} height={["30vh","50vh"]} justifyContent={"center"} alignItems={"center"}>
              <Heading color="white" paddingTop={"4vh"} paddingBottom={"4vh"}>Our previous editions</Heading>
                <Text width={["90%","60%"]} fontSize={["3.5vw","1.5vw"]} fontWeight={"400"} color="white">
                Previously we have successfully organised Archi-Tech Summit (2021), Defence Tech Summit (2020), Sports 
                Tech and Law Tech Summit (2019), Green Energy Summit (2018), Accessibility Summit (2017) and Makers 
                Summit (2016) collaborating with the likes of L&T Construction, L&T Defence, Star Sports, Shell, etc.
                </Text>
              </Flex>
           </Box>
           <Text paddingBottom={"4vh"} paddingTop={["5vh","8vh"]} fontSize={["3.5vw","1.5vw"]} textAlign={["center","left"]} width={["90vw","80vw"]} margin="auto" marginTop="8vh">
              Shaastra 2021 saw IIT Madras hosting it's very first virtual Summit that was attended by 120 delegates. The 
              theme for Summit 2021 was ARCHI-TECH which brought together the fields of architecture and technology. 
              With developments in technology like virtual reality, 3D printing and advancements in material science , 
              Shaastra Summit 2021 brought these technologies to light, to help our participants upskill in the field of 
              architecture.
           </Text>
           <Text paddingBottom={"4vh"} fontSize={["3.5vw","1.5vw"]} textAlign={["center","left"]} width={["90vw","80vw"]} margin="auto" marginTop="8vh">
              Summit successfully hosted talks by Ar. Rahul Mehrotra, Ar. Brinda Somaya and other renowned architects as a 
              part of the Summit Masterclass series. Archi-Tech Summit also organized the Post Covid Redesign Contest and 
              Innovation Hub Design Challenge that provided a platform for professionals and enthusiasts in the field of 
              architecture and design to leverage the power of designing spaces to solve societal problems and build better 
              ommunities.
           </Text>
           <Image src={summit1} width="80vw" height={"100%"} objectFit={"cover"}></Image>
           <Text paddingTop={["4vh","4vh"]} fontSize={["3.5vw","1.5vw"]} textAlign={["center","left"]} width={["90vw","80vw"]} margin="auto">
              With Sports-Tech Summit Shaastra tried to expand into bringing its participants up to speed on the latest 
              developments by successfully organizing a case-study competition as a part of the Summit and a Hackathon  
              as a pre-event. Similarly, the Law-Tech Summit explored the influence of modern day technology in legal 
              practice by organising a one of a kind Moot court.
           </Text>
          </Stack>
        </Box>
        <Footer
        designed={[{ name: 'Krithikaa', mail: 'be20b020@smail.ittm.ac.in' }]}
      />
    </CustomBox>
  )
}

export default Summit;
