import { Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { Link } from "./Link";
import { Section } from "./Section";

export const SidebarNav = () => {
  return (
    <Stack spacing="12" align="flex-start">
      <Section title="GENERAL">
        <Link icon={RiDashboardLine} href="/dashboard">
          Dashboard
        </Link>
        <Link icon={RiContactsLine} href="/users">
          Users
        </Link>
      </Section>

      <Section title="AUTOMATION">
        <Link icon={RiInputMethodLine} href="/forms">
          Forms
        </Link>
        <Link icon={RiGitMergeLine} href="/automations">
          Automations
        </Link>
      </Section>
    </Stack>
  );
};
