import React, { useState } from "react"
import {
    Text,
    Stack,
    Flex,
    Link,
    Box,
    Heading,
    Input,
    Select,
    Button,
    FormLabel,
    FormControl,
    Image,
    useColorModeValue,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
  } from '@chakra-ui/react'
import "../../../styles/Login.css"
import bg from "../../../images/Login/login.svg"
import CustomBox from '../../shared/CustomBox'
import Footer from '../../shared/Footer'
import { useCreateUserMutation } from "../../../generated/graphql"
import { useHistory } from "react-router"
import success from "../../../images/Login/login-success.svg"
import errorSVG from "../../../images/Login/login-error.svg"

import {cities} from "./cities"
import {colleges} from "./college"
import { branches } from "./branches"

const Signup = () => {

    const gradient = useColorModeValue("blackG", "whiteG")
    const history = useHistory()

    const [email, setEmail] = useState("")
    const [name, setName]  = useState("")
    const [number, setNumber] = useState("")
    const [pw, setPw] = useState("")
    const [confirm, setConfirm] = useState("")
    const [college, setCollege] = useState("")
    const [branch, setBranch] = useState("")
    const [State, setState] = useState("Andaman and Nicobar Islands")
    const [city, setCity] = useState("")
    const [address, setAddress] = useState("")
    const [wrongpw , setWrongPw] = useState(false)
    const [fielderr , setFieldErr] = useState(false)
    const [createUser, {data, loading, error}] = useCreateUserMutation()

    var { isOpen, onOpen, onClose } = useDisclosure()

    if(data)
    {
        onClose = () => {history.push('/')}
        return(
            <Modal isOpen={true} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent color="black" paddingTop={["10vw","5vw"]} width={["fit-content", "auto"]}>
                    <Image src={success} margin="auto" boxSize={["50vw","20vw"]}></Image>
                    <ModalCloseButton />
                    <ModalBody backgroundColor="#A7EAAA" width="100%" padding="2vw">
                        <Text textAlign="center" fontSize={["4vw","2vw"]} backgroundColor="#A7EAAA" borderRadius="24px" margin="auto" color="#0a2d4d">Signed up successfully! <br />Check your Email ID for the verification link.</Text>
                    </ModalBody>
                 </ModalContent>
            </Modal>
        )
    }
    if(error)
    {  
            if(error.message === "User Already signed up.Please login to continue"){
                onClose = () => {history.push("/login")}
                return(
                    <Modal isOpen={true} onClose={onClose} isCentered>
                    <ModalOverlay />
                    <ModalContent color="black" paddingTop={["10vw","5vw"]} width={["fit-content", "auto"]}>
                        <Image src={errorSVG} margin="auto" boxSize={["50vw","20vw"]}></Image>
                        <ModalBody backgroundColor="#f1aaaa" width="100%" padding="2vw">
                            <Text textAlign="center" fontSize={["4vw","2vw"]}  borderRadius="24px" margin="auto" color="#0a2d4d">{error.message}</Text>
                        </ModalBody>
                        <ModalCloseButton />
                    </ModalContent>
                </Modal>
                )
            }else {
                onClose = () => {window.location.reload()}
                return(
                    <Modal isOpen={true} onClose={onClose} isCentered>
                        <ModalOverlay />
                        <ModalContent color="black" paddingTop={["10vw","5vw"]} width={["fit-content", "auto"]}>
                            <Image src={errorSVG} margin="auto" boxSize={["50vw","20vw"]}></Image>
                            <ModalBody backgroundColor="#f1aaaa" width="100%" padding="2vw">
                                <Text textAlign="center" fontSize={["4vw","2vw"]}  borderRadius="24px" margin="auto" color="#0a2d4d">Some error occurred</Text>
                            </ModalBody>
                            <ModalCloseButton />
                        </ModalContent>
                    </Modal>
                )
            }
           
    }
    if(wrongpw){
        const onClose = () => {window.location.reload()}
        return(
            <Modal isOpen={true} onClose={onClose}>
                <ModalOverlay />
                <ModalContent backgroundColor="#f1aaaa" color="black">
                    <ModalHeader>Confirm password and Password should have the same values. 
                        <br />
                        Please enter the same password in both fields</ModalHeader>
                    <ModalCloseButton />
                </ModalContent>
            </Modal>
        )
    }
    if(fielderr){
        const onClose = () => {window.location.reload()}
        return(
            <Modal isOpen={true} onClose={onClose}>
                <ModalOverlay />
                <ModalContent backgroundColor="#f1aaaa" color="black">
                    <ModalHeader>Please fill all the details</ModalHeader>
                    <ModalCloseButton />
                </ModalContent>
            </Modal>
        )
    }
    if(loading)
    {
        return(
            <Modal isOpen={true} onClose={() => {}}>
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
            <Flex className="login" width="100vw" height="fit-content" justifyContent="center" alignItems="center" padding="4vw" position="relative" zIndex="1">
            <Box positon="relative" width="60vw" className={`${gradient} login-main-box`} height="fit-content" padding="4vw">
                    <Heading fontSize="4vw" marginBottom="6vh">SIGN<span>UP</span></Heading>
                    <Input placeholder="Name" marginBottom="4vh" type="text" onChange={(e:any) => {setName(e.target.value)}}></Input>
                    <Flex marginBottom="6vh">
                        <Input placeholder="Email ID" marginRight="2vw" type="email" onChange={(e:any) => {setEmail(e.target.value)}}></Input>
                        <Input placeholder="Mobile number" type="text" value={number} onChange={(e:any) => {setNumber(e.target.value)}}></Input>
                    </Flex>
                    <Input placeholder="Password" marginBottom="4vh" type="password" onChange={(e:any) => {setPw(e.target.value)}}></Input>
                    <Input placeholder="Confirm password" marginBottom="6vh" type="password" onChange={(e:any) => {setConfirm(e.target.value)}}></Input>
                    <Flex marginBottom="6vh">
                        <Select placeholder="College" marginRight="2vw" onChange={(e:any) => {setCollege(e.target.value)}}>
                            {
                                colleges.map(o => {
                                    return(
                                        <option value={o["University"]}>{o["University"]}</option>
                                    )
                                })
                            }
                        </Select>
                        <Select placeholder="Branch" onChange={(e:any) => {setBranch(e.target.value)}}>
                            {
                                branches.map(b => {
                                    return(
                                        <option value={b}>{b}</option>
                                    )
                                })
                            }
                        </Select>
                    </Flex>
                    <Flex marginBottom="6vh">
                        <Select placeholder="State" onChange={(e:any) => {setState(e.target.value)}}>
                            {
                                Object.keys(cities).map(s => {
                                    return(<option value={s}>{s}</option>)
                                })
                            }
                        </Select>
                        <Select placeholder="City" marginLeft="2vw" onChange={(e:any) => {setCity(e.target.value)}}>
                            {
                                cities[State].map(c => {
                                    return(<option value={c}>{c}</option>)
                                })
                            }
                        </Select>
                    </Flex>
                    <Input placeholder="Address" type="text" onChange={(e:any) => {setAddress(e.target.value)}}></Input>
                    <Text p={2} >*All the fields are required</Text>
                    <Button width="100%"  backgroundColor="#2467a1" color="white" marginTop="6vh"
                        onClick={async (e:any) => {
                            e.preventDefault();
                            if(!name || !email || !number || !pw || !confirm || !college || !branch || !State || !city ||!address){
                                setFieldErr(true)
                            }else if(pw === confirm)
                                {
                                    try{
                                        await createUser(
                                            {variables: {CreateUserInput: 
                                                {name: name, email: email, mobile: number, password: pw, college: college, department: branch, state: State, city: city, address: address}}})
                                                .then(res => {
                                                    if(res.data?.createUser)
                                                    history.push("/verify")
                                                })
                                    }
                                    catch(err)
                                    {
                                        console.log(err)
                                    }
                                }
                            else 
                               {
                               setWrongPw(true)
                               }
                        }}
                    >Sign Up</Button>
                    <Text align="center" marginTop="2vh">Already registered? <Link href="/login">Login</Link></Text>
                </Box>
                <Image src={bg} boxSize="35vw" bottom="30%" right="0%" className="login-image"></Image>
            </Flex>
            <Footer designed={[{ name: 'Krithikaa', mail: 'be20b020@smail.iitm.ac.in' }]} ></Footer>
        </CustomBox>  
    )
}

export default Signup