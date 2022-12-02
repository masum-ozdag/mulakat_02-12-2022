import axios from "axios";
import * as React from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/system";
import { Input, FormControl, Button } from "@mui/material";
import { Nav, NavItem, NavLink } from "reactstrap";
import { v4 as uuidv4 } from "uuid";

export default function Bus({ token }) {
  const navigate = useNavigate();

  const [bus, setBus] = React.useState([]);

  const [nameValue, setNameValue] = React.useState({
    // id: uuidv4(),
    name: "",
  });

  const defaultProps = {
    options: top100Films,
    getOptionLabel: (option) => option.title,
  };

  const save = () => {
    getBus();
  };

  const getBus = () => {
    axios
      .get("http://192.168.0.197/api/bus-definition", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setBus(response.data.brand);
        console.log(response.data.brand);
      })
      .then((response) => {
        setBus(response.data.properties);
        console.log(response.dataresponse.data.properties);
      })
      .then((response) => {
        setBus(response.data.types);
        console.log(response.data.types);
      })
      .catch((error) => {});
  };

  const postBus = () => {
    axios
      .post(
        "http://192.168.0.197/api/bus-definition",
        {
          //   id: uuidv4(),
          name: nameValue,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((response) => {
        getBus();
      })
      .catch((error) => {});
  };

  return (
    <>
      <Nav tabs>
        <NavItem>
          <NavLink onClick={() => navigate("/select")}>Select</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => navigate("/calendar")}>Calendar</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => navigate("/")}>Log out</NavLink>
        </NavItem>

        <NavItem>
          <NavLink onClick={() => navigate("/bus")}>Otobüs Tanımla</NavLink>
        </NavItem>

        <NavItem>
          <NavLink onClick={() => navigate("/sefer")}>Sefer Tanımla</NavLink>
        </NavItem>

        <NavItem>
          <NavLink onClick={() => navigate("/bilet")}>Bilet Al</NavLink>
        </NavItem>
      </Nav>
      <h3>Bus</h3>

      <Container style={{ width: "20rem", margin: "5rem" }}>
        <FormControl>
          <Input
            className={"form-control"}
            onChange={(e) => setNameValue(e.target.value)}
            name="busName"
            placeholder="Add Bus..."
            type="text"
          />
        </FormControl>

        <Button variant="contained" onClick={save}>
          Kaydet
        </Button>

        <Stack spacing={1} sx={{ width: 300 }}>
          <Autocomplete
            {...defaultProps}
            id="auto-highlight"
            autoHighlight
            renderInput={(params) => (
              <TextField {...params} label="Plaka" variant="standard" />
            )}
          />
        </Stack>
      </Container>
    </>
  );
}

const top100Films = [
  { title: "The Shawshank Redemption" },
  { title: "ali" },
  { title: "Reservoir Dogs" },
  { title: "Braveheart" },
  { title: "Eternal Sunshine of the Spotless Mind", year: 2004 },
  { title: "Amadeus" },
  { title: "To Kill a Mockingbird" },
];
