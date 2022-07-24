import React from 'react'
import {
  Text,
  Stack,
  Center,
  Box,
  Heading,
  Image,
  SimpleGrid,
} from '@chakra-ui/react'
import CustomBox from '../../shared/CustomBox'
import Footer from '../../shared/Footer'
import CardForWorkShop from './CardForWorksShop';
import { useColorModeValue } from '@chakra-ui/color-mode'

function Workshops() {
  return (
    <CustomBox>
      <Box h='100vh'>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 8 }}
          py={{ base: 20, md: 20 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            Explore{' '}
            <Text as={'span'} color={'orange.400'}>
              Workshops
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
            Have to add Workshops content
          </Text>
        </Stack>
      </Box>
      <Footer
        designed={[{ name: 'Drishti', mail: 'me19b100@smail.iitm.ac.in' }]}
      />
    </CustomBox>
  )
}

export default Workshops
