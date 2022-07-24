import React, { useEffect } from "react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Flex,
    SimpleGrid,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    Alert,
    AlertIcon,
    Text,
    Image,
    Link,
    useColorModeValue,
  } from '@chakra-ui/react'
import "../../../styles/Login.css"
import { useResendVerificationMailMutation, useVerifyUserMutation } from "../../../generated/graphql"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import { useParams } from "react-router"
import successSVG from "../../../images/Login/login-success.svg"
import errorSVG from "../../../images/Login/login-error.svg"
import Footer from "../../shared/Footer"
import CustomBox from "../../shared/CustomBox"

const Verify = () => {
    const gradient = useColorModeValue("blackG", "whiteG")
    const [otp, setOtp] = React.useState('')
    const history = useHistory()
    const [verifyuser, {data, loading, error}] = useVerifyUserMutation()
    const [resendmail] = useResendVerificationMailMutation();
    const [email , setemail] = React.useState('');
    const [input , setInput] = React.useState(false);
    const [alert , setalert] = React.useState(false)
    const [success, setSuccess] = React.useState(false)


    const handlesubmit = () => {
        verifyuser({
          variables: {
            otp,
          },
        })
          .then((res) => {
            if (res.data?.verifyUser) {
             setSuccess(true)
            }
          })
          .catch((err) => console.log(err))
      }

      const resend = () =>{
        resendmail({variables:{
          requestForgotPassInput : {
            email
          }
        }}).then(res => {
          if(res.data?.resendVerificationMail){
            setalert(true)
          }
        })
        .catch(err => console.error(err)
        )
      }
  
    var { isOpen, onOpen, onClose } = useDisclosure()
    if(success)
    {
        onClose = () => {history.push('/login')}
        return(
            <Modal isOpen={true} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent color="black" paddingTop={["10vw","5vw"]} width={["fit-content", "auto"]}>
                    <Image src={successSVG} margin="auto" boxSize={["50vw","20vw"]}></Image>
                    <ModalCloseButton />
                    <ModalBody backgroundColor="#A7EAAA" width="100%" padding="2vw">
                        <Text textAlign="center" fontSize={["4vw","2vw"]} backgroundColor="#A7EAAA" borderRadius="24px" margin="auto" color="#0a2d4d">Email verified! Please login to register for workshops</Text>
                    </ModalBody>
                 </ModalContent>
            </Modal>
        )
    }
    else 
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
        else
        if(error)
        {
            if(error.message === "Invalid OTP!")
            {
                onClose = () => {window.location.reload()}
                return(
                    <Modal isOpen={true} onClose={onClose} isCentered>
                    <ModalOverlay />
                    <ModalContent color="black" paddingTop={["10vw","5vw"]} width={["fit-content", "auto"]}>
                        <Image src={errorSVG} margin="auto" boxSize={["50vw","20vw"]}></Image>
                        <ModalBody backgroundColor="#f1aaaa" width="100%" padding="2vw">
                            <Text textAlign="center" fontSize={["4vw","2vw"]}  borderRadius="24px" margin="auto" color="#0a2d4d">Invalid OTP</Text>
                        </ModalBody>
                        <ModalCloseButton />
                    </ModalContent>
                </Modal>
                )
            }
            else 
            {
                onClose = () => {history.push('/')}
                return(
                    <Modal isOpen={true} onClose={onClose} isCentered>
                    <ModalOverlay />
                    <ModalContent color="black" paddingTop={["10vw","5vw"]} width={["fit-content", "auto"]}>
                        <Image src={errorSVG} margin="auto" boxSize={["50vw","20vw"]}></Image>
                        <ModalBody backgroundColor="#f1aaaa" width="100%" padding="2vw">
                            <Text textAlign="center" fontSize={["4vw","2vw"]}  borderRadius="24px" margin="auto" color="#0a2d4d">Error Occurred</Text>
                        </ModalBody>
                        <ModalCloseButton />
                    </ModalContent>
                </Modal>
                )   
            }
        }
        else return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      flexDirection='column'
    >
         <CustomBox>
            <Flex className="login" width="100vw" height="100vh" justifyContent="center" alignItems="center" position="relative" zIndex="1">
            <Box width="60vw"  className={`${gradient} login-main-box`} height="fit-content" padding="5vw" borderRadius="24px">
                    <Heading fontSize="4vw" marginBottom="6vh">  Verify yo<span>ur mail</span></Heading>
                    <Input
                        marginBottom="4vh"
                        placeholder='OTP'
                        type='text'
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />
                    <Button width="100%"  backgroundColor="#2467a1" marginBottom="4vh" color="white"
                        onClick={handlesubmit}
                    >Verify</Button>
                    <Flex width="100%" justifyContent="space-between" >
                    {
                        !input ? ( <Link onClick = {()=>setInput(true)}>Resend Verification mail</Link>) : null
                    }
                     {
                            input ? (
                            <Flex width={"100%"} flexDirection={"column"}>
                            <Flex width={"100%"} flexDirection={['column','column','row','row']}>
                            <FormControl id='name'>
                            <Input
                            width={"60%"}
                            placeholder='email'
                            type='email'
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            />
                           </FormControl> 
                        <Button onClick = {resend} color="white"
                           width ={"40%"} backgroundColor="#2467a1" marginBottom="4vh">
                         Resend Verification mail
                        </Button>
                        </Flex>
                        {
                        alert ? (
                            <Alert status='success'>
                            <AlertIcon />
                            Verification mail has been sent 
                            </Alert>
                        ) : null
                    }
                    </Flex>): null
                        }
                    </Flex>
                </Box>
            </Flex>
            <Footer designed={[{ name: 'Krithikaa', mail: 'be20b020@smail.iitm.ac.in' }]} ></Footer>
        </CustomBox>     
    </Flex>
        )
}

export default Verify