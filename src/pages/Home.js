import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

function Home() {
  const [value, setValue] = React.useState(() => dayjs("07-30-2022"));

  const navigate = useNavigate();

  return (
    <div>
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

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          onChange={(newValue) => setValue(newValue)}
          inputFormat="DD-MM-YYYY"
          value={value}
          renderInput={(params) => <TextField {...params} />}
          componentsProps={{
            actionBar: {
              actions: ["today"],
            },
          }}
        />
      </LocalizationProvider>
    </div>
  );
}

export default Home;
