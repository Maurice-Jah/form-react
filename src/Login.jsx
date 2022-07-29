import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  VStack,
  Image,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  HStack,
} from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import logo from "./assets/register.svg";
import Nav from "./Nav";

const Login = () => {
  const [show, showPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  //   To get data from session storage once the window loads
  useEffect(() => {
    const registeredData = sessionStorage.getItem("userDetails");
    const userInfo = JSON.parse(registeredData);
    setUserData(userInfo);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    userData?.firstName === username ? alert("welcome") : alert("No pe");
  };

  return (
    <Box
      as="section"
      p={5}
      bgGradient="linear(to-r, green.700, yellow.200)"
      h="100vh"
    >
      <Flex
        bg="white"
        justifyContent="center"
        alignItems="center"
        gap={10}
        shadow="2xl"
        rounded="md"
        py={6}
        w={{ base: "100%", md: "40%" }}
        flexDirection={{ base: "column", md: "column", lg: "row" }}
        margin="10rem auto"
      >
        <Box w={{ base: "80%", sm: "60%" }} px={2}>
          <Image src={logo} alt="logo-img" width="100%" />
        </Box>
        <Box
          as="form"
          onSubmit={handleSubmit}
          width={{ base: "80%" }}
          mx="3rem"
        >
          <Nav />

          <HStack>
            <Link to={"/"}>Register</Link>
          </HStack>

          <Heading
            as="h1"
            mb={10}
            color="blue.600"
            textAlign={{ base: "center" }}
          >
            Login
          </Heading>
          <VStack spacing={5}>
            <FormControl>
              <FormLabel color="blue.500">Firstname</FormLabel>
              <Input
                type="text"
                placeholder="Enter your firstname"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel color="blue.500">Password</FormLabel>
              <InputGroup size="md">
                <Input
                  type={show ? "text" : "password"}
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement width="3rem">
                  <Button
                    h="1.5rem"
                    size="md"
                    bg="white"
                    onClick={() => showPassword((prev) => !prev)}
                  >
                    {show ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Button
              type="submit"
              colorScheme="facebook"
              size="lg"
              width="20%"
              px="5rem"
            >
              Login
            </Button>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Login;
