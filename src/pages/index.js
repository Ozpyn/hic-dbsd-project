import React from "react";
 
const Home = () => {
    const footerStyle = {
        backgroundColor: '#666', 
        color: '#fff',
        padding: '50px',
        textAlign: 'center',
        position: 'fixed',
        bottom: '0',
        width: '100%',
        boxSizing: 'border-box'
    };

    return (
        <div>
            <h1>Welcome to Online Dealership</h1>
            <div style={footerStyle}>
                <p>&copy; 2024 Car Dealership</p>
            </div>
        </div>

    );
};
 
export default Home;