import React from "react";
import { Spinner, HStack, Heading, Center } from "native-base";
export const Loader = () => {
  return (
    <Center padding={5}>
      <HStack space={2} alignItems="center">
        <Spinner accessibilityLabel="Loading posts" />
        <Heading color="primary.500" fontSize="md">
          Loading
        </Heading>
      </HStack>
    </Center>
  );
};
export default Loader;
