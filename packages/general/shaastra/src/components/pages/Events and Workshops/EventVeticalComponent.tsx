import * as React from "react";
import {
  Text,
  Stack,
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
  Alert,
  AlertIcon,
  Center,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useState } from "react";
import CustomBox from "../../shared/CustomBox";
import Footer from "../../shared/Footer";
import bg from "../../../images/EventsWorkshops/events/bg.jpeg";
import {
  useCreateTeamandRegisterMutation,
  useRegisterMutation,
} from "../../../generated/graphql";
import { useHistory } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import RegisterNow from "./RegisterNow";
import Showdown from "showdown";
import PayRegister from "./PayRegister";

const EventVerticalComponent = ({ data, isAdmin }: any) => {
  const converter = new Showdown.Converter();

  // var { isOpen, onOpen, onClose } = useDisclosure()

  const search = useColorModeValue("border", "noBorder");
  const font = useColorModeValue("black", "white");
  const gradient = useColorModeValue("blackG", "whiteG");
  const button = useColorModeValue("dark", "light");

  const [islarge, setLarge] = useState(false);
  const [referenceCode, setReferenceCode] = useState("");
  // const [courseName, setCourseName] = useState("");
  // const ReferelCode = (e) => {
  //   setReferenceCode(e.target.value);
  //   let datas = e.target.value;
  //   sessionStorage.setItem("referalcode",`${datas}`);
  // }
  // const CourseNameCode = (e) => {
  //   setCourseName(e.target.value);
  //   let datas = e.target.value;
  //   sessionStorage.setItem("coursename",`${datas}`);
  // }
  React.useEffect(() => {
    if (window.innerWidth < 900) {
      setLarge(false);
      
    } else {
      setLarge(true);
    }
  }, []);
  // const [radio, setRadio] = useState("i")
  // const [register, {data : data1,error,loading}] = useRegisterMutation();
  // const IndividualReg = async (eventId : string) =>{

  //     await register({
  //         variables : {
  //             EventID : eventId
  //         }
  //     })
  //     .catch(err => console.log(err.message))

  // }

  // const [members, setMembers] = React.useState<string[]>([]);
  // const [teamname, setTeamname] = React.useState<string>();

  // const handleMembersInput = ({ index, event }: { index: number, event: React.ChangeEvent<HTMLInputElement> }) => {
  //     const values = [...members];

  //     values[index] = event.target.value
  //     setMembers(values)
  // }
  // const [teamreg,{data:data2, loading:loading2,error : error2}] = useCreateTeamandRegisterMutation();

  // const Teamregistration = async (eventID : string)=>{
  //     await teamreg({
  //         variables : {
  //            createTeamAndRegisterData : {
  //                eventID,
  //                name : teamname!,
  //                members
  //            }
  //         }
  //     }).catch(err => console.log(err.message))
  // }

  // if(radio === "t" && members.length === 0){
  //     setMembers([''])
  // }

  const buttoncolor = useColorModeValue("#ea8a94", "white");

  const history = useHistory();
  // if(data1 || data2)
  // {
  //     onClose = () => {window.location.reload()}
  //     return(
  //         <Modal isOpen={true} onClose={onClose}>
  //             <ModalOverlay />
  //             <ModalContent backgroundColor="#addfd0" color="black">
  //                 <ModalHeader>Registrated Successfully</ModalHeader>
  //                 <ModalCloseButton />
  //              </ModalContent>
  //         </Modal>
  //     )
  // }
  // if(error || error2)
  // {
  //     error? onClose = () => {
  //         if(error.message === "Please login to continue"){
  //             history.push('/login')
  //         }
  //         window.location.reload()
  //     } : onClose = () => {window.location.reload()}
  //     return(
  //         <Modal isOpen={true} onClose={onClose}>
  //             <ModalOverlay />
  //             <ModalContent backgroundColor="#f1aaaa" color="black">
  //                 <ModalHeader>{error ? error.message : error2?.message}</ModalHeader>
  //                 <ModalCloseButton />
  //              </ModalContent>
  //         </Modal>
  //     )
  // }
  // if(loading || loading2)
  // {
  //     onClose = () => {window.location.reload()}
  //     return(
  //         <Modal isOpen={true} onClose={onClose}>
  //             <ModalOverlay />
  //             <ModalContent backgroundColor="#e2e19c" color="black">
  //                 <ModalHeader>Loading...</ModalHeader>
  //                 <ModalCloseButton />
  //              </ModalContent>
  //         </Modal>
  //     )
  // }

  const description = (
    <ReactMarkdown
      children={data?.description!}
      remarkPlugins={[remarkGfm]}
    ></ReactMarkdown>
  );

  return (
    <Box minHeight={"15vw"} m={2} p={2}>
      <Stack spacing={8}>
        <Box className="event-main-box" minHeight={"15vh"}>
          <Flex
            width={["90vw", "90vw", "90vw", "80vw"]}
            margin="auto"
            alignItems={"center"}
            justifyContent="space-evenly"
            marginBottom="2vh"
            height="fit-content"
            className="vertical-events-flex"
          >
            {/* <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <Box position="relative" boxSize="15vw">
                                        <Image src={data.pic ? data.pic : bg} boxSize="15vw" borderRadius="24px"></Image>
                                        <Box content="" position="absolute" top="0.5vw" left="0.5vw" borderRadius="24px"
                                        opacity="0.7" backgroundImage="linear-gradient(45deg, white, #ffffff00)" 
                                        boxSize="14vw" className="glass"></Box>
                                        <Flex boxSize="15vw" alignItems="center" justifyContent="center" position="absolute" top="0" className="event-name">
                                            <Text width="10vw" fontWeight="bold" color="black">{data?.name}</Text>
                                        </Flex>
                                    </Box>
                                </div>
                                <div className="flip-card-back">
                                    <Box width="15vw" padding="2vw" backgroundColor={buttoncolor} color="black" height="15vw" borderRadius="24px">
                                        <Heading as="h4" size={"sm"}>Points Distribution</Heading>
                                        <Flex justifyContent="space-between">
                                            <Text>1ST</Text>
                                            <Text>{data.firstplace}</Text>
                                        </Flex>
                                        <Flex justifyContent="space-between">
                                            <Text>2ND</Text>
                                            <Text>{data.secondplace}</Text>
                                        </Flex>
                                        <Flex justifyContent="space-between">
                                            <Text>3RD</Text>
                                            <Text>{data.thirdplace}</Text>
                                        </Flex>
                                        <Flex justifyContent="space-between">
                                            <Text>PARTICIPATION</Text>
                                            <Text>{data.participation}</Text>
                                        </Flex>
                                    </Box>
                                </div>
                            </div>
                        </div> */}
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              flexDirection={"column"}
              position="relative"
              width={["40vw", "25vw"]}
              height="fit-content"
            >
              <Image
                src={data.pic ? data.pic : bg}
                boxSize={["30vw", "30vw", "30vw", "15vw"]}
                borderRadius="24px"
              ></Image>
              <Text
                width={["30vw", "30vw", "30vw", "15vw"]}
                fontSize={["3vw", "3vw", "3vw", "1.5vw"]}
                fontWeight="bold"
              >
                {data?.name}
              </Text>
              {/* <Box content="" position="absolute" top="0" left="0" borderRadius="24px"
                                        opacity="0.7" backgroundImage="linear-gradient(45deg, white, #ffffff00)" 
                                        boxSize="15vw" className="glass"></Box>
                                        <Flex boxSize="15vw" alignItems="center" justifyContent="center" position="absolute" top="0" className="event-name">
                                            <Text width="10vw" fontSize={"1.5vw"} fontWeight="bold" color="black">{data?.name}</Text>
                                        </Flex> */}
            </Flex>
            <Box
              height="fit-content"
              borderRadius="24px"
              width={["60%", "60%", "60%", "55vw"]}
              marginLeft="1vw"
              className="event-desp"
            >
              <Flex
                flexDirection="column"
                width="50vw"
                height="100%"
                alignItems="center"
                justifyContent="center"
                textAlign={"justify"}
              >
                <Text
                  textAlign="left"
                  width={["100%", "100%", "100%", "100%"]}
                  className={font}
                  fontSize={["10px", "10px", "lg", "lg"]}
                  borderRadius="24px"
                  padding="2vh"
                  color="white"
                  fontWeight="500"
                  backdropFilter="blur(25px)"
                >
                  <Text>
                    {islarge
                      ? converter
                        .makeHtml(description.props.children)
                        .replace(/<[^>]+>/g, "")
                        .slice(0, 400) + "...."
                      : converter
                        .makeHtml(description.props.children)
                        .replace(/<[^>]+>/g, "")
                        .slice(0, 100) + "...."}
                  </Text>
                  <Flex
                    height="fit-content"
                    width={"100%"}
                    flexDirection={["column", "column", "row", "row"]}
                    alignContent={["center"]}
                    justifyContent={["center", "center"]}
                  >
                    {!isAdmin ? (
                      data.registrationType === "NONE" ? (
                        <Box marginTop="2vh" height="1vw" marginRight={"2vw"}>
                          <Alert status="info" size={"xs"}>
                            <AlertIcon />
                            Registration is not required for this event
                          </Alert>
                        </Box>
                      ) : //    <Box marginTop="2vh"  height="1vw" >
                        //    <Button backgroundColor={buttoncolor} color='black'
                        //     onClick={
                        //         data.registrationType === "INDIVIDUAL" ? ()=>{IndividualReg(data.id)} : onOpen
                        //     }
                        //    >REGISTER NOW</Button>
                        //    </Box>
                        data.registrationfee !== "0" ? (
                          data.vertical !== "WORKSHOPS" && <PayRegister isAdmin={isAdmin} data={data!} />
                        ) : (
                          data.vertical !== "WORKSHOPS" && <RegisterNow isAdmin={isAdmin} data={data} />
                        )
                    ) : null}
                    <Box marginTop="2vh" height="1vw">
                      <Button
                        fontSize={["3vw", "3vw", "3vw", "1vw"]}
                        padding={["1vw", "1.25vw"]}
                        backgroundColor={"white"}
                        border="2px solid black"
                        color="black"
                        onClick={() => {
                          history.push(`/eventpage/${data.id}`);
                        }}
                      >
                        View Details
                      </Button>
                    </Box>
                  </Flex>
                  {/* <Flex marginTop="2vh" height="7vh" flexDirection={'row'}>
                    <Text>Have Referal Code ?</Text>
                    <Input
                      id="referal"
                      width={'10px'}
                      marginLeft={'18px'}
                      border="2px solid black"
                      height={'19px'}
                      placeholder="Enter Referal Code"
                      onChange={ReferelCode}
                    >
                    </Input>
                    <Input
                      id="referal"
                      width={'10px'}
                      marginLeft={'18px'}
                      border="2px solid black"
                      height={'19px'}
                      placeholder="Enter Course Name"
                      onChange={CourseNameCode}
                    >
                    </Input>
                  </Flex> */}

                  {/* <Modal isOpen={isOpen} onClose={onClose}>
                                            <ModalOverlay />
                                            <ModalContent>
                                            <ModalHeader>Team Registration for {data.name}</ModalHeader>
                                            <ModalCloseButton />
                                            <ModalBody>
                                                <FormControl>
                                                    <FormLabel>Your Shaastra ID</FormLabel>
                                                    <Input type="text"></Input>
                                                </FormControl>
                                                <FormControl marginTop="4vh">
                                                    <RadioGroup onChange={setRadio} value={radio}>
                                                        <Radio value="i" marginRight="2vw">Register as Individual</Radio>
                                                        <Radio value="t">Register as Team</Radio>
                                                    </RadioGroup>
                                                </FormControl>
                                                    <FormControl marginTop="1.5vh" isRequired>
                                                        <FormLabel>Team Name</FormLabel>
                                                        <Input type="text" value={teamname} onChange={e => setTeamname(e.target.value)}></Input>
                                                        {
                                                            radio === "t" ? (
                                                        <React.Fragment>
                                                        <FormLabel marginTop="1.5vh">Team Members Shaastra IDs</FormLabel>
                                                        {
                                                            members.map((member, index) => {
                                                                return (
                                                                    <React.Fragment key={index}>
                                                                        <Flex width={'100%'}  >
                                                                            <FormControl isRequired>

                                                                                <Flex width="100%" justifyContent="space-between">
                                                                                <Input  id={"member" + index} placeholder={`Team Member ${index+1} Shaastra ID`} required
                                                                                 onChange={(event) => handleMembersInput({ index, event })} 
                                                                                ></Input>
                                                                                </Flex>
                                                                            </FormControl>

                                                                    <Flex p={[0, 3]} flexDirection={['column', 'row']}>
                                                                        {
                                                                            index === 0 ? null : (
                                                                                <Button mx={2} my={1} size={'xs'}
                                                                                    onClick={() => {
                                                                                        const values = [...members];
                                                                                        values.splice(index, 1)
                                                                                        setMembers(values)
                                                                                    }}
                                                                                ><MinusIcon /></Button>)}
                                                                        {
                                                                            index >= data.teamSize - 2 ? null : (
                                                                                <Button mx={2} my={1} size={'xs'}
                                                                                    onClick={() => {
                                                                                        if (members.length < data.teamSize - 1) {
                                                                                            setMembers([...members, ''])
                                                                                        }
                                                                                    }
                                                                                    }
                                                                                ><AddIcon /></Button>
                                                                            )
                                                                        }
                                                                     
                                                                    </Flex>
                                                                </Flex>
                                                                        </React.Fragment>)
                                                                })
                                                                }
                                                                <FormLabel>Max team size :{data.teamSize}</FormLabel>
                                                                </React.Fragment>
                                                            ) : null
                                                        }
                                                       
                                                    </FormControl>
                                                
                                            </ModalBody>

                                            <ModalFooter>
                                                <Button colorScheme='blue' mr={3} onClick={()=>Teamregistration(data.id)}>
                                                 Register
                                                </Button>
                                            </ModalFooter>
                                            </ModalContent>
                                        </Modal> */}
                </Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};

export default EventVerticalComponent;
