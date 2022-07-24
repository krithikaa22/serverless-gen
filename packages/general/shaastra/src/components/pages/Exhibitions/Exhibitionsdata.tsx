import EXHB1 from "../../../images/Exhibitions/exhb_1.png";
import EXHB3 from "../../../images/Exhibitions/exhb_3.png";
import EXHB4 from "../../../images/Exhibitions/exhb_4.png";
import EXHB5 from "../../../images/Exhibitions/exhb_5.png";
import EXHB6 from "../../../images/Exhibitions/exhb_6.png";
import EXHB7 from "../../../images/Exhibitions/exhb_7.png";
import EXHB8 from "../../../images/Exhibitions/exhb_8.png";
import EXHB9 from "../../../images/Exhibitions/exhb_9.png";
import EXHB10 from "../../../images/Exhibitions/exhb_10.png";
import EXHB11 from "../../../images/Exhibitions/exhb_11.png";
import EXHB12 from "../../../images/Exhibitions/exhb_12.png";
import EXHB13 from "../../../images/Exhibitions/exhb_13.png";
import EXHB14 from "../../../images/Exhibitions/exhb_14.jpg";
import EXHB15 from "../../../images/Exhibitions/exhb_15.jpg";
import EXHB16 from "../../../images/Exhibitions/exhb_16.jpg";
import EXHB17 from "../../../images/Exhibitions/exhb_17.png";

export const CauroselImages = [EXHB3, EXHB4, EXHB9, EXHB10, EXHB11, EXHB12];

export const Titlevariants = {
  lhidden: {
    x: "-100vw"
  },
  final: {
    x: 0,
    transition: {
      duration: "1",
    }
  },

}

export const AboutusVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: "2",
      delay: 1
    }
  }

}

export const AboutusData = `Shaastra Exhibitions is a platform to showcase cutting Edge technology.
Exhibitions provide an opportunity for a large number of buyers and sellers in an industry to interact with
each other.
They are responsible for conveying the ideas of the participants from a 
 technologically practical perspective and as well as give the audience a 
 glimpse into the  latest developments in technology
 They offer an unparalleled and ideal opportunity to showcase innovative products to a broad
spectrum of people.`;

interface exhibitions {
  id: string,
  year: string,
  title: string,
  description?: string,
  image: string
}

export const currentexhibitions: exhibitions[] = [
  {
    id: "10",
    year: "13-01-22, 9 AM - 10 AM",
    title: "Sirena Technologies",
    description: `Sirena Technologies is making new strides in robotics. They have built the first Indian Humanoid Robot ‘Nino’, Nino-T a life size humanoid and have introduced SKIP (Sirena Knowledge and Information Program) for schools, which is crafted to enable students to learn cutting-edge trending technologies which include Humanoids, Artificial Intelligence, Internet of Things, Voice Recognition, Computer Vision, Mechatronics, 3D printing, Android programming and more.`,
    image: EXHB15
  },
  {
    id: "9",
    year: "14-01-22,  9 AM - 10 AM",
    title: "Yaskawa Robotics",
    description: "Yaskawa Robotics is one of the top 10 leading robotics companies in the world.Yaskawa Motoman delivers high-quality industrial robots and fully-integrated robotic automation systems that enable various industries to attain higher standards.Yaskawa takes industrial automation to new levels through robotics. Their Motoman brand of robotic arms, part positioners, and easy-to-program controllers automate applications that were not thought possible a short time ago. ",
    image: EXHB16
  },
  {
    id: "8",
    year: "14-01-22, 10 AM - 11 AM",
    title: "Devic Earth",
    description: "Devic Earth, a green-tech startup, had developed technology to clear pollutants using pulsed radio frequency energy. Pure Skies is the device developed by Devic Earth that aids in air purification. Devic Earth has delivered 150 million+ square feet of clean air so far. Devic Earth is working hard to ensure that its products exceed worldwide standards for product safety, fire and corrosion resistance, and IT security.  ",
    image: EXHB17
  },
  {
    id: "7",
    year: "15-01-22, 10 AM - 11 AM",
    title: "Ather Energy",
    description: `Ather Energy has changed the way India looks at electric vehicles. It is a pioneer in developing innovative and connected electric scooters. Their ingenious products and services are an amalgamation of clean design and engineering.The automobile industry is in the midst of a huge technological disruption.In parallel, the world around us is getting connected, enabling integration of devices and making our life experiences seamless.`,
    image: EXHB14
  },
];



export const exhibitions: exhibitions[] = [
  {
    id: "1",
    year: "2016",
    title: "Vintage Car Exhibition",
    description: `In collaboration with the Madras Heritage Motoring Club,
       We Presented  a vintage car exhibition. Some automobiles such as, Austin 8, 1952 Topolino, which
       brought about revolution in the industry was presented. `,
    image: EXHB1
  },
  {
    id: "2",
    year: "2017",
    title: " NAO: Autonomous humanoid Robot",
    description: `Manav: India’s first 3D printed humanoid robot which was developed by 
      Diwakar Vaish of A-SET training institutes.`,
    image: EXHB10
  },
  {
    id: "3",
    year: "2018",
    title: "Defence and Aerospace models from ISRO",
    description: "ISRO - GSLV and PSLV models were exhibited at Shaastra Exhibitions.",
    image: EXHB5
  },
  {
    id: "4",
    year: "2018",
    title: "Bike Expo",
    description: "Shaastra 2018 unveiled the spectacular technological advancements in motorcycle history with its Bike Expo.",
    image: EXHB8
  },
  {
    id: "5",
    year: "2019",
    title: "International Expo",
    description: `Shaastra for the first time ever, presents International Exhibitions, in association with the US Consulate General of Chennai. 
      The International Exhibits was on three broad perspectives – Academics, Research and Business. `,
    image: EXHB7
  },
  {
    id: "6",
    year: "2020",
    title: "Defence Expo",
    description: `The Defence Expo was an exhibition of the products of nascent defence technology start-ups,established
      manufacturers,Defence PSUs and the Indian Armed Forces.It was conducted over the course of the 4 days of Shaastra 2020.
      The Expo provided exposure to Defence Technology for the audience.`,
    image: EXHB6
  }
];


