import React from "react";
import Cookies from 'js-cookie';

const tradVal = Cookies.get('trade-in-value');
const vehVal = Cookies.get('vehicle-value');
 
const PayCalc = () => {
    return (
        <div>
            <p>Vehicle Value:</p> 
            <p>Trade-In Value:</p> 
            {/* Values to be stored in cookies from trade-in page and purchase page */}
            <p>Remaining value:</p>
        </div>
    );
};
 
export default PayCalc;