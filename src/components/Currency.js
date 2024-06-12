import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props) => {
    let { dispatch } = useContext(AppContext);
    const [value, setValue] = useState("$ Dollar");

    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
        setValue(event.target.value);
      };

    return (
        <div>
    <div className='row'>
        <style>
            {`
                option:hover {
                background-color: yellow;
                }

            `}
        </style>
        <div className="input-g">
            <label htmlFor="currency" >Currency:</label>
            <select onfocus='this.size=10;' onblur='this.size=0;' onchange='this.size=1; this.blur();'>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>

            {/* <select id="currency"  value={value} onChange={handleCurrencyChange} onfocus='this.size=10;' onblur='this.size=0;' onchange='this.size=1; this.blur();'>
                <option defaultValue value="$ Dollar" name="Dollar" >$ Dollar</option>
                <option value="£ Pound" name="Pound" >£ Pound</option>
                <option value="€ Euro" name="Euro" >€ Euro</option>
                <option value="₹ Ruppee" name="Ruppee" >₹ Ruppee</option>
            </select> */}
        </div>
    </div>
</div>
    )};


export default Currency;
