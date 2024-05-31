import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Text,
    Link,
    Box
} from '@chakra-ui/react';

const Slider = ({ isOpen, onClose }) => {
    return (
        <Drawer
            isOpen={isOpen}
            placement='left' // Adjust placement as needed (e.g., 'right' or 'top')
            onClose={onClose}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Menu</DrawerHeader>

                <DrawerBody>
                    <Link href='/men'>
                        <Text fontSize='xl' mb='3'>Men</Text>
                    </Link>
                    <Link href='/women'>
                        <Text fontSize='xl' mb='3'>Women</Text>
                    </Link>
                    <Link href='/profile'>
                        <Text fontSize='xl' mb='3'>Profile</Text>
                    </Link>
                    <Link href='/orders'>
                        <Text fontSize='xl' mb='3'>My Orders</Text>
                    </Link>
                    <Link href='/help'>
                        <Text fontSize='xl' mb='3'>Help</Text>
                    </Link>
                    <Box display={{base: 'flex', md: 'none'}} >
                    <Link href='/cart'>
                        <Text fontSize='xl' mb='3'>Cart</Text>
                    </Link>
                    </Box>
                </DrawerBody>
                <Box display={{base: 'flex', md: 'none'}} >
                <DrawerFooter>
                    <Link href='/login'>
                        <Text fontSize='xl' mb='3'>Login</Text>
                    </Link>
                </DrawerFooter>
                </Box>
            </DrawerContent>
        </Drawer>
    );
};

export default Slider;
