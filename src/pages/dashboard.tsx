import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import {
  Dashboard as DashboardComponent,
  Header,
  Sidebar,
} from "../components";

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Head>
        <title>dash.go | dashboard</title>
      </Head>
      <Header />
      <Flex w="100%" mb="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <DashboardComponent />
      </Flex>
    </Flex>
  );
}
