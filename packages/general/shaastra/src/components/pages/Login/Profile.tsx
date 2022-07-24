import React, { RefObject } from "react"
import {
    Text,
    Stack,
    Link,
    Flex,
    Input,
    Box,
    RadioGroup,
    Radio,
    Image,
    Button,
    useColorModeValue,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Heading,
    Center,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverArrow,
    PopoverCloseButton,
    PopoverBody,
    PopoverFooter,
    ButtonGroup,
  } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { useState } from "react";
import CustomBox from '../../shared/CustomBox'
import Footer from '../../shared/Footer';
import "../../../styles/Login.css"

import bg from "../../../images/homepage_illustrations/small ribi.png"
import bg2 from "../../../images/EventsWorkshops/events/bg.jpeg"

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Scrollbar
  } from 'swiper';
  
import 'swiper/swiper-bundle.min.css'  
import 'swiper/swiper.min.css'
import { useHistory } from "react-router";
import {RegistraionType, useLeaveTeamMutation, useMeQuery} from "../../../generated/graphql"
import moment from "moment";

SwiperCore.use([Scrollbar]);

const Profile = () => {

    const history = useHistory()
    const {data, loading, error} = useMeQuery()
    var { isOpen, onOpen, onClose } = useDisclosure()
    const [leaveteam] = useLeaveTeamMutation();
    if(loading)
        {
            onClose = () => {}
            return(
                <Modal isOpen={true} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent backgroundColor="#e2e19c" color="black">
                        <ModalHeader>Loading...</ModalHeader>
                        <ModalCloseButton />
                    </ModalContent>
                </Modal>
            )
        }
    else if(error)
    {
        if(error.message === "Please login to continue")
        {   onClose = () => {history.push("/login")}
            return(
                <Modal isOpen={true} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent backgroundColor="#f1aaaa" color="black">
                            <ModalHeader>Please login to continue</ModalHeader>
                            <ModalCloseButton />
                        </ModalContent>
                    </Modal>
            )
        }else{
            onClose = () => {history.push("/")}
            return(
                <Modal isOpen={true} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent backgroundColor="#f1aaaa" color="black">
                        <ModalHeader>Error Occurred</ModalHeader>
                        <ModalCloseButton />
                    </ModalContent>
                </Modal>
            )

        }
                
    }

    return(
        <CustomBox>
            <Stack
                    textAlign={'center'}
                    align={'center'}
                    spacing={{ base: 8, md: 8 }}
                    py={{ base: 20, md: 20 }}
                    padding="4vw"
            >
                <Heading className="profile-heading" fontSize="3.5vw">Hi! {data?.me?.name}</Heading>
                <Text>{data?.me?.shaastraID}</Text>
                <Flex width="100vw" className="profile-main-flex" alignItems="flex-start" minHeight="80vh" justifyContent="space-evenly">
                    <Flex alignSelf="flex-start" height={["fit-content","80vh"]} padding={["1vw", "0vw"]}  flexDirection="column" alignItems="center" width={["100%", "20vw"]} fontSize="1.5vw" justifyContent="space-between">
                        <Link href="/profile" color="#C2C4FF" marginBottom="2vh">Profile Details</Link>
                        <Link href="/editprofile">Edit Profile</Link>
                        <Button fontSize={["5vw","1.5vw"]} onClick={(e) => {e.preventDefault(); history.push('/signout')}} width={["fit-content","100%"]} margin="auto" backgroundColor="#DB7171">Logout</Button>
                        <Image className="profile-image" src={bg} boxSize="22vw" alignSelf="center"></Image>
                    </Flex>
                    <Flex flexDirection="column">
                        <Box width={["100%", "60vw"]} margin="auto" fontSize={["5vw","1.5vw"]} padding={["1vw", "4vw"]} borderRadius="24px" marginBottom="4vh">
                            <Flex marginBottom="4vh" textAlign="left" justifyContent="space-between" flexDirection="column">
                                    <Text>Email ID</Text>
                                    <Text width="100%" backgroundColor="#C2C4FF" color="black" padding="1vh" borderRadius="12px">{data?.me?.email}</Text>
                            </Flex>
                            <Flex marginBottom="4vh" textAlign="left" justifyContent="space-between" flexDirection="column">
                                    <Text>Mobile Number</Text>
                                    <Text width="100%" backgroundColor="#C2C4FF" color="black" padding="1vh" borderRadius="12px">{data?.me?.mobile}</Text>
                            </Flex>
                           <Flex width="100%" justifyContent="space-between" marginBottom="4vh">
                                <Flex marginBottom="4vh" width="40%" textAlign="left" justifyContent="space-between" flexDirection="column">
                                        <Text>College</Text>
                                        <Text width="100%" backgroundColor="#C2C4FF" color="black" padding="1vh" borderRadius="12px">{data?.me?.college}</Text>
                                </Flex>
                                <Flex width="40%" marginBottom="4vh" textAlign="left" justifyContent="space-between" flexDirection="column">
                                    <Text>Branch</Text>
                                    <Text width="100%" backgroundColor="#C2C4FF" color="black" padding="1vh" borderRadius="12px">{data?.me?.department}</Text>
                                </Flex>
                           </Flex>
                           <Flex marginBottom="4vh" textAlign="left" justifyContent="space-between" flexDirection="column">
                                    <Text>Address</Text>
                                    <Text width="100%" backgroundColor="#C2C4FF" color="black" padding="1vh" borderRadius="12px">{data?.me?.address}</Text>
                            </Flex>
                           <Flex width="100%" justifyContent="space-between">
                                <Flex marginBottom="4vh" width="40%" textAlign="left" justifyContent="space-between" flexDirection="column">
                                        <Text>City</Text>
                                        <Text width="100%" backgroundColor="#C2C4FF" color="black" padding="1vh" borderRadius="12px">{data?.me?.city}</Text>
                                </Flex>
                                <Flex marginBottom="4vh" width="40%" textAlign="left" justifyContent="space-between" flexDirection="column">
                                        <Text>State</Text>
                                        <Text width="100%" backgroundColor="#C2C4FF" color="black" padding="1vh" borderRadius="12px">{data?.me?.state}</Text>
                                </Flex>
                           </Flex>
                        </Box>
                        <Heading m={2} p={2}>Registered Events</Heading>
                         <Swiper
                            scrollbar={{hide: false}}
                            // slidesPerView={3}
                            spaceBetween={10}
                            breakpoints={
                                {
                                    300:{
                                        slidesPerView: 1
                                    },
                                    1000: {
                                        slidesPerView: 3
                                    }
                                }
                            }
                        >
                                              
                            {
                                data?.me?.registeredEvents.map(e => {
                                   return(
                                    e.registrationType === RegistraionType.Individual ?
                                    <SwiperSlide >
                                            <Flex flexDirection="column" alignItems="center" justifyItems={"center"} textAlign="center"
                                             color={'white'} boxShadow="5px" p={2}
                                            >
                                            <a href={`/eventpage/${e.id}`}>
                                                <Image src={e.pic! ? e.pic : bg2} height={"12.5vw"} width={"100%"} borderTopRadius={"9px"} objectFit={"cover"}></Image>
                                                <Box fontWeight={"600"} p={2}>
                                                <Text fontSize={["xl"]}>{e.name}</Text>
                                                { e.eventTimeFrom! &&
                                                    <Flex flexDirection={"column"}>
                                                    <Text>Events Starts From</Text>
                                                    <Text> {moment(parseInt(e.eventTimeFrom!)).format("MMMM Do YYYY")}</Text>
                                                    </Flex>
                                                }
                                                </Box>
                                                </a>
                                            </Flex>
                                        </SwiperSlide>
                                    :
                                    <SwiperSlide>
                                    <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                        <Flex flexDirection="column" alignItems="center" justifyItems={"center"} textAlign="center"
                                            height={"300px"} color={"white"}
                                            >
                                            <a href={`/eventpage/${e.id}`}>
                                                <Image src={e.pic!} height={"12vw"} width={"100%"} borderTopRadius={"9px"} objectFit={"fill"}></Image>
                                                </a>
                                                <Box  fontWeight={"600"} p={2}>
                                                <Text fontSize={["xl","2xl"]}>{e.name}</Text>
                                                {
                                                    e.eventTimeFrom && <Flex flexDirection={"column"}>
                                                    <Text>Events Starts From</Text>
                                                    <Text> {moment(parseInt(e.eventTimeFrom!)).format("MMMM Do YYYY")}</Text>
                                                    </Flex>
                                                }
                                                </Box>
                                                
                                            </Flex>
                                        </div>
                                        <div className="flip-card-back">
                                            <Flex  width="100%" height="100%"  alignItems="center" color={"white"} flexDirection="column">
                                                       <Text fontSize={"2xl"} pt={2} fontWeight={"700"}>Your Team</Text>
                                                       <Box m={1} p={2}>
                                                       <Text>{e.yourTeam?.name}</Text>
                                                       <Text fontSize={"2xl"} fontWeight={"700"}>Members</Text>
                                                        {
                                                            e.yourTeam?.members.map((m,index) => {
                                                                return(
                                                                    <Text>{index+1}. {m.name}</Text>                                                                )
                                                            })
                                                        }
                                                        <Popover
                                                            placement="top"
                                                            closeOnBlur={false}
                                                            trigger="hover"
                                                            >
                                                            <PopoverTrigger>
                                                            <Button height={["25px"]} color={"white"} colorScheme={"red"} p={2} position={"absolute"} bottom={"4%"} right={"4%"}
                                                            onClick={async ()=>{
                                                                await leaveteam({
                                                                    variables : {
                                                                        id : e.yourTeam?.id!
                                                                    }
                                                                }).then(res =>{
                                                                    if(res.data?.leaveTeam) {
                                                                        window.location.reload()
                                                                    }
                                                                })
                                                        }}
                                                        >Leave Team</Button>
                                                            </PopoverTrigger>
                                                            <PopoverContent
                                                                zIndex={4}
                                                                color="white"
                                                                bg="blue.800"
                                                                borderColor="blue.800"
                                                            >
                                                                <PopoverHeader pt={4} fontWeight="bold" border="0">
                                                                Are you sure you want to leave the team
                                                                </PopoverHeader>
                                                                <PopoverArrow />
                                                                <PopoverCloseButton />
                                                                <PopoverBody>
                                                                 Once you leave you wont be able to join again
                                                                </PopoverBody>
                                                            </PopoverContent>
                                                            </Popover>
                                                    

                                                       </Box>
                                            </Flex>
                                        </div>
                                    </div>
                                </div>
                                    </SwiperSlide>
                                   )
                                })
                            }
                        </Swiper>
                    </Flex>
                </Flex>
            </Stack>    
            <Footer designed={[{ name: 'Krithikaa', mail: 'be20b020@smail.iitm.ac.in' }]} ></Footer>      
        </CustomBox>
    )
}

export default Profile;