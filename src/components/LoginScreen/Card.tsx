import { Box, BoxProps, useColorModeValue } from "@chakra-ui/react";

export default function Card(props: BoxProps) {
  return (
    <Box
      bg={useColorModeValue("white", "gray.700")}
      py="8"
      px={{ base: "4", md: "10" }}
      shadow="base"
      rounded={{ sm: "lg" }}
      {...props}
    />
  );
}
