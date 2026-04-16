import React, { useState } from 'react';
import { QuickCheckInContext } from './QuickCheckInContext';

const QuickCheckInProvider = ({children}) => {
    const [checkIn, setCheckIn] = useState([]);
    const data = {
        checkIn,
        setCheckIn
    }
    return (
        <QuickCheckInContext.Provider value={data}>
            {children}
        </QuickCheckInContext.Provider>
    );
};

export default QuickCheckInProvider;