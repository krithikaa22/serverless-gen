import React from "react";
import {
  GetEventQuery,
  RegisterMutation,
  useComboOfferMutation,
  useComboupdateEventPayMutation,
  useMeQuery,
  useRegisterMutation,
  useUpdateEventPayMutation,
} from "../../../generated/graphql";
import dotenv from "dotenv";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  Textarea,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import tshirt1 from '../../../images/EventsWorkshops/tshirt1.jpeg';
import tshirt2 from '../../../images/EventsWorkshops/tshirt2.jpeg';
import tshirt3 from '../../../images/EventsWorkshops/tshirt3.jpeg';
dotenv.config();

interface Probs {
  isAdmin: Boolean;
  combo : string
}

function loadScript(src: string) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const MayhemCombo = ({  isAdmin , combo }: Probs) => {
    const font = useColorModeValue("black", "white")
    const [address, setAddress] = React.useState("");
    const [size,setSize] = React.useState("");
    const [w1 , setW1] = React.useState("");
    const [w2 , setW2] = React.useState("");
    const [selectedTshirt, setSelectedTshirt] = React.useState("");
    const [city , setCity] = React.useState("");
    const [state , setState] = React.useState("");
    const [pincode , setPincode] = React.useState("");
    const tag = useColorModeValue('green.50', 'green.900');
    const SelectedTshirt = (e) => {
        let value = e.target.name;
        setSelectedTshirt(value);
    }
    const [err , setError] = React.useState(false);
    const [referral , setReferral] = React.useState("");
  const history = useHistory();
  var { isOpen, onOpen, onClose } = useDisclosure();

  const [register, { data: data1, error, loading }] = useComboOfferMutation({
    /******** On create order completion, open Razorpay ********/
    async onCompleted(data) {
      if (data.ComboOffer) {
        await loadRazorpay(data.ComboOffer.eventPay!);
      }
    },
  });

  /******** Mutation Hook ********/
  const [
    updateEventPayMutation,
    {
      data: updateEventPayData,
      loading: updateEventPayLoading,
      error: updateEventPayError,
    },
  ] = useComboupdateEventPayMutation();

  const loadRazorpay = async (
    data: any
  ) => {
    /******** Load Razorpay Script ********/
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load");
      return;
    }

    /******** Razorpay Options ********/
    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY,
      amount: data?.amount,
      currency: "INR",
      name: combo ,
      image: "", //TODO: Add the shaastra link here
      order_id: data?.orderId,

      /******** Handler function to update the payment details ********/
      handler: async function (response: any) {
        try {
          await updateEventPayMutation({
            variables: {
              referral,
              data: {
                orderId: response.razorpay_order_id,
                payementId: response.razorpay_payment_id,
                paymentSignature: response.razorpay_signature,
              },
            },
          });
        } catch (e) {
          console.log(e);
        }
      },
      prefill: {
        name: data?.user.name,
        email: data?.user.email,
        contact: data?.user.mobile,
      },
      notes: {
        address: data?.user.address,
      },
      theme: {
        color: "#3399cc",
      },
    };

    /******** Open Razorpay ********/
    const rzp1 = new (window as any).Razorpay(options);
    rzp1.open();
  };

  /******** Register Handler ********/
  const registerHandler = async () => {
    try {
      /******** Create OrderID ********/
      if(!address || !city || !state || !size || !selectedTshirt || !w1 || !w2){
          setError(true)
      }else{
        await register({
            variables : {
                combo,
                referral,
                TShirtsDetails : {
                    address,
                    city ,
                    pincode ,
                    state ,
                    size ,
                    shirt : selectedTshirt
                  },
                  workshopsIDs : [w1,w2]
            }
          });
      }
      
    } catch (e) {
      console.log(e);
    }
  };

  if (updateEventPayData?.ComboupdateEventPay) {
    const onClose = () => {
      window.location.reload();
    };
    
    return (
      <Modal isOpen={true} onClose={() => window.location.reload()}>
        <ModalOverlay />
        <ModalContent backgroundColor="#addfd0" color="black">
          <ModalHeader>Registered Successfully</ModalHeader>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    );
  }
  if (updateEventPayError || error) {
    error
      ? (onClose = () => {
          if (error.message === "Please login to continue") {
            history.push("/login");
          }
          window.location.reload();
        })
      : (onClose = () => {
          window.location.reload();
        });
    return (
      <Modal isOpen={true} onClose={onClose}>
        <ModalOverlay />
        <ModalContent backgroundColor="#f1aaaa" color="black">
          <ModalHeader>
             {updateEventPayError?.message} {error?.message}
          </ModalHeader>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    );
  }
  if (err)
  return (
    <Modal isOpen={true} onClose={() => window.location.reload()}>
      <ModalOverlay />
      <ModalContent backgroundColor="#f1aaaa" color="black">
        <ModalHeader>
         Please fill all the details
        </ModalHeader>
        <ModalCloseButton />
      </ModalContent>
    </Modal>
  );

  if (loading || updateEventPayLoading)
    return (
      <Modal isOpen={true} onClose={() => window.location.reload()}>
        <ModalOverlay />
        <ModalContent backgroundColor="#addfd0" color="black">
          <ModalHeader>
            Don't refresh or close until you get a successfull message.
            Loading...
          </ModalHeader>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    );
   
    
  return (
    <div>
      {!isAdmin &&
         (
            <Flex width={'100%'} justifyContent={'center'}>
            <Flex flexDirection={'column'} width={'100%'} justifyContent={'center'} alignItems={'center'} border={`1px ${font} dashed`} borderRadius={'10px'}>
                <Heading m={2} p={2}></Heading>
                <Text
                        fontSize={'lg'}
                        fontWeight={500}
                        bg={tag}
                        p={2}
                        px={3}
                        rounded={'full'}>
                        Mayhem Combo
                    </Text>
                <Text paddingTop={'20px'} fontSize={'30px'} fontWeight={800} paddingBottom={'0px'}>Select Any 2 Workshops + T-Shirt</Text>
                <Text paddingTop={'10px'} fontSize={'25px'} fontWeight={600} paddingBottom={'0px'}>At Only Discounted Price &#8377;1049</Text>
                <Text paddingTop={'0px'} fontSize={'20px'} fontWeight={600} paddingBottom={'20px'} textDecorationLine={'line-through'}>&#8377;1350</Text>
                <Flex width={"100%"} flexDirection={['column']} alignItems={'center'}>
               <Input borderRadius={'0px'}  textColor={font} variant='flushed' placeholder='city' value={city} width={["90%"]} onChange={(e)=>{setCity(e.target.value)}}  marginBottom={'20px'} className="specialinput" />
                <Input borderRadius={'0px'}  textColor={font} variant='flushed' placeholder='State' value={state} width={["90%"]} onChange={(e)=>{setState(e.target.value)}}  marginBottom={'20px'} className="specialinput" />
                <Input borderRadius={'0px'}  textColor={font} variant='flushed' placeholder='pincode' value={pincode} width={["90%"]} onChange={(e)=>{setPincode(e.target.value)}}  marginBottom={'20px'} className="specialinput" />
                <Input width={"90%"} borderRadius={'0px'} variant='flushed' textColor={font} placeholder='Enter Your Address Here' value={address} onChange={(e)=>{setAddress(e.target.value)}} className="specialinput" marginBottom={'20px'} />
                </Flex>
                 <Flex justifyContent={'space-around'} width={'90%'} p={2}>
                    <Box  onClick={SelectedTshirt} p={2} style ={{ border : selectedTshirt === "Forever T-shirt"  ? "2px solid blue" : "black"}} >
                        <Image src={tshirt1} alt="tshirt1" value="Forever T-shirt" name="Forever T-shirt" width={'170px'} borderRadius={'10px'} marginBottom={'10px'}></Image>
                    </Box>
                    <Box  onClick={SelectedTshirt} p={2} style ={{ border : selectedTshirt === "DogeCoin T-shirt"  ? "2px solid blue" : "black"}}>
                        <Image src={tshirt2} alt="tshirt2" value="DogeCoin T-shirt" name="DogeCoin T-shirt" width={'170px'} borderRadius={'10px'} marginBottom={'10px'}></Image>
                    </Box>
                    <Box  onClick={SelectedTshirt} p={2} style ={{ border : selectedTshirt === "Future T-shirt" ? "2px solid blue" : "black"}}>
                        <Image src={tshirt3} alt="tshirt3" value="Future T-shirt" name="Future T-shirt" width={'170px'} borderRadius={'10px'} marginBottom={'10px'}></Image>
                    </Box>
                   
                </Flex>
                <Flex textAlign={"left"} width={"90%"}>
                <Text p={2} m={2}>*Click on the tshirt</Text>
                </Flex>
                
                <Flex width={'93%'} justifyContent={'center'}>
                    <Select placeholder='Select T-Shirt Size' value={size} onChange={(e)=> setSize(e.target.value)} marginBottom={'20px'}>
                        <option value='XS'>XS</option>
                        <option value='S'>S</option>
                        <option value='M'>M</option>
                        <option value='L'>L</option>
                        <option value='XL'>XL</option>
                        <option value='XXl'>XXL</option>
                    </Select>
                </Flex>
                <Flex width={'93%'} justifyContent={'center'}>
                    <Select placeholder='Select 1st Course' value={w1} onChange={(e) => setW1(e.target.value)} marginBottom={'20px'}>
                    <option value='ckxf0bz5k003cdbp7edik9klx'>Inverse Kinematics using ROS Moveit</option>
                        <option value='ckxepglch00122bp7gjk52d0i'>Sustainability using Machine Learning and Data Science</option>
                        <option value='ckxf366390043cup7872ocv1y'>Circuit simulation and PCB design</option>
                        <option value='ckxljoxqa00639bp7gu9o1sz9'>Grant Writing Workshop</option>
                        <option value='ckxf1ihnv003ccup7d2bn7a67'>Path Tracking in Autonomous Vehicles</option>
                        <option value='ckxen074m000p1up7bo0q5l17'>A Complete Guide to Machine Learning</option>
                        <option value='ckxezxg8v0030dbp7e8xq13uw'>Build your own Autonomous Robot</option>
                        <option value='ckxexs6fl002fcup7hcrld72v'>Computers can fly now? (Intro to Cloud Computing)</option>
                        <option value='ckxen40g6000q2bp7924y6qrm'>Parallel Processing and Real-Time Operating Systems</option>
                        <option value='ckxf0iexs003gdbp7fyuy0fe6'>Full Stack Web development</option>
                        <option value='ckxekc92m000c1up72t0h4h45'>Zero to Hero in Computer Vision</option>
                        <option value='ckxezt6nt002udbp76oar48e5'>Learn Fusion 360: Design, Animate & Simulate</option>
                        <option value='ckxemw5oi000o2bp77xtg9v0f'>Introduction to Robotics</option>
                        <option value='ckxf22vta003kcup79stiedlw'>Art of Data Visualisation</option>
                        <option value='ckxbr05w00004c9p74mji2rgd'>Introduction to Embedded Systems Programming</option>
                        <option value='ckxekmufd000e1up7dbj361ib'>Understanding the Finite Element Method and its Applications</option>
                        <option value='ckxewph1e001hcup72ls1hrjx'>How to make a Discord Bot from scratch</option>
                        <option value='ckxenjobj000u1up75tsph890'>Introductory Data Science course With Real Life Projects</option>
                        <option value='ckxepp6pj00182bp7h5790jnr'>Introduction to Arduino and IoT</option>
                        <option value='ckxentwt1000w1up7gi013e4e'>Artificial Intelligence and Reinforcement Learning</option>
                        <option value='ckxey7kfz0029dbp70sqbcovb'>Hacking 101 with Microcontrollers</option>
                        <option value='ckxepkbtu00142bp7cjws6894'>Simulation of Mechanisms using MATLAB</option>
                        <option value='ckxevm6oi000gcup70lp17fa1'>Product Management 101</option>
                        <option value='ckxnilxyt000j0bp7d9gp9a7e'>Consult 101</option>
                        <option value='cky6uehup00frfsp7br7sblfn'>Engineering Robotics with Mathworks</option>
                    </Select>
                </Flex>
                <Flex width={'93%'} justifyContent={'center'}>
                    <Select placeholder='Select 2nd Course' value={w2} onChange={(e)=> setW2(e.target.value)} marginBottom={'20px'}>
                    <option value='ckxf0bz5k003cdbp7edik9klx'>Inverse Kinematics using ROS Moveit</option>
                        <option value='ckxepglch00122bp7gjk52d0i'>Sustainability using Machine Learning and Data Science</option>
                        <option value='ckxf366390043cup7872ocv1y'>Circuit simulation and PCB design</option>
                        <option value='ckxljoxqa00639bp7gu9o1sz9'>Grant Writing Workshop</option>
                        <option value='ckxf1ihnv003ccup7d2bn7a67'>Path Tracking in Autonomous Vehicles</option>
                        <option value='ckxen074m000p1up7bo0q5l17'>A Complete Guide to Machine Learning</option>
                        <option value='ckxezxg8v0030dbp7e8xq13uw'>Build your own Autonomous Robot</option>
                        <option value='ckxexs6fl002fcup7hcrld72v'>Computers can fly now? (Intro to Cloud Computing)</option>
                        <option value='ckxen40g6000q2bp7924y6qrm'>Parallel Processing and Real-Time Operating Systems</option>
                        <option value='ckxf0iexs003gdbp7fyuy0fe6'>Full Stack Web development</option>
                        <option value='ckxekc92m000c1up72t0h4h45'>Zero to Hero in Computer Vision</option>
                        <option value='ckxezt6nt002udbp76oar48e5'>Learn Fusion 360: Design, Animate & Simulate</option>
                        <option value='ckxemw5oi000o2bp77xtg9v0f'>Introduction to Robotics</option>
                        <option value='ckxf22vta003kcup79stiedlw'>Art of Data Visualisation</option>
                        <option value='ckxbr05w00004c9p74mji2rgd'>Introduction to Embedded Systems Programming</option>
                        <option value='ckxekmufd000e1up7dbj361ib'>Understanding the Finite Element Method and its Applications</option>
                        <option value='ckxewph1e001hcup72ls1hrjx'>How to make a Discord Bot from scratch</option>
                        <option value='ckxenjobj000u1up75tsph890'>Introductory Data Science course With Real Life Projects</option>
                        <option value='ckxepp6pj00182bp7h5790jnr'>Introduction to Arduino and IoT</option>
                        <option value='ckxentwt1000w1up7gi013e4e'>Artificial Intelligence and Reinforcement Learning</option>
                        <option value='ckxey7kfz0029dbp70sqbcovb'>Hacking 101 with Microcontrollers</option>
                        <option value='ckxepkbtu00142bp7cjws6894'>Simulation of Mechanisms using MATLAB</option>
                        <option value='ckxevm6oi000gcup70lp17fa1'>Product Management 101</option>
                        <option value='ckxnilxyt000j0bp7d9gp9a7e'>Consult 101</option>
                        <option value='cky6uehup00frfsp7br7sblfn'>Engineering Robotics with Mathworks</option>
                    </Select>
                </Flex>
                <Input
                            width={["90%","90%","50%","50%"]}
                            value={referral}
                            mx={[0,0,3,3]}
                            my={[2,2,0,0]}
                            placeholder="Have a Referal Code?"
                            onChange={(e) => setReferral(e.target.value)}
                            type={"text"}
                            borderBottom="2px solid white"
                        />
                <Button
                    mt={10}
                    w={'40%'}
                    marginBottom={'20px'}
                    bg={'#301b1b'}
                    color={'white'}
                    rounded={'xl'}
                    boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                    _hover={{
                        bg: '#543535',
                    }}
                    _focus={{
                        bg: '#543535',
                    }}
                    onClick={registerHandler}
                    >
                    Register Now
                </Button>
            </Flex>
        </Flex>
      
        )}
    </div>
  );
};

export default MayhemCombo;
