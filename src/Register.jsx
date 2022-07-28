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
  Select,
  Checkbox,
  InputGroup,
  InputRightElement,
  Icon,
} from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

// import { InputRightElement } from "@chakra-ui/core";

import logo from "./assets/register.svg";

const Register = () => {
  const initialValue = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    schoolName: "",
    checked: false,
    select: "",
  };

  const [userData, showUserData] = useState(initialValue);

  const [error, setError] = useState(false);

  const [show, showPassword] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    showUserData({
      ...userData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  console.log(userData);

  const handleSubmit = (e) => {
    e.preventDefault();
    // userData.firstName === "" ? setError(true) : setError(false);
    // userData.lastName === "" ? setError(true) : setError(false);

    const userDetails = JSON.stringify(userData);
    sessionStorage.getItem("userDetails") === null &&
      sessionStorage.setItem("userDetails", userDetails);
    alert(userDetails);
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
        margin="1rem auto"
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
                value={userData.firstName}
                name={"firstName"}
                onChange={handleChange}
                onKeyDown={() => setError(false)}
              />
              {!error ? (
                <FormHelperText>Enter your firstName</FormHelperText>
              ) : (
                <FormErrorMessage>Firstname required</FormErrorMessage>
              )}
            </FormControl>

            <FormControl isInvalid={error}>
              <FormLabel color="blue.500">Lastname</FormLabel>
              <Input
                type="text"
                placeholder="Enter your lastname"
                value={userData.lastName}
                name={"lastName"}
                onChange={handleChange}
                onKeyDown={() => setError(false)}
              />
              {!error ? (
                <FormHelperText> </FormHelperText>
              ) : (
                <FormErrorMessage>Lastname required</FormErrorMessage>
              )}
            </FormControl>

            <FormControl>
              <FormLabel color="blue.500">Email Address:</FormLabel>
              <Input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel color="blue.500">Password</FormLabel>
              <InputGroup size="md">
                <Input
                  type={show ? "text" : "password"}
                  placeholder="Enter your Password"
                  name={"password"}
                  value={userData.password}
                  onChange={handleChange}
                />
                <InputRightElement width="3rem">
                  <Button
                    h="1.5rem"
                    size="md"
                    bg="white"
                    _hover="white"
                    _active="white"
                    outline="none"
                    onClick={() => showPassword((prev) => !prev)}
                  >
                    {show ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel color="blue.500">School</FormLabel>
              <Input
                type="text"
                placeholder="Enter name of your School"
                value={userData.schoolName}
                name={"schoolName"}
                onChange={handleChange}
              />
            </FormControl>

            <Select
              placeholder="Select option"
              name="select"
              value={userData.select}
              onChange={handleChange}
            >
              <option value="farmer">Farmer</option>
              <option value="student">Student</option>
              <option value="programmer">Programmer</option>
            </Select>

            <Checkbox
              checked={userData.checked}
              type="checkbox"
              name={"checked"}
              onChange={handleChange}
            >
              Agree to terms and condition
            </Checkbox>
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
