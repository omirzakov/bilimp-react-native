import {
  AspectRatio,
  Box,
  Heading,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  ScrollView,
} from "native-base";
import React, { useEffect, useState } from "react";
import { getAllPosts } from "../api/posts";

const History = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getAllPosts();

      setPosts(data);
    };

    fetchData();
  }, []);

  console.log(posts)

  return (
    <ScrollView>
      <Box flex={1} margin={3}>
        <Center>
          {" "}
          <Heading>Новости</Heading>
        </Center>
        {posts &&
          posts.length > 0 &&
          posts.map((item, i) => (
            <Center key={i}>
              <Box
                w="100%"
                maxW="80"
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.200"
                borderWidth="1"
                _dark={{
                  borderColor: "coolGray.600",
                  backgroundColor: "gray.700",
                }}
                _web={{
                  shadow: 2,
                  borderWidth: 0,
                }}
                _light={{
                  backgroundColor: "gray.50",
                }}
              >
                <Box>
                  <AspectRatio w="100%" ratio={16 / 9}>
                    <Image
                      source={{
                        uri: item.imageUrl,
                      }}
                      alt="image"
                    />
                  </AspectRatio>
                  <Center
                    bg="violet.500"
                    _dark={{
                      bg: "violet.400",
                    }}
                    _text={{
                      color: "warmGray.50",
                      fontWeight: "700",
                      fontSize: "xs",
                    }}
                    position="absolute"
                    bottom="0"
                    px="3"
                    py="1.5"
                  >
                    {item.author}
                  </Center>
                </Box>
                <Stack p="4" space={3}>
                  <Stack space={2}>
                    <Heading size="md" ml="-1">
                      { item.category.name }
                    </Heading>
                    <Text
                      fontSize="xs"
                      _light={{
                        color: "violet.500",
                      }}
                      _dark={{
                        color: "violet.400",
                      }}
                      fontWeight="500"
                      ml="-0.5"
                      mt="-1"
                    >
                      Опубликовано: { item.category.createdAt}
                    </Text>
                  </Stack>
                  <Text fontWeight="400">
                      {
                          item.preContent
                      }
                  </Text>
                  <HStack
                    alignItems="center"
                    space={4}
                    justifyContent="space-between"
                  >
                    <HStack alignItems="center">
                      <Text
                        color="coolGray.600"
                        _dark={{
                          color: "warmGray.200",
                        }}
                        fontWeight="400"
                      >
                        6 mins ago
                      </Text>
                    </HStack>
                  </HStack>
                </Stack>
              </Box>
            </Center>
          ))}
      </Box>
    </ScrollView>
  );
};
export default History;
