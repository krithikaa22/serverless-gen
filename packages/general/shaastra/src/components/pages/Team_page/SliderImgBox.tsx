import * as React from "react";
import { Flex } from "@chakra-ui/react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import "../../../styles/Team_styles/SliderImgBox.css";

// import profileIMG from "../../../images/profile.jpg";

interface Props {
  profile: {
    name?: string;
    role?: string;
    desc?: string;
    imgURL?: string;
    social_links: {
      twitter?: string;
      linkedIn?: string;
      instagram?: string;
      shastraMailId?: string;
      github?: string;
      contact?: string;
      facebook?: string;
    };
    mailId?: string;
    dept?: string;
  };
}

const SliderImgBox = (props: Props) => {
  return (
    <div className="sliderImgBox">
      <div className="profileCard">
        <div className="profileCard_header">
          <div>
            <h2>{props.profile.name}</h2>
            {/* <p>{props.profile.role}</p> */}
          </div>
          <Flex
            width="140px"
            fontSize="20px"
            color="rgba(255,255,255)"
            justifyContent="space-evenly"
          >
            <a
              target="_blank"
              href={`https://api.whatsapp.com/send?phone=91${props.profile.social_links.contact}&text=&source=&data=&app_absent=`}
            >
              <FaWhatsapp />
            </a>
            <a target="_blank" href={props.profile.social_links.linkedIn}>
              <FaLinkedin />
            </a>
            <a
              target="_blank"
              href={"mailto:" + props.profile.social_links.shastraMailId}
            >
              <FaEnvelope />
            </a>
          </Flex>
        </div>
        <div className="profileDescription">{props.profile.desc}</div>
      </div>
      <div className="imgCover">
        <img src={props.profile.imgURL} alt={props.profile.imgURL} />
      </div>
    </div>
  );
};

export default SliderImgBox;
