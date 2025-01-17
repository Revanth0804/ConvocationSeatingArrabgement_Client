import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 1050;
`;

const Navbar = styled.nav`
  background-color: #05445e;
  color: white;
  display: flex;
  align-items: center;
  padding: 10px;
`;

const Logo = styled.img`
  margin-left: 2%;
  height: 50px;
`;

const Title = styled.a`
  margin-left: 1%;
  color: white;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavbarToggler = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: auto;

  &:focus {
    outline: none;
  }
`;

const NavbarTogglerIcon = styled.div`
  width: 100%;
  height: 4px;
  background-color: #ffffff;
  border-radius: 2px;
  transition: all 0.3s linear;

`;

const MenuCard = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background-color: #05445e;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);
  padding: 20px;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin-bottom: 10px;

  .nav-link {
    color: white !important;
    font-size: 1rem;
    padding: 15px;
    text-align: left;
    display: block;
    text-decoration: none;

    &:hover {
      color: #80ced7 !important;
      background-color: #033649;
      border-radius: 4px;
    }
  }
`;

const LogoutButton = styled.button`
  width: 100px;
  background-color: red;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;


const AdminHeader = ({ onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    onLogout();
    toggleMenu();
    navigate("/");
  };

  return (
    <HeaderContainer>
      <Navbar>
        <Logo src="./images/logo1.jpeg" alt="Logo" />
        <Title href="#">Convocation Seating Arrangement</Title>
        <NavbarToggler onClick={toggleMenu}>
          <NavbarTogglerIcon isOpen={menuOpen} />
          <NavbarTogglerIcon isOpen={menuOpen} />
          <NavbarTogglerIcon isOpen={menuOpen} />
        </NavbarToggler>
      </Navbar>

      <MenuCard isOpen={menuOpen}>
        <div>
          <NavList>
            <NavItem>
              <NavLink className="nav-link" to="/" onClick={toggleMenu}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link"
                to="/admindashboard"
                onClick={toggleMenu}
              >
                Admin Dashboard
              </NavLink>
            </NavItem>
            <NavItem>
              <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
            </NavItem>
          </NavList>
        </div>
      </MenuCard>
    </HeaderContainer>
  );
};

export default AdminHeader;
