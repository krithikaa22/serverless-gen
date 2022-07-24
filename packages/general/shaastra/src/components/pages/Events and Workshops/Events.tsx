import React from 'react'
import {
  Text,
  Stack,
  Flex,
  Link,
  Box,
  Heading,
  Image,
  Grid,
  GridItem,
  useColorModeValue
} from '@chakra-ui/react'
import bg from "../../../images/EventsWorkshops/events/bg.jpg"
import BE from "../../../images/EventsWorkshops/events/BE.png"
import Aero from "../../../images/EventsWorkshops/events/Aerofest.png"
import Bio from "../../../images/EventsWorkshops/events/Biogen.png"
import Cl from "../../../images/EventsWorkshops/events/Coding&Logic.png"
import DB from "../../../images/EventsWorkshops/events/Design&Build.jpeg"
import Elec from "../../../images/EventsWorkshops/events/Elecfest.jpg"
import Strategists from "../../../images/EventsWorkshops/events/Strategists.png"
import Symposium from "../../../images/EventsWorkshops/events/symposium.jpg"
import Ignite from "../../../images/EventsWorkshops/events/Ignite.jpg"
import CustomBox from '../../shared/CustomBox'
import Footer from '../../shared/Footer';
import "../../../styles/Events.css"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


function Events() {

  const timeline = useColorModeValue("pink", "white-events")
  const overlay = useColorModeValue("white", "black")

  return (
    <CustomBox>
      <Box position={"relative"} className="events"  backgroundRepeat="no-repeat" backgroundPosition="top" backgroundSize="cover">
        <Box className={`${overlay}`} content="" position={"absolute"} top="0" left="0" width={"100vw"} height="100%" backgroundColor={"rgba(0, 0, 0, 0.6)"}></Box>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 8 }}
          py={{ base: 20, md: 20 }}
        >
         <Flex zIndex={2}>
           <Heading textAlign="right" fontSize="7xl">EVENTS</Heading>
         </Flex>
         <Grid templateColumns={["repeat(1,1fr)","repeat(2, 1fr)"]} columnGap={"4vw"} rowGap={"4vw"} zIndex={3} width="80vw">
            <GridItem display={"flex"} height={"100%"} justifyContent={"center"} flexDirection={"column"}>
              <Image height="25vh" width={["80vw","38vw"]} objectFit={["cover","cover"]} src={Aero}></Image>
              <Link fontSize={["4vw","2vw"]}  href="/events/aerofest">Aerofest</Link>
            </GridItem>
            <GridItem display={"flex"} height={"max-content"} justifyContent={"center"} flexDirection={"column"}>
              <Image height="25vh" width={["80vw","38vw"]} objectFit={["cover","cover"]} src={Bio}></Image>
              <Link fontSize={["4vw","2vw"]} href="/events/biogen">Biogen</Link>
            </GridItem>
            <GridItem display={"flex"} height={"100%"} justifyContent={"center"} flexDirection={"column"}>
              <Image height="25vh" width={["80vw","38vw"]} objectFit={"cover"} src={BE}></Image>
              <Link fontSize={["4vw","2vw"]} href="/events/bevents"> 
                    BEvents</Link>
            </GridItem>
            <GridItem display={"flex"} height={"max-content"} justifyContent={"center"} flexDirection={"column"}>
              <Image height="25vh" width={["80vw","38vw"]} objectFit={"cover"} objectPosition={["0% 30%","0% 15%"]} src={DB}></Image>
              <Link fontSize={["4vw","2vw"]} href="/events/db">Design & Build</Link>
            </GridItem>
            <GridItem display={"flex"} height={"max-content"} justifyContent={"center"} flexDirection={"column"}>
              <Image height="25vh" width={["80vw","38vw"]} objectFit={"cover"} objectPosition={"0% 25%"} src={Elec}></Image>
             <Link fontSize={["4vw","2vw"]} href="/events/elecfest">Elecfest</Link>
            </GridItem>
            <GridItem display={"flex"} height={"max-content"} justifyContent={"center"} flexDirection={"column"}>
              <Image height="25vh" width={["80vw","38vw"]} objectFit={"cover"} objectPosition={"0% 25%"} src={Ignite}></Image>
              <Link fontSize={["4vw","2vw"]} href="/events/ignite">IDP</Link>
            </GridItem>
            <GridItem display={"flex"} height={"max-content"} justifyContent={"center"} flexDirection={"column"}>
              <Image height="25vh" width={["80vw","38vw"]} objectFit={"cover"} src={Strategists}></Image> 
              <Link fontSize={["4vw","2vw"]} href="/events/strategists">Quizzing</Link>
            </GridItem>
            <GridItem display={"flex"} height={"max-content"} justifyContent={"center"} flexDirection={"column"}>
              <Image height="25vh" width={["80vw","38vw"]} objectFit={"cover"} src={Cl}></Image> 
              <Link fontSize={["4vw","2vw"]} href="/events/cl">Coding & Logic</Link>
            </GridItem>
            <GridItem display={"flex"} height={"max-content"} justifyContent={"center"} flexDirection={"column"}>
              <Image height="25vh" width={["80vw","38vw"]} objectFit={"cover"} src={"https://shaastra.s3.ap-south-1.amazonaws.com/Moot Court.png"}></Image> 
              <Link fontSize={["4vw","2vw"]} href="/eventpage/ckxdasopm0024wop7cxphcidu">Moot Court</Link>
            </GridItem>
            <GridItem display={"flex"} height={"max-content"} justifyContent={"center"} flexDirection={"column"}>
              <Image height="25vh" width={["80vw","38vw"]} objectFit={"cover"} src={Symposium}></Image> 
              <Link fontSize={["4vw","2vw"]} href="https://dss.shaastra.org/" target={"_blank"}>Symposium</Link>
            </GridItem>
         </Grid>
         {/* <Box margin="auto" width={["80vw","40vw"]} zIndex={3} display={"flex"} height={"max-content"} justifyContent={"center"} flexDirection={"column"}>
            <Image height="25vh" width={["80vw","38vw"]} objectFit={"cover"} src={Strategists}></Image>
              <Link fontSize={["4vw","2vw"]} href="/events/strategists">Strategists</Link>
            </Box> */}
        </Stack>
      </Box>
      <Footer
        designed={[{ name: 'Krithikaa', mail: 'be20b020@smail.iitm.ac.in' }]}
      />
    </CustomBox>
  )
}

export default Events
