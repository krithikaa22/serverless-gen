import React, { useEffect } from "react"
import {
    Text,
    Stack,
    Flex,
    Link,
    Box,
    Heading,
    Input,
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
import { LoginInput, useLoginMutation, useLogoutUserMutation, useVerifyUserMutation } from "../../../generated/graphql"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import { useParams } from "react-router"
import { verify } from "crypto"
import success from "../../../images/Login/login-success.svg"
import errorSVG from "../../../images/Login/login-error.svg"

const SignOut = () => {
    const {token} = useParams<{token: string}>();
    const history = useHistory()

    const [logoutMutation, {data, loading, error}] = useLogoutUserMutation()
    const logout = async () => {
        try{
            await logoutMutation()
        }
        catch(err) {console.log(err)}
    }
    logout();

    var { isOpen, onOpen, onClose } = useDisclosure()

    if(data?.logoutUser)
    {
        localStorage.removeItem("role")
        onClose = () => {
            history.push('/') 
        }

        return(
            <Modal isOpen={true} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent color="black" paddingTop={["10vw","5vw"]} width={["fit-content", "auto"]}>
                    <Image src={success} margin="auto" boxSize={["50vw","20vw"]}></Image>
                    <ModalCloseButton />
                    <ModalBody backgroundColor="#A7EAAA" width="100%" padding="2vw">
                        <Text textAlign="center" fontSize={["4vw","2vw"]} backgroundColor="#A7EAAA" borderRadius="24px" margin="auto" color="#0a2d4d">Logged out successfully!</Text>
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
            onClose = () => {history.push('/')}
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
        else return null
}

export default SignOut