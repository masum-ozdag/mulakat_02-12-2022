import axios from "axios";
import * as yup from "yup";
import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormControl, InputLabel, Button, Input } from "@mui/material";
import { Container } from "@mui/system";

export default function Login({ token }) {
  const [text, setText] = useState({
    email: "mahsun@ozdag.com",
    password: "enes",
  });

  const Navigate = useNavigate();

  const login = () => {
    axios
      .post("http://192.168.0.197/api/login", {
        email: text.email,
        password: text.password,
      })
      .then((response) => {
        Navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h3>Login</h3>

      <Container style={{ width: "20rem", margin: "auto" }}>
        <FormControl style={{ width: "20rem", margin: "auto" }}>
          <InputLabel htmlFor="my-input">email</InputLabel>
          <Input
            value={text.email}
            onChange={(e) =>
              setText((prev) => ({ ...prev, email: e.target.value }))
            }
            className={"form-control"}
            id="my-input"
            type="text"
            name="email"
            aria-describedby="my-helper-text"
          />
        </FormControl>

        <FormControl style={{ width: "20rem", margin: "auto" }}>
          <InputLabel htmlFor="my-input">password</InputLabel>
          <Input
            className={"form-control"}
            value={text.password}
            onChange={(e) =>
              setText((prev) => ({ ...prev, password: e.target.value }))
            }
            type="password"
            name="password"
            id="my-input"
            aria-describedby="my-helper-text"
          />
        </FormControl>

        <FormControl style={{ width: "20rem", margin: "auto" }}>
          <Button
            color="primary"
            style={{ width: "20rem", margin: "auto" }}
            onClick={() => login()}
            variant="contained"
          >
            login
          </Button>
        </FormControl>
      </Container>
    </div>
  );
}
