import React from "react";
import Cookies from 'js-cookie';
import { NavLink } from "../components/NavbarElements";


const PayCalc = () => {
    // Retrieve values from cookies or default to 0 if not found
    const tradVal = Cookies.get('trade-in-value') || 0;
    const vehVal = Cookies.get('vehicle-value') || 0;

    return (
        <section>
            <h2>Payment Calculator</h2>

            <dl>
                <dt>Vehicle Value:</dt>
                <dd>{vehVal}</dd>

                <dt>Trade-In Value:</dt>
                <dd>{tradVal}</dd>

                <dt>Remaining value:</dt>
                {/* Check if either of the values is 0 */}
                <dd>
                    {vehVal === 0 || tradVal === 0 ? (
                        <>
                            <span>
                                Values not found.
                            </span>
                            <NavLink to="/purchase" activeStyle>
                                Purchase Vehicle
                            </NavLink>
                            <NavLink to="/trade-calc" activeStyle>
                                Trade In Vehicle
                            </NavLink>
                        </>
                    ) : (
                        // Calculation logic for remaining value goes here
                        <span>{vehVal - tradVal}</span>
                    )}
                </dd>
            </dl>
        </section>
    );
};

export default PayCalc;
