import { Heading, Stack, VStack,Text, Button } from '@chakra-ui/react'
import React,{useState} from 'react'

const Videos = () => {
    
        const videosArr = [
          'https://player.vimeo.com/progressive_redirect/playback/697718184/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=26d69c3df603d083fedd663acaab4d35a33444d11033a626864cf1e578e136cf',
          
          'https://player.vimeo.com/external/510850877.hd.mp4?s=d5e9ed9ea40ba755e28512cce6c1ad00d92506f7&profile_id=174',
          'https://player.vimeo.com/external/577442929.hd.mp4?s=95231c8a7fe2066ffb640204591b01a6c326b97c&profile_id=174',
          'https://player.vimeo.com/progressive_redirect/playback/689925384/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=5a819f11298d53cc1ed85837342f47ea61c8f95b9aeeb0c38edab72a80e0db78',
          'https://player.vimeo.com/progressive_redirect/playback/688648666/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=070a16d4b244bc11c2bd17b03e04e50460be3d2726ed554959a49fc05dbd0281',
          'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
          'https://cdn.discordapp.com/attachments/933704990445408338/1138247326746554428/ayu_axd_20230616_reel_3126436838553479100_1_3126436838553479100_00.mp4'];

        const [videoSrc,setVideoSrc] = useState(videosArr[0])


  return (
    <Stack direction={['column','row']}>
        <VStack  w={'full'}>
            <video 
            controls
            controlsList='nodownload'
            src={videoSrc}
            style={{width:'100%',}}>

             </video>
             <VStack alignItems={'flex-start'} overflowY={'auto'} p={'8'} w={'full'} >
                <Heading>sample video</Heading>
                <Text >
            -      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id earum ex debitis harum velit aliquid, a, dolore incidunt modi qui temporibus ipsam voluptates,
             beatae sed sit cumque ipsa obcaecati saepe.
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id earum ex debitis harum velit aliquid, a, dolore incidunt modi qui temporibus ipsam voluptates,
             beatae sed sit cumque ipsa obcaecati saepe.
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id earum ex debitis harum velit aliquid, a, dolore incidunt modi qui temporibus ipsam voluptates,
             b
                </Text>

             </VStack>


        </VStack>
        <VStack w={['full','xl']}
        alignItems={'stretch'}
        p={8}
        spacing={8}
        overflowY={'auto'}>
        {videosArr.map((item,index) =>(
                <Button variant={'ghost'} colorScheme='purple' onClick={()=> setVideoSrc(item)}
                >lecture {index+1}</Button>
        )
        )}


        </VStack>

    </Stack>
  )
}

export default Videos
