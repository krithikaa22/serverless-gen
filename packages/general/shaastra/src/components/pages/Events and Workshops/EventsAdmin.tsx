import React from "react"
import {
    Text,
    Stack,
    Flex,
    Heading,
    Box,
    Select,
   Input,
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
    Center,
  } from '@chakra-ui/react'
import { AddIcon, EditIcon, MinusIcon } from '@chakra-ui/icons';
import { useState } from "react";
import {useHistory} from "react-router-dom"
import CustomBox from '../../shared/CustomBox'
import { useGetAllRecordingUsersCountQuery, useGetEventsQuery, useGetPaidUsersCountQuery, useGetUsersDataCsvQuery, useGetUsersQuery, useTShirtDetailsCsvQuery } from "../../../generated/graphql";
import EventVerticalComponent from "./EventVeticalComponent";
import fileDownload from "js-file-download";

const EventsAdmin = () => {

    const [vertical, setVertical] = useState<string>("AEROFEST")
    const [event, setEvent] = useState<string>("")

    const {data, loading, error} = useGetEventsQuery({
        variables : {
            filter : vertical
        }
    })

    var events = data?.getEvents.events;
    const {data : data1 , error : error1, loading:loading1} = useTShirtDetailsCsvQuery()
    const {data: data2,loading: loading2,error: error2,} = useGetUsersDataCsvQuery();
    const {data : data3} = useGetPaidUsersCountQuery();
    const {data : data4} = useGetAllRecordingUsersCountQuery();

    const history = useHistory()

    return(
       <CustomBox>
           <Box width="100vw" padding="2vw 6vw">
            <Flex width="100%" justifyContent="center" >
                <Heading textAlign="right" fontSize="7xl">EVENTS <br /> WORKSHOPS</Heading>
                <Heading alignSelf="center" color="#ea8a94" fontSize="7xl">&</Heading>
            </Flex>
            <Center p ={3} flexDirection={"column"} marginBottom="3vh">
                {/* <Heading m={2}>Registered Users count : {data1?.getUsers?.count}</Heading> */}
                <Button
                    p={2}
                    m={2}
                    onClick={() => {
                      fileDownload(data1?.TShirtDetailsCSV !, `tshirt_details.csv`);
                    }}
                  >
                    <EditIcon m={2} />
                    Download Tshirt Details
                  </Button>
                  <Button
                    p={2}
                    m={2}
                    onClick={() => {
                      fileDownload(data2?.getUsersDataCSV!, `users_details.csv`);
                    }}
                  >
                    <EditIcon m={2} />
                    Download users Details
                  </Button>

            </Center>
            <Button width="100%" padding="1.5vw" backgroundColor="#75c9b0" marginBottom="4vh" onClick={(e:any) => {history.push('/admin/add')}}>Add Event</Button>
            <Flex width="88vw" marginBottom="4vh">
                <Select placeholder="Vertical" marginLeft="2vw" width="15vw" value={vertical} onChange={e=> setVertical(e.target.value)}>
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
            {
                vertical === "WORKSHOPS"  && <Center>
                <Flex flexDirection={'column'}>
                {/* <Heading as='h3' size={'lg'} p={2} m={2}>Total Paid Registrations for Workshops : {data3?.getPaidUsersCount} </Heading> */}
                <Heading as='h3' size={'lg'} p={2} m={2}>Total Recording Registrations for Workshops : {data4?.getAllRecordingUsersCount} </Heading>
                </Flex>
                </Center>
            }
            <Box className="events-vertical">
                <Stack
                 textAlign={'center'}
                 align={'center'}
                 spacing={{ base: 8, md: 8 }}
                 paddingBottom={{ base: 20, md: 20 }}>
                {
                events?.map((event)=>{
                        return(
                            <EventVerticalComponent data= {event} isAdmin ={true} />
                        )
                }) 
            }
                </Stack>
            </Box>
           
           </Box>
       </CustomBox>
    )
}

export default EventsAdmin