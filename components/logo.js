import Link from 'next/link'
import { Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import '@fontsource/italiana'
import '@fontsource/inspiration'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 23px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <Text
          color="#000000"
          fontWeight="400"
          fontFamily="Inspiration, sans-serif"
          mt="5px"
        >
          Z
        </Text>
        <Text
          color="#000000"
          fontWeight="400"
          fontFamily="Italiana, sans-serif"
          ml="0.5"
        >
          ara.
        </Text>
        <Text
          color="#000000"
          fontWeight="400"
          fontFamily="Inspiration, sans-serif"
          mt="5px"
          ml="0.5"
        >
          Y
        </Text>
        <Text
          color="#000000"
          fontWeight="400"
          fontFamily="Italiana, sans-serif"
        >
          ousef
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
