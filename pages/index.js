import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Center,
  Text
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import '@fontsource-variable/exo'

import HI from '../public/images/hi.png'
import WORKS from '../public/images/work.png'
import BIO from '../public/images/bio.png'
import RESUME from '../public/images/resume.png'
import CONTACT from '../public/images/contact.png'

import Image from 'next/image'

const Home = () => {
  const handleContextMenu = e => {
    e.preventDefault()
  }
  return (
    <Layout>
      <Container maxW="container.xl" h={['832px', '900px']} pt={[20, 0]}>
        <Center h="100%">
          <Section delay={0.1}>
            <Box display="flex" alignItems="center" flexDirection="column">
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'start'}
              >
                <Box display="flex" alignItems="end">
                  <Image
                    src={HI}
                    width={116}
                    height={116}
                    alt="Picture of the author"
                    onContextMenu={handleContextMenu}
                    draggable="false"
                  />
                  <Heading as="h2" variant="page-title" ml={-10}>
                    I&apos;m Zara
                  </Heading>
                </Box>
                <Text
                  color="#2D2D2D"
                  fontSize={['36px', '60px', '82px']}
                  fontWeight={700}
                  fontFamily="Exo Variable, sans-serif"
                >
                  Product Designer
                </Text>
              </Box>
              <Text
                align="center"
                fontSize={['13px', '16px']}
                fontWeight={600}
                fontFamily="Exo Variable, sans-serif"
                maxW="container.sm"
                lineHeight="140%"
                color="#2D2D2D"
                textTransform="capitalize"
                tex
              >
                I&apos;m a UX/UI & Product Designer with +3 years experience.
                Based in Istanbul. conceptualizing and crafting digital
                products, helping businesses and startups expand their capacity
                for impact 🚀.
              </Text>
              <SimpleGrid
                columns={[2, 2, 4]}
                gap={['50px', '70px', '114px']}
                pt="50px"
              >
                <Section>
                  <Link
                    onContextMenu={handleContextMenu}
                    draggable="false"
                    as={NextLink}
                    href="/works"
                    passHref
                    scroll={false}
                    _hover={{ textDecoration: 'none', opacity: '0.4' }}
                  >
                    <Box w="110px" h="110px">
                      <Image
                        src={WORKS}
                        width={100}
                        height={100}
                        alt="Works"
                        onContextMenu={handleContextMenu}
                        draggable="false"
                      />
                    </Box>
                    <Box
                      align="center"
                      fontSize={['20px', '24px']}
                      color="#1C1919"
                      fontFamily="Exo Variable, sans-serif"
                      fontWeight="600"
                      fontStyle="normal"
                      mt="20px"
                    >
                      Works
                    </Box>
                  </Link>
                </Section>

                <Section delay={0.5}>
                  <Link
                    as={NextLink}
                    href="/resume"
                    passHref
                    scroll={false}
                    _hover={{ textDecoration: 'none', opacity: '0.5' }}
                    onContextMenu={handleContextMenu}
                    draggable="false"
                  >
                    <Box w="110px" h="110px">
                      <Image
                        src={RESUME}
                        width={100}
                        height={100}
                        alt="Resume"
                        onContextMenu={handleContextMenu}
                        draggable="false"
                      />
                    </Box>
                    <Box
                      align="center"
                      fontSize={['20px', '24px']}
                      color="#1C1919"
                      fontFamily="Exo Variable, sans-serif"
                      fontWeight="600"
                      fontStyle="normal"
                      mt="20px"
                    >
                      Resume
                    </Box>
                  </Link>
                </Section>

                <Section delay={1}>
                  <Link
                    as={NextLink}
                    href="/about"
                    passHref
                    scroll={false}
                    _hover={{ textDecoration: 'none', opacity: '0.4' }}
                    onContextMenu={handleContextMenu}
                    draggable="false"
                  >
                    <Box w="110px" h="110px">
                      <Image
                        src={BIO}
                        width={100}
                        height={100}
                        alt="Bio"
                        onContextMenu={handleContextMenu}
                        draggable="false"
                      />
                    </Box>
                    <Box
                      align="center"
                      fontSize={['20px', '24px']}
                      color="#1C1919"
                      fontFamily="Exo Variable, sans-serif"
                      fontWeight="600"
                      fontStyle="normal"
                      mt="20px"
                    >
                      Bio
                    </Box>
                  </Link>
                </Section>
                <Section delay={1.5}>
                  <Link
                    as={NextLink}
                    href="/contact"
                    passHref
                    scroll={false}
                    _hover={{ textDecoration: 'none', opacity: '0.4' }}
                    onContextMenu={handleContextMenu}
                    draggable="false"
                  >
                    <Box w="110px" h="110px">
                      <Image
                        src={CONTACT}
                        width={100}
                        height={100}
                        alt="Contact"
                        onContextMenu={handleContextMenu}
                        draggable="false"
                      />
                    </Box>
                    <Box
                      align="center"
                      fontSize={['20px', '24px']}
                      color="#1C1919"
                      fontFamily="Exo Variable, sans-serif"
                      fontWeight="600"
                      fontStyle="normal"
                      mt="20px"
                    >
                      Contact
                    </Box>
                  </Link>
                </Section>
              </SimpleGrid>
            </Box>
          </Section>
        </Center>
      </Container>
    </Layout>
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
