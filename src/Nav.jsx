import React from "react";
import { Flex } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  console.log(location);

  return (
    <Flex width={"100%"} gap={5} justifyContent={"center"}>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "red" } : { color: "green" }
        }
        to={"/"}
      >
        Register
      </NavLink>
      <NavLink
        to={"/login"}
        style={({ isActive }) =>
          isActive ? { color: "red" } : { color: "green" }
        }
      >
        Login
      </NavLink>
      <NavLink
        to={"/products"}
        style={({ isActive }) =>
          isActive ? { color: "red" } : { color: "green" }
        }
      >
        Products
      </NavLink>
      <NavLink
        to={"/faqs"}
        style={({ isActive }) =>
          isActive ? { color: "red" } : { color: "green" }
        }
      >
        FAQs
      </NavLink>
    </Flex>
  );
};

export default Nav;
