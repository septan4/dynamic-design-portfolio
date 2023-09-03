import { forwardRef } from 'react'
import Logo from './logo'
import NextLink from 'next/link'

import '@fontsource-variable/exo'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = '#2D2D2D'
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      fontFamily="Exo Variable, sans-serif"
      color={active ? '#000000' : inactiveColor}
      fontWeight={active ? '700' : '400'}
      target={target}
      {...props}
    >
      {children}
    </Link>
  )
}

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg="#FFFFFF"
      boxShadow="0px 8px 15px -10px #EAEAEA"
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.xl"
        wrap="wrap"
        alignItems="baseline"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          justify="flex-end"
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/about" path={path}>
            About
          </LinkItem>
          <LinkItem href="/contact" path={path}>
            Contact
          </LinkItem>
          <LinkItem href="mailto:R.Z.Yousefpour@gmail.com" target="_blank">
            R.Z.Yousefpour@gmail.com
          </LinkItem>
        </Stack>
        <Box
          flex={1}
          align="right"
          display={{ base: 'inline-block', md: 'none' }}
        >
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={MenuLink} href="/works">
                  Works
                </MenuItem>
                <MenuItem as={MenuLink} href="/about">
                  About
                </MenuItem>
                <MenuItem as={MenuLink} href="/contact">
                  Contact
                </MenuItem>
                <MenuItem
                  as={MenuLink}
                  href="mailto:R.Z.Yousefpour@gmail.com"
                  target="_blank"
                >
                  R.Z.Yousefpour@gmail.com
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
