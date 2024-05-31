import { Box, Flex, Heading, Link } from '@chakra-ui/react';
import { IoSearchOutline } from "react-icons/io5";
import { useState } from 'react';
import { HiOutlineMenuAlt3, HiShoppingBag, HiUser } from 'react-icons/hi';
import Slider from './Slider'
import HeaderMenuItem from './HeaderMenuItem';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(!isOpen);

    return (
        <Flex
            as='header'
            align='center'
            fontFamily='Montserrat'
            justifyContent='space-between'
            wrap='wrap'
            py='6'
            h='20'
            px='6'
            bgColor='black'
            w='100%'
            pos='fixed'
            top='0'
            left='0'
            zIndex='1000' // Ensure it stays above other content
        >
            <Box display='flex' onClick={handleOpen}>
                <HeaderMenuItem url='#' icon={HiOutlineMenuAlt3}>
                    Menu
                </HeaderMenuItem>
            </Box>

            <Slider isOpen={isOpen} onClose={() => setIsOpen(false)} />

            <Link href='/'>
                <Heading
                    as='h1'
                    color='white'
                    size='md'
                    justifyContent='right'
                    letterSpacing='wide'
                    fontFamily='Montserrat'
                    fontWeight='bold'
                    textTransform='uppercase'
                >
                    L'Essence de Parfums
                </Heading>
            </Link>

            <Box display='flex' width={{ base: 'full', md: 'auto' }}>
                <Box display={{ base: 'none', md: 'flex' }}>
                    <HeaderMenuItem icon={IoSearchOutline} />
                    <HeaderMenuItem url='/cart'icon={HiShoppingBag} />
                    <HeaderMenuItem url='/login' icon={HiUser} />
                </Box>
            </Box>
        </Flex>
    );
};

export default Header;
