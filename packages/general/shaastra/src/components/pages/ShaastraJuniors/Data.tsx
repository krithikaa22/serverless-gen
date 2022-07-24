// import sj from "../../../images/JuniorShaastra/sj.jpg";
import spark from "../../../images/JuniorShaastra/Events/spark.png";
import shaastra_art_challenge from "../../../images/JuniorShaastra/Events/shaastra_art_challenge.png";
import junior_makeathon from "../../../images/JuniorShaastra/Events/jmt.png";
import online_scavenger_hunt from "../../../images/JuniorShaastra/Events/online_scavenger_hunt.jpg";
import brain_squeeze from "../../../images/JuniorShaastra/Events/brain_squeeze.jpg";
import chess_tournament from "../../../images/JuniorShaastra/Events/chess_tournament.jpg";
import an_hour_of_code from "../../../images/JuniorShaastra/Events/an_hour_of_code.jpg";
import reverse_codeing from "../../../images/JuniorShaastra/Events/reverse_codeing.jpg";
import juniors_nights from "../../../images/JuniorShaastra/Events/juniors_nights.png";

import AmarChitraKatha from "../../../images/JuniorShaastra/Sponsers/AmarChitraKatha.png";
import ChessCom from "../../../images/JuniorShaastra/Sponsers/ChessCom.png";
import GFG from "../../../images/JuniorShaastra/Sponsers/GFG.png";
import ScholarshipInIndia from "../../../images/JuniorShaastra/Sponsers/ScholarshipsInIndia.png";
import WowChess from "../../../images/JuniorShaastra/Sponsers/WowChess.png";
import MySoul from "../../../images/JuniorShaastra/Sponsers/MySoul.png";
import D2C from "../../../images/JuniorShaastra/Sponsers/D2C.png";
import TNSTC from "../../../images/JuniorShaastra/Sponsers/TNSTC.jpg";

interface shaastraJunior {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const shaastraJunoirsData: shaastraJunior[] = [
  {
    id: 1,
    title: "Spark",
    description: `Spark is a national platform where students compete with each other across technical quizzes, 
                     case studies and presentations, and in the process improve themselves - all at no charge. Last 
                     year’s edition of the Spark Junior Quiz was conducted in 20 cities and saw a participation of 
                     more than 3000+ students across the nation. From introducing quizzing to students to organising 
                     a coveted nationwide inter school competition, Spark has been growing in multifolds since inception.`,
    image: spark,
  },
  {
    id: 2,
    title: "Shaastra Art Challenge",
    description: `Shaastra represents the Spirit of Engineering and stands with bated breath to hear about 
                     different technological advancements in different fields. But not all of these advancements 
                     are brought to our notice. To change this culture and to become more aware of the progress 
                     that we've made till now, Shaastra organises the "Art of Technology" to encourage children 
                     to draw about technology and it's inner workings.`,
    image: shaastra_art_challenge,
  },
  {
    id: 3,
    title: "Junior Make-a-thon",
    description: `Junior Make-a-thon (JMT) is a one-of-a-kind event which centres around the ideas, 
                     imagination, and innovation skills of high school students.One of the primary aims 
                     of JMT is to promote maker culture among school students, with quality mentorship 
                     and workshops. With the help of our partners, including the IITM Research Park and 
                     IITM Incubation Cell, we encourage students to come up with solutions to problems 
                     persisting in different fields like agriculture, sustainability, healthcare, robotics, 
                     and home comfort.`,
    image: junior_makeathon,
  },
  {
    id: 4,
    title: "BrainSqueeze",
    description: `BrainSqueeze is all about putting your brain into overdrive mode while cracking arduous 
                     puzzles. Students get to experience the bliss of solving mind-bending questions in Brain 
                     Squeeze. An entirely logical event which puts your reasoning and analytical skills to 
                     the test with exceptionally tricky questions.`,
    image: brain_squeeze,
  },
  {
    id: 5,
    title: "Reverse Coding",
    description: `Think you're good at problem solving? Well there are many ways to brag, let’s see which 
                     one you pick. This event looks for the real star that stands up to the ability of 
                     creativity and logic to reverse engineer. So, get ready for the ultimate challenge 
                     of hardcore logic, preceded by a prelims to test your mettle.`,
    image: reverse_codeing,
  },
  {
    id: 6,
    title: "Juniors Nights",
    description: `With everyone stuck at home and all the work being moved on the web, 'Junior Nights' 
                     brings live entertainment at your doorstep. It's a flagship event of Shaastra Juniors 
                     where you can witness brilliant artists perform live from across the globe. Their 
                     mesmerizing and mind-blowing acts will undoubtedly raise your spirits and thoroughly engage you.`,
    image: juniors_nights,
  },
  {
    id: 7,
    title: "An Hour of Code",
    description: `The Hour of Code Event is a one-hour introduction to computer science, designed to demystify 
                     "code", to show that any student can learn the basics, and to broaden participation in the 
                     field of computer science. These coding activities typically lasting about an hour are 
                     developed so as to cater to the level of understanding of middle school students, generally 
                     in block based languages such as scratch.`,
    image: an_hour_of_code,
  },
  {
    id: 8,
    title: "Online Scavenger Hunt",
    description: `An Online Scavenger Hunt where participants must scrape the depths of the internet 
                     to find the answers. The question will be either to find certain tweets or to get a 
                     quote from a book, etc. In an online Scavenger Hunt, the participant must scrape the 
                     internet (such as find certain phrases in a book or title of a webpage or such) to 
                     find certain clues and go on to reach the final point.`,
    image: online_scavenger_hunt,
  },
  {
    id: 9,
    title: "Chess Tournament",
    description: `Shaastra presents the first ever Shaastra Junior Chess Tournament after organising FIDE rated 
                     Shaastra RAPID Chess for 4 consecutive years. SJCT aims to create an environment for 
                     enthusiastic and bright young minds to compete amongst the best for the championship, and 
                     promote the wonderful game during these difficult times.`,
    image: chess_tournament,
  },
];

export const SJSponsData = [
  {
    name: "GreeksforGeeks",
    image: GFG,
    altImage: "GreeksforGeeks",
    url: "https://www.geeksforgeeks.org",
  },
  {
    name: "Amar-Chitra-Katha",
    image: AmarChitraKatha,
    altImage: "Amar-Chitra-Katha",
    url: "https://www.amarchitrakatha.com",
  },
  {
    name: "Chess.com",
    image: ChessCom,
    altImage: "Chess.com",
    url: "https://www.chess.com",
  },
  {
    name: "Scholarship In India",
    image: ScholarshipInIndia,
    altImage: "Scholarships-in-india",
    url: "https://www.scholarshipsinindia.com",
  },
  {
    name: "WOW Chess",
    image: WowChess,
    altImage: "WOW Chess",
    url: "https://www.wowchess.com",
  },
];

export const SJPrevSponsData = [
  {
    name: "MySoul",
    image: MySoul,
    altImage: "my-soul",
    url: "https://mysoul.co.in",
  },
  {
    name: "TNSTC",
    image: TNSTC,
    altImage: "tnstc",
    url: "http://tnstc.gov.in",
  },
  {
    name: "Chess.com",
    image: ChessCom,
    altImage: "Chess.com",
    url: "https://www.chess.com",
  },
  {
    name: "Dare2Compete",
    image: D2C,
    altImage: "d2c",
    url: "https://dare2compete.com",
  },
];
