import {
  Heading,
  Text,
  Box,
  SimpleGrid,
  Image,
  Flex,
  useColorModeValue,
  Center,
} from '@chakra-ui/react'
import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import './../../../styles/night/night.css'
import CustomBox from './../../shared/CustomBox'
import image1 from '../../../images/night/projects/envisage7/image1.png'
import image2 from '../../../images/night/projects/envisage7/image2.png'
import image3 from '../../../images/night/projects/envisage7/image3.jpg'
import image4 from '../../../images/night/projects/envisage7/image4.png'
import image5 from '../../../images/night/projects/envisage7/image5.png'
import image6 from '../../../images/night/projects/envisage7/image6.jpg'
import image7 from '../../../images/night/projects/envisage7/image7.png'
import image8 from '../../../images/night/projects/envisage7/image8.png'
import image9 from '../../../images/night/projects/envisage7/image9.png'
import image10 from '../../../images/night/projects/envisage8/image10.jpg'
import image11 from '../../../images/night/projects/envisage8/image11.jpeg'
import image12 from '../../../images/night/projects/envisage8/image12.jpg'
import image13 from '../../../images/night/projects/envisage8/image13.jpg'
import image14 from '../../../images/night/projects/envisage8/image14.jpg'
import image15 from '../../../images/night/projects/envisage8/image15.jpg'
import image16 from '../../../images/night/projects/envisage8/image16.jpeg'
import image17 from '../../../images/night/projects/envisage8/image17.jpg'
import image18 from '../../../images/night/projects/envisage9/image18.png'
import image19 from '../../../images/night/projects/envisage9/image19.jpg'
import image20 from '../../../images/night/projects/envisage9/image20.png'
import image21 from '../../../images/night/projects/envisage9/image21.jpg'
import image22 from '../../../images/night/projects/envisage9/image22.jpg'
import image23 from '../../../images/night/projects/envisage9/image23.png'
import image24 from '../../../images/night/projects/envisage9/image24.png'
import image25 from '../../../images/night/projects/envisage9/image25.png'
import Footer from '../../shared/Footer'
import '../../../styles/night/Projects.css'

const projects = [
  [
    {
      imgUrl: image1,
      title: 'Laser Show',
      desc: `This project mainly involves building laser projectors completely from scratch and using them in different types of entertaining shows. Sequentially programmed rotation of mirrors in X and Y direction is used for diverting a laser beam to project images on fog.
            `,
    },
    {
      imgUrl: image2,
      title: 'Led Sculpture',
      desc: `LED Sculpture is about  “visualising music” on a huge 3D array of LEDs. In this project, more than a thousand LEDs will be controlled to form a device that takes as input an audio signal, and outputs its visualization on a 3D matrix of led. The entire LED mesh is divided into different frequency zones (like the keys on a piano) and the Algorithm samples the input signal at regular time intervals, converts this signal to the frequency domain, and maps the detected frequencies on this 20x16x4 LED matrix.  Apart from signal analysis, a lot of different patterns can also be shown on this sculpture.
`,
    },
    {
      imgUrl: image3,
      title: 'PM & TCS',
      desc: `
Projection mapping, also known as spatial augmented reality, is a technology which is used to turn irregularly shaped objects into surfaces for projection. The Techno-Cultural Show is a project which aims at creating our own Fighting Gravity or Tron Dance show. The dancers’ suits consist of electroluminescent wires.The wires are controlled using the node MCUs which receive data from the computer through Wifi. The On-OFF sequence of the suits are programmed and synced with the act to create illusions, a concept we call Techno-Illusions.

`,
    },
    {
      imgUrl:image4,
      title: 'Puppet Show',
      desc: `Puppets are controlled using stepper motors and arduino programming. The puppets are placed in a box and light is incident on them from a projector, that
also creates the background. This way, shadows are produced on the screen.
`,
    },
    {
      imgUrl: image5,
      title: 'Speed Painting Bot',
      desc: `Speed painting bot involves painting a huge picture within 3-4 minutes using close synchronisation between more than 40 stepper motors. A concept called pixelation is used wherein an image is converted to pixels of size 3 cm X 3 cm and 40 multi coloured brushes simultaneously paint the entire image in a row wise fashion. 

The project involves image processing to convert the images to pixels, a good mechanical structure for the bot and a canvas aesthetically built on a large scale and an electrical sub team to synchronise all the motors together.

The project is an entirely new concept, which hasn't been tried anywhere else. 
`,
    },
    {
      imgUrl:image6,
      title: 'Water Leviation',
      desc: `Water Levitation is an amazing optical illusion that works on the principle of Stroboscopic effect. In this project, we will be controlling several diaphragm pumps which will create an array of laminar streams turning on and off periodically.The multi color LED strobe light illuminating the water streams will also glow at designated frequency. The relative difference between these two frequencies will create amazing illusions such as a mid air stationary image formed out of water droplets or the water drops rising up defying the law of gravity.The water stream can also be made to mimic the wave generated from an oscilloscope which will add to the beauty of the project.  `,
    },
    {
      imgUrl:image7,
      title: 'Emotional Radio',
      desc: `It’s a radio which plays songs automatically depending 
upon the mood of the person standing right in front of it.

When a person approaches this radio, it analyses different features of the face and decides how happy, sad or angry the person is and starts playing music that suits the person's mood. It could even recognise signs of tiredness and can be programmed to play upbeat music to pep up the person.

This Artificial Intelligence project captures the face by a hidden camera and uses facial recognition software to determine the person’s expressions.
`,
    },
    {
      imgUrl:image8,
      title: 'Gesture Controlled Keyboard',
      desc: `Keyboards are universally accepted integral input devices for computers. They may be wired, wireless or virtual.

Gesture Keyboard which as the name suggests converts gestures into keystrokes with the help of Arduino programming. The Gesture Keyboard is a device that translates gestures into letters.  It sends the data to a computer via Bluetooth communication that, with a Machine Learning algorithm, translates the motion readings into characters.
We can integrate this idea to do various activities in Medical Applications, Alternative computer interfaces, Alternative computer interfaces and Automation systems.
`,
    },
    {
      imgUrl:image9,
      title: 'Holojest',
      desc: `Apart from AR/VR taking over most of the arenas, Holographic technology is one such booming field. 

The project is about 3D image reconstruction from images taken from different view angles. Multiple snaps from different view angles using a smartphone can be processed to create an interactive 3D hologram of any object using gestures.

It involves rendering using Meshlab and Unity. It has a wide range of applications - navigation in automobiles, design, security, holographic goggles,etc.
`,
    },
  ],
  [
    {
      imgUrl: image10,
      title: 'Light painting',
      desc: ` When UV light falls on a phosphor screen, the exposed areas of the screen glow in
different colors based on the material of the screen. This project mainly involves building a UV
laser projector completely from scratch and using it in different types of entertaining shows.
Sequentially programmed rotation of mirrors in X and Y direction is used for diverting a laser
beam to project images on screen. G-codes are generated from the images which we want to
project and are encoded before giving to the projector. The Arduino decodes the file and gives the
G-code to the galvos (perpendicular galvanometers used to rotate the mirrors in X, Y axes). This
way, animated videos can be projected by the laser projector.`,
    },
    {
      imgUrl: image11,
      title: 'Laser Dance',
      desc: `on: In this project, the dancer performs while interacting with laser beams. Sequentially
programmed rotation of mirrors in X and Y direction is used for reflecting a laser beam to
generate beams at required angles. The projector will be below the dancer.`,
    },
    {
      imgUrl: image12,
      title: 'Techno-Orchestra',
      desc: `This project involves creating music using the sound from the marbles hitting a surface.
The marbles are dropped on a particular surface to create a particular sound, by having different
surfaces we can create different sounds and thus create beautiful music. This project is unique and
innovative. It will include a complex mechanical structure. It works by raising steel marbles through the
machine into multiple feeder tubes, where they are then released from height via programmable
release gates, falling and striking a musical instrument below creating a beautiful music with a great
visual experience. The release gates are push-pull solenoid valves which are controlled by a
microcontroller which has the data about the song. The marbles are taken back to the top using a
conveyor belt for recycling.
`
    },
    {
      imgUrl:image13,
      title: 'LED sculpture',
      desc: `Do you like playing with LEDs or listening to music and want to take it a notch up for the
sake of entertainment, then check out this project. Make LEDs lights dance using music, bored of
watching 2D patterns, try out creating 3D patterns in the 3D LED cube display stretching the
boundaries of your imagination to the limits. This is a fascinating project based on persistence of vision
and multiplexing in order to minimize the amount of wires required for controlling the LEDs in the large
LED matrix. The other aspects include FFT algorithm (an algorithm which gives desired results) for
analysing sound files, image processing of pictures, voltage regulation of IC’s and a lot more concepts
to look forward to.
`,
    },
    {
      imgUrl:image14,
      title: 'Wire mapping',
      desc: ` Projection has an amazing experience of visualization and sound effects. Using a
modified abstract video and projecting them on set of wires arranged as a cube giving a unique
design and 3D effects to the audience. Using after effects or premiere pro some abstract videos
are made and necessary changes for improvement are made to make it more beautiful and
exciting. This time we would be trying to create a new environment for projection using wires
arranged in a particular pattern of few layers of wires which are parallel and at an equal distance
from each other. There is a huge scope in improving this project such as holographic projections
and dynamic mapping, all depends on the coordinators’ enthusiasm and curiosity to try out
these amazing things.`,
    },
     {
      imgUrl: image15,
      title: 'Radiant troupe',
      desc: `: The Radiant Troupe is a project which aims at creating our own Fighting Gravity or Tron
Dance show. The dancers wear suits comprising of electroluminescent wires (EL) which are
programmed and synced with the act to create illusions, a concept we call Techno-Illusions.
This year we want to use a screen as background with EL wires and LEDs lights attached onto
it allowing for a variety of background based patterns and designs. The light suits consist of
microcontrollers, ICs and EL wires on them. We are using Wi-Fi modules that can be controlled
from a distance where a laptop or a dedicated server can be used to send the data to each suit.
It works on the principle of powering the EL wires on and off repeatedly which when properly
synced with the music and the act, produces a lot of illusions and an awesome performance.`,
    },
     {
      imgUrl:image16,
      title: 'Interactive sound table',
      desc: `The project aims at creating an interactive table/box which creates music based on
the position and movement of objects placed on it. The motion and position of the blocks is detected
using a webcam placed inside the table and this information is processed and mapped to specific beats
and features of music using the software, FL studio.
`,
    },
     {
      imgUrl: image17,
      title: 'AR/VR Zone',
      desc: `The project will involve multiple mini projects focusing on VR & AR content development.
VR Cardboard headset will be made and content/games will be developed. The project will also involve
AR table with artwork and games, AR puzzles etc.
`,
    },
  ],
  [
    {
      imgUrl: image18,
      title: 'Virtual Instruments',
      desc: `Do you want to organize a band but without any actual instruments? Does the
idea of playing a guitar or piano remotely without ever touching them excite you?eter), flex
sensors and pressure sensors to create portable wireless instrument kits that are way
cheaper than the actual instruments. These sensors detect the gestures and hand
movement of the player and send that data to a laptop via nodeMCU/Arduino. A python
script processes that data and generates keyboard events, which are converted into the
corresponding notes and sounds via FLStudio and is played on the speakers.
`,
    },
    {
      imgUrl:image19 ,
      title: 'Arduino XY Plotter',
      desc: `The x-y plotter has a two axis control and a special mechanism to raise and
lower the pen. The plotter has a hole in its base where the pen goes through. It was
designed to print on both paper or any surface such as a wall; simply place the plotter
against the surface and the pen will draw away through the hole.The movement of the pen
could be controlled using thick cotton ropes, whose movement is decided by stepper
motors.The stepper motors and servo motors are in turn controlled by the Arduino code.The
materials required for the holding of pen, motors are designed in Fusion 360 and are 3D
printed.
`,
    },
    {
      imgUrl: image20,
      title: 'Water Levitation + Digital Water Curtain',
      desc: `This project is a design that experiments with different attractive patterns that
can be generated using water droplets over a 2d plane, essentially creating a display of light
effects using water. By controlling arrays of water outlets using pumps held by a specially
designed structure, we are able to produce different patterns and moving images using
droplets of water. Images and design patterns can be processed and converted into code
which can then be uploaded to a circuit board which controls the pumps appropriately.
Different light sources can be used to change or provide gradients of colours to the water
droplets in the waterfall display. We would be using diaphragm pumps to control the flow of
water through the outlets and these pumps would be controlled through an Arduino circuit
board with help of relay modules and transistors.
`,
    },
    {
      imgUrl: image21,
      title: 'Persistence of Vision',
      desc:`Persistence of vision traditionally refers to the optical illusion that occurs when
visual perception of an object does not cease for some time after the rays of light proceeding
from it have ceased to enter the eye. So here we are going to try and depict the same
phenomenon using a huge LED rotating display. This is going to be an updated version of our
previous edition. We need to show videos on the rotating LED arm. It involves both coding as
well as electronics. The image is processed and is used by the arduino to code in a certain way
in order to display it as an image when the LED arm rotates.The LEDs are turned on at the right
moments to build up an image. Similar idea is used for displaying a video, where each frame is
taken as an individual image.`,
    },
    {
      imgUrl: image22,
      title: 'Projection Mapping',
      desc:`The aim of the project was to bring out the best effects out of the video editing
softwares used, to create a classic visual sensation for the audience. This idea is Projection
Mapping.This project is all about 3-d illusions. The basic idea of the project is to map a 2-d
video onto a 3-d object which ultimately gives out a 3-d effect. The 3-d surfaces of the
objects are used as the surfaces for projection.`,
    },
    {
      imgUrl:image23,
      title: 'Smart Glass',
      desc:`In this project, we used an Arduino Uno and a Bluetooth module to get and
work with the data from a smartphone or any such device and then displayed it on a small
LED display which is mounted on a pair of glasses. This allows us to keep track of a lot of
cool stuff like time, notifications, caller ID, and many more on our glasses.`,
    },
    {
      imgUrl: image24,
      title: 'Smart Mirror',
      desc:`Smart mirrors are straight from science fiction. They’re part of an optimistic vision of the
future that imagines a world where screens and data are everywhere, ready to feed you
whatever information you need at a moment’s notice. In this project, we have integrated
alexa voice controlled virtual assistant into an everyday use mirror along with many other
smart features like google calendar, weather etc.`,
    },
    {
      imgUrl: image25,
      title: 'Space Shooter Game',
      desc:`Spaceship games had existed since the time when computer games started to
become popular, and since then better versions of these games started being developed to
give them a more enhanced feel. This project aims to design a game with the similar
experience of current spaceship games using Unity Engine, ultimately giving the user an
immersed feel of observing and controlling a spaceship.
The model of the spaceship is generated using 3d graphics software like blender and
different additional visual effects are introduced using tools within Unity. The environmental
setup of the game can be designed in Unity, providing various game physics, spaceship
controls and shooting elements, obstacles and levels of difficulty included to make it
exciting. With proper research, this game can also be converted to a VR game using
dedicated tools in Unity itself and with the help of a VR headset, providing an additional level
of immersion into the game.`,
    },

  ],
]

export default function Project() {
  const color = useColorModeValue('white', 'black')
  const bgcolor = useColorModeValue('gray.700', 'gray.200')

  let { id }: { id: any | null } = useParams()
  const {
    location: { state },
  }: any = useHistory()
  if (isNaN(parseInt(id))) return <h1>404 Not Found</h1>
  else id = parseInt(id)
  const data = projects[(id - 1) % 3]

  return (
    <CustomBox>
      <Flex
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        textAlign='center'
      >
        <Center className='header-ctn' marginTop={10}>
          <Heading marginTop={12} fontSize='7xl'>
            <span>{state}</span>
          </Heading>
        </Center>
        {data &&
          data.map(({ imgUrl, title, desc }, index) => (
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
                    src={imgUrl}
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
                    {title}
                  </Heading>
                  <Text fontSize='lg' padding={2}>
                    {desc}
                  </Text>
                </Flex>
              </SimpleGrid>
            </Box>
          ))}
      </Flex>
      <Footer
        designed={[
          { name: 'Prithiviraj P', mail: 'na19b052@smail.iitm.ac.in' },
        ]}
      />
    </CustomBox>
  )
}
