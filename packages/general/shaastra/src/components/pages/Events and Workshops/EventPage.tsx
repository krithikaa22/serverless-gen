import {
  Box,
  Flex,
  Stack,
  Image,
  Text,
  Button,
  Heading,
  Center,
  Container,
  useColorModeValue,
  Icon,
  FormLabel,
  Input,
  Spinner,
} from "@chakra-ui/react";
import React, { Fragment, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  GetEventDocument,
  GetEventsDocument,
  useDeleteEventFaqMutation,
  useDeleteEventMutation,
  useDeleteTimingsMutation,
  useEarlybidofferMutation,
  useExportCsvQuery,
  useGetEventQuery,
  useRecordingUsersCsvQuery,
} from "../../../generated/graphql";
import bg from "../../../images/EventsWorkshops/events/bg.jpeg";
import CustomBox from "../../shared/CustomBox";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import moment from "moment";
import EventFaqs from "./EventFaqs";
import gold from "../../../images/EventsWorkshops/events/gold.png";
import silver from "../../../images/EventsWorkshops/events/silver.png";
import bronze from "../../../images/EventsWorkshops/events/bronze.png";
import { FaTrophy } from "react-icons/fa";
import RegisterNow from "./RegisterNow";
import Loader from "../../shared/Loader";
import { CalendarIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import fileDownload from "js-file-download";
import Timeline from "./Timeline";
import PayRegister from "./PayRegister";

const EventPage = () => {
  const { id }: { id: string | undefined } = useParams();
  const [isAdmin, setAdmin] = useState(false);
  const history = useHistory();

  const { data, error, loading } = useGetEventQuery({
    variables: {
      EventID: id!,
    },
  });
  React.useEffect(() => {
    if (localStorage.getItem("role") === "Admin") {
      setAdmin(true);
    }
  }, [isAdmin]);

  const [deleteevent] = useDeleteEventMutation();
  const bgcolor = useColorModeValue("#ea8a94", "#ffffff");
  const {
    data: data1,
    error: error1,
    loading: loading1,
  } = useExportCsvQuery({
    variables: {
      EventID: id!,
    },
  });
  const {
    data: data2,
    error: error2,
    loading: loading2,
  } = useRecordingUsersCsvQuery({
    variables: {
      EventID: id!,
    },
  });
  const [deleteFaq] = useDeleteEventFaqMutation();
  const [deletetimings] = useDeleteTimingsMutation();
  let otherfields = data?.getEvent.faqs;

  otherfields = otherfields?.filter((field) => {
    if (field.question.split("field", 2).length > 1) {
      return true;
    } else return false;
  });
  const [earlybid, setEarlyBid] = useState("");
  const [earlyBid] = useEarlybidofferMutation();
  const today = new Date();
  const deadline = new Date("January 1,2022 23:59:59");
  if (error) console.log(error);
  if (loading) return <Loader />;
  const timeline =
    data?.getEvent.registrationOpenTime || data?.getEvent.eventTimeFrom;
  console.log(data?.getEvent.registrationfee);
  return (
    <CustomBox>
      <Container
        maxWidth="6xl"
        alignItems="center"
        justifyItems={"center"}
        marginBottom={5}
        paddingBottom={2}
      >
        <Center flexDirection={["column"]}>
          {
            data?.getEvent.id !== "ckxbguugt001gwdp70z7oft4v" ?
            <Image
            h={["2%", "300px", "300px"]}
            width={"auto"}
            objectFit={"contain"}
            src={data?.getEvent.pic ? data.getEvent.pic : bg}
            marginTop={"50px"}
            p={4}
            rounded={["3xl", "3xl"]}
          />
            : <></>
          }
          <Heading p={2} m={2}>
            {data?.getEvent.name}
          </Heading>
        </Center>
        <Flex
          style={{ borderRadius: 8 }}
          p={4}
          shadow="lg"
          borderWidth="2px"
          borderRadius="md"
          flexDirection={"column"}
        >
          <Text
            className="event-desc"
            fontWeight={"medium"}
            fontSize={"lg"}
            padding={2}
            color={"gray.500"}
          >
            <ReactMarkdown
              children={data?.getEvent.description!}
              remarkPlugins={[remarkGfm]}
            ></ReactMarkdown>
          </Text>

          <Flex justifyContent={"flex-end"}>
            {isAdmin ? (
              <Flex flexDirection={["column"]}>
                 {
                  data?.getEvent.registrationType=== "INDIVIDUAL" ?       
                  <Heading
                  size={"sm"}
                  padding={["0.5vw", "0.5vw", "0.5vw", "1vw"]}
                  >
                  {" "} Registered Users Count : {data?.getEvent.registeredUserCount}
                  </Heading>
                  :  <Heading
                  size={"sm"}
                  padding={["0.5vw", "0.5vw", "0.5vw", "1vw"]}
                  >
                  {" "} Registered Teams Count : {data?.getEvent.registeredTeamCount}
                  </Heading>

                 }
                <Button
                  padding={["0.5vw", "0.5vw", "0.5vw", "1.vw"]}
                  fontSize={["3vw", "3vw", "3vw", "1vw"]}
                  onClick={() => {
                    fileDownload(
                      data1?.exportCSV!,
                      `${data?.getEvent.name}_registrants.csv`
                    );
                  }}
                >
                  <EditIcon m={2} />
                  Download Registered Usersdata
                </Button>
               {data?.getEvent.vertical === "WORKSHOPS" && 
               <Flex flexDirection={'column'}>
                 <Heading
                  size={"sm"}
                  padding={["0.5vw", "0.5vw", "0.5vw", "1vw"]}
                  >
                  {" "} Recording Registrants Count : {data?.getEvent.recordingUserCount}
                  </Heading>
               <Button
                 m={2}
                  padding={["0.5vw", "0.5vw", "0.5vw", "1.vw"]}
                  fontSize={["3vw", "3vw", "3vw", "1vw"]}
                  onClick={() => {
                    fileDownload(
                      data2?.recordingUsersCSV!,
                      `${data?.getEvent.name}_recording_registrants.csv`
                    );
                  }}
                >
                  {loading2 ? <Spinner size='sm' m={2} /> : <EditIcon m={2} /> }
                  Download Recording Registrants data
                </Button>
                </Flex>
            }
              </Flex>
            ) :
             data?.getEvent.registrationfee !== "0" ? (
              data?.getEvent.vertical !== "WORKSHOPS" && <PayRegister isAdmin={isAdmin} data={data?.getEvent!} />
            ) : (
              data?.getEvent.vertical !== "WORKSHOPS" && <RegisterNow isAdmin={isAdmin} data={data?.getEvent} />
            )
            }
          </Flex>
        </Flex>

        <Center>
          {isAdmin && data?.getEvent?.vertical === "WORKSHOPS" && (
            <Flex flexDirection={"row"} m={2} width={"50%"} p={2}>
              <FormLabel mx={2}>Early Bird offer :</FormLabel>
              <Input
                width={"50%"}
                value={earlybid}
                onChange={(e) => setEarlyBid(e.target.value)}
                name="earlybidoffer"
                type={"text"}
                borderBottom="5px solid white"
              />
              <Button
                mx={2}
                onClick={async () => {
                  if (earlybid != "0" && !parseInt(earlybid)) {
                    alert("Enter a valid fee");
                  } else {
                    await earlyBid({
                      variables: {
                        id: data.getEvent.id,
                        amount: earlybid,
                      },
                    })
                      .then(() => window.location.reload())
                      .catch((err) => alert(err.message));
                  }
                }}
              >
                {" "}
                Submit
              </Button>
            </Flex>
          )}
        </Center>
        {data?.getEvent.vertical !== "WORKSHOPS" &&
          (data?.getEvent.firstplace ||
            data?.getEvent.secondplace ||
            data?.getEvent.thirdplace) && (
            <Flex
              flexDirection={"column"}
              width={"100%"}
              alignItems={"center"}
              justifyItems={"center"}
            >
              <Heading
                fontWeight={"medium"}
                p={2}
                color={"gray.500"}
                display={"inline-flex"}
              >
                <Icon as={FaTrophy} /> Rewards
              </Heading>
              <Flex
                flexDirection={["column", "row"]}
                justifyContent={"space-evenly"}
                width={"100%"}
              >
                <Box p={2}>
                  {data?.getEvent.secondplace && (
                    <Center flexDirection={"column"}>
                      <Image src={silver} />
                      <Flex color={"gray.500"}>
                        <Heading size={"lg"}>
                          2nd Position : {data?.getEvent.secondplace}{" "}
                          {Number(data?.getEvent.secondplace) ? "points" : null}
                        </Heading>
                      </Flex>
                    </Center>
                  )}
                </Box>
                <Box p={2}>
                  {data?.getEvent.firstplace && (
                    <Center flexDirection={"column"}>
                      <Image src={gold} />
                      <Flex color={"gray.500"}>
                        <Heading size={"lg"}>
                          1st Position : {data?.getEvent.firstplace}{" "}
                          {Number(data?.getEvent.firstplace) ? "points" : null}
                        </Heading>
                      </Flex>
                    </Center>
                  )}
                </Box>
                <Box p={2}>
                  {data?.getEvent.thirdplace && (
                    <Center flexDirection={"column"}>
                      <Image src={bronze} />
                      <Flex color={"gray.500"}>
                        <Heading size={"lg"}>
                          3rd Position : {data?.getEvent.thirdplace}{" "}
                          {Number(data?.getEvent.thirdplace) ? "points" : null}
                        </Heading>
                      </Flex>
                    </Center>
                  )}
                </Box>
              </Flex>
              {data?.getEvent.participation && (
                <Flex p={2} color={"gray.500"} fontSize={["2xl", "3xl"]}>
                  <Text>
                    Paricipation:{" "}
                    <Text as="span" fontWeight={700}>
                      {data?.getEvent.participation}{" "}
                      {Number(data.getEvent.participation!) ? "points" : null}
                    </Text>
                  </Text>
                </Flex>
              )}
            </Flex>
          )}

        <Flex
          flexDirection={["column", "column", "row", "row"]}
          justifyContent={"space-between"}
        >
          <Flex flexDirection={"column"} width={"100%"} p={2} mb={2}>
            {otherfields?.length! > 0 &&
              otherfields?.map((field) => {
                return (
                  <Flex
                    marginTop="12px"
                    style={{ borderRadius: 8 }}
                    p={2}
                    shadow="lg"
                    borderWidth="2px"
                    borderRadius="md"
                  >
                    <Text
                      fontWeight={"medium"}
                      p={2}
                      fontSize={"lg"}
                      color={"gray.500"}
                    >
                      <strong>
                        {field.question.split("field", 2)[1]} : &nbsp;
                      </strong>{" "}
                      {field.answer}
                    </Text>
                    {isAdmin ? (
                      <Button
                        color={"#2467a1"}
                        variant="outline"
                        border="2px solid"
                        borderColor="#2467a1"
                        size="sm"
                        p={2}
                        m={2}
                        onClick={() => {
                          deleteFaq({
                            variables: {
                              id: field.id,
                            },
                            refetchQueries: [
                              {
                                query: GetEventDocument,
                                variables: { EventID: data?.getEvent.id! },
                              },
                            ],
                          });
                        }}
                        float={"right"}
                      >
                        <DeleteIcon m={2} />
                        Delete Field
                      </Button>
                    ) : null}
                  </Flex>
                );
              })}
            {/* {data?.getEvent.earlybidoffer &&
              data?.getEvent?.vertical === "WORKSHOPS" && (
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
                  Hurry up !! Early Bird Sale ends on{" "}
                  <span style={{ fontWeight: 600 }}>
                    January 1st 2022 11:59 pm
                  </span>
                </Text>
              )} */}
            {data?.getEvent.registrationfee != "0" && (
              <Flex
                marginTop="12px"
                style={{ borderRadius: 8 }}
                p={2}
                shadow="lg"
                borderWidth="2px"
                borderRadius="md"
                flexDirection={["column", "column", "row", "row"]}
              >
                <Text
                  fontWeight={"extrabold"}
                  p={2}
                  fontSize={"lg"}
                  color={"gray.500"}
                >
                  <strong>
                    Registration Fee : &nbsp; ₹{" "}
                    <span
                      style={{
                        textDecoration:
                          data?.getEvent.earlybidoffer &&
                          deadline.getTime() - today.getTime() > 0
                            ? "line-through"
                            : "none",
                      }}
                    >
                      {data?.getEvent.registrationfee}
                    </span>{" "}
                  </strong>
                </Text>
                {data?.getEvent.earlybidoffer &&
                  deadline.getTime() - today.getTime() > 0 && (
                    <Text
                      fontWeight={"extrabold"}
                      p={2}
                      fontSize={"lg"}
                      color={"gray.500"}
                    >
                      <strong>Early Bird offer: &nbsp; ₹ </strong>{" "}
                      <span
                        style={{
                          color: "green",
                        }}
                      >
                        {data?.getEvent.earlybidoffer}
                      </span>
                    </Text>
                  )}
              </Flex>
            )}

            <Flex
              marginTop="12px"
              style={{ borderRadius: 8 }}
              p={2}
              shadow="lg"
              borderWidth="2px"
              borderRadius="md"
            >
              <Text
                fontWeight={"medium"}
                p={2}
                fontSize={"lg"}
                color={"gray.500"}
              >
                <strong>Prerequisites : &nbsp;</strong>{" "}
                {data?.getEvent.requirements}
              </Text>
            </Flex>

            <Flex className="events-details-box-container">
              {/* <Flex className="events-details-box" backgroundColor={bgcolor}>
              <strong>Audience: &nbsp;</strong>
            </Flex> */}
              <Flex
                className="events-details-box"
                style={{ borderRadius: 8 }}
                p={2}
                shadow="lg"
                borderWidth="2px"
                borderRadius="md"
              >
                <Text
                  fontWeight={"medium"}
                  fontSize={"lg"}
                  padding={2}
                  color={"gray.500"}
                >
                  <strong>Platform: &nbsp;</strong>
                  {data?.getEvent.platform}
                </Text>
              </Flex>
            </Flex>

            <Flex className="events-details-box-container">
              <Flex
                className="events-details-box"
                style={{ borderRadius: 8 }}
                p={2}
                shadow="lg"
                borderWidth="2px"
                borderRadius="md"
              >
                <Text
                  fontWeight={"medium"}
                  fontSize={"lg"}
                  padding={2}
                  color={"gray.500"}
                >
                  <strong>Registration Type: &nbsp;</strong>
                  {data?.getEvent.registrationType}
                </Text>
              </Flex>
              {data?.getEvent.registrationType === "TEAM" && (
                <Flex
                  className="events-details-box"
                  style={{ borderRadius: 8 }}
                  p={4}
                  shadow="lg"
                  borderWidth="2px"
                  borderRadius="md"
                >
                  <Text
                    fontWeight={"medium"}
                    fontSize={"lg"}
                    padding={2}
                    color={"gray.500"}
                  >
                    <strong>Max. team size: &nbsp;</strong>
                    {data.getEvent.teamSize}
                  </Text>
                </Flex>
              )}
            </Flex>
          </Flex>
        </Flex>

        {localStorage.getItem("role") === "Admin" && (
          <Box m={2} width={"100%"}>
            <Flex flexDirection={["column", "column", "row", "row"]}>
              <Button
                m={2}
                p={2}
                width={["100%", "100%", "50%", "50%"]}
                colorScheme={"green"}
                onClick={(e: any) => {
                  e.preventDefault();
                  history.push(`/admin/edit/${data?.getEvent.id}`);
                }}
              >
                Edit
              </Button>
              <Button
                m={2}
                p={2}
                width={["100%", "100%", "50%", "50%"]}
                colorScheme={"red"}
                onClick={async () => {
                  await deleteevent({
                    variables: {
                      id: data?.getEvent.id!,
                    },
                    refetchQueries: [
                      {
                        query: GetEventsDocument,
                        variables: { getEventsFilter: data?.getEvent.vertical },
                      },
                    ],
                  })
                    .then((res) => {
                      if (res.data?.deleteEvent) {
                        history.push("/admin");
                      }
                    })
                    .catch((err) => alert(err.message));
                }}
              >
                Delete
              </Button>
            </Flex>
          </Box>
        )}
        {localStorage.getItem("role") === "Admin" && (
          <Timeline id={data?.getEvent.id!} />
        )}
      </Container>
      <Container
        maxWidth="6xl"
        alignItems="center"
        justifyItems={"center"}
        style={{ borderRadius: 8 }}
        shadow="lg"
        borderWidth="2px"
        borderRadius="md"
      >
        <Heading size={"lg"}>
          <span>
            <CalendarIcon boxSize={6} mx={2} />
          </span>
          Timeline
        </Heading>
        {data?.getEvent.registrationOpenTime &&
          data?.getEvent.registrationType !== "NONE" && (
            <Flex className="datetime-container" p={2} color={"black"}>
              <Heading
                className="datetime-head"
                size={"lg"}
                style={{ borderRadius: 8 }}
                p={2}
                shadow="lg"
                borderWidth="2px"
                borderRadius="md"
                color={"gray.500"}
              >
                Registrations
              </Heading>
              <Flex
                className="datetime-box"
                alignItems={"center"}
                justifyItems={"center"}
              >
                <Heading
                  className="datetime"
                  size={"md"}
                  style={{ borderRadius: 8 }}
                  p={2}
                  shadow="lg"
                  borderWidth="2px"
                  borderRadius="md"
                  color={"gray.500"}
                >
                  {moment(
                    parseInt(data?.getEvent.registrationOpenTime!)
                  ).format("MMMM Do YYYY")}
                </Heading>
                <Heading
                  style={{ width: "10%" }}
                  p={2}
                  className="datetime"
                  size={"md"}
                  color={"gray.500"}
                >
                  to
                </Heading>
                <Heading
                  className="datetime"
                  size={"md"}
                  style={{ borderRadius: 8 }}
                  p={2}
                  shadow="lg"
                  borderWidth="2px"
                  borderRadius="md"
                  color={"gray.500"}
                >
                  {moment(
                    parseInt(data?.getEvent.registrationCloseTime!)
                  ).format("MMMM Do YYYY")}
                </Heading>
              </Flex>
            </Flex>
          )}
        {data?.getEvent.eventTimeFrom && (
          <Flex
            className="datetime-container"
            style={{ borderRadius: 8 }}
            p={2}
          >
            <Heading
              className="datetime-head"
              style={{ borderRadius: 8 }}
              p={2}
              shadow="lg"
              borderWidth="2px"
              size={"lg"}
              borderRadius="md"
              color={"gray.500"}
            >
              Event
            </Heading>
            <Flex
              className="datetime-box"
              alignItems={"center"}
              justifyItems={"center"}
            >
              <Heading
                className="datetime"
                size={"md"}
                style={{ borderRadius: 8 }}
                p={2}
                shadow="lg"
                borderWidth="2px"
                borderRadius="md"
                color={"gray.500"}
              >
                {moment(parseInt(data?.getEvent.eventTimeFrom!)).format(
                  "MMMM Do YYYY"
                )}
              </Heading>
              <Heading
                style={{ width: "10%" }}
                className="datetime"
                size={"md"}
                p={2}
                shadow="lg"
                color={"gray.500"}
              >
                to
              </Heading>
              <Heading
                className="datetime"
                size={"md"}
                style={{ borderRadius: 8 }}
                p={2}
                shadow="lg"
                borderWidth="2px"
                borderRadius="md"
                color={"gray.500"}
              >
                {moment(parseInt(data?.getEvent.eventTimeTo!)).format(
                  "MMMM Do YYYY"
                )}
              </Heading>
            </Flex>
          </Flex>
        )}
        <Center flexDirection={"column"} p={2}>
          {data?.getEvent.eventtimings.length! > 0
            ? data?.getEvent.eventtimings.map((timing) => {
                return (
                  <Flex
                    className="datetime-head"
                    size={"md"}
                    style={{ borderRadius: 8 }}
                    px={3}
                    shadow="lg"
                    borderWidth="2px"
                    borderRadius="md"
                    color={"gray.500"}
                    justifyItems={"center"}
                    flexDirection={"row"}
                    justifyContent="space-between"
                    m={2}
                  >
                    <Heading size={"md"}>{timing.name}</Heading>
                    <Heading size={"md"}>
                      {moment(parseInt(timing.time)).format(
                        "MMMM Do YYYY hh:mm a"
                      )}
                    </Heading>
                    {isAdmin ? (
                      <Button
                        color={"#2467a1"}
                        variant="outline"
                        border="2px solid"
                        borderColor="#2467a1"
                        size="sm"
                        p={2}
                        onClick={() => {
                          deletetimings({
                            variables: {
                              id: timing.id,
                            },
                            refetchQueries: [
                              {
                                query: GetEventDocument,
                                variables: { EventID: data?.getEvent.id! },
                              },
                            ],
                          });
                        }}
                        float={"right"}
                      >
                        <DeleteIcon m={2} />
                        Delete Round
                      </Button>
                    ) : null}
                  </Flex>
                );
              })
            : null}
        </Center>
      </Container>

      <Container maxWidth="6xl" alignItems="center" justifyItems={"center"}>
        {data?.getEvent && <EventFaqs event={data?.getEvent!} />}
      </Container>
    </CustomBox>
  );
};

export default EventPage;
