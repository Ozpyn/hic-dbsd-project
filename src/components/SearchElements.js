import React, { useState } from "react";
import styled from "styled-components";
import env from "react-dotenv";
import axios from "axios";

const apiUrl = env.APIURL;


/* style for the search bar */
const SearchContainer = styled.div`
    display: flex;
    background-color: #fff;
    border-radius: 5px;
    padding: 8px 40px;
    margin-left: 5%;
    justify-content: flex-end;
    align-items: center;
`;

/* style for the text input */
const SearchInput = styled.input`
        flex: 1;
        border: none;
        background: none;
        outline: none;   
        padding: 5px;   
        margin-left: -10%;
        margin-right: 5%;
        font-size: 16px;
`;

/* location to have the button redirect to for now */ 
const RedirectToSearchPage = () => {
    window.location.href="/search"
};

/* style for the search button */
const SearchButton = () => {
    return(
        <button onClick={RedirectToSearchPage}
        style= {{
            backgroundColor: "#007bff",
            color: "white",
            float: "left",
            width: "40%",
            border: "none",
            borderRadius: "5px",
            padding: "10px 25px",
            margin: "auto",
            cursor: "pointer",
            marginRight: "-10%",
        }}
        >
        Search</button>
    );
};


export const searchForVehicles = async (searchQuery) => {
    try {
        const response = await axios.get(`${apiUrl}/searchForVehicles?search=${encodeURIComponent(searchQuery)}`);
        const vehicleData = response.data;  
        return vehicleData;
    }
    catch (error) {
        throw new Error('ERROR fetching vehicle data:', error);
    }
};


export const ListOfAllVehicles = async () => {
    try {
        const response = await axios.get(`${apiUrl}/getAllVehicles`);
        const data = response.data;
        return data;
    } catch (error) {
        console.error('Error fetching vehicle data:', error);
    }
};


export const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        if (searchQuery.trim() !== '') {
            window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
        }
    };

    const handleKeyPress = (keyPress) => {
        if(keyPress.key === 'Enter') {
            handleSearch();
        }
    };

    const handleSearchSubmission = (event) => {
        event.preventDefault();
        handleSearch();
    };


    return (
        <div>
            <form onSubmit={handleSearchSubmission}>
                <SearchContainer>
                    <SearchInput 
                        type="text" 
                        placeholder="Search For Vehicles"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleKeyPress}
                    />
                    <SearchButton/>
                </SearchContainer>
            </form>
        </div>
    );
};