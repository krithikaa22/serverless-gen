import React from 'react'
import CustomBox from '../../shared/CustomBox'
import Footer from '../../shared/Footer'
import {
    Flex,
    Text,
    Heading,
    Center,
    Box,
    VStack,
    Image,
    Link,
    Button,
  } from '@chakra-ui/react'
  import Bg from "../../../images/EventsWorkshops/events/homeBg.jpg"
  import "./EWHome.css"
  import { ChevronRightIcon } from '@chakra-ui/icons'
  import summit from '../../../images/EventsWorkshops/summit/summit_5.jpg'
import tif from '../../../images/EventsWorkshops/tif/tif_4.png'
import workshop from "../../../images/EventsWorkshops/events/workshop.jpeg"
import events from "../../../images/EventsWorkshops/events/eventsHome.jpeg"

const Home = () => {
    return(
        <CustomBox>
            <Flex className="EWHome" flexDirection={"column"} position={"relative"} backgroundImage={Bg} backgroundRepeat={"none"} backgroundPosition={"center"} backgroundSize={"cover"} justifyContent={"center"} alignItems={"center"} width="100vw" height="100vh" backgroundColor={"yellow"}>
                <Box position={"absolute"} content="" width="100vw" height="100vh" top="0" left="0" backgroundColor={"rgba(0, 0, 0, 0.7)"}></Box>
                <Center>
                    <Heading
                        position={"relative"} zIndex={1}
                        fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
                        textAlign="center"
                    >
                        <Text as={"span"} display={'inline-flex'} alignItems={'center'} color="white">
                        EVENTS<Text mx={2} as={'h2'} fontSize={['4xl','7xl']} color={"#ea8a94"} className='ampersand'>&</Text> WORKSHOPS
                        </Text>
                    </Heading>
                </Center>
                <Flex color="white" flexDirection={["column", "row"]} height={["60vh", "fit-content"]} fontSize={["3vw","1.5vw"]} position={"relative"} zIndex={1} width="80%" margin="0 auto" marginTop={"4vh"} justifyContent={"space-between"} alignItems={"center"}>
                <a href="/events"><Flex className='EWHome-circle' justifyContent={"center"} alignItems={"center"} borderRadius={"50%"} border="2px solid white" boxSize={["20vw","10vw"]}>Events</Flex></a>
                <a href="/events/workshops"><Flex className='EWHome-circle' justifyContent={"center"} alignItems={"center"} borderRadius={"50%"} border="2px solid white" boxSize={["20vw","10vw"]}>Workshops</Flex></a>
                    {/* <Flex className='EWHome-circle' justifyContent={"center"} alignItems={"center"} borderRadius={"50%"} border="2px solid white" boxSize={["20vw","10vw"]}><a href='/summit'>Summit</a></Flex> */}
                    {/* <Flex className='EWHome-circle' justifyContent={"center"} alignItems={"center"} borderRadius={"50%"} border="2px solid white" boxSize={["20vw","10vw"]}><a href="/tif">TIF</a></Flex> */}
                </Flex>
            </Flex>
            <Flex width={["90vw","70vw"]} margin="auto" flexDirection={"column"} className='EWHomeDesp' marginTop={"8vh"}>
                <Flex flexDirection={["column", "row"]} width={"100%"} justifyContent={"space-between"}  alignItems={"center"} marginBottom={"8vh"}>
                    <Image boxSize={["50vw","18vw"]} src={events} objectFit={"cover"} objectPosition={"0% 10%"}></Image>
                    <Text
                        textAlign='left'
                        as='p'
                        marginTop='2'
                        width={["100%","60%"]}
                        fontSize={['4vw','lg']}
                        p={2}
                    >
                        Have you ever wanted to work on modeling a real airplane? Do
                        "hacking" scenes in movies and TV Shows make you roll your eyes?
                        Shaastra brings you several events every year. Some of the
                        events conducted last year as a part of Shaastra were Boeing
                        Aeromodelling Competition, Global Biotech Council, Shaastra
                        Programming Contest. Capture the Flag (CTF) and many more.
                        <br /> <br></br>
                        <a href="/events">Explore EVENTS <ChevronRightIcon></ChevronRightIcon> </a>
                    </Text>
                </Flex>
                <Flex flexDirection={["column", "row"]} width={"100%"} justifyContent={"space-between"}  alignItems={"center"}  marginBottom={"8vh"}>
                    <Image boxSize={["50vw","18vw"]} src={workshop} objectFit={"cover"}></Image>
                    <Text
                        textAlign='left'
                        as='p'
                        marginTop='2'
                        width={["100%","60%"]}
                        fontSize={['4vw','lg']}
                        p={2}
                    >
                        As a part of Shaastra, we conduct several workshops every year,
                        ranging over multiple topics. Some of the workshops that were
                        conducted last year were Introduction to Data Science and
                        Machine Learning, Cryptocurrency, and blockchain, How to Design
                        a Mars Rover, Parallel Programming with Python, Make a chat app
                        using Socket.io, Node.js, and MongoDB, and many more.
                        <br /> <br></br>
                        <a href="/events/workshops">Explore WORKSHOPS <ChevronRightIcon></ChevronRightIcon> </a>
                    </Text>
                </Flex>
                {/* <Flex flexDirection={["column", "row"]} width={"100%"} justifyContent={"space-between"} alignItems={"center"}  marginBottom={"8vh"}>
                    <Image boxSize={["50vw","18vw"]} src={summit} objectFit={"cover"}></Image>
                    <Text
                        textAlign='left'
                        as='p'
                        marginTop='2'
                        width={["100%","60%"]}
                        fontSize={['4vw','lg']}
                        p={2}
                    >
                        Summit is the flagship conference of Shaastra, which provides a
                        networking platform for its participants to interact with the
                        pioneers of today, and opportunities to enhance their expertise.
                        With a line-up of lectures, panel discussions and workshops
                        spanning over 3 days, participants, which include college
                        students, personnel from startups and professionals are ensured
                        to get an all-round experience. Every year Summit ventures into
                        a unique and relevant theme to contribute to the developments in
                        these fields of technology and to create an impact on society.
                        <br /> <br></br>
                        <a href="/summit">Explore SUMMIT <ChevronRightIcon></ChevronRightIcon> </a>
                    </Text>
                </Flex> */}
                {/* <Flex flexDirection={["column", "row"]} width={"100%"} justifyContent={"space-between"}  alignItems={"center"} marginBottom={"8vh"}>
                    <Image boxSize={["50vw","18vw"]} src={tif} objectFit={"cover"}></Image>
                    <Text
                        textAlign='left'
                        as='p'
                        marginTop='2'
                        width={["100%","60%"]}
                        fontSize={['4vw','lg']}
                        p={2}
                    >
                        Tech and Innovation fair is one of the flagship events in
                        Shaastra that scouts for budding entrepreneurs by providing a
                        platform to develop tech based projects and enhance their
                        potential to grow into a commercial product. TIF envisions
                        leveraging IIT Madras' rich startup ecosystem in its mission to
                        promote innovation and address the dearth of hardcore tech
                        startups in India
                        <br /> <br></br>
                        <a href="/tif">Explore TIF <ChevronRightIcon></ChevronRightIcon> </a>
                    </Text>
                </Flex> */}
            </Flex>
            <Footer
          designed={[{ name: 'Krithikaa', mail: 'be20b020@smail.iitm.ac.in' }]}
          />  
        </CustomBox>
    )
}

export default Home