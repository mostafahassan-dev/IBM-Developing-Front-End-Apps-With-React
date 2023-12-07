import React, { useContext, useState } from 'react';
import { AppContext  } from '../context/AppContext';

const Budget = () => {
    const { dispatch, remaining ,currency} = useContext(AppContext);
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const upperLimitValue = 20000

    const handleBudgetChange = (e) => {
        setNewBudget(e.target.value);
    }
    const handleKeyDown = (e) => {
        if ( e.key === 'Enter' && newBudget <= upperLimitValue) {
          dispatch({ type: "SET_BUDGET", payload: newBudget });
        }else if (newBudget > upperLimitValue) {
            alert("The value cannot exceed remaining funds  £"+remaining);   
        }
      };
      

    return (
        <div className="alert alert-secondary ">
            <label>Budget: {currency}</label>
            <input
                className='w-50 ms-1'
                required
                type="number"
                id="cost"
                step={10}
                value={newBudget}
                onChange={handleBudgetChange}
                onKeyDown={handleKeyDown}
            />
    </div>

    );
};
export default Budget;