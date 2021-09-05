import { StyledHeader } from "./styles";
import { Navbar } from "../../components/Navbar";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <StyledHeader>
      <Navbar>
        <Link to="/">crashpad</Link>
      </Navbar>
    </StyledHeader>
  );
}
