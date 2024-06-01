import { 
    Heading,
    Box,
    Text,
    Button,
    Icon,
} from "@chakra-ui/react";
import HeaderMenuItem from "../components/HeaderMenuItem";
import Video from "../components/Video";
import bgone from '../assets/bgone.mp4';
import Slide from '../components/Slidersm';
import { MdFilterList } from "react-icons/md";
import bgtwo from '../assets/bgtwo.mp4';
import bgthree from '../assets/bgthree.mp4';
import { useState } from "react";


const ViewScreen = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(!isOpen);
    return (
        <>
        <Box display='flex' onClick={handleOpen}>
        <Text fontSize='md' fontWeight='100' ml='4'> <Slide isOpen={isOpen} onClose={() => setIsOpen(false)} /> <Icon as={MdFilterList} mr='3' />All Perfumes</Text> 
        </Box>
        <Heading mt='4'>
            <Video display='block' url={bgtwo} />
        {/* <Video display='block' url={bgone} /> */}

        </Heading>
        </>
    )
}

export default ViewScreen;