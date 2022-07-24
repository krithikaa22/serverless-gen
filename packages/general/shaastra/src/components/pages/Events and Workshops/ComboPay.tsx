import React from "react";
import {
  GetEventQuery,
  RegisterMutation,
  useComboOfferMutation,
  useComboupdateEventPayMutation,
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
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
dotenv.config();

interface Probs {
  isAdmin: Boolean;
  combo: string
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

const ComboPay = ({ isAdmin, combo }: Probs) => {
  const history = useHistory();
  var { isOpen, onOpen, onClose } = useDisclosure();
  const [referral , setReferral] = React.useState("");

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
      name: combo,
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
      await register({
        variables: {
          referral,
          combo
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  if (updateEventPayData?.ComboupdateEventPay) {
    const onClose = () => {
      window.location.reload();
    };
    // let referalcode = sessionStorage.getItem("referalcode");
    // let coursename = sessionStorage.getItem("coursename");
    // try {
    //   const Func = async () => {
    //     await axios.post('https://sheet.best/api/sheets/f8d10436-8ee1-42ef-87ab-3e17a9c99d1c', {
    //       referalcode, coursename
    //     }).then((response) => {
    //       sessionStorage.clear();
    //       console.log(response);
    //     }).catch(e => {
    //       console.log(e);
    //     });
    //   }
    //   Func();
    // } catch (error) {
    //   console.log(error);
    // }
    return (
      <Modal isOpen={true} onClose={onClose}>
        <ModalOverlay />
        <ModalContent backgroundColor="#addfd0" color="black">
          <ModalHeader>Registered Successfully</ModalHeader>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    );
  }
  console.log(error)
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
          <Flex
          // marginRight={"2vw"}
          marginTop="5"
          flexDirection={['column']}
          height={[
            "fit-content",
            "fit-content",
            "fit-content",
            "fit-content",
          ]}
        >
            <Input
                            width={["100%","100%","100%","100%"]}
                            value={referral}
                            placeholder="Have a Referal Code?"
                            onChange={(e) => setReferral(e.target.value)}
                            type={"text"}
                            borderBottom="2px solid white"
                        />
            <Button
              mt={5}
              w={'full'}
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
              REGISTER NOW
            </Button>
          </Flex>
        )}
    </div>
  );
};

export default ComboPay;
