import React from "react";
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

type ProfileProps = {
  showProfileData?: boolean;
};

export const Profile = ({ showProfileData = true }: ProfileProps) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Amanda Santos</Text>
          <Text color="gray.300" fontSize="small">
            amandasf0200@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Amanda Santos"
        src="https://github.com/amanda-santos.png"
      />
    </Flex>
  );
};
