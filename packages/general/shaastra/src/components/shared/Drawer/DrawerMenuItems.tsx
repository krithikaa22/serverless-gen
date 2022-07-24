import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion";
import { Flex, Spacer, Text as Box } from "@chakra-ui/layout";
import { time } from "console";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { textChangeRangeNewSpan } from "typescript";
import { Button } from "@chakra-ui/button";
import { UserRole } from "../../../generated/graphql";

export const DrawerDesktopMenuItems = () => {
  const [menu, setMenu] = useState<string>("e&w");

  const history = useHistory()

  const menuItems = () => {
    switch (menu) {
      case "exhibitions":
        return (
          <>
            <Link
              style={{
                textAlign: "center",
                width: "60%",
                borderRadius: 8,
                padding: 5,
                marginBottom: 5,
                fontSize: 24,
                background: "#00000028",
              }}
              to="/exhibitions"
            ></Link>
          </>
        );
      case "shaastra-nights":
        return (
          <>
            <Flex flexDirection="column" justifyContent="flex-start">
              <Box
                letterSpacing="normal"
                padding-left="8px"
                _hover={{
                  padding: "8px",
                  fontSize: "26",
                  letterSpacing: "6px",
                }}
              >
                <Link
                  style={{
                    textAlign: "center",
                    width: "60%",
                    borderRadius: 8,
                    padding: 8,
                    marginBottom: 5,
                    fontSize: 24,
                    background: "rgba(0, 0, 0, 0.473)",
                  }}
                  to="/shows"
                >
                  Shows
                </Link>
              </Box>
              <Box
                letterSpacing="normal"
                _hover={{
                  padding: "8px",
                  fontSize: "26",
                  letterSpacing: "6px",
                }}
              >
                <Link
                  style={{
                    textAlign: "center",
                    width: "60%",
                    borderRadius: 8,
                    padding: 8,
                    marginBottom: 5,
                    fontSize: 24,
                    background: "rgba(0, 0, 0, 0.473)",
                  }}
                  to="/envisage"
                >
                  Envisage
                </Link>
              </Box>
            </Flex>
          </>
        );
    }
  };

  return (
    <>
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        height="90%"
        flex={1}
      >
        {
          localStorage.getItem('role') !== 'Admin' && localStorage.getItem('role') !== 'User' &&
          <Box
            className="menu-text"
            width="100%"
            _hover={{ color: "#cccccc", padding: "8px", letterSpacing: "7px" }}
            fontSize={28}
            fontFamily={"monospace"}
            fontStyle={"italic"}
            pl={6}
            p={2}
            pr={12}
            mb={4}
          >
            <Button backgroundColor="#addfd0" color="black" width="100%" onClick={(e:any) => {e.preventDefault(); history.push("/signup") } }>Signup</Button>
          </Box>
        }
        <Box
          className="menu-text"
          _hover={{ color: "#cccccc", padding: "8px", letterSpacing: "7px" }}
          onMouseOver={() => setMenu("Home")}
          fontSize={28}
          fontFamily={"monospace"}
          fontStyle={"italic"}
          pl={6}
          p={2}
          pr={12}
          mb={4}
        >
          <Link to="/">Home</Link>
        </Box>
        <Box
          className="menu-text"
          _hover={{ color: "#cccccc", padding: "8px", letterSpacing: "7px" }}
          fontSize={28}
          onMouseOver={() => setMenu("click")}
          fontFamily={"monospace"}
          fontStyle={"italic"}
          pl={6}
          p={2}
          pr={12}
          mb={4}
        >
          <Link to="/eventsworkshops">Events and Workshops</Link>
        </Box>
        <Box
          className="menu-text"
          _hover={{ color: "#cccccc", padding: "8px", letterSpacing: "7px" }}
          fontSize={28}
          onMouseOver={() => setMenu("click")}
          fontFamily={"monospace"}
          fontStyle={"italic"}
          pl={6}
          p={2}
          pr={12}
          mb={4}
        >
          <a href="https://sales.shaastra.org" target={"_blank"}>Sales</a>
        </Box>
        <Box
          className="menu-text"
          _hover={{ color: "#cccccc", padding: "8px", letterSpacing: "7px" }}
          fontSize={28}
          onMouseOver={() => setMenu("click")}
          fontFamily={"monospace"}
          fontStyle={"italic"}
          pl={6}
          p={2}
          pr={12}
          mb={4}
        >
          <Link to="/blitz-chess">Blitz Chess</Link>
        </Box>
        <Box
          className="menu-text"
          _hover={{ color: "#cccccc", padding: "8px", letterSpacing: "7px" }}
          onMouseOver={() => setMenu("exhibitions")}
          fontSize={28}
          fontFamily={"monospace"}
          fontStyle={"italic"}
          pl={6}
          p={2}
          pr={12}
          mb={4}
        >
          <Link to="/exhibitions">Exhibitions</Link>
        </Box>
        <Box
          className="menu-text"
          _hover={{ color: "#cccccc", padding: "8px", letterSpacing: "7px" }}
          fontSize={28}
          onMouseOver={() => setMenu("click")}
          fontFamily={"monospace"}
          fontStyle={"italic"}
          pl={6}
          p={2}
          pr={12}
          mb={4}
        >
          <a href="http://envisage-gamedev.github.io" target={"_blank"}>Envisage Games</a>
        </Box>
        {/* <Box
          className="menu-text"
          _hover={{ color: "#cccccc", padding: "8px", letterSpacing: "7px" }}
          onMouseOver={() => setMenu("exhibitions")}
          fontSize={28}
          fontFamily={"monospace"}
          fontStyle={"italic"}
          pl={6}
          p={2}
          pr={12}
          mb={4}
        >
          <Link to="/events">Events</Link>
        </Box> */}
        <Spacer />
        <Box
          className="menu-text"
          _hover={{
            color: "#cccccc",
            padding: "8px",
            marginBottom: "20px",
            letterSpacing: "7px",
          }}
          onMouseOver={() => setMenu("shaastra-nights")}
          fontSize={28}
          fontFamily={"monospace"}
          fontStyle={"italic"}
          pl={6}
          p={3}
          pr={12}
          mb={4}
        >
          Shaastra Nights
          {menuItems()}
        </Box>
        <div style={{ color: "white", border: "0.5px" }} />
        <Box
          className="menu-text"
          _hover={{ color: "#cccccc", padding: "8px", letterSpacing: "7px" }}
          onMouseOver={() => setMenu("click")}
          fontSize={28}
          fontFamily={"monospace"}
          fontStyle={"italic"}
          pl={6}
          p={3}
          pr={12}
          mb={4}
        >
          <a href="https://mindtrials.shaastra.org" target="_blank">Mind Trials</a>
          {/* <Link to="https://mindtrials.shaastra.org" target="_blank">Mind Trials</Link> */}
        </Box>
        <Box
          className="menu-text"
          _hover={{ color: "#cccccc", padding: "8px", letterSpacing: "7px" }}
          onMouseOver={() => setMenu("click")}
          fontSize={28}
          fontFamily={"monospace"}
          fontStyle={"italic"}
          pl={6}
          p={3}
          pr={12}
          mb={4}
        >
          <Link to="/summit">Summit</Link>
        </Box>
        <Box
          className="menu-text"
          _hover={{ color: "#cccccc", padding: "8px", letterSpacing: "7px" }}
          onMouseOver={() => setMenu("click")}
          fontSize={28}
          fontFamily={"monospace"}
          fontStyle={"italic"}
          pl={6}
          p={3}
          pr={12}
          mb={4}
        >
          <Link to="/tif">Tech & Innovation Fair</Link>
        </Box>
        <Box
          className="menu-text"
          _hover={{ color: "#cccccc", padding: "8px", letterSpacing: "7px" }}
          onMouseOver={() => setMenu("schools")}
          fontSize={28}
          fontFamily={"monospace"}
          fontStyle={"italic"}
          pl={6}
          p={3}
          pr={12}
          mb={4}
        >
          <Link to="/shaastra-juniors"> Schools</Link>
        </Box>
        <Box _hover={{}}></Box>
        <Box
          className="menu-text"
          _hover={{ color: "#cccccc", padding: "8px", letterSpacing: "7px" }}
          onMouseOver={() => setMenu("click")}
          fontSize={28}
          fontFamily={"monospace"}
          fontStyle={"italic"}
          pl={6}
          p={3}
          pr={12}
          mb={4}
        >
          <a href="https://unmute.shaastra.org" target="_blank">Social Endeavours</a>
          {/* <Link to="https://unmute.shaastra.org" target="_blank">Social Endeavours</Link> */}
        </Box>
        {/* <Box
          className="menu-text"
          _hover={{ color: "#cccccc", padding: "8px", letterSpacing: "7px" }}
          onMouseOver={() => setMenu("Click")}
          fontSize={28}
          fontFamily={"monospace"}
          fontStyle={"italic"}
          pl={6}
          p={3}
          pr={12}
          mb={4}
        >
          <Link to="/speakers">Speakers</Link>
        </Box> */}
        <Box
          className="menu-text"
          _hover={{ color: "#cccccc", padding: "8px", letterSpacing: "7px" }}
          onMouseOver={() => setMenu("click")}
          fontSize={28}
          fontFamily={"monospace"}
          fontStyle={"italic"}
          pl={6}
          p={3}
          pr={12}
          mb={4}
        >
          <Link to="/sponsors">Sponsors</Link>
        </Box>
        <Box
          className="menu-text"
          _hover={{ color: "#cccccc", padding: "8px", letterSpacing: "7px" }}
          onMouseOver={() => setMenu("click")}
          fontSize={28}
          fontFamily={"monospace"}
          fontStyle={"italic"}
          pl={6}
          p={3}
          pr={12}
          mb={4}
        >
          <Link to="/team">Team</Link>
        </Box>
        <Box
          className="menu-text"
          _hover={{ color: "#cccccc", padding: "8px", letterSpacing: "7px" }}
          onMouseOver={() => setMenu("click")}
          fontSize={28}
          fontFamily={"monospace"}
          fontStyle={"italic"}
          pl={6}
          p={3}
          pr={12}
          mb={4}
        >
          <Link to="/contact">Contact Us</Link>
        </Box>
        {
          localStorage.getItem("role") === "User" || localStorage.getItem("role") === "Admin" ? 
            <Box
              className="menu-text"
              _hover={{ color: "#cccccc", padding: "8px", letterSpacing: "7px" }}
              fontSize={28}
              width="100%"
              fontFamily={"monospace"}
              fontStyle={"italic"}
              pl={6}
              p={2}
              pr={12}
              mb={4}
            >
              <Button backgroundColor="#addfd0" color="black" width="100%" onClick={(e:any) => {e.preventDefault(); history.push("/profile") } }>Profile</Button>
              <Button backgroundColor="#DB7171" color="black" width="100%" onClick={(e:any) => {e.preventDefault(); history.push("/signout") } }>Logout</Button>
            </Box>
          :
          null
        }
      </Flex>
    </>
  );
};

export const DrawerMobileMenuItems = () => {
  const history = useHistory()
  return (
    <Flex
      flexDirection="column"
      justifyContent="flex-start"
      height="90%"
      flex={1}
    >
      {
        localStorage.getItem('role') !=='Admin' && localStorage.getItem('role') !== 'User' && 
        <Box p={2} pl={0} fontSize={27} fontStyle={"normal"}>
        <Button backgroundColor="#addfd0" color="black" width="100%" onClick={(e:any) => {e.preventDefault(); history.push("/signup") } }>SignUp</Button>
      </Box>
      }
      <Accordion allowToggle>
        <Box fontSize={27} fontStyle={"normal"}>
          <Link to="/">Home</Link>
        </Box>
        <Box fontSize={27} fontStyle={"normal"}>
          <Link to="/eventsworkshops">Events and Workshops</Link>
        </Box>
        <Box p={2} pl={0} fontSize={27} fontStyle={"normal"}>
          {/* <Link to="/mind-trials">Mind Trials</Link> */}
          <a href="https://sales.shaastra.org" target="_blank">Sales</a>
        </Box>
        <Box fontSize={27} fontStyle={"normal"}>
          <Link to="/exhibitions">Exhibitions</Link>
        </Box>
        <Box p={2} pl={0} fontSize={27} fontStyle={"normal"}>
          {/* <Link to="/mind-trials">Mind Trials</Link> */}
          <a href="http://envisage-gamedev.github.io/" target="_blank">Envisage Games</a>
        </Box>
        <Box fontSize={27} fontStyle={"normal"}>
          <Link to="/blitz-chess">Blitz Chess</Link>
        </Box>
        <AccordionItem border={0}>
          <AccordionButton pl={0}>
            <Box fontSize={27} fontStyle={"normal"}>
              Shaastra Nights
            </Box>
          </AccordionButton>
          <AccordionPanel>
            <Box fontSize="xl">
              <Link to="/shows">Shows</Link>
            </Box>
            <Box fontSize="xl">
              <Link to="/envisage">Envisage</Link>
            </Box>
          </AccordionPanel>
        </AccordionItem>
        <Box p={2} pl={0} fontSize={27} fontStyle={"normal"}>
          {/* <Link to="/mind-trials">Mind Trials</Link> */}
          <a href="https://mindtrials.shaastra.org" target="_blank">Mind Trials</a>
        </Box>
        <Box p={2} pl={0} fontSize={27} fontStyle={"normal"}>
          <Link to="/summit">Summit</Link>
        </Box>
        <Box p={2} pl={0} fontSize={27} fontStyle={"normal"}>
          <Link to="/tif">Tech & Innovation Fair</Link>
        </Box>
        <AccordionItem border={0}>
          <Box fontSize={27} fontStyle={"normal"}>
            <Link to="/shaastra-juniors">School</Link>
          </Box>
        </AccordionItem>
        <Box p={2} pl={0} fontSize={27} fontStyle={"normal"}>
          {/* <Link to="/social-endeavours">Social Endeavours</Link> */}
          <a href="https://unmute.shaastra.org" target="_blank">Social Endeavours</a>
        </Box>
        {/* <Box p={2} pl={0} fontSize={27} fontStyle={"normal"}>
          <Link to="/speakers">Speakers</Link>
        </Box> */}
        <Box p={2} pl={0} fontSize={27} fontStyle={"normal"}>
          <Link to="/sponsors">Sponsors</Link>
        </Box>
        <Box p={2} pl={0} fontSize={27} fontStyle={"normal"}>
          <Link to="/team">Team</Link>
        </Box>
        <Box p={2} pl={0} fontSize={27} fontStyle={"normal"}>
          <Link to="/contact">Contact Us</Link>
        </Box>
        {
        (localStorage.getItem("role") === "User" || localStorage.getItem("role") === "Admin") && 
          <Box p={2} pl={0} fontSize={27} fontStyle={"normal"}>
          <Button backgroundColor="#addfd0" color="black" width="100%" onClick={(e:any) => {e.preventDefault(); history.push("/profile") } }>Profile</Button>
          <Button backgroundColor="#DB7171" color="black" width="100%" onClick={(e:any) => {e.preventDefault(); history.push("/signout") } }>Logout</Button>
        </Box>
      }
      </Accordion>
    </Flex>
  );
};
