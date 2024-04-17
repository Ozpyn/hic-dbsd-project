import React from "react";
import { Nav, NavLink, NavMenu, SearchContainer, SearchInput, SearchButton } from "./NavbarElements";
import { ThemeProvider } from "@mui/material/styles"
import Button from "@mui/material/Button"

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/saved-vehicles" activeStyle>
                        Saved Vehicles
                    </NavLink>
                    <NavLink to="/trade-calc" activeStyle>
                        Trade-In
                    </NavLink>
                    <NavLink to="/pay-calc" activeStyle>
                        Payment Calculator
                    </NavLink>
                    <NavLink to="/sign-in" activeStyle>
                        Sign In / Sign Up
                    </NavLink>
                    <NavLink to="/ownership" activeStyle>
                        Ownership
                    </NavLink>

                    <SearchContainer>
                        <SearchInput type="text" 
                                     placeholder="Search For Vehicles"
                        />
                        <SearchButton/>
                    </SearchContainer>

                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;