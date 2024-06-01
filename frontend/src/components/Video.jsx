import { 
  Flex,
  Box,
  Text,
  Icon,
  Spacer,
  Button,
} from '@chakra-ui/react';
import { BiFilter } from "react-icons/bi";


const Video = ({ url }) => {
  return (
    <Flex    
      className="main"
      style={{
        position: 'relative',
        width: '100vw', // Set width to 100vw
        height: '80.33vh',
        overflow: 'hidden',
        zIndex: 9,
      }}
    >
      <video
        src={url}
        autoPlay
        loop
        muted
        style={{
          position: 'absolute', // Make video absolute-positioned
          top: 0,
          left: 0,
          width: '100%', // Keep width at 100%
          height: '100%',
          objectFit: 'cover',
          zIndex: 99,
        }}
      />
       <Text
        colorScheme='whiteAlpha'
        variant='outline'
        position="absolute"
        bottom="10px"
        left="50%"
        transform="translateX(-50%)"
        textAlign="center"
        color="white"
        fontWeight='md'
        fontFamily='monospace'
        fontSize="xl"
        zIndex= '999' // Ensure the text is above the video
      >
      ❝ Capture the moment with a scent that tells your story.❞
      <br/>
      <Spacer h='30'/>

Every moment becomes memorable when accompanied by a fragrance that resonates with your life's narrative. Let your perfume be the storyteller of your unique journey and experiences.
      </Text>
    </Flex>
    
  );
};

export default Video;
