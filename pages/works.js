import React from 'react'
import {
  Container,
  SimpleGrid,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import { GraphQLClient, gql } from 'graphql-request'
import '@fontsource-variable/exo'
const graphcms = new GraphQLClient(
  'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/claqq4p316h2701td8f7c3fu2/master'
)

const QUERY = gql`
  {
    posts {
      categury
      title
      coverPhoto {
        id
        url
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
      subTitle
      text {
        text
      }
    }
  }
`

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY)
  return {
    props: {
      posts
    },
    revalidate: 10
  }
}

export const getRecentPost = async () => {
  const result = await graphcms.request(QUERY)
  return result.posts
}

const Works = ({ posts }) => {
  const [tabIndex, setTabIndex] = React.useState(0)

  const handleTabsChange = index => {
    setTabIndex(index)
  }

  return (
    <Layout title="Works">
      <Container pt="150px" maxW="container.xl" align="center">
        <Tabs
          index={tabIndex}
          onChange={handleTabsChange}
          variant="unstyled"
          isLazy
        >
          <TabList
            display="flex"
            flexDirection="row"
            justifyContent="space-evenly"
            fontFamily="Exo Variable, sans-serif"
          >
            <Tab
              fontSize={{ base: '13px', md: '20px', lg: '32px' }}
              _selected={{ fontWeight: '600', color: '#2d2d2d' }}
              color="#C2C2C2"
            >
              Case Study{' '}
            </Tab>
            <Tab
              fontSize={{ base: '13px', md: '20px', lg: '32px' }}
              _selected={{ fontWeight: '600', color: '#2d2d2d' }}
              color="#C2C2C2"
            >
              Branding & Visual
            </Tab>
            <Tab
              fontSize={{ base: '13px', md: '20px', lg: '32px' }}
              _selected={{ fontWeight: '600', color: '#2d2d2d' }}
              color="#C2C2C2"
            >
              Hobbies
            </Tab>
          </TabList>
          <TabPanels mt={{ base: ' 18px', md: '65px' }}>
            <TabPanel>
              {' '}
              <Section delay={0.1}>
                <SimpleGrid
                  columns={{ base: '1', xl: '2' }}
                  justifyItems="center"
                  gap={6}
                >
                  {posts.map(post => (
                    <WorkGridItem
                      slug={post.slug}
                      title={post.title}
                      subTitle={post.subTitle}
                      thumbnail={post.coverPhoto.url}
                      categury={post.categury}
                      titleColor={post.titleColor.hex}
                      textColor={post.textColor.hex}
                      key={post.id}
                      bGColor={post.backgroundColor.hex}
                    >
                      {post.text.text}
                    </WorkGridItem>
                  ))}
                </SimpleGrid>
              </Section>
            </TabPanel>
            <TabPanel>
              {' '}
              <Section delay={0.1}>
                <SimpleGrid
                  columns={{ base: '1', xl: '2' }}
                  gap={6}
                  justifyItems="center"
                >
                  {posts.map(post => (
                    <WorkGridItem
                      slug={post.slug}
                      title={post.title}
                      subTitle={post.subTitle}
                      thumbnail={post.coverPhoto.url}
                      categury={post.categury}
                      titleColor={post.titleColor.hex}
                      textColor={post.textColor.hex}
                      key={post.id}
                      bGColor={post.backgroundColor.hex}
                    >
                      {post.text.text}
                    </WorkGridItem>
                  ))}
                </SimpleGrid>
              </Section>
            </TabPanel>
            <TabPanel>
              <Section delay={0.1}>
                <SimpleGrid
                  columns={{ base: '1', xl: '2' }}
                  justifyItems="center"
                  gap={6}
                >
                  {posts.map(post => (
                    <WorkGridItem
                      slug={post.slug}
                      title={post.title}
                      subTitle={post.subTitle}
                      thumbnail={post.coverPhoto.url}
                      categury={post.categury}
                      titleColor={post.titleColor.hex}
                      textColor={post.textColor.hex}
                      key={post.id}
                      bGColor={post.backgroundColor.hex}
                    >
                      {post.text.text}
                    </WorkGridItem>
                  ))}
                </SimpleGrid>
              </Section>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Layout>
  )
}

export default Works
