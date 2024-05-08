import { Box, Card, chakra } from '@chakra-ui/react';
import React from 'react';
import { MessageCardStyle } from '../constants';
import Markdown from '@/components/Markdown';
import ChatAvatar from './ChatAvatar';
import NImage from 'next/image';
import chatpng from 'public/imgs/YT.png';
const ChakraNextImage = chakra(NImage);

const WelcomeBox = ({ appAvatar, welcomeText }: { appAvatar?: string; welcomeText: string }) => {
  return (
    <Box py={3}>
      {/* avatar */}
      {/* <ChatAvatar src={appAvatar} type={'AI'} /> */}
      {/* wangcx 添加系统交互头像，历史中为AI机器人宇图logo状态 */}
      <ChakraNextImage
        src={chatpng}
        alt="an img"
        objectFit="cover"
        style={{ width: 40, height: 40 }}
      ></ChakraNextImage>
      {/* message */}
      <Box textAlign={'left'}>
        <Card
          order={2}
          mt={2}
          {...MessageCardStyle}
          bg={'white'}
          boxShadow={'0 0 8px rgba(0,0,0,0.15)'}
        >
          <Markdown source={`~~~guide \n${welcomeText}`} />
        </Card>
      </Box>
    </Box>
  );
};

export default WelcomeBox;
