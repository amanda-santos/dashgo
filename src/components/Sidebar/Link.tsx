import {
  Icon,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  Text,
} from "@chakra-ui/react";
import React, { ElementType } from "react";

type LinkProps = ChakraLinkProps & {
  icon: ElementType;
  children: string;
};

export const Link = ({ icon, children, ...rest }: LinkProps) => {
  return (
    <ChakraLink display="flex" alignItems="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </ChakraLink>
  );
};
