import { Stack,Box, VStack, Heading, Button , HStack, Input,Text} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from "react-icons/ai"

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH={'40'} p="16" color={'white'}>
        <Stack direction={['column','row']}>
            <VStack alignItems={"stretch"} w={"full"} px={'4'}>
                <Heading size="md" textTransform={'uppercase'}>
                    subscirbe to get updates
                </Heading>
                <HStack 
                borderBottom={"2px solid white"}
                py="2">
                    <Input placeholder='enter email' border={"none"}
                    borderRadius={"none"}
                    outline={'none'}
                    focusBorderColor='none'/>

                    <Button
                    p={"0"}
                    colorScheme={'purple'}
                    variant={'ghost'}
                    borderRadious={"0 20px 20px 0"}>
                     <AiOutlineSend size={20}/>
                    </Button>
                </HStack>
            </VStack>
            <VStack w={'full'}
            borderLeft={['none','1px solid white']}>
            <Heading textTransform={"uppercase"} textAlign={"center"}>
             video hub
            </Heading>
            <Text> All rights reserved</Text>
            </VStack>
            <VStack w={'full'}
            borderLeft={['none','1px solid white']}>
                <Heading size={"md"} textTransform={'uppercase'}> social media</Heading>
                <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="https://www.youtube.com/@gamersenpai7469">
              Youtube
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="https://www.instagram.com/gamersenpai69/">
              Instagram
            </a>
          </Button>

          <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="https://github.com/Ashish2271">
              Github
            </a>
          </Button>
            </VStack>

        </Stack>

    </Box>
   
  )
}

export default Footer
