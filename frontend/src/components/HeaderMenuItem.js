import { Icon, Link } from '@chakra-ui/react';

const HeaderMenuItem = ({url, children, icon}) => {
    return (
        <Link
        href={url}
        fontSize='lg'
        fontWeight='lg'
        letterSpacing='wide'
        mr='5'
        gap='1'
        display='flex'
        alignItems='center'
        color='white'
        mt={{ base: '2', md: '0' }}
        _hover={{ textDecor: 'none', color: 'whiteAlpha.500' }}>
            <Icon as={icon} w='5' h='5' />
            {children}
        </Link>
    );
};

export default HeaderMenuItem;