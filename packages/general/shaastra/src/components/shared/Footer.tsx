import * as React from "react";
import LogoBlack from "./../../images/logo/static/shaastra_tm_logo_black.svg";
import LogoWhite from "./../../images/logo/static/shaastra_tm_logo_white.svg";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import "../../styles/Footer.css";

interface Props {
  designed: {
    name: String;
    mail: String;
  }[];
  curr_page?: String;
}

const Footer = (props: Props) => {
  const FooterLogo = useColorModeValue(LogoBlack, LogoWhite);
  const theme = useColorModeValue("white", "black");
  return (
    <section className={`Footer ${theme}`}>
      {window.innerWidth > 600 ? (
        <div className="top">
          <div className="Contact">
            <h3>NEED HELP</h3>
            <p>
              {props.curr_page === "Home" ? (
                <a href="#who_are_we">About us</a>
              ) : (
                <Link to="/">About us</Link>
              )}
            </p>
            <p>
              <Link to="/team">Team</Link>
            </p>
            <p>
              <Link to="/sponsors">Sponsors</Link>
            </p>
            {window.innerWidth <= 1000 ? <></> : <br />}
          </div>
          <div className="Contact">
            <h3>CONTACT</h3>
            <p>
              <a href="mailto:outreach@shaastra.org">
                <FaEnvelope /> outreach@shaastra.org
              </a>
            </p>
            <p>
              <a href="mailto:sponsorship@shaastra.org">
                <FaEnvelope /> sponsorship@shaastra.org
              </a>
            </p>
            <p>
              <a href="mailto:sec_cocur@smail.iitm.ac.in">
                <FaEnvelope /> sec_cocur@smail.iitm.ac.in
              </a>
            </p>
            {window.innerWidth <= 1000 ? <></> : <br />}
          </div>
          <div className="Contact">
            <h3>ADDRESS</h3>
            <p
              className="address"
              style={{
                display: "initial",
                left: "0",
              }}
            >
              IITM Students Activities Trust Shaastra,
              <br /> 1st Floor, O/o Dean Of Students Office,
              <br /> IIT Madras, Guindy, Chennai,
              <br /> Tamil Nadu, India - 600036
              <br /> Mobile : +91 9952729095
            </p>
          </div>
          <div className="DesignedBy">
            <h3>LEGAL</h3>
            <p>
              <a href="policies/privacy-policy">Privacy Policy</a>
            </p>
            <p>
              <a href="policies/terms-conditions">Terms and Conditions</a>
            </p>
            <p>
              <a href="policies/shipping-policy">Shipping Policy</a>
            </p>
            <p>
              <a href="policies/return-refund-policy">
                Return and Refund Policy
              </a>
            </p>
          </div>
        </div>
      ) : (
        <div className="top">
          <div className="topleft">
            <div className="Contact">
              <h3>NEED HELP</h3>
              <p>
                {props.curr_page === "Home" ? (
                  <a href="#who_are_we">About us</a>
                ) : (
                  <Link to="/">About us</Link>
                )}
              </p>
              <p>
                <Link to="/team">Team</Link>
              </p>
              <p>
                <Link to="/sponsors">Sponsors</Link>
              </p>
              {window.innerWidth <= 1000 ? <></> : <br />}
            </div>
            <div className="DesignedBy">
              <h3>LEGAL</h3>
              <p>
                <a href="policies/privacy-policy">Privacy Policy</a>
              </p>
              <p>
                <a href="policies/terms-conditions">Terms and Conditions</a>
              </p>
              <p>
                <a href="policies/shipping-policy">Shipping Policy</a>
              </p>
              <p>
                <a href="policies/return-refund-policy">
                  Return and Refund Policy
                </a>
              </p>
            </div>
          </div>
          <div className="Contact">
            <h3>CONTACT</h3>
            <p>
              <a href="mailto:outreach@shaastra.org">
                <FaEnvelope /> outreach@shaastra.org
              </a>
            </p>
            <p>
              <a href="mailto:sponsorship@shaastra.org">
                <FaEnvelope /> sponsorship@shaastra.org
              </a>
            </p>
            <p>
              <a href="mailto:sec_cocur@smail.iitm.ac.in">
                <FaEnvelope /> sec_cocur@smail.iitm.ac.in
              </a>
            </p>
            {window.innerWidth <= 1000 ? <></> : <br />}
          </div>
          <div className="Contact" style={{ marginTop: "5px" }}>
            <h3>ADDRESS</h3>
            <p
              className="address"
              style={{
                display: "initial",
                left: "0",
              }}
            >
              IITM Students Activities Trust Shaastra,
              <br /> 1st Floor, O/o Dean Of Students Office,
              <br /> IIT Madras, Guindy, Chennai,
              <br /> Tamil Nadu, India - 600036
              <br /> Mobile : +91 9952729095
            </p>
          </div>
        </div>
      )}
      <div className="bottom">
        <p>
          Ⓒ Developed by{" "}
          {props.designed.map((item, key) => {
            if (key == 0) {
              return item.name;
            } else {
              return ", " + item.name;
            }
          })}{" "}
          | Web Operations | Shaastra | IIT Madras. All Rights Reserved
        </p>
        <div className="Follow">
          <p>FOLLOW US</p>
          <span></span>
          <a
            target="_blank"
            href="https://www.instagram.com/shaastra_iitm/?hl=en"
          >
            <FaInstagram />
          </a>
          <span></span>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/shaastra-iit-madras/?originalSubdomain=in"
          >
            <FaLinkedin />
          </a>
          <span></span>
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCgY2ugmW-BV2nMRFu-0qPZA"
          >
            <FaYoutubeSquare />
          </a>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
