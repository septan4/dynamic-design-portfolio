import NextLink from 'next/link'

import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  useMediaQuery,
  Image
} from '@chakra-ui/react'
import { Global } from '@emotion/react'
import '@fontsource-variable/exo'

export const WorkGridItem = ({
  children,
  slug,
  title,
  subTitle,
  thumbnail,
  categury,
  bGColor,
  titleColor,
  textColor
}) => {
  const [isLargerThan800] = useMediaQuery('(min-width: 400px)')

  return (
    <Box
      w={isLargerThan800 ? '480px' : '280px'}
      h={isLargerThan800 ? '225px' : '135px'}
      borderRadius="26px"
      textAlign="start"
      bg={bGColor}
      fontFamily="Exo Variable, sans-serif"
    >
      <LinkBox
        as={NextLink}
        href={`/works/` + slug}
        scroll={false}
        cursor="pointer"
        display="flex"
        flexDirection="row"
      >
        <Image
          src={thumbnail}
          alt={title}
          width={isLargerThan800 ? 225 : 135}
          height={isLargerThan800 ? 225 : 135}
          layout="responsive"
          className="grid-item-thumbnail"
        />
        <Box display="flex" flexDirection="column" ml="20px" mt="5px" mr="20px">
          <LinkOverlay as="div" href={`/works/` + slug}>
            <Text
              mt={2}
              fontSize={{ base: '15', md: ' 18' }}
              fontWeight={700}
              color={titleColor}
            >
              {title}
            </Text>
            <Text
              mt={{ base: '5px', md: ' 4' }}
              fontSize={{ base: '9px', md: ' 11' }}
              fontWeight={600}
              color={titleColor}
            >
              {subTitle}
            </Text>
          </LinkOverlay>
          <Text
            mt={{ base: '0', md: ' 13px' }}
            display={{ base: 'none', md: 'flex' }}
            lineHeight={'18px'}
            color={textColor}
          >
            {children}
          </Text>
          <Text
            mt={{ base: '3', md: ' 5' }}
            fontSize={9}
            fontWeight={400}
            color={titleColor}
          >
            {categury}
          </Text>
        </Box>
      </LinkBox>
    </Box>
  )
}

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
  border-radius: 26px;

}
    `}
  />
)
