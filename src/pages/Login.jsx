import React from "react";
import MetaData from "../components/layout/metadata/MetaData";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  extendTheme,
  ChakraProvider,
} from "@chakra-ui/react";

import { Link as ReachLink } from "react-router-dom";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#12284C",
      200: "#dce0e5",
      300: "#cc9e6a",
      400: "#f2d9c7",
    },
  },
});

const Login = () => {
  return (
    <>
      <MetaData title="Ingresar" />

      <ChakraProvider theme={theme}>
        <Flex minH={"50vh"} align={"center"} justify={"center"}>
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"} color="brand.100">
              <Heading align={"center"} fontSize={"4xl"}>
                Inicia sesión en tu cuenta
              </Heading>
              <Text align={"center"} fontSize={"lg"} color={"#12284C"}>
                y disfruta de todas las funciones de la página
              </Text>
            </Stack>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "#12284C")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4} color="#12284C">
                <FormControl id="email">
                  <FormLabel>E-mail:</FormLabel>
                  <Input type="email" />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Contraseña:</FormLabel>
                  <Input type="password" />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Link
                      as={ReachLink}
                      to="/signup"
                      color={"brand.100"}
                      style={{ fontWeight: "bold" }}
                      _hover={{ textDecoration: "none", color: "brand.300" }}
                    >
                      Crear una cuenta
                    </Link>
                    <Link
                      as={ReachLink}
                      to="/forgotPassword"
                      color={"brand.100"}
                      style={{ fontWeight: "bold" }}
                      _hover={{ textDecoration: "none", color: "brand.300" }}
                    >
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </Stack>
                  <Button
                    bg={"#12284C"}
                    color={"white"}
                    _hover={{
                      bg: "#cc9e6a",
                    }}
                  >
                    Ingresar
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </ChakraProvider>
    </>
  );
};

export default Login;