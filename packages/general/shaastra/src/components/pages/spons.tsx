import React from "react";
// import ParticleBackground from './particle';
import "../../styles/button.scss";
import "../../styles/spons.scss";
import "../../styles/tooltip.scss";
import Astra from "../../images/logo/static/Astra.svg";
import Chess from "../../images/logo/static/Chess.png";
import Nescafe from "../../images/logo/static/Nescafe.png";
import JUSPY from "../../images/logo/static/JUSPY.png";
import BW from "../../images/logo/static/BN.png";
import NEW from "../../images/logo/static/NEW.png";
import BSC from "../../images/logo/static/BSC.png";
import UC from "../../images/logo/static/UC.png";
import MZ from "../../images/logo/static/MZ.svg";
import GF from "../../images/logo/static/GF.png";
import GOW from "../../images/logo/static/GOW.png";
import GOB from "../../images/logo/static/GOB.png";
import YB from "../../images/logo/static/YB.png";
import Capermint from "../../images/logo/static/capermint.png";
import BN from "../../images/logo/static/BN.png";
import ACR from "../../images/logo/static/ACR.png";
import Atlasian from "../../images/logo/static/Atlasian.svg";
import Boeing from "../../images/logo/static/Boeing.svg";
import CAT from "../../images/logo/static/CAT.svg";
import MB from "../../images/logo/static/MB.png";
import KLA from "../../images/logo/static/KLA.svg";
import Mahindra from "../../images/logo/static/Mahindra.svg";
import Salesforces from "../../images/logo/static/Salesforce.svg";
import Wells from "../../images/logo/static/Wells_Fargo.svg";
import foxmula from "../../images/logo/static/foxmula.png";
import innovaccer from "../../images/logo/static/innovaccer.png";
import wrap from "../../images/logo/static/wrapcart.jpg";
import SBI from '../../images/logo/static/SBI.png';
import kamal from "../../images/logo/static/kamal_wears.png";
import LT from "../../images/logo/static/L&T.png";
import MW from "../../images/logo/static/MW.png";
// import TOI from "../../images/logo/static/TOI.jpg";
// import TOI from "../../images/logo/static/TOI.jpg";
import TOI from "../../images/logo/static/Times.jpg";
import mtx from "../../images/logo/static/mtx.png";
import HW from "../../images/logo/static/HW.png";
import AMD from "../../images/logo/static/AMD.png";
import ES from "../../images/logo/static/ES.png";
import subex from "../../images/logo/static/subex.png";
import surana from "../../images/logo/static/surana.png";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import binance from "../../images/logo/static/BL-removebg-preview.png";
import TPL from "../../images/logo/static/TPL.png";
import CustomBox from "../shared/CustomBox";
import HPCL from "../../images/logo/static/HPCL.png";
import catl from "../../images/logo/static/caterpillar22.png";
import www from "../../images/logo/static/www.png";
import linkedin from "../../images/logo/static/linkedin (1).png";
import MEB from "../../images/logo/static/ME-B.png";
import MEW from "../../images/logo/static/ME-W.png";
import CL from "../../images/logo/static/CL.png";
import WC from "../../images/logo/static/WC.png";
import BS from "../../images/logo/static/BS.png";
import ADW from "../../images/logo/static/AD-W.png";
import ADB from "../../images/logo/static/AD-B.png";
import facebook from "../../images/logo/static/facebook.png";
import { useColorModeValue } from "@chakra-ui/color-mode";
import logo2 from "../../images/logo/static/logo2.png";
import { invertScale } from "framer-motion/types/value/use-inverted-scale";

function Spons() {
  const theme = useColorModeValue("white", "black");
  return (
    <>
      <CustomBox>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
        <div className="sponsBox1">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="main-boxx">
            <br />
            <br />
            <div className="aboutus">
              <p id="about">Our Sponsors</p>
            </div>
            <br />
            <br />
            <div className="maintextspons">
              <p className="boxx">
                Shaastra, ever since it's conception has been growing by leaps
                and bounds and this wouldn't have been achieved without the
                support of the student community and our corporate partners. We
                are continuously on the look out for long-term and mutually
                beneficial associations with reputed organizations from around
                the globe. In case your organization shares and believes in
                Shaastra’s vision, we would love to work out an association. We
                always welcome ideas, queries and criticism of any kind and
                hence, do feel free to contact us.
              </p>
            </div>
            <br />
            <br />

            <div className="card__collection">

              <div className="flexx">
                <p id="sponsro1">Title Sponsor</p>
                <div className="card" id="photo">
                  <a href="https://www.tataprojects.com/">
                    <img
                      src={TPL}
                      className="img-responsive"
                      id="tata"
                      alt=""
                    />
                  </a>
                </div>
              </div>

              <div className="flexx">
                <p id="sponsro1">Associate Title Sponsor</p>
                <div className="card" id="photo">
                  <a href="https://www.mtxb2b.com/s/">
                    <img src={mtx} className="img-responsive" id="mtx" alt="" />
                  </a>
                </div>
              </div>

              {/* <div className="flexx">
                <p id="sponsro1">Platinum Sponsor</p>
                <div className="card" id="photo">
                  <a href="https://www.binance.com/en-IN">
                    <img src={binance} className="img-responsive" id="binance" alt="" />
                  </a>
                </div>
              </div> */}

              <div className="flexx">
                <p id="sponsro1">Powered by </p>
                <div className="card" id="photo">
                  <a href="https://www.amd.com/en">
                    <img
                      src={AMD}
                      className="img-responsive"
                      id="AMD"
                      style={
                        theme == "black"
                          ? {
                            filter: "invert(1)",
                          }
                          : {
                            filter: "invert(0)",
                          }
                      }
                      alt=""
                    />
                  </a>
                </div>
              </div>

              <div className="flexx">
                <p id="sponsro1">Gold Sponsor</p>
                <div className="card" id="photo">
                  <a href="https://www.wellsfargo.com/">
                    <img
                      src={Wells}
                      className="img-responsive"
                      alt=""
                    />
                  </a>
                </div>
              </div>

              <div className="flexx">
                <p id="sponsro1">Silver Sponsor</p>
                <div className="card" id="photo">
                  <a href="https://www.sbi.co.in/">
                    <img src={SBI} className="img-responsive" id="binance" alt=""
                    />
                  </a>
                </div>
              </div>

              <br />

            </div><br />
            <p id="sponsro1">Technology Sponsor</p>
            <div className="flexx">
              {/* <p id="sponsro">Co Sponsor</p> */}
              <div className="card" id="photo">
                <a href="https://www.boeing.com/">
                  <img src={Boeing} className="img-responsive" id="Astra" alt="" />
                </a>
              </div>
            </div>
            <p id="sponsro1">Co Sponsors</p>

            <div className="card__collection">
              {/* <p>Co Sponsors</p> */}


              <div className="flexx">
                {/* <p id="sponsro">Co Sponsor</p> */}
                <div className="card" id="photo">
                  <a href="http://www.ravikiraninfotech.com/">
                    <img src={logo2} className="img-responsive" id="ravi" alt="" />
                  </a>
                </div>
              </div>

              <div className="flexx">
                {/* <p id="sponsro">Co Sponsor</p> */}
                <div className="card" id="photo">
                  <a href="https://www.astrazeneca.com/">
                    <img src={Astra} className="img-responsive" id="Astra" alt="" />
                  </a>
                </div>
              </div>

              <div className="flexx">
                {/* <p id="sponsro">Co Sponsor</p> */}
                <div className="card" id="photo">
                  <a href="https://www.larsentoubro.com/">
                    <img src={LT} className="img-responsive" style={
                      theme == "black"
                        ? {
                          filter: "invert(1)",
                        }
                        : {
                          color: "#fff",
                        }
                    } id="lt" alt="" />
                  </a>
                </div>
              </div>

            </div>
            <div className="card__collection">
              <div className="flexx">
                <p id="sponsro">IDP Sponsor</p>
                <div className="card" id="photo">
                  <a href="https://www.caterpillar.com/">
                    <img
                      src={CAT}
                      className="img-responsive"
                      alt=""
                      style={
                        theme == "black"
                          ? {
                            filter: "invert(1)",
                          }
                          : {
                            filter: "invert(0)",
                          }
                      }
                    />
                  </a>
                </div>
              </div>

              
            </div>
            <p id="sponsro1">Prize Money Sponsor</p>

            <div className="flexx">
              {/* <p id="sponsro">Co Sponsor</p> */}
              <div className="card" id="photo">
                <a href="https://acr.iitm.ac.in/">
                  <img src={ACR} className="img-responsive" id="acr" alt="" />
                </a>
              </div>
            </div>
            <p id="sponsro1">Event Sponsors</p>
            <div className="card__collection">
              <div className="flexx">
                <div className="card" id="photo">
                  <a href="https://www.kla-tencor.com/company">
                    <img src={KLA} className="img-responsive" alt="" />
                  </a>
                </div>
              </div>

              <div className="flexx">
                {/* <p id="sponsro">Event Sponsor</p> */}
                <div className="card" id="photo">
                  <a href="https://www.salesforce.com/in/">
                    <img src={Salesforces} className="img-responsive" alt="" />
                  </a>
                </div>
              </div>

              <div className="flexx">
                <div className="card" id="photo">
                  <a href="https://www.mouser.com/">
                    <img
                      src={MEB}
                      className="img-responsive"
                      id="mouser"
                      alt=""
                    />
                  </a>
                </div>
              </div>

              <div className="flexx">
                <div className="card" id="photo">
                  <a href="https://www.autodesk.com/education/edu-software/overview?sorting=featured&filters=individual">
                    <img
                      src={ADB}
                      className="img-responsive"
                      id="autodesk"
                      style={
                        theme == "black"
                          ? {
                            filter: "invert(1)",
                          }
                          : {
                            filter: "invert(0)",
                          }
                      }
                      alt=""
                    />
                  </a>
                </div>
              </div>

              <div className="flexx">
                <div className="card" id="photo">
                  <a href="https://suranaandsurana.com/">
                    <img
                      src={surana}
                      className="img-responsive"
                      id="surana"
                      alt=""
                    />
                  </a>
                </div>
              </div>

              <div className="flexx">
                <div className="card" id="photo">
                  <a href="https://www.honeywell.com/us/en">
                    <img
                      src={HW}
                      className="img-responsive"
                      id="inno"
                      alt=""
                    />
                  </a>
                </div>
              </div>

              <div className="flexx">
                <div className="card" id="photo">
                  <a href="https://www.business-standard.com/">
                    <img
                      src={BS}
                      className="img-responsive"
                      id="Bs"
                      alt=""
                    />
                  </a>
                </div>
              </div>

              <div className="flexx">
                <div className="card" id="photo">
                  {/* <p>Juspy</p> */}
                  <a href="https://juspay.in/">
                    <img src={JUSPY} className="img-responsive" id="juspy" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <p id="sponsro1">Juniors Sponsor</p>

            <div className="card__collection">
              <div className="flexx">
                <div className="card" id="photo">
                  <a href="https://www.wowchess.com/">
                    <img
                      src={WC}
                      className="img-responsive"
                      id="wow"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <p id="sponsro1">Campus Ambassador Sponsors</p>
            <div className="card__collection">

              <div className="flexx">
                <div className="card" id="photo">
                  <a href="https://www.cuvette.tech/">
                    <img
                      src={CL}
                      className="img-responsive"
                      id="subex"
                      style={
                        theme == "black"
                          ? {
                            filter: "invert(0)",
                          }
                          : {
                            filter: "invert(1)",
                          }
                      }
                      alt=""
                    />
                  </a>
                </div>
              </div>

              <div className="flexx">
                {/* <p id="sponsro">Campus ambassador sponsor</p> */}
                <div className="card" id="photo">
                  <a href="https://easyshiksha.com/">
                    <img
                      src={ES}
                      className="img-responsive"
                      id="subex"
                      style={
                        theme == "black"
                          ? {
                            filter: "invert(1)",
                          }
                          : {
                            filter: "invert(0)",
                          }
                      }
                      alt=""
                    />
                  </a>
                </div>
              </div>



            </div>
            <p id="sponsro1">Shows Sponsor</p>
            <div className="card__collection">
              <div className="flexx">
                <div className="card" id="photo">
                  <a href="https://timesofindia.indiatimes.com/">
                    <img
                      src={TOI}
                      className="img-responsive"
                      id="inno"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <p id="sponsro1">Workshops Sponsor</p>
            <div className="card__collection">
              <div className="flexx">
                <div className="card" id="photo">
                  <a href="https://www.mathworks.com/">
                    <img
                      src={MW}
                      className="img-responsive"
                      id="mathworks"
                      alt=""
                      style={
                        theme == "black"
                          ? {
                            filter: "invert(0)",
                          }
                          : {
                            filter: "invert(1)",
                          }
                      }
                    />
                  </a>
                </div>
              </div>

              <div className="flexx">
                <div className="card" id="photo">
                  <a href="https://www.capermint.com/">
                    <img
                      src={Capermint}
                      className="img-responsive"
                      id="mathworks"
                      alt=""
                    />
                  </a>
                </div>
              </div>

            </div>
            <p id="sponsro1">Other Sponsors</p>
            <div className="card__collection">

            <div className="flexx">
                <div className="card" id="photo">
                  <p id="otherSponsors">Beverage Sponsor</p>
                  <a href="https://www.nescafe.com/in/">
                    <img
                      src={Nescafe}
                      className="img-responsive"
                      id="Nescafe"
                      alt=""
                      style={
                        theme == "black"
                          ? {
                            filter: "invert(1)",
                          }
                          : {
                            filter: "invert(0)",
                          }
                      }
                    />
                  </a>
                </div>
              </div>

              <div className="flexx">
                <div className="card" id="photo">
                  <p id="otherSponsors">Confectionery Sponsor</p>
                  <a href="https://brownieheavenindia.com/">
                    <img
                      src={BN}
                      className="img-responsive"
                      id="BN"
                      alt=""
                      style={
                        theme == "black"
                          ? {
                            filter: "invert(1)",
                          }
                          : {
                            filter: "invert(0)",
                          }
                      }
                    />
                  </a>
                </div>
              </div>

              <div className="flexx">
                <div className="card" id="photo">
                  <p id="otherSponsors">Savings Sponsor</p>
                  <a href="https://www.grabon.in/">
                    <img
                      src={GOB}
                      className="img-responsive"
                      id="GOB"
                      alt=""
                    />
                  </a>
                </div>
              </div>

              <div className="flexx">
                <div className="card" id="photo">
                  <p id="otherSponsors">Chess Platform Sponsor</p>
                  <a href="https://www.chess.com/">
                    <img
                      src={Chess}
                      className="img-responsive"
                      id="Chess"
                      alt=""
                      style={
                        theme == "black"
                          ? {
                            filter: "invert(0)",
                          }
                          : {
                            filter: "invert(1)",
                          }
                      }
                    />
                  </a>
                </div>
              </div>

              <div className="flexx">
                <div className="card" id="photo">
                  <p id="otherSponsors">Grooming Sponsor</p>
                  <a href="https://bombayshavingcompany.com/">
                    <img
                      src={BSC}
                      className="img-responsive"
                      id="BSC"
                      alt=""
                    />
                  </a>
                </div>
              </div>


              <div className="flexx">
                <div className="card" id="photo">
                  <p id="otherSponsors">Desert Sponsor</p>
                  <a href="#">
                    <img
                      src={GF}
                      className="img-responsive"
                      id="GF"
                      alt=""
                    />
                  </a>
                </div>
              </div>

              <div className="flexx">
                <div className="card" id="photo">
                  <p id="otherSponsors">Snack Sponsor</p>
                  <a href="https://www.unibicfoods.com/">
                    <img
                      src={UC}
                      className="img-responsive"
                      id="BN"
                      alt=""
                    />
                  </a>
                </div>
              </div>

              <div className="flexx">
                <div className="card" id="photo">
                  <p id="otherSponsors">Industry Sponsor</p>
                  <a href="https://www.matterize.it/">
                    <img
                      src={MZ}
                      className="img-responsive"
                      id="MZ"
                      alt=""
                      style={
                        theme == "black"
                          ? {
                            filter: "invert(1)",
                          }
                          : {
                            filter: "invert(0)",
                          }
                      }
                    />
                  </a>
                </div>
              </div>

              <div className="flexx">
                <div className="card" id="photo">
                  <p id="otherSponsors">Nutrition Sponsor</p>
                  <a href="https://www.yogabars.in/">
                    <img
                      src={YB}
                      className="img-responsive"
                      id="YB"
                      alt=""
                    />
                  </a>
                </div>
              </div>

              <div className="flexx">
                <div className="card" id="photo">
                  <p id="otherSponsors">Gifting Sponsor</p>
                  <a href="https://www.wrapcart.com/">
                    <img
                      src={wrap}
                      className="img-responsive"
                      // id="YB"
                      alt=""
                    />
                  </a>
                </div>
              </div>

              <div className="flexx">
                <div className="card" id="photo">
                  <p id="otherSponsors">Eatery Sponsor</p>
                  <a href="https://www.wrapcart.com/">
                    <img
                      src={NEW}
                      className="img-responsive"
                      id="YB"
                      alt=""
                    />
                  </a>
                </div>
              </div>

            </div>
          </div>
          <br />
          <br />
          <div className="tooltip">
            <button id="flip" className="fill">
              Approach Us
            </button>
            <span className="tooltiptext">
              <a href="mailto:sponsorship@shaastra.org">
                sponsorship@shaastra.org
              </a>
              <br />
              Nithish Venkatesh:  +91 7200939339
              <br />
              Anand Logesh RR:  +91 7358232804
            </span>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <Footer
          designed={[{ name: "Mitesh", mail: "ce20b025@smail.iitm.ac.in" }]}
        />
      </CustomBox>
    </>
  );
}

export default Spons;
