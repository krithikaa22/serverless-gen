import * as React from "react";
import { Text, VStack, Code, useColorModeValue, Flex, Button, Tooltip, Icon } from "@chakra-ui/react";
import { ReactComponent as DiceOutlineDarkAnimated } from "./../../images/logo/animated/non-looped/Text_Outline_Dark_animated.svg";
import { ReactComponent as DiceOutlineLightAnimated } from "./../../images/logo/animated/non-looped/Text_Outline_Light_animated.svg";
import "../../styles/Home.css";
import CustomBox from "../shared/CustomBox";
import {
  FaLinkedin,
  FaInstagram,
  FaYoutubeSquare,
  FaYoutube,
  FaTshirt
} from "react-icons/fa";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/swiper-bundle";
import "swiper/swiper-bundle.esm.browser";
import { Link,useHistory,withRouter } from "react-router-dom";
import prevArrow from "../../images/prevArrow.svg";
import robos1 from "../../images/homepage_illustrations/ROBOS.png";
import robo1 from "../../images/homepage_illustrations/big.png";
import robo2 from "../../images/homepage_illustrations/small ribi.png";
import barish from "../../images/barish.jpg";
import John_hennessy from "../../images/John_hennessy.jpg";
import das_nobel from "../../images/das_nobel.jpeg";
import Raghuram_Rajan from "../../images/Raghuram_Rajan.jpg";
import Footer from "../shared/Footer";
import Event1 from "../../images/events_1.jpg";
import Event2 from "../../images/events_2.jpg";
import Event3 from "../../images/events_3.jpg";
import Event4 from "../../images/events_4.jpg";
import Workshop1 from "../../images/workshop_1.jpg";
import Workshop2 from "../../images/workshop_2.jpg";
import Workshop3 from "../../images/workshop_3.jpg";
// import codetochaos1 from "../../images/logo/static/codetochaos.svg";
import codetochaos1 from "../../images/logo/static/codetochaos2.svg";
import codetochaos2 from "../../images/logo/static/codetochaos2.svg";
import hero_logo from "../../images/white-ILU.png";
import Dan from "../../images/night/Dan_img.jpg";
import Gloves from "../../images/night/Gloves02.jpg";
import Harmony from "../../images/night/Harmony-SonicSnares-2.jpg";
import Heimdall from "../../images/night/Heimdall1.jpg";
import Mirage from "../../images/night/Mirage.jpg";
import Nothwind from "../../images/night/Nothwind1.jpg";
import Vivek from "../../images/night/vivek patil.jpg";
import Reverb from "../../images/night/Reverb.jpg";
import Soda from "../../images/night/Comedy Night.jpeg";
import Kenny from "../../images/night/Kenny Sebastian.jpg";
import Maraiana from "../../images/night/Mariana bo.jpg";
import Adeleida from "../../images/night/Adelaida.jpg";
import SuhaniPresent from "../../images/night/Suhani.jpg";
import Biswa from "../../images/night/Biswa.jpg";
import StefanHell from "../../images/Speaker/newSpeakers/Stefan_W_Hell.jpg";
import Andrew from "../../images/Speaker/newSpeakers/andrew.jpg";
import CarolinaFernando from "../../images/Speaker/newSpeakers/CAROLINA_FERNANDO_RIVAS.jpg";
import JaneGoodall from "../../images/Speaker/newSpeakers/JaneGoodall.jpg";
import Mbanzi from "../../images/Speaker/newSpeakers/mbanzi.jpg";
import Patterson from "../../images/Speaker/newSpeakers/patterson.jpg";
import RameshChandraLahoti from "../../images/Speaker/newSpeakers/RameshChandraLahoti.jpg";
import ShashiTharoor from "../../images/Speaker/newSpeakers/ShashiTharoor.jpg";
import VinodDham from "../../images/Speaker/newSpeakers/VinodDham.jpg";
import Wineland from "../../images/Speaker/newSpeakers/wineland.jpg";
import ReactGA from 'react-ga';
const TRACKING_ID = "UA-216942538-1"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);



interface Props {}

SwiperCore.use([Navigation, Pagination]);

const Home = (props: Props) => {
  const Logo = useColorModeValue(
    DiceOutlineDarkAnimated,
    DiceOutlineLightAnimated
  );
    const history = useHistory()
  React.useEffect(()=>{
    ReactGA.pageview(window.location.pathname + window.location.search);

  });

  const speakersData = [
    {
      "Speaker Name": "Dr. Shashi Tharoor",
      Credentials:
        "Hon'ble Member of Parliament, Chairman of Parliamentary Standing Committee on IT, Renowned Author",
      Date: "15th January",
      Time: "6:00 PM IST",
      "Youtube Link": "https://youtu.be/16Jm_IaSyp4",
      "Photo Link": ShashiTharoor,
    },
    {
      "Speaker Name": "Carolina Marin & Fernando Rivas",
      Credentials:
        "Rio Olympics Gold Medallist, Former Badminton World Champion with her coach",
      Date: "15th January",
      Time: "4:30 PM IST",
      "Youtube Link": "https://youtu.be/bQjeawwtUqM",
      "Photo Link": CarolinaFernando,
    },
    {
      "Speaker Name": "Dr. Jane Goodall, DBE",
      Credentials:
        "Renowned Ethologist and Conservationist, Founder of the Jane Goodall Institute & UN Messenger of Peace",
      Date: "13th January",
      Time: "4:30 PM IST",
      "Youtube Link": "https://youtu.be/ggGzYj57vpE",
      "Photo Link": JaneGoodall,
    },
    {
      "Speaker Name": "Dr. David Patterson",
      Credentials:
        "Renowned Computer Scientist, Vice Chair of RISC-V Foundation, Turing Awardee 2017",
      Date: "14th January",
      Time: "9:00 AM IST",
      "Youtube Link": "https://youtu.be/0TdUz4AhaZ0",
      "Photo Link": Patterson,
    },
    {
      "Speaker Name": "Dr. David Wineland",
      Credentials: "Nobel Prize in Physics, 2012",
      Date: "15th January",
      Time: "9:00 AM IST",
      "Youtube Link": "https://youtu.be/rvN7nbbmuow",
      "Photo Link": Wineland,
    },
    {
      "Speaker Name": "Mr. Vinod Dham",
      Credentials:
        'Father of the Pentium Chip", Founder Managing Director, Indo-US Venture Capitals',
      Date: "16th January",
      Time: "10:00 AM IST",
      "Youtube Link": "https://youtu.be/yzSIH337kvg",
      "Photo Link": VinodDham,
    },
    {
      "Speaker Name": "Mr. Massimo Banzi",
      Credentials: "Co Founder, Arduino",
      Date: "14th January",
      Time: "1:00 PM IST",
      "Youtube Link": "https://youtu.be/i301BBMjmQw",
      "Photo Link": Mbanzi,
    },
    {
      "Speaker Name": "Dr. Stefan Hell",
      Credentials: "Nobel Prize in Chemistry, 2014",
      Date: "13th January",
      Time: "3:30 PM IST",
      "Youtube Link": "https://youtu.be/2dQWJ7KHfWM",
      "Photo Link": StefanHell,
    },
    {
      "Speaker Name": "Mr. Andrew Weinreich",
      Credentials: "Founder of SixDegrees, the first social networking site",
      Date: "16th January",
      Time: "5:30 PM IST",
      "Youtube Link": "https://youtu.be/kY5pWK24MRs",
      "Photo Link": Andrew,
    },
    {
      "Speaker Name": "Hon'ble Justice R.C. Lahoti",
      Credentials: "Former Chief Justice of India",
      Date: "14th January",
      Time: "3:00 PM IST",
      "Youtube Link": "https://youtu.be/al7Wn98g5tI",
      "Photo Link": RameshChandraLahoti,
    },
  ];

  const plain = useColorModeValue("black", "white");
  const codetochoas = useColorModeValue(codetochaos1, codetochaos2);

  const [sideNavBar_marker, setSideNavBar_marker] = React.useState<number>(
    190 / 8
  );

  const update_sidenav_marker = (e) => {
    var screenWidthSpacing = (window.innerWidth - 150) / 6;

    if (
      e.target.scrollTop < window.innerHeight - 20 &&
      e.target.scrollTop >= 0
    ) {
      if (window.innerWidth > 600) {
        setSideNavBar_marker(190 / 8 + 0 * (190 / 8 + 30));
      } else {
        setSideNavBar_marker(screenWidthSpacing - 5);
      }
    } else if (
      e.target.scrollTop < 2 * window.innerHeight - 20 &&
      e.target.scrollTop >= window.innerHeight - 20
    )
      if (window.innerWidth > 600)
        setSideNavBar_marker(190 / 8 + 1 * (190 / 8 + 30));
      else
        setSideNavBar_marker(
          screenWidthSpacing - 5 + 1 * (screenWidthSpacing + 30)
        );
    else if (
      e.target.scrollTop < 3 * window.innerHeight - 20 &&
      e.target.scrollTop >= 2 * window.innerHeight - 20
    )
      if (window.innerWidth > 600)
        setSideNavBar_marker(190 / 8 + 2 * (190 / 8 + 30));
      else
        setSideNavBar_marker(
          screenWidthSpacing - 5 + 2 * (screenWidthSpacing + 30)
        );
    else if (
      e.target.scrollTop < 4 * window.innerHeight - 20 &&
      e.target.scrollTop >= 3 * window.innerHeight - 20
    )
      if (window.innerWidth > 600)
        setSideNavBar_marker(190 / 8 + 3 * (190 / 8 + 30));
      else
        setSideNavBar_marker(
          screenWidthSpacing - 5 + 3 * (screenWidthSpacing + 30)
        );
    else if (
      e.target.scrollTop < 5 * window.innerHeight - 20 &&
      e.target.scrollTop >= 4 * window.innerHeight - 20
    )
      if (window.innerWidth > 600)
        setSideNavBar_marker(190 / 8 + 4 * (190 / 8 + 30));
      else
        setSideNavBar_marker(
          screenWidthSpacing - 5 + 4 * (screenWidthSpacing + 30)
        );
    else if (
      e.target.scrollTop < 6 * window.innerHeight - 20 &&
      e.target.scrollTop >= 5 * window.innerHeight - 20
    )
      if (window.innerWidth > 600)
        setSideNavBar_marker(190 / 8 + 5 * (190 / 8 + 30));
      else
        setSideNavBar_marker(
          screenWidthSpacing - 5 + 5 * (screenWidthSpacing + 30)
        );
    else if (
      e.target.scrollTop < 7 * window.innerHeight - 20 &&
      e.target.scrollTop >= 6 * window.innerHeight - 20
    )
      if (window.innerWidth > 600)
        setSideNavBar_marker(190 / 8 + 6 * (190 / 8 + 30));
      else
        setSideNavBar_marker(
          screenWidthSpacing - 5 + 5 * (screenWidthSpacing + 30)
        );
  };

  const speaker_navigationPrevRef = React.useRef(null);
  const speaker_navigationNextRef = React.useRef(null);
  const speaker_paginationRef = React.useRef(null);
  const shows_navigationPrevRef = React.useRef(null);
  const shows_navigationNextRef = React.useRef(null);
  const shows_paginationRef = React.useRef(null);
  const events_navigationPrevRef = React.useRef(null);
  const events_navigationNextRef = React.useRef(null);
  const events_paginationRef = React.useRef(null);

  const [scrollLeft, setScrollLeft] = React.useState({
    left: 0,
    right: 100,
  });

  const calculateTimeLeft = () => {
    let difference = +new Date(`1/13/2022 0:0`) - +new Date();
    let timeLeft = { days: 0, hrs: 0, mins: 0, secs: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
        mins: Math.floor((difference / 1000 / 60) % 60),
        secs: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };
  const [time, setTime] = React.useState<{
    days: number;
    hrs: number;
    mins: number;
    secs: number;
  }>({
    days: 0,
    hrs: 0,
    mins: 0,
    secs: 0,
  });

  React.useEffect(() => {
    setInterval(() => setTime(calculateTimeLeft()), 1000);
  }, []);

  return (
    <CustomBox>
      {/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-216942538-1"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-216942538-1');
      </script> */}
      <div onScroll={update_sidenav_marker} className={`Home ${plain}`}>
        <div
          style={
            window.innerWidth > 600 ? { display: "flex" } : { display: "none" }
          }
          className={`Home_sideNavBar ${plain}`}
        >
          <span
            className="Home_sideNavBar_marker"
            style={
              window.innerWidth > 600
                ? {
                    top: sideNavBar_marker,
                  }
                : {
                    left: sideNavBar_marker,
                  }
            }
          ></span>
          <a href="#landing_page">
            <span>01</span>
          </a>
          <a href="#hero_section">
            <span>02</span>
          </a>
          <a href="#who_are_we">
            <span>03</span>
          </a>
          <a href="#workshop_events">
            <span>04</span>
          </a>
          <a href="#speakers">
            <span>05</span>
          </a>
          <a href="#pastshows">
            <span>06</span>
          </a>
          <a href="#testimonials">
            <span>07</span>
          </a>
        </div>
        <section
          id="landing_page"
          style={{
            backgroundPosition: `calc(100% + ${
              window.innerWidth < 800 ? 800 - window.innerWidth : 0
            }) 50%`,
          }}
          className={`Home_landingPage ${plain}`}
        >
          <div className="ContentBox">
            <h1>SHAASTRA 2022</h1>
            <div className="Theme">
              <h3 id="theme_name">CODE TO CHAOS</h3>
              <p id="themeDate">
                13th <span id="dash"></span> 16th January
              </p>
            </div>
            {/* <h3 id="salesLink">
              Mayhem Combo Offer
              <br />
              <a
                href="https://www.shaastra.org/events/workshops"
                style={{ color: "#FFFF00", fontWeight: "bold" }}
              >
                WORKSHOPS
              </a>
              &nbsp;&&nbsp;
              <a
                href="https://sales.shaastra.org/"
                target="_blank"
                style={{ color: "#FFB6C1", fontWeight: "bold" }}
              >
                SALES
              </a>
              <br />
              Limited seats available!!
              <br />
              Offer available until 12th January
            </h3> */}
            {/* <h3 id="salesLink" style={{ marginTop: "5px" }}>
              for&nbsp;
            </h3> */}
             <a href="https://shaastra2022.com">Live Now</a>
             <Tooltip label="Get a Chance to win free TShirt">
              <Button padding="3vw" marginLeft="3vw" backgroundColor={"transparent"}
              onHover={() => {
                
              }}
              onClick={(e) => {
                  e.preventDefault();
                  history.push('/events/workshops')
              }}
              ><Icon as={FaTshirt} className="rainbow" boxSize={["9vw","9vw","5vw","5vw"]}/></Button>
            </Tooltip>
          </div>
          <div className="imgBox">
            <img src={robos1} alt="" />
          </div>
          {window.innerWidth > 600 ? (
            <span className="Home_scroll_btn">
              <span></span>
            </span>
          ) : (
            <></>
          )}

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
            <a
              target="_blank"
              href="https://forms.gle/JHqGdgWeUVLm6hwR8"
            >
              Feedback
            </a>

            {window.innerWidth > 600 ? <span></span> : <></>}
          </div>
        </section>
        <section id="hero_section" className="Home_HeroPage">
          <div className="imgBox">
            <img src={hero_logo} alt="" />
          </div>
          <div className="countdown">
            <div className="card">
              <div className="card-top" id="days">
                {time.days}
              </div>
              <div className="card-bottom">
                <p>DAYS</p>
              </div>
            </div>
            <span></span>
            <div className="card">
              <div className="card-top" id="hours">
                {time.hrs}
              </div>
              <div className="card-bottom">
                <p>HOURS</p>
              </div>
            </div>
            <span></span>
            <div className="card">
              <div className="card-top" id="mins">
                {time.mins}
              </div>
              <div className="card-bottom">
                <p>MINS</p>
              </div>
            </div>
            <span></span>
            <div className="card">
              <div className="card-top" id="secs">
                {time.secs}
              </div>
              <div className="card-bottom">
                <p>SECS</p>
              </div>
            </div>
          </div>
          {localStorage.getItem("role") !== "Admin" &&
              localStorage.getItem("role") !== "User" && (
                <a target="_blank" href="/signup">Register</a>
              )}
        </section>
        <section id="who_are_we" className="Home_whoAreWe">
          <img id="who_are_we_robo1" src={robo1} alt="" />
          <img id="who_are_we_robo2" src={robo2} alt="" />
          <h1 id="heading">Who Are We?</h1>
          <p id="text">
            Shaastra is the annual technical festival of the Indian Institute of
            Technology Madras (IITM), Chennai, India.
            <br />
            <br />
            The Sanskrit word ‘Shaastra’ means science and the festival
            accordingly consists of various engineering, science, and technology
            competitions, summits, lectures, video conferences, exhibitions,
            demonstrations and workshops. The festival is traditionally held
            over four days and four nights during the first week of January. It
            has so far seen twenty-one editions, having started in its current
            avatar in the year 2000.
            <br />
            <br />
            Shaastra is entirely student-managed and is the first such event in
            the world to be ISO 9001:2015 certified.
          </p>
        </section>
        <section
          id="workshop_events"
          className={`Home_WorkshopsEvents ${plain}`}
        >
          <h1>Past Workshops & Events</h1>
          <div className="speaker_swiper_container">
            <div className="swiper-prev-con" ref={events_navigationPrevRef}>
              <img src={prevArrow} alt="" />
            </div>
            <Swiper
              spaceBetween={window.innerWidth > 600 ? 50 : 0}
              navigation={{
                prevEl: events_navigationPrevRef.current,
                nextEl: events_navigationNextRef.current,
              }}
              loop={true}
              pagination={
                window.innerWidth < 600
                  ? {
                      el: events_paginationRef.current,
                      clickable: true,
                    }
                  : false
              }
              slidesPerView={window.innerWidth > 600 ? "auto" : 1}
            >
              <SwiperSlide>
                <img src={Workshop1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Event1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Workshop2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Event2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Workshop3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Event3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Event4} alt="" />
              </SwiperSlide>
            </Swiper>
            <div className="swiper-next-con" ref={events_navigationNextRef}>
              <img src={prevArrow} alt="" />
            </div>
            <div className="swiper-pagination" ref={events_paginationRef}></div>
          </div>
          {window.innerHeight > 300 ? (
            <div className="swiperControllers">
              {/* <div className="swiper-prev-con" ref={events_navigationPrevRef}>
                <img src={prevArrow} alt="" />
              </div> */}
              {/* <div
                className="swiper-pagination"
                ref={events_paginationRef}
              ></div> */}
              {/* <div className="swiper-next-con" ref={events_navigationNextRef}>
                <img src={prevArrow} alt="" />
              </div> */}
            </div>
          ) : (
            "Swipe right ->"
          )}
        </section>
        <section id="speakers" className={`Home_Speakers ${plain}`}>
          <h1 className={`${plain}`}>Speakers</h1>
          <div className={`speaker_swiper_container`}>
            <div className="swiper-prev-con" ref={speaker_navigationPrevRef}>
              <img src={prevArrow} alt="" />
            </div>
            <Swiper
              spaceBetween={50}
              navigation={{
                prevEl: speaker_navigationPrevRef.current,
                nextEl: speaker_navigationNextRef.current,
              }}
              loop={true}
              pagination={
                window.innerWidth < 600
                  ? {
                      el: speaker_paginationRef.current,
                      clickable: true,
                    }
                  : false
              }
              slidesPerView={"auto"}
            >
              {speakersData.map((speaker) => (
                <SwiperSlide>
                  <img
                    src={speaker["Photo Link"]}
                    alt={speaker["Speaker Name"]}
                  />
                  <div className="contentBox">
                    <div className="left">
                      <h3>{speaker["Speaker Name"]}</h3>
                      <p>{speaker["Credentials"]}</p>
                    </div>
                    <a target="_blank" href={speaker["Youtube Link"]}>
                      <FaYoutube />
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-next-con" ref={speaker_navigationNextRef}>
              <img src={prevArrow} alt="" />
            </div>
            <div
              className="swiper-pagination"
              ref={speaker_paginationRef}
            ></div>
          </div>
        </section>
        <section id="pastshows" className={`Home_Speakers ${plain}`}>
          <h1 className={`${plain}`}>Shows</h1>
          <div className="Home_speakers_card_container">
            <div className="Home_speakers_card">
              <img src={Biswa} alt="" style={{ objectFit: "cover" }} />
              <div className="contentBox">
                <h3>Biswa Kalyan Rath</h3>
                <p>
                  CHAOS <span></span> Shaastra 2022
                </p>
              </div>
            </div>
            <div className="Home_speakers_card">
              <img src={SuhaniPresent} alt="" style={{ objectFit: "cover" }} />
              <div className="contentBox">
                <h3>Suhani Shah</h3>
                <p>
                  SPECTRE <span></span> Shaastra 2022
                </p>
              </div>
            </div>
          </div>
          {/* <div className={`speaker_swiper_container`}>
            <div className="swiper-prev-con" ref={shows_navigationPrevRef}>
              <img src={prevArrow} alt="" />
            </div>
            <Swiper
              spaceBetween={50}
              navigation={{
                prevEl: shows_navigationPrevRef.current,
                nextEl: shows_navigationNextRef.current,
              }}
              loop={true}
              pagination={
                window.innerWidth < 600
                  ? {
                      el: shows_paginationRef.current,
                      clickable: true,
                    }
                  : false
              }
              slidesPerView={"auto"}
            >
              
                <SwiperSlide>
                  <img src={Kenny} alt="" style={{ objectFit: "cover" }} />
                  <div className="contentBox">
                    <div className="left">
                      <h3>Kenny Sebastian</h3>
                      <p>CHAOS</p>
                      <p>Shaastra 2021</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={Harmony}
                    alt=""
                    style={{ objectFit: "contain", background: "#000" }}
                  />
                  <div className="contentBox">
                    <div className="left">
                      <h3>Sonic Snares</h3>
                      <p>HARMONY</p>
                      <p>Shaastra 2021</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Dan} alt="" style={{ objectFit: "cover" }} />
                  <div className="contentBox">
                    <div className="left">
                      <h3>Dan Rhodes</h3>
                      <p>Virtual Magic Show</p>
                      <p>Shaastra Juniors 2020</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Heimdall} alt="" style={{ objectFit: "cover" }} />
                  <div className="contentBox">
                    <div className="left">
                      <h3>Heimdall</h3>
                      <p>LASER HARP Live Performance </p>
                      <p>Shaastra 2020</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Maraiana} alt="" style={{ objectFit: "cover" }} />
                  <div className="contentBox">
                    <div className="left">
                      <h3>Mariana BO</h3>
                      <p>EDM Night</p>
                      <p>Shaastra 2018</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Adeleida} alt="" style={{ objectFit: "cover" }} />
                  <div className="contentBox">
                    <div className="left">
                      <h3>Adelaida</h3>
                      <p>LED & NEON Show</p>
                      <p>Shaastra 2016</p>
                    </div>
                  </div>
                </SwiperSlide>
            </Swiper>
            <div className="swiper-next-con" ref={shows_navigationNextRef}>
              <img src={prevArrow} alt="" />
            </div>
            <div className="swiper-pagination" ref={shows_paginationRef}></div>
          </div> */}
          <Link to="/shows">SEE MORE</Link>
        </section>
        <section id="testimonials" className={`Home_Testimonials ${plain}`}>
          <h1>Testimonials</h1>
          <div
            className={`testimonial_card_container ${plain}`}
            onScroll={(e: any) => {
              window.innerWidth < 600 &&
                setScrollLeft({
                  left: e.target.scrollLeft,
                  right: 990 - e.target.scrollLeft,
                });
            }}
          >
            <div className={`testimonialWrapper ${plain}`}>
              <div className="testimonial_card_cover">
                <div className={`testimonial_card ${plain}`}>
                  <p>
                    It was a great privilege and honor to participate in
                    Shaastra 2021. Science has no borders and sharing the
                    knowledge of scientific advances is a joy, especially to a
                    talented and appreciative audience, like for Shaastra.
                  </p>
                  <div className="profile">
                    <div className="imgBox">
                      <img src={barish} alt="" />
                    </div>
                    <div className="contentBox">
                      <h3>Dr. Barry Barish</h3>
                      <p>Nobel Prize in Physics, 2017</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial_card_cover">
                <div className={`testimonial_card ${plain}`}>
                  <p>
                    Thanks to the team at Shaastra 2021 for organizing a
                    terrific event. I enjoyed the interview and a special thanks
                    to the interviewer who did such an excellent job preparing.
                    Thanks to the IIT madras students who asked excellent
                    questions.
                  </p>
                  <div className="profile">
                    <div className="imgBox">
                      <img src={John_hennessy} alt="" />
                    </div>
                    <div className="contentBox">
                      <h3>Dr. John Hennessy</h3>
                      <p>Chairman, Alphabet Inc., Turing Awardee</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial_card_cover">
                <div className={`testimonial_card ${plain}`}>
                  <p>
                    It was an honor to connect with students from the IIT
                    campuses especially from Indian Institute of Technology,
                    Madras. Thank you for hosting me. Our Maverick Quantum AI
                    team is committed to hiring 500 IITians in the next 3 years.
                  </p>
                  <div className="profile">
                    <div className="imgBox">
                      <img src={das_nobel} alt="" />
                    </div>
                    <div className="contentBox">
                      <h3>Das Nobel</h3>
                      <p>Founder & CEO at MTX Group</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial_card_cover">
                <div className={`testimonial_card ${plain}`}>
                  <p>
                    I spoke to the students at IIT Madras on a range of issues.
                    I was impessed with how prepared they were. This is so
                    refreshingly different from my student days. We are making
                    progress !
                  </p>
                  <div className="profile">
                    <div className="imgBox">
                      <img src={Raghuram_Rajan} alt="" />
                    </div>
                    <div className="contentBox">
                      <h3>Raghuram Rajan</h3>
                      <p>Former Governor of the Reserve Bank of India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {window.innerWidth < 600 ? (
            <>
              <span
                id="scrollLeft"
                style={scrollLeft.left < 50 ? { opacity: 1 } : { opacity: 0 }}
              >
                {scrollLeft.left < 50 ? "Swipe right ->" : ""}
              </span>
              <span
                id="scrollLeft"
                style={scrollLeft.right < 50 ? { opacity: 1 } : { opacity: 0 }}
              >
                {scrollLeft.right < 50 ? "<- Swipe left" : ""}
              </span>
            </>
          ) : (
            <></>
          )}
        </section>
        <Footer
          designed={[
            { name: "Rohit", mail: "cs19b038@smail.iitm.ac.in" },
            { name: "Krithikaa", mail: "be20b020@smail.iitm.ac.in" },
            { name: "Yogesh", mail: "bs19b034@smail.iitm.ac.in" },
          ]}
          curr_page="Home"
        />
      </div>
    </CustomBox>
  );
};

export default withRouter(Home);
