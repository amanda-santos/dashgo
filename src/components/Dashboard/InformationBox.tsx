import { Box, Text } from "@chakra-ui/react";
import { Chart } from "./Chart";

type InformationBoxProps = {
  title: string;
};

export const InformationBox = ({ title }: InformationBoxProps) => {
  return (
    <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
      <Text fontSize="lg" mb="4">
        {title}
      </Text>
      <Chart />
    </Box>
  );
};
