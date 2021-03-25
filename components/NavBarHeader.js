import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Link from "next/link";

const NavBarHeader = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Link href='/'>
        <Navbar.Brand href='#home'>Annmarie's writhing service </Navbar.Brand>
      </Link>

      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='ml-auto'>
          <Link href='/features'>
            <Nav.Link href='#features'>Features</Nav.Link>
          </Link>

          <NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
            <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#action/3.4'>
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href='#pricing'>Pricing</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarHeader;
