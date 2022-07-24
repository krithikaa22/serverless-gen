import * as React from "react"
import {
    Text,
    Stack, Input,
    Flex,
    Link,
    Box, Select,
    Heading,
    Image,
    Button,
    useColorModeValue,
    Center,
    FormLabel,
    Alert,
    AlertIcon
} from '@chakra-ui/react'
import { useParams } from "react-router-dom"
import CustomBox from '../../shared/CustomBox'
import Footer from '../../shared/Footer';
import CardForWorkShop from './CardForWorksShop';
import EventsData from "./EventsData";
import bg from "../../../images/EventsWorkshops/events/bg.jpg"
import EventVerticalComponent from "./EventVeticalComponent"
import { Event, useGetEventsQuery, useUpdateReferralMutation } from "../../../generated/graphql";
import bg2 from '../../../images/EventsWorkshops/events/bg2.jpg'
import '../../../styles/eventWorkshops.css';
import MayhemCombo from "./MayhemCombo";
import WorkshopRecordings from "./WorkshopRecordings";
const EventVertical = () => {

    const { name }: any = useParams()
    const desp = EventsData.filter(v => v.vertical === name)[0].desp

    const search = useColorModeValue("border", "noBorder")
    const font = useColorModeValue("black", "white")
    const gradient = useColorModeValue("blackG", "whiteG")
    const button = useColorModeValue("dark", "light")

    const { data, loading, error } = useGetEventsQuery({
        variables: {
            filter: name.toUpperCase()
        }
    })
    var events;
    var sponseve;
    var oevents
    if (data) {
        events = data?.getEvents.events;
        // var eventsShuffle = events.map((value) => ({ value, sort: Math.random() }))
        //     .sort((a, b) => a.sort - b.sort)
        //     .map(({ value }) => value)

        sponseve = events.filter((eve) =>{
            if(eve.id === "ckxezt6nt002udbp76oar48e5" || eve.id === "cky6uehup00frfsp7br7sblfn"){
                return true;
            }else{
                return false;
            }
        })
        oevents = events.filter((eve) =>{
            if(eve.id === "ckxezt6nt002udbp76oar48e5" || eve.id === "cky6uehup00frfsp7br7sblfn" || eve.id === "ckxljoxqa00639bp7gu9o1sz9"){
                return false;
            }else{
                return true;
            }
        })
    }

   
    return (
        <CustomBox>
            <Box className="events-vertical">
                <Stack
                    textAlign={'center'}
                    align={'center'}
                    spacing={{ base: 8, md: 8 }}
                    py={{ base: 20, md: 20 }}
                >
                    <Box position={"relative"} backgroundImage={bg} width="100%" height="fit-content" padding="4vw" backgroundRepeat="no-repeat" backgroundPosition="0px 50%" backgroundSize={"cover"}>
                        <Box color={"white"} content="" position={"absolute"} top="0" left="0" width={"100%"} height="100%" backgroundColor={"rgba(0, 0, 0, 0.4)"}></Box>
                        {
                            name === "aerofest" ? <Heading position={"relative"} zIndex={3} textTransform="uppercase" backdropBlur="20px" fontSize="7xl" color="white">AERO<span>FEST</span></Heading>
                                :
                                name === "cl" ? <Heading position={"relative"} zIndex={3} textTransform="uppercase" backdropBlur="20px" fontSize="7xl" color="white">Coding <span>&</span> Logic</Heading>
                                    :
                                    name === "elecfest" ? <Heading position={"relative"} zIndex={3} textTransform="uppercase" backdropBlur="20px" fontSize="7xl" color="white">ELEC<span>FEST</span></Heading>
                                        :
                                        name === "db" ? <Heading position={"relative"} zIndex={3} textTransform="uppercase" backdropBlur="20px" fontSize="7xl" color="white">Design <span>&</span> Build</Heading>
                                            :
                                            name === "workshops" ? <Heading position={"relative"} zIndex={3} textTransform="uppercase" backdropBlur="20px" fontSize="7xl" color="white">{name}</Heading>
                                                :
                                                name === "biogen" ? <Heading position={"relative"} zIndex={3} textTransform="uppercase" backdropBlur="20px" fontSize="7xl" color="white">BIO<span>GEN</span></Heading>
                                                    :
                                                    name === "bevents" ? <Heading position={"relative"} zIndex={3} textTransform="uppercase" backdropBlur="20px" fontSize="7xl" color="white">B<span>Events</span></Heading>
                                                        :
                                                        name === "ignite" ? <Heading position={"relative"} zIndex={3} textTransform="uppercase" backdropBlur="20px" fontSize="7xl" color="white">I<span>DP</span></Heading>
                                                            :
                                                            name === "strategists" ? <Heading position={"relative"} zIndex={3} textTransform="uppercase" backdropBlur="20px" fontSize="7xl" color="white">Quiz<span>zing</span></Heading>
                                                                : null
                        }
                        <Text position={"relative"} zIndex={3} color="white" width="60vw" margin="auto" className="vertical-desp" fontWeight={"700"} fontSize={"1.2vw"}>{desp}</Text>
                    </Box>
              
                    <WorkshopRecordings />
                    {/* {name === "workshops" ? (
                        <React.Fragment>
                                            <Text
                                className="rainbow"
                                p={4}
                                style={{ borderRadius: 8 }}
                                shadow="lg"
                                borderWidth="2px"
                                borderRadius="md"
                                fontWeight={"medium"}
                                fontSize={"lg"}
                                color={"gray.500"}
                                >
                                Hurry up !! Limited seats available{" "}
                                    Register Now
                                </Text>
                        <MayhemCombo isAdmin={false} combo="Mayhem Combo" />
                        <Flex width={["90%","90%","50%","50%"]}>
                        <Text
                                className="rainbow"
                                p={3}
                                style={{ borderRadius: 8 }}
                                shadow="lg"
                                borderWidth="2px"
                                borderRadius="md"
                                fontWeight={"medium"}
                                fontSize={"lg"}
                                color={"gray.500"}
                                >
                            Have a referral code ? Enter the referral code to avail a <strong>5%</strong> discount 
                            on the workshop/combo you register
                        </Text>
                        </Flex>
                        <Flex flexWrap={'wrap'} width={'100%'} justifyContent={'space-around'}>
                            <CardForWorkShop title="Dive into the world of ML with" WS1="AI and Reinforcement Learning" WS2="Zero to Hero in CV" WS3="A completer guide to Machine Learning" Price1="500" Price2="600" Price3="500" ActualPrice="1600" DiscountedPrice="1300" ComboName="AI Combo" />
                            <CardForWorkShop title="Get into amazing world of robotics with" WS1="Intro to Robotics" WS2="Path Tracking in Autonomous Vehicles" WS3="Build your own Autonomus Robot" Price1="500" Price2="500" Price3="600" ActualPrice="1600" DiscountedPrice="1300" ComboName="Robotics Combo" />
                            <CardForWorkShop title="Learn the amazing applications of Data Science with " WS1="Intro to DS with Projects" WS2="Sustainibility using ML & DS" WS3="Art of Data Visualization" Price1="500" Price2="500" Price3="500" ActualPrice="1500" DiscountedPrice="1200" ComboName="Data Science Combo" />
                            <CardForWorkShop title="Gear up your computer skills with " WS1="Intro to Cloud Computing" WS2="Hacking 101 with Microcontrollers" WS3="Making Discord bot from scratch" Price1="500" Price2="500" Price3="500" ActualPrice="1500" DiscountedPrice="1200" ComboName="Cybermatic Combo" />
                            <CardForWorkShop title="Explore the exciting world of electronics with" WS1="Intro to Arduino and ioT" WS2="Intro to Embedded system Programming" WS3="Parallel Processing and Real-time OS" Price1="500" Price2="500" Price3="600" ActualPrice="1600" DiscountedPrice="1200" ComboName="Electronic Combo" />
                            <CardForWorkShop title="Start your career in consultancy and management with" WS3="Product Management 101" WS2="Consult 101" WS1="2 Workshops" Price1="500" Price2="500" Price3="350" ActualPrice="1000" DiscountedPrice="800" ComboName="Management Workshops" />
                        </Flex>  */}
                        

                        {/* <Center flexDirection={["column","column","row","row"]} my={1} width={"50%"} p={2}>
                        <FormLabel m={2}>Referral Code :</FormLabel>
                        <Input
                            width={["100%","100%","50%","50%"]}
                            value={referral}
                            placeholder="Enter Referal Code"
                            onChange={(e) => setReferral(e.target.value)}
                            type={"text"}
                            borderBottom="5px solid white"
                            m={2}
                        />
                        <Button
                            m={1}
                            onClick={async () => {
                            console.log(REFERRAL.length)
                            if(REFERRAL.includes(referral)){
                                await updatereferral({
                                    variables : {
                                        referralcode : referral
                                    }
                                }).then(res => {
                                    if(res.data?.updateReferral){
                                        setSuccess("You can avail 5% discount on any of the workhop/combo")
                                        setRefErr("")
                                    }
                                })
                                .catch(err => setRefErr(err.message))
                            }else{
                                setRefErr("Referral code not valid")
                            }
                            
                            }
                        }
                        >
                            {" "}
                            Submit
                        </Button>
                        </Center>
                        {
                            refErr && (
                            <Alert status='error' width={"60%"} m={1}>
                            <AlertIcon />
                            {refErr}
                             </Alert>
                            )
                        }
                        {
                            success && (
                            <Alert status='success'width={"60%"} m={1}>
                            <AlertIcon />
                            {success}
                             </Alert>
                            )
                        } */}
{/* 
                        </React.Fragment>
                        
                    ) : (
                        <></>
                    )} */}
                    {/* <Flex width="100vw" justifyContent="space-evenly" alignItems="center">
                <input type="text" className={search} />
                <Button backgroundColor="white" className={search} color="black" onClick={filter}>Search</Button>
            </Flex> */}
                    {
                       sponseve && sponseve.map((event) => {
                            return (
                                <EventVerticalComponent data={event} isAdmin={false} />
                            )
                        })
                    }{
                       oevents && oevents.map((event) => {
                            if (event.vertical === "IGNITE" && event.id === "ckxdasopm0024wop7cxphcidu") return null
                            return (
                                <EventVerticalComponent data={event} isAdmin={false} />
                            )
                        })
                    }
                </Stack>
            </Box>
            <Footer designed={[{ name: 'Krithikaa', mail: 'be20b020@smail.iitm.ac.in' }]} />
        </CustomBox>
    )
}

export default EventVertical;