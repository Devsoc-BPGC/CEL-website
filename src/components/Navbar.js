import { ReactNode } from 'react';
import {
  Box,
  Flex,
  HStack,
  VStack,
  Link,
  IconButton,
  Image,
  useDisclosure,
  Slide,
  Collapse,
  Fade,
  keyframes,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import logo from '../assets/img/logo.png';
import { transform } from 'framer-motion';

const Links = [
  'Home',
  'About Us',
  'Coalescence',
  'Novatia',
  'Initiatives',
  'Contact',
];

/*const reveal = keyframes`
      from {transform: scaleX(0);}
      to {transform: scaleX(1);}
      `
      animation={`${reveal} 1.2s linear`}
*/

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={1}
    borderBottom='4px solid transparent'
    color={'white'}
    _hover={{
      //textDecoration: 'underline solid #FDC20A 4px',
      borderBottom: '4px solid #FDC20A',
      transitionDuration: '1s',
    }}
    href={'#'}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      flexDirection='column'
      sx={isOpen ? { height: '100vh', zIndex: 1 } : {}}
    >
      <Box fontWeight={700} fontSize='20px' color='white' bg='black' px={4}>
        <Flex h='95px' alignItems={'center'} justifyContent={'space-between'}>
          <Image minW='0' src={logo} alt='cel_logo' />

          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            {Links.map(link => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
        </Flex>

        <Flex
          pos='absolute'
          top='0'
          right='0'
          h='95px'
          alignItems={'center'}
          pr={4}
        >
          <IconButton
            variant='unstyled'
            color='#FDC20A'
            bg='black'
            size={'lg'}
            icon={
              isOpen ? (
                <HamburgerIcon
                  boxSize={8}
                  transform={'rotate(-90deg)'}
                  transitionDuration={'0.8s'}
                />
              ) : (
                <HamburgerIcon boxSize={8} transitionDuration={'0.8s'} />
              )
            }
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>
      </Box>

      {isOpen ? (
        <Slide
          direction='center'
          in={isOpen}
          style={{ position: 'relative', flexGrow: 1 }}
        >
          <Box
            fontWeight={700}
            fontSize='20px'
            bg='blackAlpha.700'
            height='100%'
            display={{ md: 'none' }}
            pb={4}
            pr={8}
          >
            <Flex justifyContent={'end'} alignItems={'center'}>
              <VStack alignItems={'end'} as={'nav'} spacing={4}>
                {Links.map(link => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </VStack>
            </Flex>
          </Box>
        </Slide>
      ) : null}
    </Flex>
  );
}
