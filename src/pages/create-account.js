import { sendAccountData, FormContainer, FormBox, CreateAccountHeader, InputBox, StateBox, CreateAccountButtonContainer, CreateAccountButton } from "../components/SignInElements";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const CreateAccount = () => {
    const [email, setEmail] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [street_name, setStreetName] = useState('');
    const [street_number, setStreetNumber] = useState('');
    const [apartment_number, setApartmentNumber] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [phone_numbers, setPhoneNumbers] = useState([{number: '', type: ''}]);


    const newUserData = {
        email,
        first_name,
        last_name, 
        street_name,
        street_number: parseInt(street_number),
        apartment_number: apartment_number ? parseInt(apartment_number) : null,
        city,
        state,
        zip: parseInt(zip),
        phone_numbers: phone_numbers.map(phone => phone.number),
        phone_types: phone_numbers.map(phone => phone.type)
    };

    const handlePhoneNumberChange = (index, key, value) => {
        const updatedPhoneNumbers = [...phone_numbers];
        updatedPhoneNumbers[index][key] = value;
        setPhoneNumbers(updatedPhoneNumbers);
    };

    const addPhoneNumber = () => {
        setPhoneNumbers([...phone_numbers, { number: '', type: 'home' }]);
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await sendAccountData(newUserData);
            alert('Account created successfully');
            navigate('/');
        }
        catch(error) {
            console.error("Error creating new account: ", error);
        }
    };

    return (
        <FormContainer>
            <FormBox>
                <CreateAccountHeader>
                    <h1>Create Account</h1>
                </CreateAccountHeader>

                <form onSubmit={handleSubmit}>
                    <label htmlFor='email'>Email:</label>
                    <InputBox
                        type='email'
                        placeholder='email@email.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <br/>

                    <label htmlFor='password'>Password:</label>
                    <InputBox
                        type='password'
                        placeholder='password'
                        required
                    />
                    <br/>

                    <label htmlFor='first name'>First Name:</label>
                    <InputBox
                        type='text'
                        placeholder='first name'
                        value={first_name}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                    <br/>

                    <label htmlFor='last name'>Last Name:</label>
                    <InputBox
                        type='text'
                        placeholder='last name'
                        value={last_name}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                    <br/>

                    {phone_numbers.map((phone, index) => (
                        <div key={index}>
                            <label htmlFor={`phone_number_${index}`}>Phone Number:</label>
                            <InputBox
                                type='tel'
                                placeholder='111-111-1111'
                                value={phone.number}
                                onChange={(e) => handlePhoneNumberChange(index, "number", e.target.value)}
                                required
                            />

                            <br/>
                            <label htmlFor={`phone_type_${index}`}>Phone Type:</label>
                            <StateBox value={phone.type} onChange={(e) => handlePhoneNumberChange(index, 'type', e.target.value)}>
                                <option value="">Select an option</option>
                                <option value="HOME">Home</option>
                                <option value="MOBILE">Mobile</option>
                            </StateBox>
                            <br/>
                        </div>
                    ))}
                    <button type="button" onClick={addPhoneNumber}>Add Phone Number (optional)</button>
                    <br/>

                    <label htmlFor='street name'>Street Name:</label>
                    <InputBox
                        type='text'
                        placeholder='street name'
                        value={street_name}
                        onChange={(e) => setStreetName(e.target.value)}
                        required
                    />
                    <br/>

                    <label htmlFor='street number'>Street Number:</label>
                    <InputBox
                        type='number'
                        placeholder='street number'
                        value={street_number}
                        onChange={(e) => setStreetNumber(e.target.value)}
                        required
                    />
                    <br/>

                    <label htmlFor='apartment number'>Apartment Number:</label>
                    <InputBox
                        type='number'
                        placeholder='apartment number'
                        value={apartment_number}
                        onChange={(e) => setApartmentNumber(e.target.value)}
                    />
                    <br/>

                    <label htmlFor='city'>City:</label>
                    <InputBox
                        type='text'
                        placeholder='city'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    />
                    <br/>

                    <label htmlFor="state">State:</label>
                    <StateBox id="state" value={state} onChange={(e) => setState(e.target.value)} required>
                        <option value="">Select State</option>
                        <option value="Alabama">Alabama</option>
                        <option value="Alaska">Alaska</option>
                        <option value="Arizona">Arizona</option>
                        <option value="Arkansas">Arkansas</option>
                        <option value="California">California</option>
                        <option value="Colorado">Colorado</option>
                        <option value="Connecticut">Connecticut</option>
                        <option value="Delaware">Delaware</option>
                        <option value="Florida">Florida</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Hawaii">Hawaii</option>
                        <option value="Idaho">Idaho</option>
                        <option value="Illinois">Illinois</option>
                        <option value="Indiana">Indiana</option>
                        <option value="Iowa">Iowa</option>
                        <option value="Kansas">Kansas</option>
                        <option value="Kentucky">Kentucky</option>
                        <option value="Louisiana">Louisiana</option>
                        <option value="Maine">Maine</option>
                        <option value="Maryland">Maryland</option>
                        <option value="Massachusetts">Massachusetts</option>
                        <option value="Michigan">Michigan</option>
                        <option value="Minnesota">Minnesota</option>
                        <option value="Mississippi">Mississippi</option>
                        <option value="Missouri">Missouri</option>
                        <option value="Montana">Montana</option>
                        <option value="Nebraska">Nebraska</option>
                        <option value="Nevada">Nevada</option>
                        <option value="New Hampshire">New Hampshire</option>
                        <option value="New Jersey">New Jersey</option>
                        <option value="New Mexico">New Mexico</option>
                        <option value="New York">New York</option>
                        <option value="North Carolina">North Carolina</option>
                        <option value="North Dakota">North Dakota</option>
                        <option value="Ohio">Ohio</option>
                        <option value="Oklahoma">Oklahoma</option>
                        <option value="Oregon">Oregon</option>
                        <option value="Pennsylvania">Pennsylvania</option>
                        <option value="Rhode Island">Rhode Island</option>
                        <option value="South Carolina">South Carolina</option>
                        <option value="South Dakota">South Dakota</option>
                        <option value="Tennessee">Tennessee</option>
                        <option value="Texas">Texas</option>
                        <option value="Utah">Utah</option>
                        <option value="Vermont">Vermont</option>
                        <option value="Virginia">Virginia</option>
                        <option value="Washington">Washington</option>
                        <option value="West Virginia">West Virginia</option>
                        <option value="Wisconsin">Wisconsin</option>
                        <option value="Wyoming">Wyoming</option>
                    </StateBox>
                    <br/>

                    <label htmlFor='zip'>ZIP:</label>
                    <InputBox
                        type='number'
                        placeholder='zip'
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        required
                    />
                    <br/>
                    <CreateAccountButtonContainer>
                        <CreateAccountButton type='submit' onSubmit={handleSubmit}>Create Account</CreateAccountButton>
                    </CreateAccountButtonContainer>
                </form>
            </FormBox>
        </FormContainer>
    );
};

export default CreateAccount;