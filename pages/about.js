import {
  Container,
  Heading,
  SimpleGrid,
  Text,
  Box,
  Button,
  TagLeftIcon,
  useMediaQuery
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { AiOutlineDownload } from 'react-icons/ai'
import '@fontsource-variable/exo'

import PROBLEM from '../public/images/problem.png'
import ROADMAP from '../public/images/roadmap1.png'
import ROADMAP1 from '../public/images/roadmap.png'

import Image from 'next/image'

const About = () => {
  const handleContextMenu = e => {
    e.preventDefault()
  }

  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
  const [isSmallerThan768] = useMediaQuery('(max-width: 767px)')
  return (
    <Layout title="About" onContextMenu={handleContextMenu} draggable="false">
      <Container pt="120px" maxW="container.xl">
        <Section delay={0.1}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <Box fontFamily="Exo Variable, sans-serif" color="#2d2d2d">
              <Text fontSize="16px" fontWeight="600" textTransform="capitalize">
                Nice to have you here!{' '}
              </Text>
              <Text
                fontSize={{ base: '20px', md: '25px', lg: '32px' }}
                fontWeight="600"
              >
                I’m zara
                <br /> an UI/UX designer based in{' '}
              </Text>
              <Text
                fontSize="16px"
                fontWeight="600"
                textTransform="capitalize"
                mt="10px"
              >
                📍Istanbul.{' '}
              </Text>
              <Text fontSize="16px" mt="32px">
                I switched careers — from creating site-specific installations
                for an art experience to designing delightful practical
                solutions for people’s needs. I found my place in UX design
                where I can use my mathematical thinking and creative powers,
                towards tangible and useful products, something I felt was
                missing in my art practice.{' '}
              </Text>
              <Text fontSize="16px" mt="16px">
                and useful products, something I felt was missing in my art
                practice. Art as experience & User experience design. I see both
                art and UX design as problem solving that inevitably involves
                problem defining — diving deep into research, listening with
                empathy, synthesizing findings and uncovering patterns. I found
                out that I love communicating complex issues into concise bits,
                iterating on ideas and fleshing out visual designs.{' '}
              </Text>
            </Box>
            <Box
              align="center"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              {isLargerThan768 && (
                <Image
                  src={PROBLEM}
                  width="244"
                  height="244"
                  onContextMenu={handleContextMenu}
                  draggable="false"
                />
              )}
              <Text fontSize="16px" fontWeight="600" textTransform="capitalize">
                Want a copy of my resume?{' '}
              </Text>
              <Button
                mt="16px"
                width="190px"
                height="64px"
                px="38px"
                py="16px"
                bg="#009379"
                color="#ffffff"
                variant="solid"
                borderRadius="20px"
                _hover={{
                  color: '#000',
                  border: '1px solid',
                  bg: 'none',
                  borderColor: 'black'
                }}
              >
                <TagLeftIcon boxSize="32px" as={AiOutlineDownload} /> Download
              </Button>
            </Box>
          </SimpleGrid>
          {isLargerThan768 && (
            <Box h="max-content" w="100%" bg="white" py="10" mt="50">
              <Text
                fontWeight="600"
                align="center"
                fontFamily="Exo Variable, sans-serif"
                color="#2d2d2d"
                fontSize="32px"
                mb="40px"
              >
                My work Roadmap
              </Text>

              <Image
                src={ROADMAP}
                alt="roadmap"
                onContextMenu={handleContextMenu}
                draggable="false"
              />
            </Box>
          )}
          {isSmallerThan768 && (
            <Box h="max-content" w="100%" py="10" mt="50">
              <Text
                fontWeight="600"
                align="center"
                fontFamily="Exo Variable, sans-serif"
                color="#2d2d2d"
                fontSize="32px"
                mb="40px"
              >
                My work Roadmap
              </Text>

              <Image
                src={ROADMAP1}
                alt="roadmap"
                onContextMenu={handleContextMenu}
                draggable="false"
              />
            </Box>
          )}
        </Section>
      </Container>
    </Layout>
  )
}
export default About
export { getServerSideProps } from '../components/chakra'
