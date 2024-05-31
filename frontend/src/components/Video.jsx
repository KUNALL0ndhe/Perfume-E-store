import { 
  Flex,
  Box,
  Text,
  Icon,
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
    </Flex>
    
  );
};

export default Video;
