import { Box, Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { Section } from "./Section";
import { Link } from "./Link";

export const Sidebar = () => {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Section title="GENERAL">
          <Link icon={RiDashboardLine}>Dashboard</Link>
          <Link icon={RiContactsLine}>Users</Link>
        </Section>

        <Section title="AUTOMATION">
          <Link icon={RiInputMethodLine}>Forms</Link>
          <Link icon={RiGitMergeLine}>Automations</Link>
        </Section>
      </Stack>
    </Box>
  );
};
