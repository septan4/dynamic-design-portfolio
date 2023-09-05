import { Container, Box, Text } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'

import { GraphQLClient, gql } from 'graphql-request'

import '@fontsource-variable/exo'

const graphcms = new GraphQLClient(
  'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/claqq4p316h2701td8f7c3fu2/master'
)

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      categury
      subTitle
      text {
        text
      }
      content {
        html
      }
      slug
      titleColor {
        hex
      }
      textColor {
        hex
      }
      backgroundColor {
        hex
      }
    }
  }
`

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`

export async function getStaticProps({ params }) {
  const slug = params.slug
  const data = await graphcms.request(QUERY, { slug })
  const post = data.post

  return {
    props: {
      post
    },
    revalidate: 1
  }
}

// Add this function
export async function getStaticPaths() {
  const data = await graphcms.request(SLUGLIST)
  const paths = data.posts.map(post => ({
    params: { slug: post.slug }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

const Work = ({ post }) => {
  const handleContextMenu = e => {
    e.preventDefault()
  }
  return (
    <Layout title={post.title}>
      <Container
        maxW="container.md"
        pt={{ base: '100px', md: '150px' }}
        pb="50px"
        onContextMenu={handleContextMenu}
        draggable="false"
      >
        <Box fontFamily="Exo Variable, sans-serif">
          <Box
            ml={{ base: 'none', md: '65px' }}
            width={{ base: 'none', md: '80%' }}
          >
            <Text
              fontSize={{ base: '32px', md: '42px', lg: '50px' }}
              fontWeight="700"
            >
              {' '}
              {post.title}{' '}
            </Text>
            <Text mt="34px" textColor="#000" fontSize="16px">
              {' '}
              {post.categury}{' '}
            </Text>
            <Text mt="23px" fontSize={{ base: '18px ', md: '24px' }}>
              {' '}
              {post.text.text}{' '}
            </Text>{' '}
          </Box>
          <Box
            dangerouslySetInnerHTML={{ __html: post.content.html }}
            mt={{ base: '45px', md: '90px' }}
          ></Box>
        </Box>
      </Container>
    </Layout>
  )
}

export default Work
