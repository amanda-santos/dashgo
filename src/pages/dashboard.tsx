import { Flex } from "@chakra-ui/react";
import {
  Dashboard as DashboardComponent,
  Header,
  Sidebar,
} from "../components";

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" mb="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <DashboardComponent />
      </Flex>
    </Flex>
  );
}
