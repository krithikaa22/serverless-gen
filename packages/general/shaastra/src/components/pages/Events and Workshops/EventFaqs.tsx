import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Container, Flex, FormControl, Heading, Input, Text, useColorModeValue } from '@chakra-ui/react';
import React, { useState } from 'react'
import { GetEventDocument, useCreateEventFaqMutation, useDeleteEventFaqMutation, useEditEventFaqMutation } from '../../../generated/graphql';

const EventFaqs = ({event} : any | null) =>{

    const [role, setRole] = useState("");
    React.useEffect(()=>{
        if(localStorage.getItem("role")){
            setRole(localStorage.getItem("role")!)
        }
    })
    const [faqId, setFaqId] = React.useState("");
    const [uquestion, setQuestion] = React.useState("");
    const [uanswer, setAnswer] = React.useState("");

    let faqs = event?.faqs ;

    faqs = faqs.filter((faq)=>{
      if(faq.question.split("field",2).length > 1){
        return false
      }else  return true
    })
    console.log(faqs)
    const [aquestion, setAQuestion] = React.useState("");
    const [aanswer, setAAnswer] = React.useState("");
  
    const [editFaq] = useEditEventFaqMutation();
    const [deleteFaq] = useDeleteEventFaqMutation();
    const [addFaq] = useCreateEventFaqMutation();

    const handleedit = (faqid: string) => {
        editFaq({
          variables: {
            id : faqid,
            data: {
              question: uquestion,
              answer: uanswer,
            },
          },
          refetchQueries: [{ query: GetEventDocument, variables: { EventID: event.id} }],
        }).catch((err) => console.log(err));
        setFaqId("");
        setQuestion("");
        setAnswer("");
      };
  
    const handleUpdateFaq = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.name === "uquestion") {
        setQuestion(event.target.value);
      } else {
        setAnswer(event.target.value);
      }
    };
    const handleAddFaq = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.name === "aquestion") {
        setAQuestion(event.target.value);
      } else {
        setAAnswer(event.target.value);
      }
    };
  
    const handleAdd = () => {
      addFaq({
        variables: {
           id : event.id!,
           data: {
            question: aquestion,
            answer: aanswer,
          },
        },
        refetchQueries: [{ query: GetEventDocument, variables: { EventID: event.id} }],
      }).catch((err) => console.log(err));
      setAQuestion("");
      setAAnswer("");
    };
    console.log(event)
    const textcolor = useColorModeValue("black","white")
    return (
       <React.Fragment>
           {faqs && faqs.length! > 0 ? (
          <Box  width={"100%"}>
            <Center textAlign={"center"}>
              <Heading size={"lg"} m={4} mt="30px" color={textcolor}>
                FREQUENTLY ASKED QUESTIONS
              </Heading>
            </Center>
            {role === "Admin" ? (
              <Flex p={2} flexDirection={["column", "column", "row"]}>
                <FormControl m={2} width={["100%", "100%", "45%"]}>
                  <Input
                    name="aquestion"
                    placeholder={"Question"}
                    value={aquestion}
                    onChange={(event) => handleAddFaq(event)}
                    fontSize={"small"}
                    p={2}
                    borderColor={"#2467a1"}
                  />
                </FormControl>
                <FormControl m={2} width={["100%", "100%", "45%"]}>
                  <Input
                    name="aanswer"
                    placeholder={"Answer"}
                    value={aanswer}
                    onChange={(event) => handleAddFaq(event)}
                    fontSize={"small"}
                    p={2}
                    borderColor={"#2467a1"}
                  />
                </FormControl>
                <Button
                  variant="solid"
                  border="2px solid"
                  borderColor="#2467a1"
                  p={3}
                  m={3}
                  size={"lg"} color={textcolor}
                  onClick={() => handleAdd()}
                >
                  Add FAQ
                </Button>
              </Flex>
            ) : null}

            <Flex flexDirection={"column"}  width={"100%"} color={"black"}>
              {faqs?.map((faq) => {
                return (
                  <Box m={2} key={faq.id}  paddingBottom={10}>
                    <Flex>
                      <Box
                        p={3} shadow="lg"
                        borderTopWidth="2px"
                        borderLeftWidth={"2px"}
                        borderRightWidth={"2px"}
                        width={"100%"}
                        borderTopRadius={"lg"}
                      >
                        <Text fontWeight={"extrabold"} color={'gray.500'} textAlign={"left"}>{faq.question}</Text>
                        {faqId === faq.id ? (
                          <FormControl m={3}>
                            <Input
                              onChange={handleUpdateFaq}
                              name="uquestion"
                              value={uquestion}
                              borderColor={"black"}
                              placeholder="Question"
                              color={"black"}
                            />
                          </FormControl>
                        ) : null}
                      </Box>
                    </Flex>
                    <Flex>
                      <Box
                        p={3}  shadow="lg"
                        borderWidth="2px"
                        borderBottomRadius={"lg"}
                        width={"100%"}
                      >
                        <Text fontWeight={"semibold"} color={'gray.500'} textAlign={"left"}>{faq.answer}</Text>
                        {faqId === faq.id ? (
                          <FormControl m={3}>
                            <Input
                              onChange={(event) => handleUpdateFaq(event)}
                              name="uanswer"
                              value={uanswer}
                              borderColor={"#2467a1"}
                              placeholder="Answer"
                              color={"black"}
                            />
                          </FormControl>
                        ) : null}

                        {faqId === faq.id ? (
                          <Box>
                            <Button
                              color={"#2467a1"}
                              variant="solid"
                              border="2px solid"
                              borderColor="#2467a1"
                              size="sm"
                              p={2}
                              m={2}
                              onClick={() => handleedit(faq.id)}
                              float={"right"}
                            >
                              Edit FAQ
                            </Button>
                          </Box>
                        ) : role === "Admin" ? (
                          <Box>
                            <Button
                              color={"#2467a1"}
                              variant="outline"
                              border="2px solid"
                              borderColor="#2467a1"
                              size="sm"
                              p={2}
                              m={2}
                              onClick={() => {
                                setFaqId(faq.id);
                              }}
                              float={"right"}
                            >
                              <EditIcon m={2} />
                              Edit FAQ
                            </Button>
                            <Button
                              color={"#2467a1"}
                              variant="outline"
                              border="2px solid"
                              borderColor="#2467a1"
                              size="sm"
                              p={2}
                              m={2}
                              onClick={() => {
                                deleteFaq({
                                  variables: {
                                    id : faq.id
                                  },
                                  refetchQueries: [
                                    {
                                      query: GetEventDocument,
                                      variables: { EventID: event.id! },
                                    },
                                  ],
                                });
                              }}
                              float={"right"}
                            >
                              <DeleteIcon m={2} />
                              Delete FAQ
                            </Button>
                          </Box>
                        ) : null}
                      </Box>
                    </Flex>
                  </Box>
                );
              })}
            </Flex>
          </Box>
        ) : (
          <React.Fragment>
            {role === "Admin" ? (
              <Container maxWidth={"5xl"}>
                <Center m={2} p={2}>
                  <Heading>Add FAQs</Heading>
                </Center>
                <Flex>
                  <FormControl m={2} width={"45%"}>
                    <Input
                      name="aquestion"
                      placeholder={"Question"}
                      value={aquestion}
                      onChange={(event) => handleAddFaq(event)}
                      fontSize={"small"}
                      p={2}
                      borderColor={"#2467a1"}
                    />
                  </FormControl>
                  <FormControl m={2} width={"45%"}>
                    <Input
                      name="aanswer"
                      placeholder={"Answer"}
                      value={aanswer}
                      onChange={(event) => handleAddFaq(event)}
                      fontSize={"small"}
                      p={2}
                      borderColor={"#2467a1"}
                    />
                  </FormControl>
                  <Button
                    color={"#2467a1"}
                    variant="solid"
                    border="2px solid"
                    borderColor="#2467a1"
                    size="sm"
                    p={2}
                    m={3}
                    onClick={() => handleAdd()}
                  >
                    Add FAQ
                  </Button>
                </Flex>
              </Container>
            ) : null}
          </React.Fragment>
        )}
       </React.Fragment>
    )
}

export default EventFaqs
