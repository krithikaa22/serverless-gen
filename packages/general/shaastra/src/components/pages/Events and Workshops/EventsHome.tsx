import React from 'react'
import {
  Flex,
  Text,
  Heading,
  Center,
  Box,
  VStack,
  Image,
  Link,
  Button,
} from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { Link as ReachLink } from 'react-router-dom'
import summit from '../../../images/EventsWorkshops/summit/summit_5.jpg'
import tif from '../../../images/EventsWorkshops/tif/tif_4.png'
import Particles from 'react-tsparticles'
import '../../../styles/particles.css'
import CustomBox from '../../shared/CustomBox'
import Footer from '../../shared/Footer'

function EventsHome() {
  return (
    <Box>
      <CustomBox>
        {/* <Center h='300px'>
          <Particles
            className='particles'
            id='tsparticles'
            options={{
              fpsLimit: 60,
              interactivity: {
                detectsOn: 'canvas',
                events: {
                  onClick: {
                    enable: true,
                    mode: 'push',
                  },
                  onHover: {
                    enable: true,
                    mode: 'repulse',
                  },
                  resize: true,
                },
                modes: {
                  bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40,
                  },
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: '#FECD1A',
                },
                links: {
                  color: '#FECD1A',
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: 'none',
                  enable: true,
                  outMode: 'bounce',
                  random: false,
                  speed: 6,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    value_area: 900,
                  },
                  value: 60,
                },
                opacity: {
                  value: 1,
                },
                shape: {
                  type: 'circle',
                },
                size: {
                  random: true,
                  value: 5,
                },
              },
              detectRetina: true,
            }}
          />

          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
            textAlign='center'
          >
            Events and{' '}
            <Text as={'span'} color={'orange.400'}>
              Workshops
            </Text>
          </Heading>
        </Center> */}
        <Flex flexDirection={"column"} pt={{ base:20, md: 20 }}  spacing={10} alignItems={'center'} paddingBottom={8}>
        <Center>
        <Heading
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            textAlign="center"
          >
            <Text as={"span"} display={'inline-flex'} alignItems={'center'}>
            EVENTS<Text mx={2} as={'h2'} fontSize={['4xl','7xl']} color={"#ea8a94"} className='ampersand'>&</Text> WORKSHOPS
            </Text>
          </Heading>
         
        </Center>
          {/*Events*/}
          <Flex
            marginTop={{ base: '1', sm: '5' }}
            p={2}
            flexDirection={'column'}
            width={"95%"}
            alignItems = 'center'
            m={3}
            maxWidth={"1400px"}
          >
                <Image
                  height={"400px"}
                  width={"90%"}
                  borderRadius='lg'
                  src={
                    'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                  }
                  alt='events'
                  objectFit='cover'
                />
            <Flex
              width={"90%"}
              flexDirection={['column','row']}
              // justifyContent='center'
              p={2}
            >
              <Center flexDirection={'column'} width={["100%","40%"]}>
              <Heading textAlign='center' color={'#ea8a94'}>
                Events
              </Heading>
              <Link as={ReachLink} to="/events" style={{
                "textDecoration" : 'none'
              }}><Button p={2} m={2}>Explore Events</Button></Link>
              </Center>
              <Box width={["100%","60%"]}>
              <Text
                textAlign='left'
                as='p'
                marginTop='2'
                color={useColorModeValue('gray.700', 'gray.200')}
                fontSize='lg'
                p={2}
              >
                Have you ever wanted to work on modeling a real airplane? Do
                "hacking" scenes in movies and TV Shows make you roll your eyes?
                Shaastra brings you several events every year. Some of the
                events conducted last year as a part of Shaastra were Boeing
                Aeromodelling Competition, Global Biotech Council, Shaastra
                Programming Contest. Capture the Flag (CTF) and many more.
              </Text>
              </Box>
            </Flex>
          </Flex>
          {/*Workshops*/}
        
          <Flex
            marginTop={{ base: '1', sm: '5' }}
            p={2}
            flexDirection={'column'}
            width={"95%"}
            alignItems = 'center'
            justifyItems={'center'}
            m={3}
            maxWidth={"1400px"}
          >
           <Image
                  height={"400px"}
                  width={"90%"}
                  borderRadius='lg'
                  src={
                    'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                  }
                  alt='events'
                  objectFit='cover'
                />
            <Flex
              width={"90%"}
              flexDirection={['column','row-reverse']}
              // justifyContent='center'
              p={2}
            >
              <Center flexDirection={'column'} width={["100%","40%"]}>
              <Heading textAlign='center' color={'#ea8a94'}>
               Workshops
              </Heading>
              <Link as={ReachLink} to="/events/workshops" style={{
                'textDecoration' : 'none'
              }}
            ><Button p={2} m={2}>Explore Workshops</Button></Link>
              </Center>
              <Box width={["100%","60%"]}>
              <Text
                textAlign='left'
                as='p'
                marginTop='2'
                color={useColorModeValue('gray.700', 'gray.200')}
                fontSize='lg'
                p={2}
              >
                As a part of Shaastra, we conduct several workshops every year,
                ranging over multiple topics. Some of the workshops that were
                conducted last year were Introduction to Data Science and
                Machine Learning, Cryptocurrency, and blockchain, How to Design
                a Mars Rover, Parallel Programming with Python, Make a chat app
                using Socket.io, Node.js, and MongoDB, and many more.
              </Text>
              </Box>
            </Flex>
          </Flex>
         
          
          {/* <Box
            marginTop={{ base: '1', sm: '5' }}
            display='flex'
            flexDirection={{ base: 'column', sm: 'row' }}
            justifyContent='space-between'
          >
            <Box
              display='flex'
              flex='1'
              marginRight='3'
              position='relative'
              alignItems='center'
            >
              <Box
                width={{ base: '100%', sm: '75%' }}
                zIndex='2'
                marginLeft={{ base: '0', sm: '10%' }}
                marginTop='5%'
              >
                <Image
                  borderRadius='lg'
                  src={
                    'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                  }
                  alt='workshops'
                  objectFit='contain'
                />
              </Box>
              <Box
                zIndex='1'
                width='90%'
                position='absolute'
                height='100%'
                marginLeft={{ base: '0', sm: '3%' }}
              >
                <Box
                  bgGradient={useColorModeValue(
                    'radial(orange.600 1px, transparent 1px)',
                    'radial(orange.300 1px, transparent 1px)'
                  )}
                  backgroundSize='20px 20px'
                  opacity='1'
                  height='100%'
                />
              </Box>
            </Box>
            <Box
              display='flex'
              flex='1'
              flexDirection='column'
              justifyContent='center'
              marginTop={{ base: '3', sm: '0' }}
              marginRight={8}
            >
              <Heading marginTop='1' textAlign='center' color={'yellow.400'}>
               Workshops
              </Heading>
              <Text
                as='p'
                marginTop='2'
                color={useColorModeValue('gray.700', 'gray.200')}
                fontSize='lg'
                textAlign='center'
              >
                As a part of Shaastra, we conduct several workshops every year,
                ranging over multiple topics. Some of the workshops that were
                conducted last year were Introduction to Data Science and
                Machine Learning, Cryptocurrency, and blockchain, How to Design
                a Mars Rover, Parallel Programming with Python, Make a chat app
                using Socket.io, Node.js, and MongoDB, and many more.
              </Text>
              <Text fontSize="2xl" textAlign='center' marginTop={8}  _hover={{
               color: "teal.500",
              }}><Link as={ReachLink} to="/events/WORKSHOPS"
            >Explore Workshops</Link></Text>
            </Box>
          </Box> */}
          {/*Summit*/}
          <Flex
            marginTop={{ base: '1', sm: '5' }}
            p={2}
            flexDirection={'column'}
            width={"95%"}
            alignItems = 'center'
            m={3}
            maxWidth={"1400px"}
          >
                <Image
                  height={["auto","400px"]}
                  width={"90%"}
                  borderRadius='lg'
                  src={summit}
                  alt='summit'
                  objectFit='cover'
                />
            <Flex
              width={"90%"}
              flexDirection={['column','row']}
              // justifyContent='center'
              p={2}
            >
              <Center flexDirection={'column'} width={["100%","40%"]}>
              <Heading textAlign='center' color={'#ea8a94'}>
              Summit
              </Heading>
              <Link as={ReachLink} style={{
                'textDecoration' : 'none'
              }} to='/summit'><Button p={2} m={2}>Explore Summit</Button></Link>
              </Center>
              <Box width={["100%","60%"]}>
              <Text
                textAlign='left'
                as='p'
                marginTop='2'
                color={useColorModeValue('gray.700', 'gray.200')}
                fontSize='lg'
                p={2}
              >
                 Summit is the flagship conference of Shaastra, which provides a
                networking platform for its participants to interact with the
                pioneers of today, and opportunities to enhance their expertise.
                With a line-up of lectures, panel discussions and workshops
                spanning over 3 days, participants, which include college
                students, personnel from startups and professionals are ensured
                to get an all-round experience. Every year Summit ventures into
                a unique and relevant theme to contribute to the developments in
                these fields of technology and to create an impact on society.
              </Text>
              </Box>
            </Flex>
          </Flex>
          {/* <Box
            marginTop={{ base: '1', sm: '5' }}
            display='flex'
            flexDirection={{ base: 'column', sm: 'row' }}
            justifyContent='space-between'
          >
            <Box
              display='flex'
              flex='1'
              marginRight='3'
              position='relative'
              alignItems='center'
            >
              <Box
                width={{ base: '100%', sm: '75%' }}
                zIndex='2'
                marginLeft={{ base: '0', sm: '10%' }}
                marginTop='5%'
              >
                <Image
                  borderRadius='lg'
                  src={summit}
                  alt='summit'
                  objectFit='contain'
                />
              </Box>
              <Box
                zIndex='1'
                width='90%'
                position='absolute'
                height='100%'
                marginLeft={{ base: '0', sm: '3%' }}
              >
                <Box
                  bgGradient={useColorModeValue(
                    'radial(orange.600 1px, transparent 1px)',
                    'radial(orange.300 1px, transparent 1px)'
                  )}
                  backgroundSize='20px 20px'
                  opacity='1'
                  height='100%'
                />
              </Box>
            </Box>
            <Box
              display='flex'
              flex='1'
              flexDirection='column'
              justifyContent='center'
              marginTop={{ base: '3', sm: '0' }}
              marginRight={8}
            >
              <Heading marginTop='1' textAlign='center' color={'yellow.400'}>
                Summit
              </Heading>
              <Text
                as='p'
                marginTop='2'
                color={useColorModeValue('gray.700', 'gray.200')}
                fontSize='lg'
                textAlign='center'
              >
                Summit is the flagship conference of Shaastra, which provides a
                networking platform for its participants to interact with the
                pioneers of today, and opportunities to enhance their expertise.
                With a line-up of lectures, panel discussions and workshops
                spanning over 3 days, participants, which include college
                students, personnel from startups and professionals are ensured
                to get an all-round experience. Every year Summit ventures into
                a unique and relevant theme to contribute to the developments in
                these fields of technology and to create an impact on society.
              </Text>
              <Text
                fontSize='2xl'
                textAlign='center'
                marginTop={8}
                _hover={{
                  color: 'teal.500',
                }}
              >
                <Link as={ReachLink} to='/summit'>
                  Explore Summit
                </Link>
              </Text>
            </Box>
          </Box> */}
          {/*Tif*/}
          <Flex
            marginTop={{ base: '1', sm: '5' }}
            p={2}
            flexDirection={'column'}
            width={"95%"}
            alignItems = 'center'
            m={3}
            maxWidth={"1400px"}
          >
                <Image
                  height={["auto","400px"]}
                  width={"90%"}
                  borderRadius='lg'
                  src={tif}
                  alt='tif'
                  objectFit='cover'
                />
            <Flex
              width={"90%"}
              flexDirection={['column','row-reverse']}
              // justifyContent='center'
              p={2}
            >
              <Center flexDirection={'column'} width={["100%","40%"]}>
              <Heading as={'h2'} fontSize={['2xl','3xl']} textAlign='center' color={'#ea8a94'}>
              Tech and Innovation Fair
              </Heading>
          <Link as={ReachLink} to='/tif'
           style={{
             "textDecoration" : "none"
           }}><Button p={2} m={2}> Explore TIF</Button></Link>
              </Center>
              <Box width={["100%","60%"]}>
              <Text
                textAlign='left'
                as='p'
                marginTop='2'
                color={useColorModeValue('gray.700', 'gray.200')}
                fontSize='lg'
                p={2}
              >
                 Tech and Innovation fair is one of the flagship events in
                Shaastra that scouts for budding entrepreneurs by providing a
                platform to develop tech based projects and enhance their
                potential to grow into a commercial product. TIF envisions
                leveraging IIT Madras’s rich startup ecosystem in its mission to
                promote innovation and address the dearth of hardcore tech
                startups in India
              </Text>
              </Box>
            </Flex>
          </Flex>
          {/* <Box
            marginTop={{ base: '1', sm: '5' }}
            display='flex'
            flexDirection={{ base: 'column', sm: 'row' }}
            justifyContent='space-between'
          >
            <Box
              display='flex'
              flex='1'
              marginRight='3'
              position='relative'
              alignItems='center'
            >
              <Box
                width={{ base: '100%', sm: '75%' }}
                zIndex='2'
                marginLeft={{ base: '0', sm: '10%' }}
                marginTop='5%'
              >
                <Image
                  borderRadius='lg'
                  src={tif}
                  alt='tif'
                  objectFit='contain'
                />
              </Box>
              <Box
                zIndex='1'
                width='90%'
                position='absolute'
                height='100%'
                marginLeft={{ base: '0', sm: '3%' }}
              >
                <Box
                  bgGradient={useColorModeValue(
                    'radial(orange.600 1px, transparent 1px)',
                    'radial(orange.300 1px, transparent 1px)'
                  )}
                  backgroundSize='20px 20px'
                  opacity='1'
                  height='100%'
                />
              </Box>
            </Box>
            <Box
              display='flex'
              flex='1'
              flexDirection='column'
              justifyContent='center'
              marginTop={{ base: '3', sm: '0' }}
              marginRight={8}
            >
              <Heading marginTop='1' textAlign='center' color={'yellow.400'}>
                Tech and Innovation Fair
              </Heading>
              <Text
                as='p'
                marginTop='2'
                color={useColorModeValue('gray.700', 'gray.200')}
                fontSize='lg'
                textAlign='center'
              >
                Tech and Innovation fair is one of the flagship events in
                Shaastra that scouts for budding entrepreneurs by providing a
                platform to develop tech based projects and enhance their
                potential to grow into a commercial product. TIF envisions
                leveraging IIT Madras’s rich startup ecosystem in its mission to
                promote innovation and address the dearth of hardcore tech
                startups in India
              </Text>
              <Text
                fontSize='2xl'
                textAlign='center'
                marginTop={8}
                _hover={{
                  color: 'teal.500',
                }}
              >
                <Link as={ReachLink} to='/tif'>
                  Explore TIF
                </Link>
              </Text>
            </Box>
          </Box> */}
        </Flex>
        <Footer
          designed={[{ name: 'Drishti', mail: 'me19b100@smail.iitm.ac.in' }]}
        />
      </CustomBox>
    </Box>
  )
}

export default EventsHome
