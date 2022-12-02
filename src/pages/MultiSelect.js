import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const options = [
  { value: "Adana", label: "Adana 01" },
  { value: "Denizli", label: "Denizli 20" },
  { value: "Diyarbakır", label: "Diyarbakır 21" },
  { value: "Ağrı", label: "Ağrı 04" },
  { value: "Istanbul", label: "Istanbul 34" },
  { value: "Angara", label: "Angara 06" },
  { value: "Antalya", label: "Antalya 07" },
  { value: "Izmir", label: "Izmir 35" },
];

export default function MultiSelect() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const navigate = useNavigate();

  const handleSelect = () => {
    console.log(selectedOptions);
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
      <Select
        defaultValue={[options[3]]}
        components={animatedComponents}
        isMulti
        options={options}
        onChange={(item) => setSelectedOptions(item)}
        className="select"
        isClearable={true}
        isSearchable={true}
        isDisabled={false}
        isLoading={false}
        isRtl={false}
        closeMenuOnSelect={true}
      />

      <button onClick={handleSelect}>Imprimir itens</button>
    </>
  );
}
