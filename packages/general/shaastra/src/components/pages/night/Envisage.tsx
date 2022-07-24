import React from 'react'
import {
  Heading,
  useColorModeValue,
  Stack,
  Text,
  Box,
  Center,
  Flex,
  Image,
  SimpleGrid,
} from '@chakra-ui/react'
import './../../../styles/night/night.css'
import { Link } from 'react-router-dom'
import Particles from 'react-tsparticles'
import CustomBox from './../../shared/CustomBox'
import { ReactComponent as LogoBlack } from './../../../images/night/Envisage_black.svg'
import { ReactComponent as LogoWhite } from './../../../images/night/Envisage_white (1).svg'
import image1 from './../../../images/night/envisage_1.png'
import image2 from './../../../images/night/envisage_2.png'
import project1 from '../../../images/night/projects/image1.png'
import project2 from '../../../images/night/projects/image2.jpg'
import project3 from '../../../images/night/projects/image3.jpg'
import Footer from '../../shared/Footer'
import '../../../styles/night/Envisage.css'
import { FaArrowsAltV } from 'react-icons/fa'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

export default function Main() {
  const color = useColorModeValue('white', 'black')
  const bgcolor = useColorModeValue('gray.700', 'gray.200')

  return (
    <CustomBox>
      <Flex
        alignItems='center'
        justifyContent='center'
        direction='column'
        minHeight='100vh'
        className='main-ctn'
        maxW='100%'
        overflowX='hidden'
      >
        <Box className='header-ctn' marginTop={12}>
          <Heading marginTop={12} fontSize='7xl'>
            <span>ENVISAGE</span>
          </Heading>
        </Box>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('gray.700', 'gray.200')}
          textColor={useColorModeValue('white', 'black')}
          boxShadow={'lg'}
          p={8}
          marginTop={8}
          marginLeft={8}
          marginRight={8}
          marginBottom={8}
          justifyContent='center'
          alignItems='center'
          textAlign='center'
        >
          <SimpleGrid columns={[1, 1, 2]} spacing='40px'>
            <Center>
              <Image
                alt='image1'
                src={image1}
                rounded='xl'
                width='100%'
                height='auto'
              ></Image>
            </Center>
            <Flex flexDirection='column'>
              <Heading margin={2} padding={2} className='sub-heading'>
                ABOUT US
              </Heading>
              <Text fontSize='lg' padding={2}>
                The Annual Technical Festival of IIT Madras, Shaastra introduced
                a technologically aided cultural show in the year 2013,
                capitalizing on the entertainment factor. This techno – cultural
                show was named Envisage and today it is India’s first and only
                student organised techno-entertainment show. The projects
                exhibited by Envisage attract a bunch of not-so-technically
                oriented guests too. The projects are designed in conformity
                with the tagline of Envisage – “Technology meets Entertainment”.
                Alongside conducting the show on 1st day of Shaastra, a number
                of other interactive projects and video games are also
                developed and exhibited to a vast crowd at KV Stalls during
                Shaastra. Over the past few years Envisage has been exploring
                and presenting projects at various avenues like IIM Bangalore,
                Anna University and in several other universities as part of
                Samparks, Publicity event of Shaastra. The coming version marks
                the entry of Envisage into its very 10th year.
              </Text>
              <Heading margin={2} padding={2} className='sub-heading'>
                VISION
              </Heading>
              <Text fontSize='lg' padding={2}>
                As the tagline “Where Technology Meets Entertainment” suggests,
                we inspire and enable students to explore their creative and
                engineering skills through various technical projects for the
                techno cultural show and the tech exhibition during Shaastra.
              </Text>
            </Flex>
          </SimpleGrid>
        </Box>
         <Flex
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
          >
            <Box>
              <Heading marginTop={5} padding={2} className='sub-heading'>
                VERTICALS
              </Heading>
            </Box>
            <SimpleGrid
              columns = {[1,1,1,2,3]}
              spacing='18px'
              justifyContent='center'
              alignItems='center'
            >
              <Box
                textColor='black'
                bgColor='white'
                rounded={'lg'}
                boxShadow={'lg'}
                p={8}
                marginTop={8}
                marginLeft={8}
                marginRight={8}
                marginBottom={8}
                minHeight = {300}
                justifyContent='center'
                alignItems='center'
                textAlign='center'
              >
                <Heading margin={2}>Shows</Heading>
                <Text>
                  This vertical comprises large scale projects which are
                  presented in the Envisage show, which is organized on the
                  first day of Shaastra. This is the first and only student-run
                  techno-entertainment show in India and witnessed by an
                  audience of around 5000.
                </Text>
              </Box>
              <Box
                rounded={'lg'}
                boxShadow={'lg'}
                p={8}
                marginTop={8}
                marginLeft={8}
                marginRight={8}
                marginBottom={8}
                justifyContent='center'
                alignItems='center'
                textAlign='center'
                minHeight={300}
                bgColor='white'
                textColor='black'
              >
                <Heading margin={2}>Tech Ambience</Heading>
                <Text>
                  This vertical comprises interactive projects which are
                  presented at KV grounds during Shaastra as a part of tech-
                  exhibition of Envisage.
                </Text>
              </Box>
              <Box
                rounded={'lg'}
                boxShadow={'lg'}
                p={8}
                marginTop={8}
                marginLeft={8}
                marginRight={8}
                marginBottom={8}
                justifyContent='center'
                alignItems='center'
                textAlign='center'
                minHeight={300}
                bgColor='white'
                textColor='black'
              >
                <Heading margin={2}>Game Dev</Heading>
                <Text>
                  This vertical is involved in creating video games from scratch
                  and are displayed at KV stalls during Shaastra as a part of
                  our Tech-Exhibition. We also compete in a lot of entertaining
                  game jam sessions and conduct game development workshops as a
                  team to show the entertaining aspect of game development to
                  others.
                </Text>
              </Box>
            </SimpleGrid>
          </Flex>
        <Flex
          justifyContent='center'
          flexDirection='column'
          margin={2}
          padding={2}
        >
          <Heading marginBottom={12} className='sub-heading'>
            PREVIOUS YEAR'S PROJECTS
          </Heading>
          <VerticalTimeline className='timeline'>
            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              contentStyle={{
                background: '#EDEDED',
                color: 'black',
              }}
              iconStyle={{ background: '#E63E6D', color: '#fff' }}
              contentArrowStyle={{
                borderRight: '7px solid  #EDEDED',
              }}
              icon={<FaArrowsAltV />}
            >
              <h3 className='vertical-timeline-element-title'>Envisage 7.0</h3>
              <p>Click below to explore and learn more about the projects that were conducted during Shaastra 2018-2019.</p>
              <Link
                to={{ pathname: `/project/1`, state: 'Envisage 7.0' }}
                className='link-ctn '
              >
                Explore Projects
              </Link>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              contentStyle={{
                background: '#EDEDED',
                color: 'black',
              }}
              contentArrowStyle={{
                borderRight: '7px solid  #EDEDED',
              }}
              iconStyle={{ background: '#E63E6D', color: '#fff' }}
              icon={<FaArrowsAltV />}
            >
              <h3 className='vertical-timeline-element-title'>Envisage 8.0</h3>
              <p>Click below to explore and learn more about the projects that were conducted during Shaastra 2019-2020.</p>
              <Link
                to={{ pathname: `/project/2`, state: 'Envisage 8.0' }}
                className='link-ctn'
              >
                Explore Projects
              </Link>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              width='50%'
              className='vertical-timeline-element--work'
              iconStyle={{ background: '#E63E6D', color: '#fff' }}
              contentArrowStyle={{
                borderRight: '7px solid  #EDEDED',
              }}
              contentStyle={{
                background: '#EDEDED',
                color: 'black',
              }}
              icon={<FaArrowsAltV />}
            >
              <h3 className='vertical-timeline-element-title'>Envisage 9.0</h3>
              <p>Click below to explore and learn more about the projects that were conducted during Shaastra 2020-2021.</p>
              <Link
                to={{ pathname: `/project/3`, state: 'Envisage 9.0' }}
                className='link-ctn'
              >
                Explore Projects
              </Link>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </Flex>
        <Flex
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          textAlign='center'
        >
          <Heading marginBottom={12} className='sub-heading'>
            <span>PATENTED PROJECTS</span>
          </Heading>
          <Box
            rounded={'lg'}
            boxShadow={'lg'}
            textColor={color}
            bgColor={bgcolor}
            p={8}
            marginTop={8}
            marginLeft={8}
            marginRight={8}
            marginBottom={8}
            justifyContent='center'
            alignItems='center'
            textAlign='center'
          >
            <SimpleGrid columns={[1, 1, 2]} spacing='40px'>
              <Center>
                <Image
                  alt='image1'
                  src={project1}
                  rounded='xl'
                  width='100%'
                  height='auto'
                  maxH='400px'
                ></Image>
              </Center>
              <Flex
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                textAlign='center'
              >
                <Heading margin={2} padding={2} className='sub-heading'>
                  Speed Painting Bot (SPB)
                </Heading>
                <Text fontSize='lg' padding={2}>
                  It is a bot that can create a painting by punching colored (5
                  colors) pixels on a canvas.It involves painting a huge picture
                  within 3-4 minutes using close synchronisation between more
                  than 40 stepper motors. A concept called pixelation is used
                  wherein an image is converted to pixels of size 3 cm X 3 cm
                  and 40 multi coloured brushes simultaneously paint the entire
                  image in a row wise fashion. The project is an entirely new
                  concept, which hasn't been tried anywhere else.
                </Text>
              </Flex>
              <Center>
                <Image
                  alt='image1'
                  src={project2}
                  rounded='xl'
                  width='100%'
                  height='auto'
                  maxH='400px'
                ></Image>
              </Center>
              <Flex
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                textAlign='center'
              >
                <Heading margin={2} padding={2} className='sub-heading'>
                  3D Waterfall
                </Heading>
                <Text fontSize='lg' padding={2}>
                  This project can be subtly described as a cylindrical water
                  screen. Usually lights and other lighting devices are used as
                  a display element but here we are doing the same thing in a
                  quite unique way, through water i.e using water as an element
                  of display. We achieved this using our own electrical design
                  and controlling it through an Arduino-Uno. The structure which
                  bears the project has a unique portable design.
                </Text>
              </Flex>
              <Center>
                <Image
                  alt='image1'
                  src={project3}
                  rounded='xl'
                  width='100%'
                  height='auto'
                  maxH='400px'
                ></Image>
              </Center>
              <Flex
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                textAlign='center'
              >
                <Heading margin={2} padding={2} className='sub-heading'>
                  Virtual Instruments
                </Heading>
                <Text fontSize='lg' padding={2}>
                  Did the thought of making music out of thin air ever crossed
                  your mind? What if you come across some nice music at some
                  random place and you want to play it then and there. Here
                  comes the virtual instruments, where one can play drums,
                  flute, piano, guitar and so on without the need of carrying
                  the whole instrument set up everywhere.
                </Text>
              </Flex>
            </SimpleGrid>
          </Box>
        </Flex>
      </Flex>
      <Footer
        designed={[
          { name: 'Prithiviraj P', mail: 'na19b052@smail.iitm.ac.in' },
        ]}
      />
    </CustomBox>
  )
}
