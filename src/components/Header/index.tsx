import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { ActionButtons } from "./ActionButtons";
import { Logo } from "./Logo";
import { Profile } from "./Profile";
import { Search } from "./Search";

export const Header = () => {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

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
      {!isWideVersion && (
        <IconButton
          aria-label="Navigation"
          variant="unstyled"
          mt="2"
          icon={<Icon as={RiMenuLine} fontSize="24" mr="2" onClick={onOpen} />}
        />
      )}
      <Logo />
      {isWideVersion && <Search />}

      <Flex align="center" ml="auto">
        <ActionButtons />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
};
