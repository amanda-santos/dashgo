import { Flex } from "@chakra-ui/react";
import { ActionButtons } from "./ActionButtons";
import { Logo } from "./Logo";
import { Profile } from "./Profile";
import { Search } from "./Search";

export const Header = () => {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      mb="12"
      px="6"
      align="center"
    >
      <Logo />
      <Search />

      <Flex align="center" ml="auto">
        <ActionButtons />
        <Profile />
      </Flex>
    </Flex>
  );
};
