import { Nav, NavItem, NavLink } from "reactstrap";
import { useNavigate } from "react-router-dom";

export default function Sefer() {
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
      <h3>Sefer</h3>
    </div>
  );
}
