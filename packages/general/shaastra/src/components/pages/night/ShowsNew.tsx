import React from "react"
import CustomBox from '../../shared/CustomBox'
import Footer from '../../shared/Footer'

import {
    Text,
    Stack,
    Link,
    Flex,
    Tooltip,
    Box,
    RadioGroup,
    Radio,
    Image,
    Heading,
    Grid,
    GridItem
  } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react'
  import SwiperCore, { Autoplay, Navigation, Pagination, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/swiper-bundle";
import "swiper/swiper-bundle.esm.browser";

import bgPrev from "../../../images/night/bg-prev.jpg"
import arrow from "../../../images/night/arrow.gif"
  import Dan from "../../../images/night/Dan_img.jpg"
  import Gloves from "../../../images/night/Gloves02.jpg"
  import Harmony from "../../../images/night/Harmony-SonicSnares-2.jpg"
  import Heimdall from "../../../images/night/Heimdall1.jpg"
  import Mirage from "../../../images/night/Mirage.jpg"
  import DJ from "../../../images/night/DJ.jpg"
  import Vivek from "../../../images/night/vivek patil.jpg"
  import Reverb from "../../../images/night/Reverb.jpg"
  import Soda from "../../../images/night/Comedy Night.jpeg"
  import About from "../../../images/night/about.jpg"
  import Adeleida from "../../../images/night/Adelaida.jpg"
  import Formula from "../../../images/night/formula drone.jpg"
  import Suhani from "../../../images/night/suhani shah.jpg"
  import Sushil from "../../../images/night/sushil jaiswal.jpg"
  import VivekD from "../../../images/night/vivek desai.jpg"
  import Kenny from "../../../images/night/Kenny Sebastian.jpg"
  import Maraiana from "../../../images/night/Mariana bo.jpg"
  import Rishabh from "../../../images/night/Rishabh Rajan.jpg"
  import Freestyle from "../../../images/night/Freestyl' Air.png"

  import BiswaP from "../../../images/night/poster_biswa.png"
  import SuhaniP from "../../../images/night/poster_suhani.png"
  import Biswa from "../../../images/night/Biswa.jpg"
  import SuhaniPresent from "../../../images/night/Suhani.jpg"

  import Four from "../../../images/night/4.jpeg"
  import Dyskenetic from "../../../images/night/dyskenetic.jpeg"
  import Lizzie from "../../../images/night/lizzie.jpg"
  import Alex from "../../../images/night/alex mclen.jpg"
  import Broken from "../../../images/night/broken symmetry.jpg"
  import Blanc from "../../../images/night/Blanc.jpg"

  import ShowsBg from "../../../images/night/ShowsHome.mp4"

  import ContactBg from "../../../images/night/Contact us - Background.png"

  import "../../../styles/night/ShowsNew.css"

  SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

const Shows = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isLabelOpen1, setIsLabelOpen1] = React.useState(false)
    const [isLabelOpen2, setIsLabelOpen2] = React.useState(false)
    const [isLabelOpen3, setIsLabelOpen3] = React.useState(false)
    const [isLabelOpen4, setIsLabelOpen4] = React.useState(false)
    const [isLabelOpen5, setIsLabelOpen5] = React.useState(false)
    const [isLabelOpen6, setIsLabelOpen6] = React.useState(false)
    const [isLabelOpen7, setIsLabelOpen7] = React.useState(false)
    const [isLabelOpen8, setIsLabelOpen8] = React.useState(false)
    const [isLabelOpen9, setIsLabelOpen9] = React.useState(false)
    const [isLabelOpen10, setIsLabelOpen10] = React.useState(false)
    const [isLabelOpen11, setIsLabelOpen11] = React.useState(false)
    const [isLabelOpen12, setIsLabelOpen12] = React.useState(false)
    const [isLabelOpen13, setIsLabelOpen13] = React.useState(false)
    const [isLabelOpen14, setIsLabelOpen14] = React.useState(false)
    const [isLabelOpen15, setIsLabelOpen15] = React.useState(false)
    const [isLabelOpen16, setIsLabelOpen16] = React.useState(false)
    var message = `
    Sand Art and Light Show | Shaastra 2016  Performed by Vivek Patil\n\
    The renowned visual storyteller artist, headlined the first show. Putting together a trifecta of Light, Sand, and Speed Art, the show was a stunning visual experience.`
    return(
       <CustomBox>
           <link href="http://fonts.cdnfonts.com/css/neue-helvetica-bq" rel="stylesheet"></link>
           <Stack
            textAlign={'center'}
            align={'center'}
            // spacing={{ base: 8, md: 8 }}
            py={{ base: 20, md: 20 }}
            padding={["18vw","4vw"]} 
            overflowX={"hidden"}
           >
               <Flex 
                    height={"5vh"} width="100vw" 
                    padding="2vw" className="shows-header"
                    justifyContent={"flex-start"} alignItems={"center"} 
                    fontFamily={"Roboto"} fontSize={["2.5vw","1vw"]}
                    backgroundColor={"black"} color="white"
                >
                    <Text marginRight={"4vw"}> <a href="#homeShowNew">Home</a> </Text>
                    <Text marginRight={"4vw"}> <a href="#present">Upcoming shows</a> </Text>
                    <Text marginRight={"4vw"}> <a href="#about">About us</a> </Text>
                    <Text marginRight={"4vw"}> <a href="#previous">Previous shows</a> </Text>
                    <Text marginRight={"4vw"}> <a href="#reverb">Reverb</a> </Text>
                    <Text > <a href="#contact">Contact Shaastra Nights</a> </Text>
               </Flex>
               <Flex 
                flexDirection={"column"} justifyContent={"space-between"} alignItems={"center"}
                height={"83vh"} width="100vw" marginTop={"0vw"} paddingTop={["30vh"]} paddingBottom={["20vh", "0vh"]}
                id="homeShowNew" position={"relative"}
               >
                   <Box className="video-container-shows" position={"absolute"} top={"0"} left="0">
                   <video id="video-shows" src={ShowsBg} muted={true} autoPlay={true} loop={true}>
                    </video>
                   </Box>
                   <Box width="100vw" height={"83vh"} position={"absolute"} top={"0"} left={"0"} content="" backgroundColor={"rgba(0, 0, 0, 0.6)"} zIndex={"1"}></Box>
                   <Heading
                    zIndex={"2"}
                    fontSize={["8vw","4vw"]}
                    color={"white"}
                    marginBottom={["0vh","4vh"]}
                    className="shows-new-heading"
                   >SHAASTRA NIGHTS</Heading>
                    <Link zIndex={3} href="#present"><Image justifySelf={"flex-end"} marginTop={["0vh","15vh"]} zIndex={3} boxSize={["20vw","10vw"]} src={arrow}></Image></Link>
               </Flex>
               <Flex
                id="present"
                backgroundImage={bgPrev}
                padding={"8vh 0"} objectFit={"cover"}
                height="fit-content" width="100vw"
                flexDirection={"column"} justifyContent={"center"} alignItems={"center"}
               >
                   <Heading marginBottom={"8vh"} fontSize={["8vw","3vw"]} color="white"   className="shows-new-heading">
                        UPCOMING SHOWS
                   </Heading>
                   <Box   padding={["4vh 5vw","4vh 10vw"]} className="reverb-swiper" marginTop={"5vh"}
                 height="fit-content" width="100vw">
                        <Swiper navigation={true}
                        autoplay={{delay: 4000}}
                        effect="fade"
                        fadeEffect= {
                           { crossFade: true}
                          }
                        >
                            <SwiperSlide>
                                <Image src={BiswaP} boxSize={["60vw","30vw"]} objectFit={"cover"}></Image>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={SuhaniP} boxSize={["60vw","30vw"]} objectFit={"cover"}></Image>
                            </SwiperSlide>
                        </Swiper>
                   </Box>
                   <Box
                    backgroundColor={"#00F7FF"} color={"black"}
                    fontFamily={"Montserrat"} fontWeight={"bold"}
                    padding={["2vw","1vw"]} zIndex={"2"}
                    borderRadius={["5px","12px"]} fontSize={["2.75vw", "1vw"]}
                   > <a href="/signup" className="montserrat">Register for shows</a> </Box>
                   <Text
                    width="70vw" margin="auto" fontSize={["4vw","1.4vw"]} marginTop={"4vh"}
                   >If you have already registered on <a href="http://shaastra.org/">shaastra.org</a>, you need not register here again and can straightaway head to OAT at <b><a href="http://shaastra2022.com/" target={"_blank"}>shaastra2022.com </a></b> to watch the shows for free!
Don't forget to catch Biswa Kalyan Rath live at <b>7 PM</b> today, 15th Jan!</Text>
                   <Box  padding={["4vh 5vw","4vh 10vw"]} marginTop={"5vh"}
                 height="fit-content" width="100vw">
                     <Flex width="100%" justifyContent={"space-between"} alignItems={"center"} direction={["column", "row"]}>
                         <Image src={Biswa} boxSize={["55vw","25vw"]} objectFit={"cover"}></Image>
                         <Text width={["80vw","40vw" ]} marginTop={["4vh", "0"]}
                            fontSize={["4vw","1.25vw"]} color="white" font-fontFamily={"Roboto"}
                         >
                             <Heading> <b>CHAOS | 15.01.2022 </b></Heading>
                             <br /><br />
                             <em>“I didn't know what rock music was. I always thought rocking was an adjective. I always 
                                 thought it was good, better, best, rocking”.</em>
                            <br /><br />
                            After the legendary Kenny Sebastian, next in line we have <em>“Mast Aadmi”</em> Biswa Kalyan Rath, here to 
                            lighten up your mood at the end of an eventful day. He's all set to tickle your funny bones with 
                            his riotous comedy act.
                            <br /><br />
                            Catch Biswa Kalyan Rath live in Chaos on <b>15th January, Saturday at 7 pm</b>, for a <b><em>“Mast”</em></b> evening.
                         </Text>
                     </Flex>
                   </Box>
                   <Box  padding={["4vh 5vw","4vh 10vw"]} marginTop={"5vh"}
                 height="fit-content" width="100vw">
                     <Flex width="100%" justifyContent={"space-between"} alignItems={"center"} direction={["column", "row"]}>
                         <Image src={SuhaniPresent} boxSize={["55vw","25vw"]} objectFit={"cover"}></Image>
                         <Text width={["80vw","40vw" ]} marginTop={["4vh", "0"]}
                            fontSize={["4vw","1.25vw"]} color="white" font-fontFamily={"Roboto"}
                         >
                             <Heading> <b>SPECTRE | 14.01.2022 </b></Heading>
                             <br /><br />
                             Illusion, mentalism, phantasm - join us for a magical milieu on <b>14th Jan</b> with India’s only female 
                             illusionist and magician, Suhani Shah. Tickling your minds, tingling your bones with laughter & 
                             stealthily reading your thoughts - Suhani can do it all! 
                             <br /><br />
                             Brace yourselves for a magical evening this 
                             Friday, at <b>7.00 pm</b> only on <b><a href="http://shaastra2022.com/">shaastra2022.com</a></b>
                         </Text>
                     </Flex>
                   </Box>
               </Flex>
               <Flex
                height="100vh" width="100vw"
                color="white"
                id="about" position={"relative"}
                flexDirection={"column"} justifyContent={"center"} alignItems={"center"} 
               >
                   <Image src={bgPrev} position={"absolute"} top="0" left="0" width="100vw" height="100vh" objectFit={"cover"}></Image>
                   <Heading marginBottom={"4vh"} fontSize={["8vw","3vw"]} zIndex={2}    className="shows-new-heading">ABOUT US</Heading>
                   <Text width="80%" fontSize={["4vw","1.5vw"]} zIndex={2}>
                    The flagship event of Shaastra, Shaastra Nights, has made the former a noteworthy leader amongst 
                    parallel fests in the country. Shaastra Nights provide a platform for exquisite performers to display 
                    their artistic prowess while giving the audience a once-in-a-lifetime opportunity to witness a confluence of 
                    technology and culture. Shaastra Nights is non-ticketed - an attribute that distinguishes it from shows 
                    akin; it enables students and the public to access quality entertainment at its finest. Behind the warranted 
                    glitz and glamour, Shaastra Nights' true intentions shine - diversity and inclusivity.
                   </Text>
               </Flex>
               <Flex
                 id="previous"
                 backgroundImage={bgPrev}
                 padding={"8vh 0"} objectFit={"cover"}
                 height="fit-content" width="100vw"
                 flexDirection={"column"} justifyContent={"center"} alignItems={"center"}
               >
                   <Heading marginBottom={"8vh"} fontSize={["8vw","3vw"]} color="white"   className="shows-new-heading">
                        PREVIOUS SHOWS
                   </Heading>
                   <Grid templateColumns={['repeat(2, 1fr)','repeat(4, 1fr)']} gap={"7vw"} width="80vw" marginBottom={"4vh"}>
                        <GridItem>
                            <Tooltip isOpen={isLabelOpen1} 
                        label="CHAOS | Shaastra 2021 Main Show by Kenny Sebastian - the Indian stand-up comedian, musician, and filmmaker burst the crowd into laughter with his narrative craft." 
                            placement="right" padding="2vw" maxWidth={["58vw","15vw"]} fontSize={["2.75vw","1vw"]} backgroundColor={"#00F7FF"} color="black" font-fontFamily={"Roboto"}>
                            <Image onMouseEnter={() => setIsLabelOpen1(true)}
                                    onMouseLeave={() => setIsLabelOpen1(false)}
                                    onClick={() => setIsLabelOpen1(true)} 
                                    src={Kenny} boxSize={["35vw","15vw"]} objectFit={"cover"} objectPosition={"top"}></Image>
                        </Tooltip>
                        </GridItem>
                        <GridItem>
                            <Tooltip isOpen={isLabelOpen2} 
                            label="Virtual Magic Show | Shaastra Juniors 2020 Performed by Dan Rhodes - He blew the minds of our young audience with his savvy magic tricks. The then 16-year-old magician became an inspiration for the young crowd." 
                                placement="right" padding="2vw" maxWidth={["55vw","25vw"]} fontSize={["2.75vw","1vw"]} backgroundColor={"#00F7FF"} color="black" font-fontFamily={"Roboto"}>
                                <Image onMouseEnter={() => setIsLabelOpen2(true)}
                                        onMouseLeave={() => setIsLabelOpen2(false)}
                                        onClick={() => setIsLabelOpen2(true)} 
                                        src={Dan} boxSize={["35vw","15vw"]} objectFit={"cover"}></Image>
                            </Tooltip>
                        </GridItem>
                        <GridItem>
                        <Tooltip isOpen={isLabelOpen3} 
                       label="EDM Night | Shaastra 2018 Headlining Show by Mariana BO Ranked among the top 100 DJs of 2017, the violinist and DJ extraordinaire produced electrifying moments which made the crowd alive and immersed in a sensory escapade."
                        placement="right" padding="2vw" maxWidth={["40vw","20vw"]} fontSize={["2.75vw","1vw"]} backgroundColor={"#00F7FF"} color="black" font-fontFamily={"Roboto"}>
                        <Image onMouseEnter={() => setIsLabelOpen3(true)}
                                onMouseLeave={() => setIsLabelOpen3(false)}
                                onClick={() => setIsLabelOpen3(true)} 
                                src={Maraiana} boxSize={["35vw","15vw"]} objectFit={"cover"}></Image>
                       </Tooltip>
                        </GridItem>
                        <GridItem>
                        <Tooltip isOpen={isLabelOpen4} 
                       label="Ukraine's best LED & NEON Show | Shaastra 2016 Performed by Adelaida - The professional dance troupe from Ukraine who performed in over 1000 events across the world brought forth a show that was full of light, energy, and charisma." 
                        placement="right" padding="2vw" maxWidth={["40vw","18vw"]} fontSize={["2.75vw","1vw"]} backgroundColor={"#00F7FF"} color="black" font-fontFamily={"Roboto"}>
                        <Image onMouseEnter={() => setIsLabelOpen4(true)}
                                onMouseLeave={() => setIsLabelOpen4(false)}
                                onClick={() => setIsLabelOpen4(true)} 
                                src={Adeleida} boxSize={["35vw","15vw"]} objectFit={"cover"} objectPosition={"top"}></Image>
                       </Tooltip>
                        </GridItem>
                   </Grid>

                   <Grid templateColumns={['repeat(2, 1fr)','repeat(4, 1fr)']} gap={"7vw"} width="80vw" marginBottom={"4vh"}>
                        <GridItem>
                        <Tooltip isOpen={isLabelOpen5}  
                       label="LASER HARP Live Performance | Shaastra 2020 Performed by Heimdall - Armed himself with a harp that is lit up in the colors of the visible spectrum, his oeuvre of thumping electronic music along with the vibrant light orchestration, the show was an enrapturing production." 
                        placement="right" padding="2vw" maxWidth={["55vw","28vw"]} fontSize={["2.75vw","1vw"]} backgroundColor={"#00F7FF"} color="black" font-fontFamily={"Roboto"}>
                        <Image onMouseEnter={() => setIsLabelOpen5(true)}
                                onMouseLeave={() => setIsLabelOpen5(false)}
                                onClick={() => setIsLabelOpen5(true)} 
                               src={Heimdall} boxSize={["35vw","15vw"]} objectFit={"cover"}></Image>
                       </Tooltip>
                        </GridItem>
                        <GridItem>
                        <Tooltip isOpen={isLabelOpen6} 
                       label="HARMONY | Shaastra 2021 Main Show by Sonic Snares With his vivacious act of lush HD visuals and intoxicating beats, the brilliant Austrian artist took the audience into a world of trance." 
                        placement="right" padding="2vw" maxWidth={["40vw","18vw"]} fontSize={["2.75vw","1vw"]} backgroundColor={"#00F7FF"} color="black" font-fontFamily={"Roboto"}>
                        <Image onMouseEnter={() => setIsLabelOpen6(true)}
                                onMouseLeave={() => setIsLabelOpen6(false)}
                                onClick={() => setIsLabelOpen6(true)} 
                              src={Harmony} boxSize={["35vw","15vw"]} objectFit={"cover"} objectPosition={"top"}></Image>
                       </Tooltip>
                        </GridItem>
                        <GridItem>
                        <Tooltip isOpen={isLabelOpen8} 
                       label="Tech Magic Show | Shaastra 2018 Performed by Suhani Shah - Pulling up from a mixed bag of tricks for her show, she held the crowd on their toes by staging grand illusions, along with one of her most famous tricks of predicting the future" 
                        placement="right" padding="2vw" maxWidth={["45vw","20vw"]} fontSize={["2.75vw","1vw"]} backgroundColor={"#00F7FF"} color="black" font-fontFamily={"Roboto"}>
                        <Image onMouseEnter={() => setIsLabelOpen8(true)}
                                onMouseLeave={() => setIsLabelOpen8(false)}
                                onClick={() => setIsLabelOpen8(true)} 
                                 src={Suhani} boxSize={["35vw","15vw"]} objectFit={"cover"}></Image>
                       </Tooltip>
                        </GridItem>
                        <GridItem>
                        <Tooltip isOpen={isLabelOpen7} 
                       label="Freestyl’Air - The French bike troupe showed off their daredevilry while performing stunts that only professionally trained athletes like themselves were capable of pulling off. They left the audience with their hearts beating in the air, quite literally!" 
                        placement="right" padding="2vw" maxWidth={["40vw","20vw"]} fontSize={["2.75vw","1vw"]} backgroundColor={"#00F7FF"} color="black" font-fontFamily={"Roboto"}>
                        <Image onMouseEnter={() => setIsLabelOpen7(true)}
                                onMouseLeave={() => setIsLabelOpen7(false)}
                                onClick={() => setIsLabelOpen7(true)} 
                                src={Freestyle} boxSize={["35vw","15vw"]} objectFit={"cover"}></Image>
                       </Tooltip>
                        </GridItem>
                   </Grid>

                   <Grid templateColumns={['repeat(2, 1fr)','repeat(4, 1fr)']} gap={"7vw"} width="80vw" marginBottom={"4vh"}>
                        <GridItem>
                        <Tooltip isOpen={isLabelOpen9}
                       label="MIRAGE Laser Show | Shaastra 2019  Performed by Vilas Nayak - A finalist of the 3rd season of India’s Got Talent, the self-taught speed painting artist mesmerized the crowd with his quick pace and stunning technique." 
                        placement="right" padding="2vw" fontSize={["2.75vw","1vw"]} maxWidth={["50vw","25vw"]} backgroundColor={"#00F7FF"} color="black" font-fontFamily={"Roboto"}>
                        <Image onMouseEnter={() => setIsLabelOpen9(true)}
                                onMouseLeave={() => setIsLabelOpen9(false)}
                                onClick={() => setIsLabelOpen9(true)} 
                                src={Mirage} boxSize={["35vw","15vw"]} objectFit={"cover"}></Image>
                       </Tooltip>
                        </GridItem>
                        <GridItem>
                       <Tooltip isOpen={isLabelOpen10} 
                       label="Mentalist and Illusionist Performance | Shaastra 2020  Performed by Vivek Desai - The modern magician entertained the crowd with his unique fusion of mentalism and humor on the stage." 
                        placement="right" padding="2vw" maxWidth={["40vw","20vw"]} fontSize={["2.75vw","1vw"]} backgroundColor={"#00F7FF"} color="black" font-fontFamily={"Roboto"}>
                        <Image onMouseEnter={() => setIsLabelOpen10(true)}
                                onMouseLeave={() => setIsLabelOpen10(false)}
                                onClick={() => setIsLabelOpen10(true)} 
                                src={VivekD} boxSize={["35vw","15vw"]} objectFit={"cover"}></Image>
                       </Tooltip>
                        </GridItem>
                        <GridItem>
                        <Tooltip isOpen={isLabelOpen11} 
                       label="Formula DrOne | Shaastra 2017 India's top 8 drone pilots battled it out in this race held in association with the Indian Drone Racing League (IDRL), a pan-India community of drone racing pilots. It was the country's 1st night-drone-racing event!" 
                        placement="right" padding="2vw" maxWidth={["45vw","18vw"]} fontSize={["2.75vw","1vw"]} backgroundColor={"#00F7FF"} color="black" font-fontFamily={"Roboto"}>
                        <Image onMouseEnter={() => setIsLabelOpen11(true)}
                                onMouseLeave={() => setIsLabelOpen11(false)}
                                onClick={() => setIsLabelOpen11(true)} 
                                src={Formula} boxSize={["35vw","15vw"]} objectFit={"cover"} objectPosition={"top"}></Image>
                       </Tooltip>
                        </GridItem>
                        <GridItem>
                        <Tooltip isOpen={isLabelOpen12} 
                       label="HARMONY | Shaastra 2021 Opening Show by Rishab Rajan - The celebrated Berklee College of Music faculty member amazed the crowd with his mystic techno-octaves." 
                        placement="right" padding="2vw" maxWidth={["40vw","18vw"]} fontSize={["2.75vw","1vw"]} backgroundColor={"#00F7FF"} color="black" font-fontFamily={"Roboto"}>
                        <Image onMouseEnter={() => setIsLabelOpen12(true)}
                                onMouseLeave={() => setIsLabelOpen12(false)}
                                onClick={() => setIsLabelOpen12(true)} 
                                src={Rishabh} boxSize={["35vw","15vw"]} objectFit={"cover"} objectPosition={"top"}></Image>
                       </Tooltip>
                        </GridItem>
                   </Grid>

                   <Grid templateColumns={['repeat(2, 1fr)','repeat(4, 1fr)']} gap={"7vw"} width="80vw" marginBottom={"4vh"}>
                        <GridItem>
                        <Tooltip size="400px" label={`
                       Sand Art and Light Show | Shaastra 2016, Shaastra 2019 - Performed by Vivek Patil: The renowned visual storyteller artist, headlined the first show. Putting together a trifecta of Light, Sand, and Speed Art, the show was a stunning visual experience.`} 
                        placement="right" padding="2vw" className="shows-tooltip" maxWidth={["50vw","32vw"]} fontSize={["2.75vw","1vw"]} backgroundColor={"#00F7FF"} color="black" font-fontFamily={"Roboto"}
                        isOpen={isLabelOpen13} 
                        >
                        <Image onMouseEnter={() => setIsLabelOpen13(true)}
                                onMouseLeave={() => setIsLabelOpen13(false)}
                                onClick={() => setIsLabelOpen13(true)}
                                src={Vivek} boxSize={["35vw","15vw"]} objectFit={"cover"}></Image>
                       </Tooltip>
                        </GridItem>
                        <GridItem>
                        <Tooltip isOpen={isLabelOpen14} 
                       label="CHAOS | Shaastra 2021 Opening Show by Sudarshan Ramamurthy - popularly known as SODA, set the mood for the comedy night with his witty humor." 
                        placement="right" padding="2vw" maxWidth={["40vw","18vw"]} fontSize={["2.75vw","1vw"]} backgroundColor={"#00F7FF"} color="black" font-fontFamily={"Roboto"}>
                        <Image onMouseEnter={() => setIsLabelOpen14(true)}
                                onMouseLeave={() => setIsLabelOpen14(false)}
                                onClick={() => setIsLabelOpen14(true)} 
                                src={Soda} boxSize={["35vw","15vw"]} objectFit={"cover"}></Image>
                       </Tooltip>
                        </GridItem>
                        <GridItem>
                        <Tooltip isOpen={isLabelOpen15} 
                       label="Virtual Magic Show | Shaastra Juniors 2020 Performed by Sushil Jaiswal - This Guinness world record holder, also known as the unlocker of brains, entertained the crowd with his breathtaking magic cum mentalism acts." 
                        placement="right" padding="2vw" maxWidth={["58vw","25vw"]} fontSize={["2.75vw","1vw"]} backgroundColor={"#00F7FF"} color="black" font-fontFamily={"Roboto"}>
                        <Image onMouseEnter={() => setIsLabelOpen15(true)}
                                onMouseLeave={() => setIsLabelOpen15(false)}
                                onClick={() => setIsLabelOpen15(true)} 
                                 src={Sushil} boxSize={["35vw","15vw"]} objectFit={"cover"} objectPosition={"top"}></Image>
                       </Tooltip>
                        </GridItem>
                        <GridItem>
                        <Tooltip isOpen={isLabelOpen16} 
                       label="EDM Night | Shaastra 2018 Supporting Show by DJ Get Massive: Having performed in VH1 Supersonic festival, India’s #1 Trance Artist created a scintillating experience that intersected the orbits of music and arts." 
                        placement="right" padding="2vw" maxWidth={["40vw","18vw"]} fontSize={["2.75vw","1vw"]} backgroundColor={"#00F7FF"} color="black" font-fontFamily={"Roboto"}>
                        <Image onMouseEnter={() => setIsLabelOpen16(true)}
                                onMouseLeave={() => setIsLabelOpen16(false)}
                                onClick={() => setIsLabelOpen16(true)} 
                                src={DJ} boxSize={["35vw","15vw"]} objectFit={"cover"}></Image>
                       </Tooltip>
                        </GridItem>
                   </Grid>
               </Flex>
               <Flex width={"100vw"} height={"100vh"} marginTop={"0%"}
               id="reverb"
                flexDirection={"column"} justifyContent={"center"} alignItems={"center"}
                color="white" position="relative"
                backgroundImage={Reverb} backgroundPosition={"center"} backgroundRepeat={"no-repeat"} backgroundSize={"cover"}
               >
                   <Box position={"absolute"} top="0" left="0" content="" height="100vh" width="100vw" backgroundColor={"rgba(0, 0, 0, 0.6)"}></Box>
                   <Heading marginBottom={"8vh"} marginTop={"2vh"} fontSize={["8vw","3vw"]} zIndex={"2"}   className="shows-new-heading">REVERB</Heading>
                   <Text width="80%" fontSize={["4vw","1.5vw"]} className="montserrat" fontFamily={"Montserrat"} zIndex={"2"}>
                    Our latest series, Reverb, aims to bridge the gap between technology and music by showcasing 
                    performances that are a juxtaposition of the same.
                   </Text>
                   <Box
                 padding={["4vh 5vw","4vh 10vw"]} className="reverb-swiper" marginTop={"5vh"}
                 height="fit-content" width="100vw" >
              <Swiper
                navigation={true}
              >
                   <SwiperSlide>
                   <Tooltip isOpen={isLabelOpen1} 
                       label="ALGORAVE | Presented by Reverb Alex McLean, Lizzie Wilson, and Abhinay Khoparzi - This legendary collaboration among the 3 pioneering artists took coding from the obscurities of a screen to the dance floor." 
                        placement={"auto"} padding="2vw"maxWidth={["50vw","20vw"]} fontSize={["2.75vw","1vw"]} backgroundColor={"#00F7FF"} color="black" font-fontFamily={"Roboto"}>
                        <Image onMouseEnter={() => setIsLabelOpen1(true)}
                                onMouseLeave={() => setIsLabelOpen1(false)}
                                onClick={() => setIsLabelOpen1(true)} 
                                 src={Four} boxSize={["50vw","25vw"]} objectFit={"cover"}></Image>
                       </Tooltip>
                   </SwiperSlide>
                   <SwiperSlide>
                   <Tooltip isOpen={isLabelOpen2} 
                       label="ALGORAVE | Presented by Reverb Alex McLean, Lizzie Wilson, and Abhinay Khoparzi - This legendary collaboration among the 3 pioneering artists took coding from the obscurities of a screen to the dance floor." 
                        placement="auto" padding="2vw" maxWidth={["50vw","20vw"]} fontSize={["2.75vw","1vw"]} backgroundColor={"#00F7FF"} color="black" font-fontFamily={"Roboto"}>
                        <Image onMouseEnter={() => setIsLabelOpen2(true)}
                                onMouseLeave={() => setIsLabelOpen2(false)}
                                onClick={() => setIsLabelOpen2(true)} 
                                src={Alex} boxSize={["50vw","25vw"]} objectFit={"cover"}></Image>
                       </Tooltip>
                   </SwiperSlide>
                   <SwiperSlide>
                   <Tooltip isOpen={isLabelOpen3} 
                       label="REVERB ft. Dyskinetic | Shaastra Juniors 2021 The show introduced MiMu gloves to the young technophiles out there with spooky soundtracks." 
                        placement="auto" padding="2vw" maxWidth={["55vw","25vw"]} fontSize={["2.75vw","1vw"]} backgroundColor={"#00F7FF"} color="black" font-fontFamily={"Roboto"}>
                        <Image onMouseEnter={() => setIsLabelOpen3(true)}
                                onMouseLeave={() => setIsLabelOpen3(false)}
                                onClick={() => setIsLabelOpen3(true)} 
                                src={Dyskenetic} boxSize={["50vw","25vw"]} objectFit={"cover"}></Image>
                       </Tooltip>
                   </SwiperSlide>
                   <SwiperSlide>
                   <Tooltip isOpen={isLabelOpen5} 
                       label="ALGORAVE | Presented by Reverb Alex McLean, Lizzie Wilson, and Abhinay Khoparzi - This legendary collaboration among the 3 pioneering artists took coding from the obscurities of a screen to the dance floor." 
                        placement="auto" padding="2vw" maxWidth={["50vw","20vw"]} fontSize={["2.75vw","1vw"]} backgroundColor={"#00F7FF"} color="black" font-fontFamily={"Roboto"}>
                        <Image onMouseEnter={() => setIsLabelOpen5(true)}
                                onMouseLeave={() => setIsLabelOpen5(false)}
                                onClick={() => setIsLabelOpen5(true)} 
                                src={Lizzie} boxSize={["50vw","25vw"]} objectFit={"cover"}></Image>
                       </Tooltip>
                   </SwiperSlide>
                   <SwiperSlide>
                   <Tooltip isOpen={isLabelOpen4} 
                       label="THEREMIN | Presented by Reverb Performed by Grégoire Blanc Creating music never felt so magical, the crowd was enthralled as Blanc wove music from thin air." 
                        placement="auto" padding="2vw" maxWidth={["50vw","20vw"]} fontSize={["2.75vw","1vw"]} backgroundColor={"#00F7FF"} color="black" font-fontFamily={"Roboto"}>
                        <Image onMouseEnter={() => setIsLabelOpen4(true)}
                                onMouseLeave={() => setIsLabelOpen4(false)}
                                onClick={() => setIsLabelOpen4(true)} 
                                src={Blanc} boxSize={["50vw","25vw"]} objectFit={"cover"}></Image>
                       </Tooltip>
                   </SwiperSlide>
               </Swiper>
              </Box>
               </Flex>
              
               {/* <Flex
                 backgroundColor={"black"}
                 padding={"4vh 0"}
                 height="fit-content" width="100vw"
                 flexDirection={"column"} justifyContent={"center"} alignItems={"center"}
               >
                   <Flex
                    width={["90%","70%"]} margin="auto" marginBottom={"4vh"} paddingTop={"4vh"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                   >
                       <Tooltip isOpen={isLabelOpen7} 
                       label="ALGORAVE | Presented by Reverb Alex McLean, Lizzie Wilson, and Abhinay Khoparzi - This legendary collaboration among the 3 pioneering artists took coding from the obscurities of a screen to the dance floor." 
                        placement="right" padding="2vw"maxWidth={["50vw","20vw"]} fontSize={["2.75vw","1vw"]} backgroundColor={"#00F7FF"} color="black" font-fontFamily={"Roboto"}>
                        <Image onMouseEnter={() => setIsLabelOpen7(true)}
                                onMouseLeave={() => setIsLabelOpen7(false)}
                                onClick={() => setIsLabelOpen7(true)} 
                                borderRadius={'24px'} src={Four} boxSize={["35vw","25vw"]} objectFit={"cover"}></Image>
                       </Tooltip>
                       <Tooltip isOpen={isLabelOpen8} 
                       label="ALGORAVE | Presented by Reverb Alex McLean, Lizzie Wilson, and Abhinay Khoparzi - This legendary collaboration among the 3 pioneering artists took coding from the obscurities of a screen to the dance floor." 
                        placement="right" padding="2vw" maxWidth={["50vw","20vw"]} fontSize={["2.75vw","1vw"]} backgroundColor={"#00F7FF"} color="black" font-fontFamily={"Roboto"}>
                        <Image onMouseEnter={() => setIsLabelOpen8(true)}
                                onMouseLeave={() => setIsLabelOpen8(false)}
                                onClick={() => setIsLabelOpen8(true)} 
                                borderRadius={'24px'} src={Alex} boxSize={["35vw","25vw"]} objectFit={"cover"}></Image>
                       </Tooltip>
                   </Flex>
                   <Flex
                    width={["90%","70%"]} margin="auto" marginBottom={"4vh"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                   >
                       <Tooltip isOpen={isLabelOpen9} 
                       label="REVERB ft. Dyskinetic | Shaastra Juniors 2021 The show introduced MiMu gloves to the young technophiles out there with spooky soundtracks." 
                        placement="right" padding="2vw" maxWidth={["55vw","25vw"]} fontSize={["2.75vw","1vw"]} backgroundColor={"#00F7FF"} color="black" font-fontFamily={"Roboto"}>
                        <Image onMouseEnter={() => setIsLabelOpen9(true)}
                                onMouseLeave={() => setIsLabelOpen9(false)}
                                onClick={() => setIsLabelOpen9(true)} 
                                borderRadius={'24px'} src={Dyskenetic} boxSize={["35vw","25vw"]} objectFit={"cover"}></Image>
                       </Tooltip>
                       <Tooltip isOpen={isLabelOpen10} 
                       label="ALGORAVE | Presented by Reverb Alex McLean, Lizzie Wilson, and Abhinay Khoparzi - This legendary collaboration among the 3 pioneering artists took coding from the obscurities of a screen to the dance floor." 
                        placement="right" padding="2vw" maxWidth={["50vw","20vw"]} fontSize={["2.75vw","1vw"]} backgroundColor={"#00F7FF"} color="black" font-fontFamily={"Roboto"}>
                        <Image onMouseEnter={() => setIsLabelOpen10(true)}
                                onMouseLeave={() => setIsLabelOpen10(false)}
                                onClick={() => setIsLabelOpen10(true)} 
                                borderRadius={'24px'} src={Lizzie} boxSize={["35vw","25vw"]} objectFit={"cover"}></Image>
                       </Tooltip>
                   </Flex>
               </Flex> */}
               <Flex with="100vw"  justifyContent={"center"} padding="2vw" margin="0"
                id="contact" height={["5vh","15vh"]} position={"relative"} 
               >
                    <Image src={ContactBg} width="110vw" height={["5vh","15vh"]} position="absolute" top="0" left="0%" objectFit={"cover"}></Image>
                    <Box zIndex="2" width="100vw" padding="auto" fontSize={["3.5vw","2vw"]} fontFamily={"Montserrat"}> <b>Contact Shaastra Nights:</b> shows@shaastra.org</Box>
               </Flex>
           </Stack>
           <Footer designed={[{ name: 'Krithikaa', mail: 'be20b020@smail.iitm.ac.in' }]} ></Footer>   
       </CustomBox>
    )
}

export default Shows