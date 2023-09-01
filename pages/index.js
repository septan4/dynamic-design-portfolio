import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  Flex, // Import Flex
  Text
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import '@fontsource-variable/exo'

import HI from '../public/images/hi.png'

import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container maxW="container.xl" h="100vh">
      <Box // Use Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        h="100%"
      >
        <Section delay={0.1}>
          <Box display="flex" alignItems="end">
            <Image
              src={HI}
              width={116}
              height={116}
              alt="Picture of the author"
            />
            <Heading as="h2" variant="page-title" ml={-10}>
              I&apos;m Zara
            </Heading>
          </Box>
          <Text
            color="#2D2D2D"
            fontSize="82px"
            fontWeight={700}
            fontFamily="Exo Variable, sans-serif"
          >
            Product Designer
          </Text>
          <Text
            align="center"
            fontSize="16px"
            fontWeight={600}
            fontFamily="Exo Variable, sans-serif"
          >
            I&apos;m a UX/UI & Product Designer with +3 years experience. Based
            in Istanbul. Conceptualizing and crafting digital products, helping
            businesses and startups expand their capacity for impact 🚀.
          </Text>
        </Section>
      </Box>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
