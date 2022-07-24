import React, { useEffect } from "react"
import CustomBox from "./../../shared/CustomBox";
import Header from "./../../shared/Header"
import Footer from "../../shared/Footer";
import { Heading, Flex, Box, Image, Text, useColorModeValue } from "@chakra-ui/react";
import shows from "./../../../images/shows.jpg"
import event from "./script";
import "../../../styles/show.css"
import {
    VerticalTimeline,
    VerticalTimelineElement
} from "react-vertical-timeline-component";
// import "../../../styles/timeline.css"
import "react-vertical-timeline-component/style.min.css";
// import "../../../styles/letters.css"
import Timeline from 'react-timeline-semantic-ui';
export default function Show() {
    const bg = useColorModeValue("light", "dark")
    let x = 1;
    if (window.innerWidth < 920) x = 0;
    useEffect(
        () => {
            var headL: HTMLElement = document.getElementById("show-head-l")!
            // var headR: HTMLElement = document.getElementById("show-head-r")!
            headL.style.animation = "left 1.5s linear";
            // headR.style.animation = "left 2s ease"
            var items = document.querySelectorAll(".timeline li");
            var items = document.querySelectorAll(".timeline li");

            function isElementInViewport(el) {
                var rect = el.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            }

            function callbackFunc() {
                for (var i = 0; i < items.length; i++) {
                    if (isElementInViewport(items[i])) {
                        if (!items[i].classList.contains("in-view")) {
                            items[i].classList.add("in-view");
                        }
                    } else if (items[i].classList.contains("in-view")) {
                        items[i].classList.remove("in-view");
                    }
                }
            }

            window.addEventListener("load", callbackFunc);
            window.addEventListener("scroll", callbackFunc);

        }
    )

    return (
        <>
            <CustomBox>
                <Box backgroundColor="transparent" zIndex="2">
                    <Header></Header>
                    <Flex width="100vw" className="shows"
                        justifyContent="space-between" marginBottom="10vh"
                        backgroundColor="transparent" paddingTop="10vh" alignItems="center"
                    >
                        <Box width="20%" height="3vh" className={` ${bg}`} id="show-head-l"> </Box>
                        <Heading backgroundColor="transparent" fontSize="7xl">SHOWS</Heading>
                        <Box width="20%" height="3vh" className={`${bg}`} id="show-head-r" > </Box>
                    </Flex>
                    <Flex width="100%" justifyContent="space-around" paddingLeft="20px">
                        {x ? (
                            <>
                                <Flex width="60%" textAlign="start" fontSize="18px" fontWeight="600">
                                    The flagship event of Shaastra, Shaastra Nights, has made the former a noteworthy leader amongst parallel fests in the country. Shaastra Nights provide a platform for exquisite performers to display their artistic prowess while giving the audience a once-in-a-lifetime opportunity to witness a confluence of technology and culture. Shaastra Nights is non-ticketed - an attribute that distinguishes it from shows akin; it enables students and the public to access quality entertainment at its finest. Behind the warranted glitz and glamour, Shaastra Nights' true intentions shine - diversity and inclusivity.
                                    <br />
                                    <br />
                                    Professional shows are a fitting end to each day of Shaastra. These techno-entertainment shows, ever since their conception, have hosted artists from across the globe. Our audience counts up in thousands, which is a testament to its success and popularity. These include Mirage, a laser show by an international group, Sand Art show by world-renowned artists, Bike Stunt show by French performers and EDM (Electronic Dance Music) Night.
                                    <br />
                                    <br />
                                </Flex>
                                <Flex backgroundImage={shows} width="380px" backgroundSize="cover" borderRadius="50%" alt="shows">

                                </Flex>
                            </>
                        ) : (
                            <>
                                <Flex width="80%" textAlign="center" fontSize="18px" fontWeight="600" paddingBottom="20px">
                                    The flagship event of Shaastra, Shaastra Nights, has made the former a noteworthy leader amongst parallel fests in the country. Shaastra Nights provide a platform for exquisite performers to display their artistic prowess while giving the audience a once-in-a-lifetime opportunity to witness a confluence of technology and culture. Shaastra Nights is non-ticketed - an attribute that distinguishes it from shows akin; it enables students and the public to access quality entertainment at its finest. Behind the warranted glitz and glamour, Shaastra Nights' true intentions shine - diversity and inclusivity.
                                    <br />
                                    <br />
                                    Professional shows are a fitting end to each day of Shaastra. These techno-entertainment shows, ever since their conception, have hosted artists from across the globe. Our audience counts up in thousands, which is a testament to its success and popularity. These include Mirage, a laser show by an international group, Sand Art show by world-renowned artists, Bike Stunt show by French performers and EDM (Electronic Dance Music) Night.
                                    <br />
                                    <br />
                                </Flex>
                            </>
                        )}
                    </Flex>
                    <Flex width="60vw" margin="auto" justifyContent="center" paddingLeft="10px" fontSize="5xl" fontWeight="600" className="shows-image">
                        <Text>
                            TIMELINE
                        </Text>
                    </Flex>
                    <section className="timeline">
                        <ul>
                            <li>
                                <div>
                                    <time>2016</time>
                                    <div className="discovery">
                                        <h1>Adelaida</h1>
                                        <h1>Vivek Patil</h1>
                                        <h1>Freestyle Air - 3 acts</h1>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <time>2017</time>
                                    <div className="discovery">
                                        <h1>IDRL drone race</h1>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <time>2018</time>
                                    <div className="discovery">
                                        <h1>Mariana Bo</h1>
                                        <h1>Get Massive</h1>
                                        <h1>Broken Symmetry</h1>
                                        <h1>Suhani Shah</h1>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <time>2019</time>
                                    <div className="discovery">
                                        <h1>Vivek Patil</h1>
                                        <h1>Vilas Nayak</h1>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <time>2020</time>
                                    <div className="discovery">
                                        <h1>Heimdall</h1>
                                        <h1>Vivek Desai</h1>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="discovery1">
                                    <time>2021</time>
                                    <div className="discovery" id="last">
                                        <h1>Kenny Sebastian</h1>
                                        <h1>Soda (Sudarshan Ramamurthy)</h1>
                                        <h1>Ray Li</h1>
                                        <h1>Dan Rhodes</h1>
                                        <h1>Sonic Snares</h1>
                                        <h1>Sushil Jazz</h1>
                                        <h1>Rishabh Rajan</h1>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </section>
                    <Box backgroundColor="#0e101bc9" marginTop="50px">
                        <Footer designed={[{ name: "Mitesh", mail: "ce20b025@smail.iitm.ac.in" }]} />
                    </Box>
                </Box>
            </CustomBox>
        </>
    )
}