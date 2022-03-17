import { SimpleGrid } from "@chakra-ui/react";
import { InformationBox } from "./InformationBox";

export const Dashboard = () => {
  return (
    <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">
      <InformationBox title="Weekly subscribers" />
      <InformationBox title="Opening rate" />
    </SimpleGrid>
  );
};
