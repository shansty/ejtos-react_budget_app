import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Select from 'react-select';

const Currency = (props) => {
    let { dispatch } = useContext(AppContext);
    const [value, setValue] = useState({ value: '$ Dollar', label: 'Currency ($ Dollar)' }); // Установка значения по умолчанию

    const handleCurrencyChange = (selectedOption) => {
        setValue({value: selectedOption.value, label: `Currency (${selectedOption.label})`}); // Обновление выбранного значения
        console.dir(selectedOption);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: selectedOption.value,
        });
    };

    const customStyles = {
        control: (provided) => ({
            ...provided,
            backgroundColor: 'lightgreen',
            padding: "10px",
            color: "white",
        }),
        singleValue: (provided) => ({
            ...provided,
            color: "white",
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? 'white' : 'lightgreen',
            color: state.isFocused ? '#333' : '#000',
        }),
    };

    const options = [
        { value: '$ Dollar', label: '$ Dollar' },
        { value: '£ Pound', label: '£ Pound' },
        { value: '€ Euro', label: '€ Euro' },
        { value: '₹ Ruppee', label: '₹ Ruppee' },
    ];

    return (
        <div>
            <Select
                styles={customStyles}
                options={options}
                onChange={handleCurrencyChange}
                value={value}
            />
        </div>
    );
};

export default Currency;