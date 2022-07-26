import React, { useRef, useState } from "react";
import {
  Box,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  VStack,
  Image,
  Input,
  Button,
  FormErrorMessage,
  fadeConfig,
} from "@chakra-ui/react";
import logo from "./assets/register.svg";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [email, setEmail] = useState("");

  const [error, setError] = useState(false);

  const [show, showPassword] = useState(false);

  const lastNameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    firstName === "" ? setError(true) : setError(false);
  };

  return (
    <Box as="section" p={5} bgGradient="linear(to-r, green.700, yellow.200)">
      <Flex
        bg="white"
        justifyContent="center"
        alignItems="center"
        gap={10}
        shadow="2xl"
        rounded="md"
        py={6}
        w={{ base: "100%", md: "70%" }}
        flexDirection={{ base: "column", md: "column", lg: "row" }}
        margin="5rem auto"
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
          <Heading
            as="h1"
            mb={10}
            color="blue.600"
            textAlign={{ base: "center" }}
          >
            Register
          </Heading>
          <VStack spacing={5}>
            <FormControl isInvalid={error}>
              <FormLabel color="blue.500">Firstname</FormLabel>
              <Input
                type="text"
                placeholder="Enter your firstname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                onKeyDown={() => setError(false)}
              />
              {!error ? (
                <FormHelperText>We will not disclose your mail</FormHelperText>
              ) : (
                <FormErrorMessage>Email needed</FormErrorMessage>
              )}
            </FormControl>

            <FormControl>
              <FormLabel color="blue.500">Lastname</FormLabel>
              <Input
                type="text"
                placeholder="Enter your lastname"
                value={lastName}
                ref={lastNameRef}
                onChange={() => setLastName(lastNameRef.current.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel color="blue.500">Password</FormLabel>
              <Input
                type={show ? "text" : "password"}
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>

            <Button
              type="button"
              colorScheme="red"
              onClick={() => showPassword((prev) => !prev)}
            >
              Show
            </Button>

            <FormControl>
              <FormLabel color="blue.500">School</FormLabel>
              <Input
                type="text"
                placeholder="Enter name of your School"
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
              />
            </FormControl>
            <Button type="submit" colorScheme="facebook" size="lg" width="50%">
              Submit
            </Button>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Register;
