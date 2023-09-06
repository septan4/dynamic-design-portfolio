import Layout from '../components/layouts/article'
import {
  Container,
  SimpleGrid,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import P from '../components/paragraph'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'
import CONTACT1 from '../public/images/contact1.png'
import Section from '../components/section'
const Contact = () => {
  const form = useRef()
  const [statusMessage, setStatusMessage] = useState('')
  const { register } = useForm()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_i13kbhb',
        'template_sj61kxs',
        form.current,
        'MAFHVZArZ4gDNCRcN'
      )
      .then(
        result => {
          console.log(result.text)
          setStatusMessage('Message sent successfully!')
          setTimeout(() => setStatusMessage(''), 5000)
        },
        error => {
          console.error('Failed to send the message', error.text)
          setStatusMessage('Failed to send the message. Please try again.')
          setTimeout(() => setStatusMessage(''), 5000)
        }
      )
  }
  return (
    <Layout title="Contact">
      <Container
        maxW={{ base: 'container.md', xl: 'container.lg' }}
        pt={{ base: '100px', lg: '150px' }}
        pb="50px"
      >
        <Section delay={0.1}>
          <SimpleGrid columns={[1, 2, 2]} gap={[1, 1, 5]}>
            <Box w="100%" justifyContent="center" align="center" my="auto">
              <Image src={CONTACT1} alt="contact" width={244} height={244} />
            </Box>

            <form ref={form} onSubmit={sendEmail}>
              <SimpleGrid
                columns={[1, 1, 1]}
                gap={6}
                mt={{ base: '10', md: '4' }}
              >
                <FormControl isRequired>
                  <FormLabel
                    requiredIndicator={
                      <span style={{ color: '#8121b5' }}> * </span>
                    }
                  >
                    Your Name
                  </FormLabel>
                  <Input
                    {...register('name')}
                    name="name"
                    borderRadius="xl"
                    borderColor="#2d2d2d"
                    _focus={{
                      outline: 'none'
                    }}
                    _hover="none"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel
                    requiredIndicator={
                      <span style={{ color: '#8121b5' }}> * </span>
                    }
                  >
                    Email
                  </FormLabel>
                  <Input
                    {...register('email')}
                    type="email"
                    name="email"
                    borderRadius="xl"
                    borderColor="#2d2d2d"
                    _focus={{
                      outline: 'none'
                    }}
                    _hover="none"
                  />
                </FormControl>
              </SimpleGrid>
              <SimpleGrid columns={[1, 1, 1]} mt={4}>
                <FormControl isRequired>
                  <FormLabel
                    requiredIndicator={
                      <span style={{ color: '#8121b5' }}> * </span>
                    }
                  >
                    Message
                  </FormLabel>
                  <Textarea
                    {...register('message')}
                    name="message"
                    borderRadius="xl"
                    borderColor="#2d2d2d"
                    _focus={{
                      outline: 'none'
                    }}
                    _hover="none"
                  />
                </FormControl>
                <Box my={5} align="center">
                  <Button
                    w="100%"
                    type="submit"
                    bg="#009379"
                    color="#ffffff"
                    variant="solid"
                    leftIcon={<EmailIcon />}
                    _hover={{
                      color: '#000',
                      border: '1px solid',
                      bg: 'none',
                      borderColor: 'black'
                    }}
                  >
                    Send
                  </Button>
                </Box>
                <P
                  color={
                    statusMessage.startsWith('Failed') ? 'red.500' : 'green.500'
                  }
                >
                  {statusMessage}
                </P>
              </SimpleGrid>
            </form>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}
export default Contact
