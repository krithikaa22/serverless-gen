import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Button, Container, Flex, FormControl, Heading, Input } from '@chakra-ui/react'
import React from 'react'
import { useAddTimingsMutation } from '../../../generated/graphql';


const Timeline = ({id}) =>{
    const [timings, setTimings] = React.useState([{name : "",time : ""}]);
    const [addtimings] = useAddTimingsMutation()
    console.log(id)
    const handleTimingsInput = ({index,event,}: {index: number; event: React.ChangeEvent<HTMLInputElement>;}) => {
        const values = [...timings];
    
        if (event.target.name === "name") {
          values[index]["name"] = event.target.value;
        } else {
          values[index]["time"] = event.target.value;
        }
        setTimings(values);
      };

      const handleAddtimings = async (id) =>{

        timings.map(async(timing) =>{

           await addtimings({
                variables :{
                    id,
                    data : {
                        name :timing.name,
                        time : timing.time ? new Date(timing.time).toISOString() : ""
                    }
                }
            }).then(() => window.location.reload())
            .catch(error => alert(error.message))

        })
      }
    return (
        <Container>
          <Heading>
            Add Timings
          </Heading>
             {timings.map((timing, index) => {
              return (
                <React.Fragment key={index}>
                  <Flex p={2}>
                    <FormControl m={2}>
                      <Input
                        name="name"
                        placeholder={"Round Name"}
                        id={"name" + index}
                        borderBottom="5px solid white"
                        value={timing.name}
                        onChange={(event) => handleTimingsInput({ index, event })}
                      />
                    </FormControl>
                    <FormControl m={2}>
                      <Input
                        name="time"
                        onChange={(event) => handleTimingsInput({ index, event })}
                        id={"time" + index}
                        backgroundColor="transparent"
                        borderBottom="5px solid white"
                        value={timing.time}
                        type={'datetime-local'}
                      />
                    </FormControl>
                    <Flex
                      p={[0, 3]}
                      width={"40px"}
                      flexDirection={["column", "row"]}
                    >
                      {index === 0 ? null : (
                        <Button
                          mx={2}
                          my={1}
                          size={"xs"}
                          onClick={() => {
                            const values = [...timings];
                            values.splice(index, 1);
                            setTimings(values);
                          }}
                        >
                          <MinusIcon />
                        </Button>
                      )}
                      <Button
                        mx={2}
                        my={1}
                        size={"xs"}
                        onClick={() =>
                          setTimings([...timings, { name: "", time: "" }])
                        }
                      >
                        <AddIcon />
                      </Button>
                    </Flex>
                    
                  </Flex>
                </React.Fragment>
              );
            })}
            <Button
                   onClick={() => handleAddtimings(id)}
                   >
                        Add Timings
                    </Button>

        </Container>
    )
}

export default Timeline
