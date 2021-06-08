import React, { useState } from "react";
import { Provider, History } from 'react-history-search';
import 'react-history-search/dist/index.css';
 
export const Main = ({inputValue,onChange}) => {

    const [value, setValue] = useState(inputValue);

    const handleSearch = (value) => {
        onChange(value);
    };
    return (
        <Provider value={{
        limitHistory: 5,
        handleSearch,
        isEnterDown: true,
        }}>
            <History isRemoveHistory onClick={(value) => {setValue(value)}} isHint isTabFill>
                <input value={value} onChange={(e) => setValue(e.target.value)} id="some-id"/>
            </History>
        </Provider>
    );
};