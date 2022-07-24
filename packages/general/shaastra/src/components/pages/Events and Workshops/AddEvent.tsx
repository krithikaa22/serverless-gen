import * as React from "react";
import {
  Text,
  Stack,
  Flex,
  Link,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Image,
  Button,
  Select,
  RadioGroup,
  Radio,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import CustomBox from "../../shared/CustomBox";
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "../../../styles/Events.css";

import bg from "../../../images/EventsWorkshops/events/bg.jpeg";
import {
  GetEventsDocument,
  RegistraionType,
  useAddEventMutation,
  useCreateEventFaqMutation,
} from "../../../generated/graphql";

import AWS from "aws-sdk";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    directory?: string;
    webkitdirectory?: string;
    moxdirectory?: string;
  }
}

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

const EventAdmin = () => {
  const [value, setValue] = React.useState("Hello!");
  const [selectedTab, setSelectedTab] = React.useState<"write" | "preview">(
    "write"
  );

  const [radio, setRadio] = useState<RegistraionType>(RegistraionType.None);
  const [radioString, setRadioString] = useState("None");
  const [name, setName] = React.useState("");
  const [vertical, setVertical] = React.useState("");
  const [desp, setDesp] = React.useState("");
  const [platform, setPlatform] = React.useState("");
  const [req, setReq] = useState("");
  const [regStart, setRegStart] = useState("");
  const [regEn, setRegEnd] = useState("");
  const [eventStart, setEventStart] = useState("");
  const [eventEnd, setEventEnd] = useState("");
  const [teamSize, setTeamSize] = useState(0);
  const [participation, setParticipation] = useState("");
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [fee, setFee] = useState("");

  const setEventType = () => {
    switch (radioString) {
      case "Individual":
        setRadio(RegistraionType.Individual);
        break;
      case "Team":
        setRadio(RegistraionType.Team);
        break;
      default:
        setRadio(RegistraionType.None);
    }
  };

  const [addEventMutation, { data, loading, error }] = useAddEventMutation();
  const history = useHistory();

  var [file, setFile] = useState<File>();
  var [newFile, setNewFile] = useState<string>("");

  AWS.config.update({
    accessKeyId: "AKIA4VXHNASLCGXPQAHM",
    secretAccessKey: "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",
  });
  const myBucket = new AWS.S3({
    params: { Bucket: "shaastra" },
    region: "ap-south-1",
  });
  const UploadImageToS3WithNativeSdk = async (file: any) => {
    const params = {
      ACL: "public-read",
      Body: file,
      Bucket: "shaastra",
      Key: file.name,
    };

    await myBucket
      .putObject(params)
      .on("httpUploadProgress", (evt) => {})
      .send((err) => {
        if (err) console.log(err);
      });
  };

  var { isOpen, onOpen, onClose } = useDisclosure();

  const [faqs, setfaqs] = React.useState([{ question: "", answer: "" }]);
  const [addfaq] = useCreateEventFaqMutation();

  const handleFqsInput = ({
    index,
    event,
  }: {
    index: number;
    event: React.ChangeEvent<HTMLInputElement>;
  }) => {
    const values = [...faqs];

    if (event.target.name === "question") {
      values[index]["question"] = event.target.value;
    } else {
      values[index]["answer"] = event.target.value;
    }
    setfaqs(values);
  };

  if (data) {
    onClose = () => {
      history.push("/admin");
    };
    return (
      <Modal isOpen={true} onClose={onClose}>
        <ModalOverlay />
        <ModalContent backgroundColor="#addfd0" color="black">
          <ModalHeader>Event Added</ModalHeader>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    );
  }
  if (error) {
    onClose = () => {
      window.location.reload();
    };
    return (
      <Modal isOpen={true} onClose={onClose}>
        <ModalOverlay />
        <ModalContent backgroundColor="#f1aaaa" color="black">
          <ModalHeader>Error Occurred</ModalHeader>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    );
  }
  if (loading) {
    onClose = () => {
      history.push("/admin/add");
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

  return (
    <CustomBox>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 8 }}
        py={{ base: 20, md: 20 }}
      >
        <Heading>ADD EVENT</Heading>
        <Box
          backgroundImage={bg}
          width="100vw"
          padding="4vw"
          className="admin-add"
        >
          <Box
            backgroundImage="linear-gradient(-45deg, #ffffff98, #ffffff09)"
            borderRadius="24px"
            backdropFilter="blur(30px)"
            padding="5vw"
          >
            <Flex
              width="100%"
              justifyContent="space-between"
              alignItems="flex-end"
            >
              <FormControl>
                <FormLabel fontSize="1.5vw">Name of Event</FormLabel>
                <Input
                  type="text"
                  outline="none"
                  color="black"
                  backgroundColor="transparent"
                  borderBottom="5px solid white"
                  onChange={(e: any) => {
                    setName(e.target.value);
                  }}
                ></Input>
              </FormControl>
              <Select
                placeholder="Vertical"
                width="30vw"
                marginLeft="5vw"
                onChange={(e: any) => {
                  setVertical(e.target.value);
                }}
              >
                <option value="AEROFEST">AeroFest</option>
                <option value="BIOGEN">Biogen</option>
                <option value="BEVENTS">BEvents</option>
                <option value="CL">Coding & Logic</option>
                <option value="DB">Design & Build</option>
                <option value="ELECFEST">ElecFest</option>
                <option value="IGNITE">Ignite</option>
                <option value="STRATEGISTS">Strategists</option>
                <option value="WORKSHOPS">Workshops</option>
              </Select>
            </Flex>
            <FormControl marginTop="4vh">
              <FormLabel fontSize="1.5vw">Description</FormLabel>
              <ReactMde
                value={desp}
                onChange={setDesp}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={(markdown) => {
                  return Promise.resolve(converter.makeHtml(markdown));
                }}
              ></ReactMde>
            </FormControl>
            <Flex width="100%" marginBottom="4vh">
              <FormControl>
                <FormLabel>Platform</FormLabel>
                <Input
                  type="text"
                  outline="none"
                  color="black"
                  backgroundColor="transparent"
                  borderBottom="5px solid white"
                  onChange={(e: any) => {
                    setPlatform(e.target.value);
                  }}
                ></Input>
              </FormControl>
              <FormControl width="150%" marginLeft="2vw">
                <FormLabel>Requirements</FormLabel>
                <Input
                  type="text"
                  outline="none"
                  color="black"
                  backgroundColor="transparent"
                  borderBottom="5px solid white"
                  onChange={(e: any) => {
                    setReq(e.target.value);
                  }}
                ></Input>
              </FormControl>
            </Flex>
            <Flex width="100%" marginBottom="4vh">
              <FormControl>
                <FormLabel>Registration Start</FormLabel>
                <Input
                  type="date"
                  outline="none"
                  color="black"
                  backgroundColor="transparent"
                  borderBottom="5px solid white"
                  onChange={(e: any) => {
                    setRegStart(e.target.value);
                  }}
                  value={regStart}
                ></Input>
              </FormControl>
              <FormControl marginLeft="2vw">
                <FormLabel>Registration End</FormLabel>
                <Input
                  type="date"
                  outline="none"
                  color="black"
                  backgroundColor="transparent"
                  borderBottom="5px solid white"
                  onChange={(e: any) => {
                    setRegEnd(e.target.value);
                  }}
                ></Input>
              </FormControl>
            </Flex>
            <Flex width="100%" marginBottom="4vh">
              <FormControl>
                <FormLabel>Event Start</FormLabel>
                <Input
                  type="date"
                  outline="none"
                  color="black"
                  backgroundColor="transparent"
                  borderBottom="5px solid white"
                  onChange={(e: any) => {
                    setEventStart(e.target.value);
                  }}
                ></Input>
              </FormControl>
              <FormControl marginLeft="2vw">
                <FormLabel>Event End</FormLabel>
                <Input
                  type="date"
                  outline="none"
                  color="black"
                  backgroundColor="transparent"
                  borderBottom="5px solid white"
                  onChange={(e: any) => {
                    setEventEnd(e.target.value);
                  }}
                ></Input>
              </FormControl>
            </Flex>
            <Flex marginBottom="4vh">
              <FormControl>
                <FormLabel>Participation Points</FormLabel>
                <Input
                  type="text"
                  outline="none"
                  color="black"
                  backgroundColor="transparent"
                  borderBottom="5px solid white"
                  onChange={(e: any) => {
                    setParticipation(e.target.value);
                  }}
                ></Input>
              </FormControl>
              <FormControl marginLeft="2vw">
                <FormLabel>Winner Up points</FormLabel>
                <Input
                  type="text"
                  outline="none"
                  color="black"
                  backgroundColor="transparent"
                  borderBottom="5px solid white"
                  onChange={(e: any) => {
                    setFirst(e.target.value);
                  }}
                ></Input>
              </FormControl>
              <FormControl marginLeft="2vw">
                <FormLabel>Runner Up points</FormLabel>
                <Input
                  type="text"
                  outline="none"
                  color="black"
                  backgroundColor="transparent"
                  borderBottom="5px solid white"
                  onChange={(e: any) => {
                    setSecond(e.target.value);
                  }}
                ></Input>
              </FormControl>
              <FormControl marginLeft="2vw">
                <FormLabel>Third position points</FormLabel>
                <Input
                  type="text"
                  outline="none"
                  color="black"
                  backgroundColor="transparent"
                  borderBottom="5px solid white"
                  onChange={(e: any) => {
                    setThird(e.target.value);
                  }}
                ></Input>
              </FormControl>
            </Flex>
            <FormControl>
              <FormLabel>Upload picture</FormLabel>
              <Input
                type="file"
                outline="none"
                color="black"
                backgroundColor="transparent"
                borderBottom="5px solid white"
                onChange={(e: any) => {
                  setFile(e.target.files[0]); console.log(e.target.files[0])
                  setNewFile(`https://shaastra.s3.ap-south-1.amazonaws.com/${e.target.files[0].name}`)
                }}
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel fontSize="1.5vw">Registration fee (Enter the fee in INR)</FormLabel>
              <Input
                type="text"
                outline="none"
                color="black"
                backgroundColor="transparent"
                borderBottom="5px solid white"
                onChange={(e: any) => {
                  setFee(e.target.value);
                }}
              ></Input>
            </FormControl>
            <Flex
              alignItems="center"
              justifyContent="space-between"
              width="100%"
              className="admin-team"
            >
              <FormControl color="black" marginTop="4vh">
                <RadioGroup
                  onChange={(e: any) => {
                    switch (e) {
                      case "Individual":
                        setRadio(RegistraionType.Individual);
                        break;
                      case "Team":
                        setRadio(RegistraionType.Team);
                        break;
                      default:
                        setRadio(RegistraionType.None);
                    }
                  }}
                >
                  <Radio value="Individual" marginRight="2vw">
                    Individual
                  </Radio>
                  <Radio value="Team" marginRight="2vw">
                    Team
                  </Radio>
                  <Radio value="None">None</Radio>
                </RadioGroup>
              </FormControl>
              {radio === RegistraionType.Team && (
                <FormControl marginTop="4vh" width="10vw">
                  <FormLabel color="black">Team size</FormLabel>
                  <Input
                    type="number"
                    outline="none"
                    color="black"
                    backgroundColor="transparent"
                    borderBottom="5px solid white"
                    onChange={(e: any) => {
                      setTeamSize(parseInt(e.target.value));
                    }}
                  ></Input>
                </FormControl>
              )}
            </Flex>
            <Flex p={2}>
              <Heading size={"md"} m={2}>
                Add Fqs{" "}
              </Heading>
            </Flex>
            {faqs.map((faq, index) => {
              return (
                <React.Fragment key={index}>
                  <Flex p={2}>
                    <FormControl m={2}>
                      <Input
                        name="question"
                        placeholder={"Question"}
                        id={"faqq" + index}
                        outline="none"
                        color="black"
                        backgroundColor="transparent"
                        borderBottom="5px solid white"
                        value={faq.question}
                        onChange={(event) => handleFqsInput({ index, event })}
                      />
                    </FormControl>
                    <FormControl m={2}>
                      <Input
                        name="answer"
                        placeholder={"Answer"}
                        onChange={(event) => handleFqsInput({ index, event })}
                        id={"faqa" + index}
                        outline="none"
                        color="black"
                        backgroundColor="transparent"
                        borderBottom="5px solid white"
                        value={faq.answer}
                      />
                    </FormControl>
                    <Flex
                      p={[0, 3]}
                      width={"40px"}
                      flexDirection={["column", "row"]}
                    >
                      {index === 0 ? null : (
                        <Button
                          mx={2}
                          my={1}
                          size={"xs"}
                          onClick={() => {
                            const values = [...faqs];
                            values.splice(index, 1);
                            setfaqs(values);
                          }}
                        >
                          <MinusIcon />
                        </Button>
                      )}
                      <Button
                        mx={2}
                        my={1}
                        size={"xs"}
                        onClick={() =>
                          setfaqs([...faqs, { question: "", answer: "" }])
                        }
                      >
                        <AddIcon />
                      </Button>
                    </Flex>
                  </Flex>
                </React.Fragment>
              );
            })}
            <Button
              marginTop="4vh"
              width="100%"
              backgroundColor="white"
              color="#0e101b"
              onClick={async (e: any) => {
                e.preventDefault();
                console.log(file);
                if( fee != "0" && !parseInt(fee)){
                  alert("Enter a valid registration fee")
                }else{
                try {
                  if(newFile !== '') await UploadImageToS3WithNativeSdk(file)
                  await addEventMutation({
                    variables: {
                      data: {
                        name: name,
                        description: desp,
                        eventTimeFrom: eventStart ? new Date(eventStart).toDateString() : null,
                        eventTimeTo: eventEnd ? new Date(eventEnd).toDateString(): null,
                        registrationType: radio,
                        platform: platform,
                        requirements: req,
                        vertical: vertical,
                        pic: newFile,
                        finalistst: "",
                        firstplace: first,
                        participation: participation,
                        secondplace: second,
                        thirdplace: third,
                        teamSize: teamSize,
                        registrationCloseTime: regEn ?new Date(regEn).toDateString() : null,
                        registrationOpenTime: regStart ? new Date(regStart).toDateString() : null,
                        registrationfee: fee,
                      },
                    },
                    refetchQueries: [
                      {
                        query: GetEventsDocument,
                        variables: { getEventsFilter: vertical },
                      },
                    ],
                  }).then((res) => {
                    if (res.data?.addEvent.id) {
                      faqs.map(async (faq) => {
                        await addfaq({
                          variables: {
                            id: res.data?.addEvent.id!,
                            data: {
                              question: faq.question,
                              answer: faq.answer,
                            },
                          },
                        }).catch((err) => console.log(error));
                      });
                    }
                  });
                } catch (err) {
                  console.log(err);
                }
              }
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Stack>
    </CustomBox>
  );
};

export default EventAdmin;
