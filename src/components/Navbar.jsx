import {
  Box,
  Flex,
  HStack,
  VStack,
  Link,
  IconButton,
  Image,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import logo from '../assets/img/logo.png';

const Links = [
  { text: 'Home', link: 'home' },
  { text: 'About Us', link: 'about' },
  { text: 'Initiatives', link: 'initiatives' },
  { text: 'Coalescence', link: 'coalescence' },
  { text: 'Novatia', link: 'novatia' },
  { text: 'Team', link: 'team' },
  { text: 'Contact Us', link: 'contact' },
];

const NavLink = ({ children }) => (
  <Link
    px={1}
    borderBottom='4px solid transparent'
    color={'white'}
    _hover={{
      borderBottom: '4px solid #FDC20A',
      transitionDuration: '1s',
    }}
    onClick={() => {
      var element = document.getElementById(children.link);
      var headerOffset = 96;
      var elementPosition = element.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }}
  >
    {children.text}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      flexDirection='column'
      height={'6rem'}
      bg='#111'
      position={'sticky'}
      top={0}
      zIndex={1}
      overflowX={'clip'}
      px={2}
    >
      <Box fontWeight={700} fontSize='20px' color='white' px={4}>
        <Flex h='95px' alignItems={'center'} justifyContent={'space-between'}>
          <Image minW='0' src={logo} alt='cel_logo' />

          <HStack as={'nav'} spacing={4} display={{ base: 'none', lg: 'flex' }}>
            {Links.map(link => (
              <NavLink key={link.link}>{link}</NavLink>
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
            display={{ lg: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>
      </Box>
      <Box
        fontWeight={700}
        fontSize='20px'
        bg='blackAlpha.700'
        height={'calc(100vh - 6rem)'}
        display={{ lg: 'none' }}
        pb={4}
        pr={8}
        position={'absolute'}
        top={'6rem'}
        width={'100%'}
        left={isOpen ? '0' : '100%'}
        transitionDuration={'0.8s'}
      >
        <Flex justifyContent={'end'} alignItems={'center'}>
          <VStack alignItems={'end'} as={'nav'} spacing={4}>
            {Links.map(link => (
              <NavLink key={link.link}>{link}</NavLink>
            ))}
          </VStack>
        </Flex>
      </Box>
    </Flex>
  );
}
