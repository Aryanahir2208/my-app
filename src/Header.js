import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Link to="./">HomePage</Link> &nbsp;
      <Link to="./Contact">Contact Page</Link> &nbsp;
      <Link to="./Facultyname">Faculty Name</Link> &nbsp;
      <Link to="./Faculty10Exp">10+ Years Experience Faculty</Link> &nbsp;
      <Link to="./Facultydesign">All Faculty Design</Link> &nbsp;
      <Link to="./Faculties"></Link> &nbsp;
    </>
  );
}

export default Header;
