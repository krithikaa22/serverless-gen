import * as React from "react";
import { Text, VStack, Code, useColorModeValue, Flex } from "@chakra-ui/react";
import { ReactComponent as DiceOutlineDarkAnimated } from "./../../../images/logo/animated/non-looped/Text_Outline_Dark_animated.svg";
import { ReactComponent as DiceOutlineLightAnimated } from "./../../../images/logo/animated/non-looped/Text_Outline_Light_animated.svg";

import CustomBox from "../../shared/CustomBox";
import "../../../styles/Team_styles/Team.css";
import Card from "./Card";
import SliderImgBox from "./SliderImgBox";
import photos from "./photos";
import { FaFilter, FaTimes } from "react-icons/fa";
import Footer from "../../shared/Footer";

interface Props {}

const Team = (props: Props) => {
  const colorTheme = useColorModeValue("light", "dark");

  const Logo = useColorModeValue(
    DiceOutlineDarkAnimated,
    DiceOutlineLightAnimated
  );
  let Profiles = [
    {
      name: "Nitish Gupta",
      role: "core",
      dept: "Co-Curricular Affairs Secretary",
      mailId: "be17b022@smail.iitm.ac.in",
      social_links: {
        linkedIn: "https://www.linkedin.com/in/nitish-gupta86/",
        instagram: "https://www.instagram.com/nitishhgupta/",
        shastraMailId: "nitish.gupta@shaastra.org",
        contact: "9840903852",
      },
      desc: "It has been an amazing journey for me being part of the Shaastra team for last three years. I have seen Shaastra grow leaps and bounds over the last 3 years and it gives me immense pleasure to lead the team this year. ",
      imgURL: photos.be17b022,
    },
    {
      mailId: "be19b012@smail.iitm.ac.in",
      name: "Abhishek sv",
      dept: "Webops",
      social_links: {
        instagram: "https://www.instagram.com/abhi_shx_25/",
        linkedIn: "https://www.linkedin.com/in/abhishek-sv-69b67719a/",
        shastraMailId: "abhisheksv@shaastra.org",
        contact: "8300682565",
      },
      desc: "Being a part of shaastra is always like a ride in rollercoaster, fun and enjoyable. Being a part of this team meant everything to me , like I always say its never a bug, its always a undocumented feature.",
      imgURL: photos.be19b012,
    },
    {
      mailId: "be19b009@smail.iitm.ac.in",
      name: "Shobhan Karthick",
      dept: "Webops",
      social_links: {
        instagram: "https://www.instagram.com/",
        linkedIn: "https://www.linkedin.com/in/shobhan-karthick",
        shastraMailId: "shobhankarthick@shaastra.org",
        contact: "6385188219",
      },
      desc: "Shaastra gives you the raw opprutunity to engage with people with immense knowledge from different backgrounds. My journey here has gained me a lot of amazing friends and made me more versatile. Kudos to me and Shaastra!",
      imgURL: photos.be19b009,
    },
    {
      mailId: "ce19b029@smail.iitm.ac.in",
      name: "Charitha S ",
      dept: "Concept & Design",
      social_links: {
        instagram: "https://www.instagram.com/charitha_2611 ",
        linkedIn: "https://www.linkedin.com/in/Charitha Cherry ",
        shastraMailId: "charitha@shaastra.org ",
        contact: "9177679069",
      },
      desc: "My journey in Shaastra from coord to core was really wonderful.  Gaining new skills, making new friends and leading a team with lotz of memories keeps me  motivated and being passionate towards my work.",
      imgURL: photos.ce19b029,
    },
    {
      mailId: "ed18b057@smail.iitm.ac.in",
      name: "Rohit Survase",
      dept: "Concept & Design",
      social_links: {
        instagram: "https://www.instagram.com/_rohitsurvase",
        linkedIn: "https://www.linkedin.com/in/Rohit Survase",
        shastraMailId: "rohit@shaastra.org",
        contact: "7020250404",
      },
      desc: "The experience that I have had being in Shaastra will be cherished throughout my life.Meeting wonderful seniors,juniors and peers had made my time in Shaastra extremely special.",
      imgURL: photos.ed18b057,
    },
    {
      mailId: "ee18b054@smail.iitm.ac.in",
      name: "K.L.Soumya",
      dept: "Envisage",
      social_links: {
        instagram: "https://www.instagram.com/envisageiitmadras/",
        linkedIn: "https://www.linkedin.com/in/soumya-kollipara-69aa361a8",
        shastraMailId: "soumya@shaastra.org",
        contact: "9176415740",
      },
      desc: "I have been a part of shaastra since my first year starting with being a volunteer. That is when I fell in love with Shaastra watching all the mesmerizing events.  Being a part of shaastra for 3 years has been a great learning curve and also like being a part of a family.",
      imgURL: photos.ee18b054,
    },
    {
      mailId: "ce18b003@smail.iitm.ac.in",
      name: "Battu Lochana Janaki",
      dept: "Envisage",
      social_links: {    
        instagram: "https://www.instagram.com/envisageiitmadras/",
        linkedIn: "https://www.linkedin.com/in/battu-lochana-janaki-b270b31bb/",
        facebook: "https://www.facebook.com/Envisage.IITM",
        shastraMailId: "lochana@shaastra.org",
        contact: "7032377877",
      },
      desc: "Being a part of Shaastra, gave me an amazing opportunity to work on remarkable projects, gain new skills, make new friends, and a lot of memories. These experiences constantly boosted me and motivated me in continuing with the Team.",
      imgURL: photos.ce18b003,
    },
    {
      mailId: "cs18b050@smail.iitm.ac.in",
      name: "Aniswar Srivatsa Krishna",
      dept: "Events & Workshops",
      social_links: {
        facebook: "https://www.facebook.com/aniswarsrivatsak/",
        linkedIn:"https://www.linkedin.com/in/aniswar-sk/",
        shastraMailId: "aniswar@shaastra.org",
        contact: "6383393474",
      },
      desc: "Being part of Shaastra and conducting various events connects me to students from colleges all over India, provides me a great platform to exchange ideas and an opportunity to be at the forefront of technological innovation in the country.",
      imgURL: photos.cs18b050,
    },
    {
      mailId: "ch18b020@smail.iitm.ac.in",
      name: "S Vishal",
      dept: "Events & Workshops",
      social_links: {
        instagram: "s_._vishal",
         linkedIn: "https://www.linkedin.com/in/vishal-sivaraman-/",
        shastraMailId: "vishal@shaastra.org",
        contact: "9498813221",
      },
      desc: "My journey with Shaastra began with popular events like RC in my freshie year and fast-forward 2 years, I lead C&L successfully. Back here one last time to have an enjoyable and socially impactful Shaastra for participants across the spectrum!",
      imgURL: photos.ch18b020,
    },
    {
      mailId: "me18b145@smail.iitm.ac.in",
      name: "Ashwin Kumar",
      dept: "Evolve",
      social_links: {
        instagram: "https://www.instagram.com/ash_twenty5/",
        linkedIn: "https://www.linkedin.com/in/ashwin-kumar-242288185/",
        shastraMailId: "ashwin@shaastra.org",
        contact: "9962296616",
      },
      desc: "Being part of the Core organizing team of India's largest completely student-run festival is an overwhelming and fantastic experience to say the least. Shaastra has remained an integral part of my Insti life and has provided innumerous cherishable memories. ",
      imgURL: photos.me18b145,
    },
    {
      mailId: "ed18b031@smail.iitm.ac.in",
      name: "Siddhant Toknekar",
      dept: "Evolve",
      social_links: {
        instagram: "https://www.instagram.com/token_taker/",
        linkedIn: "https://www.linkedin.com/in/siddhant-toknekar/",
        shastraMailId: "siddhant@shaastra.org",
        contact: "9130213213",
      },
      desc: "Having been a part of Shaastra right from my very first semester, it would be fair to say that the fest has essentially shaped my personal and professional life. The friends I have made, the managerial skills I have learnt have moulded me into the person I am today! ",
      imgURL: photos.ed18b031,
    },
    {
      mailId: "ce18b060@smail.iitm.ac.in",
      name: "Kranthi Kiran T",
      dept: "Finance",
      social_links: {
        instagram: "https://www.instagram.com/sonukranthy",
          linkedIn: "https://www.linkedin.com/in/kranthi-kiran-714baa184/",
        shastraMailId: "kranthi.t@shaastra.org",
        contact: "6303733655",
      },
      desc: "Some of the memorable days in the whole year that we spend and gaining new relations that last forever. I have learned a lot during this journey and this fantasic and evergreen memories will never fade from my mind ",
      imgURL: photos.ce18b060,
    },
    {
      mailId: "ee18b022@smail.iitm.ac.in",
      name: "Nune Sahithi",
      dept: "Finance",
      social_links: {
        instagram: "https://www.intsagram.com/sahithi0022",
         linkedIn: "https://www.linkedin.com/in/sahithinune/",
        shastraMailId: "sahithi@shaastra.org",
        contact: "9948812020",
      },
      desc: "My 3 year Shaastra's Journey has been wonderful. It has so many ups and downs, but gladly I made it through :p Shaastra helped me to get out of my comfort zone and improve myself. Really excited for Shaastra'22.",
      imgURL: photos.ee18b022,
    },
    {
      mailId: "ce18b112@smail.iitm.ac.in",
      name: "Ayushman Sharma",
      dept: "Operations & Infrastructure Planning",
      social_links: {
        linkedIn: "https://www.linkedin.com/in/ayushman-sharma-b1a486188",
        instagram: "https://www.instagram.com/_ayushman_sharma/",
        shastraMailId: "Ayushman@shaastra.org",
        contact: "6377340561",
      },
      desc: "My Shaastra journey started from my first year and each year I am learning new things and skills. My coordinator year was the one when I felt a bonding with my team and decided to carry on with it and the experience have been better each year.",
      imgURL: photos.ce18b112,
    },
    {
      mailId: "ed18b050@smail.iitm.ac.in",
      name: "Rutvik Baxi",
      dept: "Operations & Infrastructure Planning",
      social_links: {
        linkedIn: "https://www.linkedin.com/in/rutvik-baxi",
        instagram: "https://www.instagram.com/baaxzzeee/",
        shastraMailId: "rutvik@shaastra.org",
        contact: "8866419419",
      },
      desc: "My experience with Team O&IP has been nothing less than fabulous. I joined this team in my 3rd year and have made some of my best friends and nicest memories while organising the first ever online Shaastra last year. OIP OP🙅‍♂️.",
      imgURL: photos.ed18b050,
    },
    {
      mailId: "be18b013@smail.iitm.ac.in",
      name: "Shvetha Sivaprasad",
      dept: "Publicity",
      social_links: {
          linkedIn: "https://www.linkedin.com/in/shvetha-sivaprasad-08264217a/",
        instagram: "https://www.instagram.com/shvethasivaprasad",
        facebook: "https://www.facebook.com/Shvetha S",
        shastraMailId: "shvetha@shaastra.org",
        contact: "6379764273",
      },
      desc: "This was the first team that I joined in as a freshie and I could never part it and now I am heading the team. This team have taught me a lot not just technically but in all aspects. And this journey was a marvelous one and will ever be.",
      imgURL: photos.be18b013,
    },
    {
      mailId: "ep18b006@smail.iitm.ac.in",
      name: "H Madhan Kumar",
      dept: "Publicity",
      social_links: {
        instagram: "https://www.instagram.com/madmannedme/",
        shastraMailId: "madhan@shaastra.org",
        contact: "6303564574",
      },
      desc: "I love things out of context and to do things out of the box, being a part of shaastra has given me the oppurtnity to do that and I love it for that. It has made me the person who I am today, the experience and the friend moulded be to a better version of myself ",
      imgURL: photos.ep18b006,
    },
    {
      mailId: "ee18b138@smail.iitm.ac.in",
      name: "K Harshitha",
      dept: "Quality Management System",
      social_links: {
         linkedIn: "https://www.linkedin.com/in/harshitha-k-788492194/",
        instagram: "https://www.instagram.com/harshithaa_aaa",
        shastraMailId: "harshitha@shaastra.org",
        contact: "6303344798",
      },
      desc: "I have been part of shaastra since my first year. It wasn't a smooth one, there were and are lots of ups and downs. At the end of every tenure, I evolve as a new and better person. I will cherish all my learnings i experienced being part of SHAASTRA.",
      imgURL: photos.ee18b138,
    },
    {
      mailId: "ed18b053@smail.iitm.ac.in",
      name: "Shivam Maheshwari",
      dept: "Quality Management System",
      social_links: {
        linkedIn: "https://www.linkedin.com/in/shivam-maheshwari",
        shastraMailId: "Shivam@shaastra.org",
        contact: "6264115563",
      },
      desc: "My 'Shaastra Journey' started in my first year when I became Events-workshop manager & OIP-VIP care coordinator. Next year I applied for the Head position in OIP, and currently, I am QMS Core. I aspire to bring upon relevant changes to strengthen the quality of Shaastra and enjoy the very process:)",
      imgURL: photos.ed18b053,
    },
    {
      mailId: "ep18b005@smail.iitm.ac.in",
      name: "Baibhabi Patnaik ",
      dept: "Shows & Exhibitions",
      social_links: {
        linkedIn: "https://www.linkedin.com/in/baibhabi-patnaik-b1563419b",
        instagram: "https://www.instagram.com/baibhabi_musical",
        shastraMailId: "baibhabi@shaastra.org",
        contact: "9989591690",
      },
      desc: "For my love of interacting with people, two years at Shaastra and counting have suited me well. The experience has been wholesome and loaded with learnings and memories. The team is family, and we have an amazing time here, organizing all innovation under one umbrella!",
      imgURL: photos.ep18b005,
    },
    {
      mailId: "ch18b036@smail.iitm.ac.in",
      name: "Aman Kumar",
      dept: "Shows & Exhibitions",
      social_links: {
        instagram: "https://www.instagram.com/aman_k07/",
        linkedIn: "https://www.linkedin.com/in/aman-kumar-17a0ba192/",
        shastraMailId: "aman@shaastra.org",
        contact: "6385140247",
      },
      desc: "To summarise my Shaastra Journey, from coordinator to Core in S&E: Every year started with infinite ideas and a motivated team. Result was and always will be the Biggest Technical Festival and Memories + Experiences we get for life!!",
      imgURL: photos.ch18b036,
    },
    {
      mailId: "be18b026@smail.iitm.ac.in",
      name: "Nithish Venkatesh",
      dept: "Sponsorship and PR",
      social_links: {
        linkedIn: "https://linkedin.com/in/nithish-venkatesh",
        instagram: "https://www.instagram.com/nithyanandaa ",
        shastraMailId: "nithish.venkatesh@shaastra.org",
        contact: "7200939339",
      },
      desc: "Money can't buy happiness, but it certainly can keep the biggest Techno-Managerial fest of India running.",
      imgURL: photos.be18b026,
    },
    {
      mailId: "ch18b037@smail.iitm.ac.in",
      name: "Anandlogesh R R",
      dept: "Sponsorship and PR",
      social_links: {
        linkedIn: "https://www.linkedin.com/in/anandlogesh-r-r/",
        instagram: "https://www.instagram.com/the_a.r.r._/",
        shastraMailId: "anandlogesh.rr@shaastra.org",
        contact: "7358232804",
      },
      desc: "Some parts of truth and a dash of pure lie makes the perfect lie.",
      imgURL: photos.ch18b037,
    },
  ];
  let i = 0;

  const [marker, setMarker] = React.useState({
    top: window.innerWidth > 700 ? "44px" : "13px",
  });

  const [navbar, setNavbar] = React.useState(
    window.innerWidth < 700 ? false : true
  );

  const [type, setType] = React.useState("all");

  const handleFilter = () => {
    if (navbar) setNavbar(false);
    else setNavbar(true);
  };

  const handleClick = (e) => {
    setType(e.target.attributes[0].value);
    setMarker({
      top: e.target.offsetTop + "px",
    });
  };

  interface Value {
    footerBack?: "currentcolor";
    creditsBack?: "currentcolor";
  }

  return (
    <CustomBox>
      <div
        className="Team"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="ContentBox">
          <h1>Meet Our Team</h1>
          <p>
            Meet the People who worked countless hours behind the scenes to
            bring you the Spectacle, that is India's biggest Techno-Managerial
            Fest.
          </p>
        </div>
        <div className="imageContainer">
          <div className="imageSlider">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((count) => {
              i += 4;
              i = i % 22;
              return (
                <>
                  <div className="col">
                    <SliderImgBox profile={Profiles[i]} />
                    <SliderImgBox profile={Profiles[(i + 1) % 22]} />
                  </div>
                </>
              );
            })}
            {
              <div className="col">
                <SliderImgBox profile={Profiles[22]} />
                <SliderImgBox profile={Profiles[12]} />
              </div>
            }
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((count) => {
              i += 4;
              i = i % 22;
              return (
                <>
                  <div className="col">
                    <SliderImgBox profile={Profiles[i]} />
                    <SliderImgBox profile={Profiles[(i + 1) % 22]} />
                  </div>
                </>
              );
            })}
            {
              <div className="col">
                <SliderImgBox profile={Profiles[11]} />
                <SliderImgBox profile={Profiles[22]} />
              </div>
            }
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((count) => {
              i += 4;
              i = i % 22;
              return (
                <>
                  <div className="col">
                    <SliderImgBox profile={Profiles[i]} />
                    <SliderImgBox profile={Profiles[(i + 1) % 22]} />
                  </div>
                </>
              );
            })}
            {
              <div className="col">
                <SliderImgBox profile={Profiles[22]} />
                <SliderImgBox profile={Profiles[12]} />
              </div>
            }
          </div>
        </div>
        <div className={`DetailCards ${colorTheme}`}>
          {navbar ? (
            <button onClick={handleFilter} className="FilterBtn">
              <FaTimes /> CLOSE
            </button>
          ) : (
            <button onClick={handleFilter} className="FilterBtn">
              <FaFilter /> FILTER
            </button>
          )}
          <div
            className="navbar"
            style={{
              display: navbar ? "flex" : "none",
            }}
          >
            <button
              data-type="all"
              style={{
                color: type === "all" ? "#000" : "#fff",
              }}
              onClick={handleClick}
            >
              All
            </button>
            <button
              data-type="Co-Curricular Affairs Secretary"
              style={{
                color:
                  type === "Co-Curricular Affairs Secretary" ? "#000" : "#fff",
              }}
              onClick={handleClick}
            >
              Co-Curricular Affairs Secretary
            </button>
            <button
              data-type="Concept & Design"
              style={{
                color: type === "Concept & Design" ? "#000" : "#fff",
              }}
              onClick={handleClick}
            >
              Concept & Design
            </button>
            <button
              data-type="Envisage"
              style={{
                color: type === "Envisage" ? "#000" : "#fff",
              }}
              onClick={handleClick}
            >
              Envisage
            </button>
            <button
              data-type="Events & Workshops"
              style={{
                color: type === "Events & Workshops" ? "#000" : "#fff",
              }}
              onClick={handleClick}
            >
              Events & Workshops
            </button>
            <button
              data-type="Evolve"
              style={{
                color: type === "Evolve" ? "#000" : "#fff",
              }}
              onClick={handleClick}
            >
              Evolve
            </button>
            <button
              data-type="Finance"
              style={{
                color: type === "Finance" ? "#000" : "#fff",
              }}
              onClick={handleClick}
            >
              Finance
            </button>
            <button
              data-type="Operations & Infrastructure Planning"
              style={{
                color:
                  type === "Operations & Infrastructure Planning"
                    ? "#000"
                    : "#fff",
              }}
              onClick={handleClick}
            >
              Operations & Infrastructure Planning
            </button>
            <button
              data-type="Publicity"
              style={{
                color: type === "Publicity" ? "#000" : "#fff",
              }}
              onClick={handleClick}
            >
              Publicity
            </button>
            <button
              data-type="Quality Management System"
              style={{
                color: type === "Quality Management System" ? "#000" : "#fff",
              }}
              onClick={handleClick}
            >
              Quality Management System
            </button>
            <button
              data-type="Shows & Exhibitions"
              style={{
                color: type === "Shows & Exhibitions" ? "#000" : "#fff",
              }}
              onClick={handleClick}
            >
              Shows & Exhibitions
            </button>
            <button
              data-type="Sponsorship and PR"
              style={{
                color: type === "Sponsorship and PR" ? "#000" : "#fff",
              }}
              onClick={handleClick}
            >
              Sponsorship and PR
            </button>
            <button
              data-type="Webops"
              style={{
                color: type === "Webops" ? "#000" : "#fff",
              }}
              onClick={handleClick}
            >
              Webops
            </button>
            <span
              id="marker"
              style={{
                top: marker.top,
              }}
            >
              <span></span>
              <span></span>
            </span>
          </div>
          <div className="CardBox">
            {Profiles.map((profile) => {
              return <Card type={type} profile={profile} />;
            })}
          </div>
        </div>
      </div>
      <Footer
        designed={[
          {
            name: "Rohit",
            mail: "cs19b038@smail.iitm.ac.in",
          },
        ]}
      />
    </CustomBox>
  );
};

export default Team;
