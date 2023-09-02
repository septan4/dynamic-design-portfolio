import { Box, Link} from '@chakra-ui/react'
import NextLink from "next/link";

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Zara Yousef. All Rights Reserved.
        <Link
            as={NextLink}
            href="https://www.sepehrtanhaei.com/"
            passHref
            scroll={false}
            target="_blank"
        >
            Developed by Sepehr{' '}
        </Link>
    </Box>
  )
}

export default Footer
