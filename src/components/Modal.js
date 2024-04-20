// import styled from "styled-components";
import React from "react";

const Modal = ({ isOpen, children }) => {
    if (!isOpen) return null;
 
    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.1)",
                display: "flex",
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    background: "white",
                    margin: "auto",
                    padding: "2%",
                    border: "1px solid #000",
                    borderRadius: "5px",
                    boxShadow: "1px solid black",
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;