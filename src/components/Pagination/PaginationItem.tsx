import React from "react";
import { Button } from "@chakra-ui/react";

type PaginationItemProps = {
  number: number;
  isCurrentPage?: boolean;
  onPageChange: (page: number) => void;
};

export const PaginationItem = ({
  number,
  isCurrentPage = false,
  onPageChange,
}: PaginationItemProps) => {
  return isCurrentPage ? (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      colorScheme="pink"
      disabled
      _disabled={{
        bgColor: "pink.500",
        cursor: "default",
      }}
    >
      {number}
    </Button>
  ) : (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{
        bg: "gray.500",
      }}
      onClick={() => onPageChange(number)}
    >
      {number}
    </Button>
  );
};
