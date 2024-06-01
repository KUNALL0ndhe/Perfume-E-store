import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Text,
    Link,
    Box
} from '@chakra-ui/react';

const Slide = ({ isOpen, onClose }) => {
    return (
        <Drawer
            isOpen={isOpen}
            placement='top' // Adjust placement as needed (e.g., 'top')
            onClose={onClose}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>All Perfumes</DrawerHeader>

                <DrawerBody>
                    <Link href='/men'>
                        <Text fontSize='md' mb='3'>Men</Text>
                    </Link>
                    <Link href='/women'>
                        <Text fontSize='md' mb='3'>Women</Text>
                    </Link>
                    <Link href='/'>
                        <Text fontSize='md' mb='3'>Casual Around</Text>
                    </Link>
                    <Link href='/'>
                        <Text fontSize='md' mb='3'>Party Wear</Text>
                    </Link>
                    <Link href='/New'>
                        <Text fontSize='md' mb='3'>New Arrivals</Text>
                    </Link>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
};

export default Slide;
