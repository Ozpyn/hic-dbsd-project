import React, { useState } from "react";
import Cookies from 'js-cookie';
import { NavLink } from "../components/NavbarElements";

const PayCalc = () => {
    // Retrieve values from cookies or default to 0 if not found
    const vehVal = parseFloat(Cookies.get('vehicle-value')) || 0;
    const tradVal = parseFloat(Cookies.get('trade-in-value')) || 0;

    // State variables for loan amount, interest rate, and loan term
    const [loanAmount, setLoanAmount] = useState(0);
    const [interestRate, setInterestRate] = useState(0);
    const [loanTerm, setLoanTerm] = useState(0);

    // Function to calculate monthly payment
    const calculateMonthlyPayment = () => {
        const principal = loanAmount;
        const monthlyInterestRate = interestRate / 100 / 12;
        const numberOfPayments = loanTerm * 12;
        const numerator = principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);
        const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;
        return (numerator / denominator).toFixed(2);
    };

    return (
        <section>
            <h2>Payment Calculator</h2>

            <dl>
                <dt>Vehicle Value:</dt>
                <dd>{vehVal}</dd>

                <dt>Trade-In Value:</dt>
                <dd>{tradVal}</dd>

                <dt>Remaining Value:</dt>
                <dd>{vehVal - tradVal}</dd>

                <dt>Loan Amount:</dt>
                <dd>
                    <input type="number" value={loanAmount} onChange={(e) => setLoanAmount(parseFloat(e.target.value))} />
                </dd>

                <dt>Interest Rate (%):</dt>
                <dd>
                    <input type="number" value={interestRate} onChange={(e) => setInterestRate(parseFloat(e.target.value))} />
                </dd>

                <dt>Loan Term (years):</dt>
                <dd>
                    <input type="number" value={loanTerm} onChange={(e) => setLoanTerm(parseFloat(e.target.value))} />
                </dd>

                <dt>Monthly Payment:</dt>
                <dd>
                    {isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm) ? (
                        <span>Please enter valid values.</span>
                    ) : (
                        <span>${calculateMonthlyPayment()}</span>
                    )}
                </dd>
            </dl>
        </section>
    );
};

export default PayCalc;
