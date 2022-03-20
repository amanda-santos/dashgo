import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { Header, Input, Sidebar } from "../../components";

export default function CreateUser() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
          <Heading size="lg">Create user</Heading>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing={["6", "8"]}>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input name="name" label="Full name" />
              <Input name="email" type="email" label="Email" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input name="password" type="password" label="Password" />
              <Input
                name="password-confirmation"
                type="password"
                label="Confirm your password"
              />
            </SimpleGrid>
          </VStack>

          <Flex mt={["6", "8"]} justify="flex-end">
            <HStack spacing="4">
              <Button colorScheme="whiteAlpha">Cancel</Button>
              <Button colorScheme="pink">Save</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
