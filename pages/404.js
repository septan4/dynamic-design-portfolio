import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'
import Image from 'next/image'
import notfound from '../public/images/notfound.png'
import '@fontsource-variable/exo'

const NotFound = () => {
  const handleContextMenu = e => {
    e.preventDefault()
  }
  return (
    <Container pt="150px" align="center">
      <Image
        src={notfound}
        width={244}
        height={244}
        alt="/"
        onContextMenu={handleContextMenu}
        draggable="false"
      />
      <Text
        mt="20px"
        fontWeight="400"
        fontSize={['20px', '32px']}
        color="#2D2D2D"
      >
        OooopsS...
      </Text>
      <Text
        fontWeight="400"
        fontSize={['16px', '20px']}
        fontFamily="Exo Variable, sans-serif"
        color="#2D2D2D"
        mt="10px"
      >
        The page you&apos;re looking for was not found.
      </Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <Button as={NextLink} href="/" colorScheme="teal">
          Return to home
        </Button>
      </Box>
    </Container>
  )
}

export default NotFound
