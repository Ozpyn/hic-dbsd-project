import React, { useState } from "react";
import Cookies from 'js-cookie';
import styled from "styled-components";
// import { NavLink } from "../components/NavbarElements";
// Navigation not needed?

export const CalculatorFrame = styled.div`
    width: 35%; /* Use template literal syntax to interpolate props */
    margin: 20px auto; /* Center horizontally */
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
`;

const PayCalc = () => {
    // Retrieve values from cookies or default to 0 if not found
    const vehVal = parseFloat(Cookies.get('vehicle-value')) || 0;
    const tradVal = parseFloat(Cookies.get('trade-in-value')) || 0;

    // State variables for loan amount, interest rate, and loan term
    const [loanAmount, setLoanAmount] = useState(0);
    const [interestRate, setInterestRate] = useState(0);
    const [loanTerm, setLoanTerm] = useState(0);
    const [fixedPayment, setFixedPayment] = useState(false);
    const [monthlyPayment, setMonthlyPayment] = useState(0);

    // Function to calculate monthly payment with fixed payment
    const calculateMonthlyPayment = () => {
        if (fixedPayment) {
            // Calculate loan term based on fixed payment
            const monthlyInterestRate = interestRate / 100 / 12;
            const numberOfPayments = Math.log(monthlyPayment / (monthlyPayment - loanAmount * monthlyInterestRate)) / Math.log(1 + monthlyInterestRate);
            return { monthlyPayment: monthlyPayment.toFixed(2), totalPayments: Math.ceil(numberOfPayments) };
        } else {
            // Calculate monthly payment with flexible term
            const principal = loanAmount;
            const monthlyInterestRate = interestRate / 100 / 12;
            const numberOfPayments = loanTerm * 12;
            const numerator = principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);
            const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;
            return { monthlyPayment: (numerator / denominator).toFixed(2), totalPayments: numberOfPayments };
        }
    };

    // Function to calculate loan term based on fixed payment
    const calculateLoanTerm = () => {
        const monthlyInterestRate = interestRate / 100 / 12;
        const numberOfPayments = Math.log(monthlyPayment / (monthlyPayment - loanAmount * monthlyInterestRate)) / Math.log(1 + monthlyInterestRate);
        return (numberOfPayments / 12).toFixed(2);
    };

    return (
        <CalculatorFrame>
            <h2>Payment Calculator</h2>
            <div>
                <label>
                    <input type="checkbox" checked={fixedPayment} onChange={() => setFixedPayment(!fixedPayment)} />
                    Fixed Payment Flexible Term
                </label>
            </div>
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

                {!fixedPayment && (
                    <React.Fragment>
                        <dt>Loan Term (years):</dt>
                        <dd>
                            <input type="number" value={loanTerm} onChange={(e) => setLoanTerm(parseFloat(e.target.value))} />
                        </dd>
                    </React.Fragment>
                )}

                {fixedPayment && (
                    <React.Fragment>
                        <dt>Monthly Payment:</dt>
                        <dd>
                            <input type="number" value={monthlyPayment} onChange={(e) => setMonthlyPayment(parseFloat(e.target.value))} />
                        </dd>
                    </React.Fragment>
                )}

                <dt>{fixedPayment ? 'Loan Term (years):' : 'Monthly Payment:'}</dt>
                <dd>
                    {fixedPayment ? (
                        <span>{calculateLoanTerm()}</span>
                    ) : (
                        isNaN(loanAmount) || isNaN(interestRate) || (!fixedPayment && isNaN(loanTerm)) ? (
                            <span>Please enter valid values.</span>
                        ) : (
                            <React.Fragment>
                                <span>${calculateMonthlyPayment().monthlyPayment}</span>
                                <br />
                                <span>Total Number of Payments: {calculateMonthlyPayment().totalPayments}</span>
                            </React.Fragment>
                        )
                    )}
                </dd>
            </dl>
        </CalculatorFrame>
    );
};

export default PayCalc;
