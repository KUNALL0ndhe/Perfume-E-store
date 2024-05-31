import { 
    Heading,
    Box,
    Text,
    Button,
    Icon,
} from "@chakra-ui/react";
import { MdOutlineFilterList } from "react-icons/md";
import HeaderMenuItem from "../components/HeaderMenuItem";
import Video from "../components/Video";
import bgone from '../assets/bgone.mp4';
import bgtwo from '../assets/bgtwo.mp4';
import bgthree from '../assets/bgthree.mp4';


const ViewScreen = () => {
    return (
        <>
        <Text fontSize='md'> All Perfumes</Text> 

        <Box justifyItems='end'>
            <Button as={MdOutlineFilterList} > Filter </Button>
        </Box>
        <Heading mt='4'>
            {/* <Video display='block' url={bgone} />
            <Video display='block' url={bgtwo} />
            <Video display='block' url={bgthree} /> */}
        </Heading>
        </>
    )
}

export default ViewScreen;