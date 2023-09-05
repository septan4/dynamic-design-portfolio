import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
  // const handleContextMenu = e => {
  //   e.preventDefault()
  // }
  return (
    <Box
      as="main"
      pb={8} /*onContextMenu={handleContextMenu} draggable="false"*/
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Zara's homepage" />
        <meta name="author" content="Sepehr Tanhaei" />
        <meta name="author" content="Septan" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

        <meta name="twitter:title" content="Zara" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Sourenalz" />
        <meta name="twitter:creator" content="@Sourenalz" />

        <meta property="og:site_name" content="Zara Yousef" />
        <meta name="og:title" content="Zara Yousef" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.sourenalalehzari.com/hi.png"
        />
        <title>Zara Yousef - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="100%">
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
