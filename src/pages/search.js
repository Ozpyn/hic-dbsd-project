import React, { useState } from "react";
import styled from "styled-components";

// Styled components
const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-right: 20px;
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const FilterLabel = styled.label`
  margin-bottom: 5px;
`;

const FilterSelect = styled.select`
  padding: 5px;
  margin-bottom: 10px;
`;

const FilterInput = styled.input`
  padding: 5px;
  margin-bottom: 10px;
`;

const ApplyButton = styled.button`
  padding: 10px;
  background-color: #0047ab;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #003580;
  }
`;

// Search component
const Search = () => {
  const [searchParams, setSearchParams] = useState({
    make: '',
    model: '',
    year: '',
    minPrice: '',
    maxPrice: '',
    maxMileage: ''
  });

  const makes = ["Ford", "Toyota", "Honda", "Chevrolet"]; // Dummy makes array
  const models = ["Fiesta", "Corolla", "Civic", "Camaro"]; // Dummy models array
  const years = Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i); // Years from now to 30 years ago

  const handleInputChange = (e) => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the search logic
    console.log("Applied filters:", searchParams);
  };

  return (
    <div>
      <FiltersContainer>
        <h2>Filters</h2>
        <form onSubmit={handleSubmit}>
          <FilterGroup>
            <FilterLabel htmlFor="make">Make:</FilterLabel>
            <FilterSelect id="make" name="make" onChange={handleInputChange} value={searchParams.make}>
              <option value="">All Makes</option>
              {makes.map((make, index) => (
                <option key={index} value={make}>{make}</option>
              ))}
            </FilterSelect>
          </FilterGroup>
          <FilterGroup>
            <FilterLabel htmlFor="model">Model:</FilterLabel>
            <FilterSelect id="model" name="model" onChange={handleInputChange} value={searchParams.model}>
              <option value="">All Models</option>
              {models.map((model, index) => (
                <option key={index} value={model}>{model}</option>
              ))}
            </FilterSelect>
          </FilterGroup>
          <FilterGroup>
            <FilterLabel htmlFor="year">Year:</FilterLabel>
            <FilterSelect id="year" name="year" onChange={handleInputChange} value={searchParams.year}>
              <option value="">All Years</option>
              {years.map((year, index) => (
                <option key={index} value={year}>{year}</option>
              ))}
            </FilterSelect>
          </FilterGroup>
          <FilterGroup>
            <FilterLabel htmlFor="minPrice">Min Price:</FilterLabel>
            <FilterInput id="minPrice" name="minPrice" type="number" value={searchParams.minPrice} onChange={handleInputChange} />
          </FilterGroup>
          <FilterGroup>
            <FilterLabel htmlFor="maxPrice">Max Price:</FilterLabel>
            <FilterInput id="maxPrice" name="maxPrice" type="number" value={searchParams.maxPrice} onChange={handleInputChange} />
          </FilterGroup>
          <FilterGroup>
            <FilterLabel htmlFor="maxMileage">Max Mileage:</FilterLabel>
            <FilterInput id="maxMileage" name="maxMileage" type="number" value={searchParams.maxMileage} onChange={handleInputChange} />
          </FilterGroup>
          <ApplyButton type="submit">Apply Filters</ApplyButton>
        </form>
      </FiltersContainer>
      {/* Here you can add your VehicleList component */}
    </div>
  );
};

export default Search;
