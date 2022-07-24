import * as React from "react";
import {
  Stack,
  Box,
  Text,
  Image,
  Tag,
  Heading,
  useColorModeValue,
  Center,

} from "@chakra-ui/react";


const Card = ({ data }) => {

  const Descriptionbg = useColorModeValue("#191e38", "#0E101B");
  const Tagcolor = useColorModeValue("#00d0ff", "#1c72c7");

  return (
    <Box
      maxW={'300px'}
      w={'full'}
      rounded={'md'}
      overflow={'hidden'}
      h={'400px'}
    >
      <Image
        h={'270px'}
        w={'auto'}
        src={data.image}
        p={2}
        objectFit={"cover"}
        rounded="2xl"
        className="card-img"
      />
      <Box p={2} fontSize={"15px"} fontWeight={500}>
        <Stack spacing={1} align={'center'}>
          <Text as={'h3'} className="Tag" p={1}>
            <Tag size="lg" bg={Tagcolor} className="cardtext">{data.year}</Tag>
          </Text>
          <Text className="cardtext"
            style={{
              fontSize: "20px",
              letterSpacing: "1px",
              fontFamily: 'Roboto',
              zIndex: 1
            }} >{data.title}</Text>
          <Box className="overview" bg={Descriptionbg} color="#ffffff" m={2} p={2}>
            <Center flexDirection={'column'} h={Number(data.id) > 6 ? '375px' : '270'}>
              <Heading as={'h3'} mb={"2"} fontSize={"2xl"} >
                {data.title}
              </Heading>
              <Text as={"h4"} p={4} fontSize={'sm'}
              >{data.description}</Text>
            </Center>
          </Box>
        </Stack>

      </Box>
    </Box>

  )
}

export default Card;