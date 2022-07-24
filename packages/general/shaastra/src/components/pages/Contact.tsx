import React from "react"
import Footer from "../shared/Footer"
import CustomBox from "../shared/CustomBox"

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

import "../../styles/App.css"
import ContactBg from "../../images/ContactBg.png"

const Contact = () => {
    return(
        <CustomBox>
            <Flex className="contact-main" overflowX={"hidden"} width="100vw" padding={["20vw 0 0 0","4vw 0 0 0"]} justifyContent={"space-between"} flexDirection={["column", "row"]} alignItems={"center"}>
                <Flex overflowX={"hidden"} paddingLeft={"2vw"} flexDirection={"column"} width="50%" alignItems={"center"}>
                    <Heading fontSize={["6vw","3vw"]} marginBottom={"4vh"}>CONTACT US</Heading>

                    {/* english */}

                    <Flex width="50vw" paddingBottom={"6vh"} flexDirection={"column"} alignItems={"center"}>
                        <Text color="#A0AEC0" fontWeight={"500"} fontSize={["6vw","2vw"]}>English</Text>
                        <Flex width={["90vw","50vw"]} justifyContent={"space-evenly"}>
                            <Flex flexDirection={"column"}>
                                <Text fontWeight={"bold"} fontSize={["4vw","1.5vw"]}>Poojitha</Text>
                                <Text fontSize={["4vw","1.5vw"]}> <a href={"http://wa.me/+917019180917"} target="_blank"><p>+91 70191 80917</p></a></Text>
                            </Flex>
                            <Flex flexDirection={"column"}>
                                <Text fontWeight={"bold"} fontSize={["4vw","1.5vw"]}>Joshik</Text>
                                <Text fontSize={["4vw","1.5vw"]}>  <a href={"http://wa.me/+918825601711"} target="_blank"><p>+91 88256 01711</p></a></Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    
                    {/* tamil */}

                    <Flex width={["90vw","50vw"]} paddingBottom={"6vh"} flexDirection={"column"} alignItems={"center"} >
                        <Text color="#A0AEC0" fontWeight={"500"} fontSize={["6vw","2vw"]}>Tamil</Text>
                        <Flex width={["90vw","50vw"]} justifyContent={"space-evenly"}>
                            <Flex flexDirection={"column"}>
                                <Text fontWeight={"bold"} fontSize={["4vw","1.5vw"]}>Mohan</Text>
                                <Text fontSize={["4vw","1.5vw"]}><a href={"http://wa.me/+919952729095"} target="_blank"><p>+91 99527 29095</p></a></Text>
                            </Flex>
                            <Flex flexDirection={"column"}>
                                <Text fontWeight={"bold"} fontSize={["4vw","1.5vw"]}>Vishwa</Text>
                                <Text fontSize={["4vw","1.5vw"]}> <a href={"http://wa.me/+919952180821"} target="_blank"><p>+91 99521 80821</p></a></Text>
                            </Flex>
                        </Flex>
                    </Flex>

                    {/* hindi */}

                    <Flex width={["90vw","50vw"]} paddingBottom={"6vh"} flexDirection={"column"} alignItems={"center"} >
                        <Text color="#A0AEC0" fontWeight={"500"} fontSize={["6vw","2vw"]}>Hindi</Text>
                        <Flex width={["90vw","50vw"]} justifyContent={"space-evenly"}>
                            <Flex flexDirection={"column"}>
                                <Text fontWeight={"bold"} fontSize={["4vw","1.5vw"]}>Ankit</Text>
                                <Text fontSize={["4vw","1.5vw"]}><a href={"http://wa.me/+917488701168"} target="_blank"><p>+91 74887 01168</p></a></Text>
                            </Flex>
                            <Flex flexDirection={"column"}>
                                <Text fontWeight={"bold"} fontSize={["4vw","1.5vw"]}>Rahul</Text>
                                <Text fontSize={["4vw","1.5vw"]}> <a href={"http://wa.me/+919602032101"} target="_blank"><p>+91 96020 32101</p></a></Text>
                            </Flex>
                        </Flex>
                    </Flex>

                    {/*marathi and kannada */}

                    <Flex width={["90vw","50vw"]} paddingBottom={"6vh"} alignItems={"center"} justifyContent={"space-evenly"}>
                        <Flex flexDirection={"column"}>
                            <Text color="#A0AEC0" fontWeight={"500"} fontSize={["6vw","2vw"]}>Marathi</Text>
                            <Flex flexDirection={"column"}>
                                <Text fontWeight={"bold"} fontSize={["4vw","1.5vw"]}>Siddhivinayak</Text>
                                <Text fontSize={["4vw","1.5vw"]}> <a href={"http://wa.me/+919672025542"} target="_blank"><p>+91 96720 25542</p></a></Text>
                            </Flex>
                        </Flex>
                        <Flex flexDirection={"column"}>
                            <Text color="#A0AEC0" fontWeight={"500"} fontSize={["6vw","2vw"]}>Kannada</Text>
                            <Flex flexDirection={"column"}>
                                <Text fontWeight={"bold"} fontSize={["4vw","1.5vw"]}>Manoghna</Text>
                                <Text fontSize={["4vw","1.5vw"]}><a href={"http://wa.me/+919480318016"} target="_blank"><p>+91 94803 18016</p></a></Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    
                    {/* telugu and malayalam */}

                    <Flex width={["90vw","50vw"]} paddingBottom={"4vh"} alignItems={"center"} justifyContent={"space-evenly"}>
                        <Flex flexDirection={"column"}>
                            <Text color="#A0AEC0" fontWeight={"500"} fontSize={["6vw","2vw"]}>Telugu</Text>
                            <Flex flexDirection={"column"}>
                                <Text fontWeight={"bold"} fontSize={["4vw","1.5vw"]}>Anogna</Text>
                                <Text fontSize={["4vw","1.5vw"]}> <a href={"http://wa.me/+916305984724"} target="_blank"><p>+91 63059 84724</p></a></Text>
                            </Flex>
                        </Flex>
                        <Flex flexDirection={"column"}>
                            <Text color="#A0AEC0" fontWeight={"500"} fontSize={["6vw","2vw"]}>Malayalam</Text>
                            <Flex flexDirection={"column"}>
                                <Text fontWeight={"bold"} fontSize={["4vw","1.5vw"]}>Anshid</Text>
                                <Text fontSize={["4vw","1.5vw"]}> <a href={"http://wa.me/+917592976901"} target="_blank"><p>+91 75929 76901</p></a></Text>
                            </Flex>
                        </Flex>
                    </Flex>

                    {/* <Flex width={["90vw","50vw"]} paddingBottom={"4vh"} alignItems={"center"} justifyContent={"space-evenly"}>
                        <Flex flexDirection={"column"}>
                            <Text color="#A0AEC0" fontWeight={"500"} fontSize={["6vw","2vw"]}>Marathi</Text>
                            <Flex flexDirection={"column"}>
                                <Text fontWeight={"bold"} fontSize={["4vw","1.5vw"]}>Siddhivinayak</Text>
                                <Text fontSize={["4vw","1.5vw"]}> <a href={"http://wa.me/+919672025542"} target="_blank"><p>+91 96720 25542</p></a></Text>
                            </Flex>
                        </Flex>
                        <Flex flexDirection={"column"}>
                            <Text color="#A0AEC0" fontWeight={"500"} fontSize={["6vw","2vw"]}>Malayalam</Text>
                            <Flex flexDirection={"column"}>
                                <Text fontWeight={"bold"} fontSize={["4vw","1.5vw"]}>Anshid</Text>
                                <Text fontSize={["4vw","1.5vw"]}> <a href={"http://wa.me/+917592976901"} target="_blank"><p>+91 75929 76901</p></a></Text>
                            </Flex>
                        </Flex>
                    </Flex> */}

                </Flex>
                <Image src={ContactBg} width="50vw" objectFit={"contain"}></Image>
            </Flex>
        <Footer
          designed={[{ name: "Krithikaa", mail: "be20b020@smail.iitm.ac.in" }]}
        />
        </CustomBox>
    )
}

export default Contact