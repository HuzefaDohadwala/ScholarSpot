import React, { createContext, useContext, useState } from 'react';

const SignupDataContext = createContext();

export const useSignupData = () => {
    return useContext(SignupDataContext);
}

export const SignupDataProvider = ({ children }) => {
    const [signupData, setSignupData] = useState({});

    return (
        <SignupDataContext.Provider value={{ signupData, setSignupData }}>
            {children}
        </SignupDataContext.Provider>
    );
}
