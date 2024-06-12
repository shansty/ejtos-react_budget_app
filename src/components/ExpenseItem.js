import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = (name) => {
        const expense = {
            name: name,
            cost: 5,
        };

        dispatch({
            type: 'DELETE_EXPENSE_10',
            payload: expense,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency.charAt(0)}{props.cost}</td>
        <td><button onClick={() => increaseAllocation(props.name)}><FontAwesomeIcon icon={faPlusCircle} style={{ color: 'green', fontSize: '2em', border: 'none'  }} /></button></td>
        <td><button onClick={() => handleDeleteExpense(props.name)}><FontAwesomeIcon icon={faMinusCircle} style={{ color: 'red', border: 'none', fontSize: '2em'  }} /></button></td>
        </tr>
    );
};

export default ExpenseItem;
