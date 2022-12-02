import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Nav,NavItem,NavLink} from "reactstrap";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const options = [
  { value: "produto 01", label: "Produto 01" },
  { value: "produto 02", label: "Produto 02" },
  { value: "produto 03", label: "Produto 03" },
  { value: "produto 04", label: "Produto 04" },
  { value: "produto 05", label: "Produto 05" },
  { value: "produto 06", label: "Produto 06" },
  { value: "produto 07", label: "Produto 07" },
  { value: "produto 08", label: "Produto 08" },
];

export default function Deneme() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const navigate=useNavigate();

  const handleSelect = () => {
    console.log(selectedOptions);
  };

  return (
    <>
      <Nav tabs>

<NavItem>
  <NavLink onClick={()=>navigate("/deneme")}>Deneme</NavLink>
</NavItem>
<NavItem>
  <NavLink onClick={()=>navigate("/")}>Log out</NavLink>
</NavItem>
</Nav>
      <Select
        defaultValue={[options[0], options[2]]}
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
        closeMenuOnSelect={false}
      />

      <button onClick={handleSelect}>Imprimir itens</button>
    </>
  );
};