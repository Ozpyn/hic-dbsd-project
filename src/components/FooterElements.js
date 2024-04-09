import styled from "styled-components";


export const Footer = styled.footer`
    background-color: #666; 
    color: #fff;
    padding: 50px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 768px) {
        height: auto;
        flex-direction: column;
        align-items: flex-start;
    }
    `;