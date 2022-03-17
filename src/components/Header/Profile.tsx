import React from "react";
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export const Profile = () => {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Amanda Santos</Text>
        <Text color="gray.300" fontSize="small">
          amandasf0200@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Amanda Santos"
        src="https://github.com/amanda-santos.png"
      />
    </Flex>
  );
};
