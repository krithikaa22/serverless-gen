import React from "react";
import CustomBox from "../../shared/CustomBox";
import "../../../styles/Speaker.css";
import Images from "./Image";
import Video from "../../../images/Speaker/video/speaker.mp4";
import { useState } from "react";

// import { Row, Col } from "react-bootstrap";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { useColorModeValue } from "@chakra-ui/color-mode";

function App() {
  const [mute, setMute] = useState(false);

  const muteTheVideo = () => {
    //console.log(window.scrollY)
    if (window.scrollY >= 724) {
      setMute(true);
    } else {
      setMute(false);
    }
  };

  window.addEventListener("scroll", muteTheVideo);

  return (
    <CustomBox>
      <div className="Speaker">
        <section>
          <video autoPlay loop muted={mute} src={Video} />
          <div className="mu-hero-featured-content">
            <h1> SPOTLIGHT </h1>
            <h2>
              {" "}
              Spanning Science, Technology, Art, Entertainment & more, Spotlight
              is the flagship lecture series of Shaastra which brings
              visionaries from across the world, creating a unique platform for
              learning and interaction with pioneers who have transformed the
              world in remarkable ways. Spotlight stands for the convergence of
              brilliance, love of knowledge and the very spirit of engineering
              that Shaastra embodies.{" "}
            </h2>
          </div>
        </section>
        <Images />
      </div>
    </CustomBox>
  );
}

export default App;
