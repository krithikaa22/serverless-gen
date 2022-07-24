import React, { useState } from "react";
import {
  useCreateTeamandRegisterMutation,
  useRegisterMutation,
} from "../../../generated/graphql";
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
import { useHistory } from "react-router-dom";


const RegisterNow = ({ isAdmin, data }) => {
  const [register, { data: data1, error, loading }] = useRegisterMutation();
  const [members, setMembers] = React.useState<string[]>([]);
  const [teamname, setTeamname] = React.useState<string>();
  const buttoncolor = useColorModeValue("#ea8a94", "white");
  var { isOpen, onOpen, onClose } = useDisclosure();
  const [radio, setRadio] = useState("i");

  if (radio === "t" && members.length === 0) {
    setMembers([""]);
  }

  const handleMembersInput = ({
    index,
    event,
  }: {
    index: number;
    event: React.ChangeEvent<HTMLInputElement>;
  }) => {
    const values = [...members];

    values[index] = event.target.value;
    setMembers(values);
  };
  const IndividualReg = async (eventId: string) => {
    await register({
      variables: {
        EventID: eventId,
      },
    }).catch((err) => console.log(err.message));
  };
  const history = useHistory();

  const [teamreg, { data: data2, loading: loading2, error: error2 }] =
    useCreateTeamandRegisterMutation();
  const Teamregistration = async (eventID: string) => {
    if (data.id === "ckxcweoy60013y6p76ppx07rt") {
      const accept = prompt(
        'Privacy Policy : \n The data or the problem that is being shared under HackOlympics 2.0 shall not be shared or reused by the participants or stakeholders with anyone or any third party without prior written permission of MTX. The breach of this clause shall be considered a direct dispute between the violating individual and MTX, and is liable to legal action from MTX.\n \n Please type "Agree" without quotes'
      );
      if (accept?.toLowerCase() === "agree") {
        await teamreg({
          variables: {
            createTeamAndRegisterData: {
              eventID,
              name: teamname!,
              members,
            },
          },
        }).catch((err) => console.log(err.message));
      } else {
        alert("Please agree the privacy policy");
      }
    } else {
      await teamreg({
        variables: {
          createTeamAndRegisterData: {
            eventID,
            name: teamname!,
            members,
          },
        },
      }).catch((err) => console.log(err.message));
    }
  };

  if (loading || loading2) {
    onClose = () => {
      window.location.reload();
    };
    return (
      <Modal isOpen={true} onClose={onClose}>
        <ModalOverlay />
        <ModalContent backgroundColor="#e2e19c" color="black">
          <ModalHeader>Loading...</ModalHeader>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    );
  }

  if (data1?.register.registered || data2) {
    onClose = () => {
      window.location.reload();
    };
    return (
      <Modal isOpen={true} onClose={onClose}>
        <ModalOverlay />
        <ModalContent backgroundColor="#addfd0" color="black">
          <ModalHeader>Registered Successfully</ModalHeader>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    );
  }

  if (error || error2) {
    error
      ? (onClose = () => {
          if (error.message === "Please login to continue") {
            history.push("/login");
          }
          window.location.reload();
        })
      : (onClose = () => {
          window.location.reload();
        });
    return (
      <Modal isOpen={true} onClose={onClose}>
        <ModalOverlay />
        <ModalContent backgroundColor="#f1aaaa" color="black">
          <ModalHeader>{error ? error.message : error2?.message}</ModalHeader>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    );
  }

  return (
    <div>
      {!isAdmin ? (
        data.registrationType === "NONE" ? (
          <Box marginRight={"2vw"} marginTop="2vh" height="1vw">
            <Alert status="info" size={"xs"}>
              <AlertIcon />
              Registration is not required for this event
            </Alert>
          </Box>
        ) : (
          <Box
            marginRight={"2vw"}
            marginTop="2vh"
            height={[
              "fit-content",
              "fit-content",
              "fit-content",
              "fit-content",
            ]}
          >
            <Button
              backgroundColor={"rgb(171, 228, 156)"}
              color="black"
              padding={["0.5vw", "0.5vw", "0.5vw", "1.25vw"]}
              fontSize={["2vw", "2vw", "2vw", "1vw"]}
              onClick={
                data.registrationType === "INDIVIDUAL"
                  ? () => {
                      IndividualReg(data.id);
                    }
                  : onOpen
              }
            >
              REGISTER NOW
            </Button>
          </Box>
        )
      ) : null}
      <Modal isOpen={isOpen} onClose={onClose}>
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
                <Radio value="i" marginRight="2vw">
                  Register as Individual
                </Radio>
                <Radio value="t">Register as Team</Radio>
              </RadioGroup>
            </FormControl>
            <FormControl marginTop="1.5vh" isRequired>
              <FormLabel>Team Name</FormLabel>
              <Input
                type="text"
                value={teamname}
                onChange={(e) => setTeamname(e.target.value)}
              ></Input>
              {radio === "t" ? (
                <React.Fragment>
                  <FormLabel marginTop="1.5vh">
                    Team Members Shaastra IDs
                  </FormLabel>
                  {members.map((member, index) => {
                    return (
                      <React.Fragment key={index}>
                        <Flex width={"100%"}>
                          <FormControl isRequired>
                            <Flex width="100%" justifyContent="space-between">
                              <Input
                                id={"member" + index}
                                placeholder={`Team Member ${
                                  index + 1
                                } Shaastra ID`}
                                required
                                onChange={(event) =>
                                  handleMembersInput({ index, event })
                                }
                              ></Input>
                            </Flex>
                          </FormControl>

                          <Flex p={[0, 3]} flexDirection={["column", "row"]}>
                            {index === 0 ? null : (
                              <Button
                                mx={2}
                                my={1}
                                size={"xs"}
                                onClick={() => {
                                  const values = [...members];
                                  values.splice(index, 1);
                                  setMembers(values);
                                }}
                              >
                                <MinusIcon />
                              </Button>
                            )}
                            {index >= data.teamSize - 2 ? null : (
                              <Button
                                mx={2}
                                my={1}
                                size={"xs"}
                                onClick={() => {
                                  if (members.length < data.teamSize - 1) {
                                    setMembers([...members, ""]);
                                  }
                                }}
                              >
                                <AddIcon />
                              </Button>
                            )}
                          </Flex>
                        </Flex>
                      </React.Fragment>
                    );
                  })}
                  <FormLabel>Max team size :{data.teamSize}</FormLabel>
                </React.Fragment>
              ) : null}
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => Teamregistration(data.id)}
            >
              Register
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default RegisterNow;
