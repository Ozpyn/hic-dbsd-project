import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: #007bff;
    height: 85px;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
`;

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #acacac;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #808080;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    /* Second Nav */
    /* margin-right: 24px; */
    /* Third Nav */
    /* width: 100vw;
white-space: nowrap; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;


/* style for the search bar */
export const SearchContainer = styled.div`
    display: flex;
    position: fixed;
    background-color: #fff;
    border-radius: 5px;
    padding: 8px 40px;
    margin-left: 55%;
    justify-content: space-between;
    align-items: center;
`;

/* style for the text input */
export const SearchInput = styled.input`
    flex: 1;
    border: none;
    background: none;
    outline: none;
    padding: 5px;   
    font-size: 16px;
    margin-right: 20%;
    margin-left: -12%;
`;

/* location to have the button redirect to for now */ 
export const RedirectToSearchPage = () => {
    window.location.href="/search"
};

/* style for the search button */
export const SearchButton = () => {
    return(
        <button onClick={RedirectToSearchPage}
        style= {{
            backgroundColor: "#007bff",
            color: "white",
            float: "left",
            width: "30%",
            border: "none",
            borderRadius: "5px",
            padding: "10px 20px",
            margin: "auto",
            cursor: "pointer",
        }}
        >
        Search</button>
    );
};