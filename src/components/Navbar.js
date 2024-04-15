import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

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
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;