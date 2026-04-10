import React, { createContext } from 'react';
export const SSRContext = createContext({
    uniqId: null,
});
export const SSRProvider = ({ children, noSSR: _noSSR }) => {
    const value = {
        uniqId: 0,
    };
    if (_noSSR) {
        return React.createElement(React.Fragment, null, children);
    }
    return React.createElement(SSRContext.Provider, { value: value }, children);
};
