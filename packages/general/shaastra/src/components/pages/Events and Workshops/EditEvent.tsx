import * as React from "react"
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
    useColorModeValue,
Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,  } from '@chakra-ui/react'
import { useHistory, useParams } from "react-router-dom"
import { useState } from "react"
import CustomBox from '../../shared/CustomBox'
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import { RegistraionType, useGetEventQuery } from "../../../generated/graphql"
import "../../../styles/Events.css"
import moment from 'moment'
import bg from "../../../images/EventsWorkshops/events/bg.jpeg"
import { useEditEventMutation } from "../../../generated/graphql";

import AWS from 'aws-sdk'
const uploadFile = require('react-s3')
const S3FileUpload = require('react-s3')

declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
      directory?: string
      webkitdirectory?: string
      moxdirectory?: string
    }
  }

const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
  });

const EditEvent = () => {

    const {id} : {id: string} = useParams()

    const [selectedTab, setSelectedTab] = React.useState<"write" | "preview">("write");
    const history = useHistory()

     const {data: event, loading: eventLoading, error: eventError} = useGetEventQuery({variables: {EventID: id}})


    console.log(event)

    const [radio, setRadio] = React.useState<RegistraionType>()
    const [radioString, setRadioString] = useState()
    const [name, setName] = React.useState(event?.getEvent.name ? event?.getEvent.name : "")
    const [vertical, setVertical] = React.useState(event?.getEvent.vertical ? event?.getEvent.vertical : "")
    const [desp, setDesp] = React.useState(event?.getEvent.description ? event?.getEvent.description : "")
    const [platform, setPlatform] = React.useState(event?.getEvent.platform ? event?.getEvent.platform: "")
    const [req, setReq] = useState(event?.getEvent.requirements ? event?.getEvent.requirements : "")
    const [regStart, setRegStart] = useState("")
    const [regEn, setRegEnd] = useState("")
    const [eventStart, setEventStart] = useState("")
    const [eventEnd, setEventEnd] = useState("")
    const [teamSize, setTeamSize] = useState(event?.getEvent.teamSize ? event?.getEvent.teamSize : 0)
    const [participation, setParticipation] = useState(event?.getEvent.participation ? event?.getEvent.participation : "")
    const [first, setFirst] = useState(event?.getEvent.firstplace ? event?.getEvent.firstplace : "")
    const [second, setSecond] = useState(event?.getEvent.secondplace ? event?.getEvent.secondplace : "")
    const [third, setThird] = useState(event?.getEvent.thirdplace ? event?.getEvent.thirdplace: "")
    const [pic, setPic] = useState(event?.getEvent.pic!)
    const [file, setFile] = useState<File>()
    const [fee, setFee] = useState(event?.getEvent.registrationfee ? event.getEvent.registrationfee : "")

    

    const [editEventMutation, {data, loading, error}] = useEditEventMutation()

    AWS.config.update({
        accessKeyId: 'AKIA4VXHNASLCGXPQAHM',
        secretAccessKey: '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',
      })
      const myBucket = new AWS.S3({
        params: { Bucket: 'shaastra' },
        region: 'ap-south-1',
      })
      const UploadImageToS3WithNativeSdk = async (file: any) => {
        const params = {
          ACL: 'public-read',
          Body: file,
          Bucket: 'shaastra',
          Key: file.name,
        }
    
        await myBucket
          .putObject(params)
          .on('httpUploadProgress', (evt) => {})
          .send((err) => {
            if (err) console.log(err)
          })
      }


    var { isOpen, onOpen, onClose } = useDisclosure()

    if(data)
    {
        onClose = () => {
            history.push('/admin')
            window.location.reload()
        }
        return(
            <Modal isOpen={true} onClose={onClose}>
                <ModalOverlay />
                <ModalContent backgroundColor="#addfd0" color="black">
                    <ModalHeader>Event Edited</ModalHeader>
                    <ModalCloseButton />
                 </ModalContent>
            </Modal>
        )
    }
    if(error || eventError)
    {
        onClose = () => {history.push('/admin')}
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
    if(loading || eventLoading)
    {
        onClose = () => {history.push('/admin/add')}
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

    return(
        <CustomBox>
            <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 8, md: 8 }}
                py={{ base: 20, md: 20 }}
            >
            <Heading>EDIT EVENT</Heading>
            <Box backgroundImage={bg} width="100vw" padding="4vw" className="admin-add">
                <Box backgroundImage="linear-gradient(-45deg, #ffffff98, #ffffff09)" borderRadius="24px" backdropFilter="blur(30px)" padding="5vw">
                    <Flex width="100%" justifyContent="space-between" alignItems="flex-end">
                        <FormControl>
                            <FormLabel fontSize="1.5vw">Name of Event</FormLabel>
                            <Input 
                                value={name}
                                type="text" outline="none" color="black"
                                backgroundColor="transparent" borderBottom="5px solid white"
                                onChange={(e:any) => {setName(e.target.value)}}    
                            >
                            </Input>
                        </FormControl>
                        <Select value={vertical} placeholder="Vertical" width="30vw" marginLeft="5vw" onChange={(e:any) => {setVertical(e.target.value)}}>
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
                            <FormLabel>Change picture</FormLabel>
                            <Input type="file" onChange={(e:any) => {setFile(e.target.files[0]);setPic(`https://shaastra.s3.ap-south-1.amazonaws.com/${e.target.files[0].name}`)}}></Input>
                        </FormControl>
                    <FormControl marginTop="4vh">
                        <FormLabel fontSize="1.5vw">Description</FormLabel>
                        <ReactMde
                        value={desp}
                        onChange={setDesp}
                        selectedTab={selectedTab}
                        onTabChange={setSelectedTab}
                        generateMarkdownPreview={markdown =>
                          {
                            setDesp(converter.makeHtml(markdown))
                            return(Promise.resolve(converter.makeHtml(markdown)))
                          }
                        }
                       ></ReactMde>
                    </FormControl>
                    <Flex width="100%">
                        <FormControl>
                            <FormLabel>Platform</FormLabel>
                            <Input type="text" outline="none" color="black"
                                value={platform}
                                backgroundColor="transparent" borderBottom="5px solid white"
                                onChange={(e:any) => {setPlatform(e.target.value)}}    
                            ></Input>
                        </FormControl>
                        <FormControl width="150%" marginLeft="2vw">
                            <FormLabel>Requirements</FormLabel>
                            <Input type="text" outline="none" color="black" 
                                value={req}
                                backgroundColor="transparent" borderBottom="5px solid white"
                                onChange={(e:any) => {setReq(e.target.value)}}    
                            ></Input>
                        </FormControl>
                    </Flex>
                    <Flex width="100%">
                        <FormControl>
                        {console.log(regStart)}
                            <FormLabel>Registration Start: {moment(parseInt(event?.getEvent.registrationOpenTime!)).format(
                    "MMMM Do YYYY"
                  )}</FormLabel>
                            <Input type="date" outline="none" color="black" value={regStart}
                                backgroundColor="transparent" borderBottom="5px solid white"
                                onChange={(e:any) => {setRegStart(e.target.value)}}    
                            ></Input>
                        </FormControl>
                        <FormControl marginLeft="2vw">
                            <FormLabel>Registration End: {moment(parseInt(event?.getEvent.registrationCloseTime!)).format(
                    "MMMM Do YYYY"
                  )}</FormLabel>
                            <Input type="date" outline="none" color="black" value={regEn}
                                backgroundColor="transparent" borderBottom="5px solid white"
                                onChange={(e:any) => {setRegEnd(e.target.value)}}
                            ></Input>
                        </FormControl>
                    </Flex>
                    <Flex width="100%">
                        <FormControl>
                            <FormLabel>Event Start: {moment(parseInt(event?.getEvent.eventTimeFrom!)).format(
                    "MMMM Do YYYY"
                  )}</FormLabel>
                            <Input type="date" outline="none" color="black" value={eventStart}
                                backgroundColor="transparent" borderBottom="5px solid white"
                                onChange={(e:any) => {setEventStart(e.target.value)}}
                            ></Input>
                        </FormControl>
                        <FormControl marginLeft="2vw">
                            <FormLabel>Event End: {moment(parseInt(event?.getEvent.eventTimeTo!)).format(
                    "MMMM Do YYYY"
                  )}</FormLabel>
                            <Input type="date" outline="none" color="black" value={eventEnd}
                                backgroundColor="transparent" borderBottom="5px solid white"
                                onChange={(e:any) => {setEventEnd(e.target.value)}}    
                            ></Input>
                        </FormControl>
                    </Flex>
                    <Flex>
                        <FormControl>
                            <FormLabel>Participation</FormLabel>
                            <Input type="text" outline="none" color="black" value={participation}
                                backgroundColor="transparent" borderBottom="5px solid white"
                                onChange={(e:any) => {setParticipation(e.target.value)}}></Input>
                        </FormControl>
                        <FormControl marginLeft="2vw">
                            <FormLabel>First</FormLabel>
                            <Input type="text" outline="none" color="black" value={first}
                                backgroundColor="transparent" borderBottom="5px solid white"
                                onChange={(e:any) => {setFirst(e.target.value)}}></Input>
                        </FormControl>
                        <FormControl marginLeft="2vw">
                            <FormLabel>Second</FormLabel>
                            <Input type="text" outline="none" color="black" value={second}
                                backgroundColor="transparent" borderBottom="5px solid white"
                                onChange={(e:any) => {setSecond(e.target.value)}}></Input>
                        </FormControl>
                        <FormControl marginLeft="2vw">
                            <FormLabel>Third</FormLabel>
                            <Input type="text" outline="none" color="black" value={third}
                                backgroundColor="transparent" borderBottom="5px solid white"
                                onChange={(e:any) => {setThird(e.target.value)}}></Input>
                        </FormControl>
                    </Flex>
                    <FormControl>
                            <FormLabel fontSize="1.5vw">Registration fee</FormLabel>
                            <Input 
                                type="text" outline="none" color="black" placeholder={fee} value={fee}
                                backgroundColor="transparent" borderBottom="5px solid white"
                                onChange={(e:any) => {setFee(e.target.value)}}    
                            >
                            </Input>
                        </FormControl>
                    <Flex alignItems="center" justifyContent="space-between" width="100%" className="admin-team">
                        <FormControl color="black" marginTop="4vh">
                            <Text>{event?.getEvent.registrationType}</Text>
                            <RadioGroup value={radioString} onChange={(e:any) => {
                                switch(e)
                                {
                                    case "Individual": setRadio(RegistraionType.Individual); break;
                                case "Team": setRadio(RegistraionType.Team); break;
                                default: setRadio(RegistraionType.None);   
                                }
                            }}>
                                <Radio value="Individual" marginRight="2vw">Individual</Radio>
                                <Radio value="Team" marginRight="2vw">Team</Radio>
                                <Radio value="None">None</Radio>
                            </RadioGroup>
                        </FormControl>
                        {
                            radio === RegistraionType.Team &&
                            <FormControl marginTop="4vh" width="10vw">
                                <FormLabel color="black">Team size</FormLabel>
                                <Input type="number" outline="none" color="black" 
                                    backgroundColor="transparent" borderBottom="5px solid white"
                                    onChange={(e:any) => {setTeamSize(e.target.value)}}    
                                ></Input>
                            </FormControl>
                        }
                    </Flex>
                    <Button marginTop="4vh" width="100%" backgroundColor="white" color="#0e101b"
                        onClick={async (e:any) => {
                            e.preventDefault();
                            // await setEventType()
                            if(file !== undefined)
                            {
                                await UploadImageToS3WithNativeSdk(file)
                            }
                            try{
                                await editEventMutation({
                                    variables: {
                                        data: {
                                        name: name,
                                        description: desp,
                                        eventTimeFrom: eventStart ? new Date(eventStart).toDateString() : null,
                                        eventTimeTo:eventEnd ? new Date(eventEnd).toDateString(): null,
                                        registrationType: radio!,
                                        platform: platform,
                                        requirements: req,
                                        pic: pic,
                                        vertical: vertical,
                                        firstplace: first,
                                        participation: participation,
                                        secondplace: second,
                                        thirdplace: third,
                                        teamSize: Math.round(teamSize),
                                        registrationCloseTime:  regEn ?new Date(regEn).toDateString() : null,
                                        registrationOpenTime: regStart ? new Date(regStart).toDateString() : null,
                                        registrationfee: fee
                                        },
                                        id: id
                                    }
                                })
                            }
                            catch(err) {console.log(err)}
                        }}
                    >Submit</Button>
                </Box>
            </Box>
            </Stack>
        </CustomBox>  
    )
}

export default EditEvent