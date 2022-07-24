// import React from "react";
// import { Box, Heading, Image, Center, Text, Grid, GridItem, Container, useBreakpointValue } from "@chakra-ui/react";
// import { ListItem, ListIcon, List } from "@chakra-ui/react";
// import { ArrowForwardIcon } from "@chakra-ui/icons";
// import CustomBox from "../shared/CustomBox";
// import Particles from "./particles";
// import { ReactComponent as LogoBlack } from "./../../images/shows/Shows_black.svg"
// import { ReactComponent as LogoWhite } from "./../../images/shows/Shows_white.svg"
// import '../../styles/particles.css'
// // import { ColorModeSwitcher } from "../../styles/themes/ColorModeSwitcher";
// // import Particles from "react-tsparticles";

// import { useColorModeValue } from "@chakra-ui/color-mode";
// import { Link } from "react-router-dom";
// // import { Center, Square, Circle } from "@chakra-ui/react"




// export default function Shows() {
//     const cols = useBreakpointValue({ base: 1, md: 2 });
//     const HeaderLogo = useColorModeValue(LogoBlack, LogoWhite)
//     const height = useBreakpointValue({ base: "60", lg: "50" })

//     return ( 
        

        
//         <CustomBox>  
            
          
//         {/* <Center h='300px'>
            
//               <Particles
//               className='particles'
//             id="tsparticles"
//             options={{ background: {
//                 color: {
//                   value: "#0d47a1",
//                 },
//               },
//               fpsLimit: 60,
//               interactivity: {
//                 detectsOn: "canvas",
//                 events: {
//                   onClick: {
//                     enable: true,
//                     mode: "push",
//                   },
//                   onHover: {
//                     enable: true,
//                     mode: "repulse",
//                   },
//                   resize: true,
//                 },
//                 modes: {
//                   bubble: {
//                     distance: 400,
//                     duration: 2,
//                     opacity: 0.8,
//                     size: 40,
//                   },
//                   push: {
//                     quantity: 4,
//                   },
//                   repulse: {
//                     distance: 200,
//                     duration: 0.4,
//                   },
//                 },
//               },
//               particles: {
//                 color: {
//                   value: "#ffffff",
//                 },
//                 links: {
//                   color: "#ffffff",
//                   distance: 150,
//                   enable: true,
//                   opacity: 0.5,
//                   width: 1,
//                 },
//                 collisions: {
//                   enable: true,
//                 },
//                 move: {
//                   direction: "none",
//                   enable: true,
//                   outMode: "bounce",
//                   random: false,
//                   speed: 6,
//                   straight: false,
//                 },
//                 number: {
//                   density: {
//                     enable: true,
//                     value_area: 800,
//                   },
//                   value: 80,
//                 },
//                 opacity: {
//                   value: 0.5,
//                 },
//                 shape: {
//                   type: "circle",
//                 },
//                 size: {
//                   random: true,
//                   value: 5,
//                 },
//               },
//               detectRetina: true, }}
//               />
//               </Center> */}
        
     
//             <Center  h="100px" >
//                 <HeaderLogo height={height} width="188" />
//             </Center>
//             {/* <Link to="/" >
                
//             </Link> */}
//             {/* <Heading textAlign="center" marginBottom="10" data-aos="fade-left" textTransform="uppercase" textDecor="underline">
//                 <HeaderLogo height={height} width="200" />
//             </Heading> */}
//             <Center data-aos="zoom-in">
//                 <Image src="/shows_1.png" borderRadius="8" width="80%" />
//             </Center>
//             <Center margin="20px 0">
//                 <Text width="80%" data-aos="fade-right" textAlign="justify" fontFamily="cursive">
//                 Professional shows are a fitting end to each day of Shaastra. These techno-entertainment shows, ever since their conception, have hosted artists from across the globe. Our audience counts up in thousands, which is a testament to its success and popularity. These include Mirage, a laser show by an international group, Sand Art show by world-renowned artists, Bike Stunt show by French performers and EDM (Electronic Dance Music) Night.

//                 </Text>
//             </Center>
//             <Grid templateColumns={`repeat(${cols || 2}, 1fr)`} justifyItems="center" padding="0 0px" rowGap="4">
//                 <GridItem>
//                     <Center>
//                         <Image borderRadius="8" data-aos="zoom-in" width="600px" src="/shows_2.png" height="500px"  />
//                     </Center>
//                 </GridItem>
//                 <GridItem>
//                     <Center>
//                         <Image borderRadius="8" data-aos="zoom-in" width="600px" src="/shows_3.png" height="500px" />
//                     </Center>
//                 </GridItem>
//             </Grid>
//             <Container marginTop="10" paddingBottom="20">
//             {/* <div className="wrapper">
//     <Particles /> */}
//     {/* <div className="text">
//         <h1>This is a test</h1>
//     </div> */}
// {/* </div> */}
//             {/* <Particles /> */}
//             {/* <Particles
//               className='particles'
//             id="tsparticles"
//             options={{ background: {
//                 color: {
//                   value: "#0d47a1",
//                 },
//               },
//               fpsLimit: 60,
//               interactivity: {
//                 detectsOn: "canvas",
//                 events: {
//                   onClick: {
//                     enable: true,
//                     mode: "push",
//                   },
//                   onHover: {
//                     enable: true,
//                     mode: "repulse",
//                   },
//                   resize: true,
//                 },
//                 modes: {
//                   bubble: {
//                     distance: 400,
//                     duration: 2,
//                     opacity: 0.8,
//                     size: 40,
//                   },
//                   push: {
//                     quantity: 4,
//                   },
//                   repulse: {
//                     distance: 200,
//                     duration: 0.4,
//                   },
//                 },
//               },
//               particles: {
//                 color: {
//                   value: "#ffffff",
//                 },
//                 links: {
//                   color: "#ffffff",
//                   distance: 150,
//                   enable: true,
//                   opacity: 0.5,
//                   width: 1,
//                 },
//                 collisions: {
//                   enable: true,
//                 },
//                 move: {
//                   direction: "none",
//                   enable: true,
//                   outMode: "bounce",
//                   random: false,
//                   speed: 6,
//                   straight: false,
//                 },
//                 number: {
//                   density: {
//                     enable: true,
//                     value_area: 800,
//                   },
//                   value: 80,
//                 },
//                 opacity: {
//                   value: 0.5,
//                 },
//                 shape: {
//                   type: "circle",
//                 },
//                 size: {
//                   random: true,
//                   value: 5,
//                 },
//               },
//               detectRetina: true, }}
//               />   */}
//                 <List spacing={3}>
//                     <ListItem>
//                         <ListIcon as={ArrowForwardIcon} color="green.500" />
//                         <Text as="span" color="#00A878">
//                             2016
//                         </Text>
//                         <Text marginLeft="10">Adelaida, Vivek Patil (sand + light artist), Freestyle Air - 3 act</Text>
//                     </ListItem>
//                     <ListItem>
//                         <ListIcon as={ArrowForwardIcon} color="green.500" />
//                         <Text as="span" color="#00A878">
//                             2017
//                         </Text>
//                         <Text marginLeft="10"> IDRL drone race</Text>
//                     </ListItem>
//                     <ListItem>
//                         <ListIcon as={ArrowForwardIcon} color="green.500" />
//                         <Text as="span" color="#00A878">
//                             2018
//                         </Text>
//                         <Text marginLeft="10">Mariana Bo ( best ever EDM night), Get Massive (Duo), Broken Symmetry, Suhani Shah</Text>
//                     </ListItem>
//                     <ListItem>
//                         <ListIcon as={ArrowForwardIcon} color="green.500" />
//                         <Text as="span" color="#00A878">
//                             2019
//                         </Text>
//                         <Text marginLeft="10">Vivek Patil, Vilas Nayak</Text>
//                     </ListItem>
//                     <ListItem>
//                         <ListIcon as={ArrowForwardIcon} color="green.500" />
//                         <Text as="span" color="#00A878">
//                             2020
//                         </Text>
//                         <Text marginLeft="10">Heimdall, Vivek Desai </Text>
//                     </ListItem>
//                     <ListItem>
//                         <ListIcon as={ArrowForwardIcon} color="green.500" />
//                         <Text as="span" color="#00A878">
//                             2020-21
//                         </Text>
//                         <Text marginLeft="10"> Ray Li, Dan Rhodes (he recently blew up on YT, so it helps our case), Sonic Snares, Kenny Sebastian, Soda (Sudarshan Ramamurthy), Sushil Jazz, Rishabh Rajan</Text>
//                     </ListItem>
//                 </List>
//             </Container>
//             </CustomBox>
           
        
        
    
//     );
// }

import React from "react";
import { Heading, Image, Center, Text, Grid, GridItem, Container, useBreakpointValue } from "@chakra-ui/react";
import { ListItem, ListIcon, List } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import CustomBox from "./../../shared/CustomBox";
import { ReactComponent as LogoBlack } from "./../../../images/night/Shows_black.svg"
import { ReactComponent as LogoWhite } from "./../../../images/night/Shows_white.svg"
// import { ColorModeSwitcher } from "../../styles/themes/ColorModeSwitcher";
import { useColorModeValue } from "@chakra-ui/color-mode";
import Particles from 'react-tsparticles';
import { Link } from "react-router-dom";
import { useState } from "react";
import w from "./../../../images/night/shows_1.png";
import q from "./../../../images/night/shows_2.png";
import r from "./../../../images/night/shows_3.png";
import Footer from "../../shared/Footer";

// import { Center, Square, Circle } from "@chakra-ui/react"



export default function Shows() {
    const cols = useBreakpointValue({ base: 1, md: 2 });
    const HeaderLogo = useColorModeValue(LogoBlack, LogoWhite)
    const height = useBreakpointValue({ base: "60", lg: "50" })
    // const [cursorX, setcursorX]= useState<any | null>(null);
    // const [cursorY, setcursorY]= useState<any | null>(null);

    // window.addEventListener('mousemove',(e)=>{
    //     setcursorX(e.pageX)
    //     setcursorY(e.pageY)

    // })

    


    return (
    //      <div className="cursor" style={{
    //     left:cursorX+'px',
    //     top:cursorY+'py',
    //     width:"20px",
    //     height:"20px",
    //     position:"fixed",
    //     mixBlendMode:"difference",
    //     borderRadius:"50%",
    //     backgroundColor:"azure",
    //     zIndex:0,
    //     pointerEvents:"none"


    // }}>

   
    
    
    <div className="shows1"
    style={{
        zIndex:1
    }}>
         <Particles
        className='particles'
        style={{
           
            position: "fixed",
          width: "100%",
          height: "100vh",
          zIndex:0
        }}
      id="tsparticles"
      options={{ 
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
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
            value: "#15f306",
          },
          links: {
            color: "#f30a0a",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true, }}
        />  
        
        <CustomBox >
            
             
          
            <Center  h="100px" >
                <HeaderLogo height={height} width="188" />
            </Center>
            {/* <Link to="/" >
                
            </Link> */}
            {/* <Heading textAlign="center" marginBottom="10" data-aos="fade-left" textTransform="uppercase" textDecor="underline">
                <HeaderLogo height={height} width="200" />
            </Heading> */}
            <Center data-aos="zoom-in">
                <Image src={w} borderRadius="8" width="80%"   style={{
               zIndex:1
           }}/>
            </Center>
            <Center margin="20px 0">
                <Text width="80%" data-aos="fade-right" textAlign="justify" fontFamily="cursive">
                Professional shows are a fitting end to each day of Shaastra. These techno-entertainment shows, ever since their conception, have hosted artists from across the globe. Our audience counts up in thousands, which is a testament to its success and popularity. These include Mirage, a laser show by an international group, Sand Art show by world-renowned artists, Bike Stunt show by French performers and EDM (Electronic Dance Music) Night.

                </Text>
            </Center>
            <Grid templateColumns={`repeat(${cols || 2}, 1fr)`} justifyItems="center" padding="0 10px" rowGap="5">
                <GridItem>
                    <Center>
                        <Image borderRadius="8" data-aos="zoom-in" width="600px" src={q} height="500px"   style={{
               zIndex:1
           }} />
                    </Center>
                </GridItem>
                <GridItem>
                    <Center>
                        <Image borderRadius="8" data-aos="zoom-in" width="600px" src={r} height="500px"   style={{
               zIndex:1
           }}/>
                    </Center>
                </GridItem>
            </Grid>
            <Container marginTop="10" paddingBottom="20">
                <List spacing={3}>
                    <ListItem>
                        <ListIcon as={ArrowForwardIcon} color="green.500" />
                        <Text as="span" color="#00A878">
                            2016
                        </Text>
                        <Text marginLeft="10">Adelaida, Vivek Patil (sand + light artist), Freestyle Air - 3 act</Text>
                    </ListItem>
                    <ListItem>
                        <ListIcon as={ArrowForwardIcon} color="green.500" />
                        <Text as="span" color="#00A878">
                            2017
                        </Text>
                        <Text marginLeft="10"> IDRL drone race</Text>
                    </ListItem>
                    <ListItem>
                        <ListIcon as={ArrowForwardIcon} color="green.500" />
                        <Text as="span" color="#00A878">
                            2018
                        </Text>
                        <Text marginLeft="10">Mariana Bo ( best ever EDM night), Get Massive (Duo), Broken Symmetry, Suhani Shah</Text>
                    </ListItem>
                    <ListItem>
                        <ListIcon as={ArrowForwardIcon} color="green.500" />
                        <Text as="span" color="#00A878">
                            2019
                        </Text>
                        <Text marginLeft="10">Vivek Patil, Vilas Nayak</Text>
                    </ListItem>
                    <ListItem>
                        <ListIcon as={ArrowForwardIcon} color="green.500" />
                        <Text as="span" color="#00A878">
                            2020
                        </Text>
                        <Text marginLeft="10">Heimdall, Vivek Desai </Text>
                    </ListItem>
                    <ListItem>
                        <ListIcon as={ArrowForwardIcon} color="green.500" />
                        <Text as="span" color="#00A878">
                            2020-21
                        </Text>
                        <Text marginLeft="10"> Ray Li, Dan Rhodes (he recently blew up on YT, so it helps our case), Sonic Snares, Kenny Sebastian, Soda (Sudarshan Ramamurthy), Sushil Jazz, Rishabh Rajan</Text>
                    </ListItem>
                </List>
            </Container>
            <Footer designed={[{name : "Prithiviraj P",mail :"na19b052@smail.iitm.ac.in"}]} />
        </CustomBox>
        </div>
        // </div>
    );
}

