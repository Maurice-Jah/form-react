import React, { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const username = sessionStorage.getItem("username");
    setUser(username);
  }, []);

  return (
    <div>
      <h1>Welcome {user}</h1>
      <Button
        colorScheme={"red"}
        size={"sm"}
        onClick={() => {
          sessionStorage.removeItem("username");
          navigate("/login");
        }}
      >
        Logout
      </Button>
    </div>
  );
};

export default Product;
