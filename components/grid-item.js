import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
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
}) => (
  <Box
    w="468px"
    h="225px"
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
        width="225"
        height="225"
        className="grid-item-thumbnail"
      />
      <Box display="flex" flexDirection="column" ml="20px" mt="5px" mr="20px">
        <LinkOverlay as="div" href={`/works/` + slug}>
          <Text mt={2} fontSize={22} fontWeight={700} color={titleColor}>
            {title}
          </Text>
          <Text mt={2} fontSize={11} fontWeight={600} color={titleColor}>
            {subTitle}
          </Text>
        </LinkOverlay>
        <Text mt={5} fontSize={15} lineHeight={'18px'} color={textColor}>
          {children}
        </Text>
        <Text mt={5} fontSize={9} fontWeight={400} color={titleColor}>
          {categury}
        </Text>
      </Box>
    </LinkBox>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 26px;
      }
    `}
  />
)
