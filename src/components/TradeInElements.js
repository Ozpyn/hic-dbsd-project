import { useState } from "react";
import styled from "styled-components";

export const MandMBox = styled.div`
    display: flex;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 200px;
    height: 200px;
    margin: 20px;
    flex-wrap: wrap;
    justify-content: baseline;
    padding: 20px;
`;

export const AddPhotosBox = styled.div`
    display: flex;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 200px;
    height: 200px;
    margin: 20px;
    flex-wrap: wrap;
    justify-content: baseline;
    padding: 20px;
`;

export const VehicleDetailBox = styled.div`
    display: flex;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 200px;
    height: 200px;
    margin: 20px;
    flex-wrap: wrap;
    justify-content: baseline;
    padding: 20px;
`;

export const VehicleHistoryBox = styled.div`
    display: flex;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 200px;
    height: 200px;
    margin: 20px;
    flex-wrap: wrap;
    justify-content: baseline;
    padding: 20px;
`;

export const VehicleConditionBox = styled.div`
    display: flex;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 200px;
    height: 200px;
    margin: 20px;
    flex-wrap: wrap;
    justify-content: baseline;
    padding: 20px;
`;

export function YearForm() {
    const [year, setYear] = useState("2024");

    const handleChange = (event) => {
        setYear(event.target.value)
    }

    return (
        <form>
            <select value = {year} onChange = {handleChange}>
                <option value = "2024">2024</option>
                <option value = "2023">2023</option>
                <option value = "2022">2022</option>
            </select>
        </form>
    )
}

  
export default function MakeForm() {
    const [make, setMake] = useState("N/A",);
    //const [model, setModel] = useState("N/A")
    /*
    const handleMakeChange = (event) => {
        setMake(event.target.value)
    }
    
    const handleModelChange = (event) => {
        setModel(event.target.value)
    }
    */
    return (
        <form>
            <select 
                value = {make} 
                onChange = {e => setMake(e.target.value)}
            >
                <option value = "N/A">N/A</option>
                <option value = "honda">Honda</option>
                <option value = "ford">Ford</option>
                <option value = "bmw">BMW</option>
            </select>
            {/*<p>{make}</p>*/}
        </form>
    )
}
