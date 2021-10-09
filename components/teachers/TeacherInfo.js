import React from "react";
import {
  Box,
  Heading,
  Icon,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider
} from 'native-base';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import Footer from "../footer/Footer";

function TeacherInfo(){
 return(
    <Box
      rounded="lg"
      overflow="hidden"
      width="100%"
      flex={1}
      shadow={1}
      _light={{ backgroundColor: 'gray.50' }}
      _dark={{ backgroundColor: 'gray.700' }}
    >
      <Box>
        <AspectRatio ratio={16 / 9}>
          <Image
            source={{
              uri:
                'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
            }}
            alt="image"
          />
        </AspectRatio>
        <Center
          bg="violet.500"
          _text={{ color: 'white', fontWeight: '700', fontSize: 'xs' }}
          position="absolute"
          bottom={0}
          px="3"
          py="1.5"
        >
          Профиль
        </Center>
      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            Умирзаков Мадияр Талгатович
          </Heading>
          <Text
            fontSize="xs"
            _light={{ color: 'violet.500' }}
            _dark={{ color: 'violet.300' }}
            fontWeight="500"
            ml="-0.5"
            mt="-1"
          >
            Frontend разработчик
          </Text>
        </Stack>
        <Text fontWeight="400">
          Bengaluru (also called Bangalore) is the center of India's high-tech
          industry. The city is also known for its parks and nightlife.
        </Text>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Text color="gray.500" fontWeight="400">
              6 минут назад
            </Text>
          </HStack>
        </HStack>
      </Stack>
      <Footer />
    </Box>
    );
}
export default TeacherInfo;