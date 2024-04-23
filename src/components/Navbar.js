import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import { SearchBar } from "./SearchElements";
// import { ThemeProvider } from "@mui/material/styles"
// import Button from "@mui/material/Button"

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/saved-vehicles">
                        Saved Vehicles
                    </NavLink>
                    <NavLink to="/trade-calc">
                        Trade-In
                    </NavLink>
                    <NavLink to="/pay-calc">
                        Payment Calculator
                    </NavLink>
                    <NavLink to="/sign-in">
                        Sign In / Sign Up
                    </NavLink>
                    <NavLink to="/ownership">
                        Ownership
                    </NavLink>

                    <SearchBar/>

                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;