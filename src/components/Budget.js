import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    let { dispatch, budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    
    const handleBudgetChange = (event) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);
        let newBudgetValue = event.target.value;
        if(newBudgetValue >= 20000) {
          setNewBudget(newBudgetValue);
            alert("Budget limit is 20000 £");
        } else if(newBudgetValue < totalExpenses) {
          setNewBudget(newBudgetValue);
            alert("Budget is less than totalExpenses");
        } else {
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudgetValue,
            });
            setNewBudget(newBudgetValue);
        }
    }

    return (
        <div className='alert alert-secondary' style={{ display: 'flex', alignItems: 'center' }}>
        <style>
          {`
            input {
              margin-left: 0px;
              display: inline-block;
            }
  
            span {
              display: inline-block;
              margin-right: 1px;
            }
          `}
        </style>
        <span>Budget: {currency.charAt(0)}</span>
        <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} />
      </div>
    );
  };

export default Budget;
