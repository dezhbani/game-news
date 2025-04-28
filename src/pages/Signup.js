import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { ProfileContext } from '../contexts/UserContext';
import SignupForm from '../components/auth/SignupForm';

const Signup = () => {
    const user = useContext(ProfileContext)
    
    if (user) return <Navigate replace to="/" />
    return (
        <div className="min-h-screen font-iranYekan flex flex-col bg-cover z-0 bg-center bg-no-repeat homeBg relative dir-rtl">
            <div className="absolute z-10 inset-0 bg-dark-gray bg-opacity-90 opacity-80"></div>
            <div className="relative z-10 flex flex-col flex-grow mx-24 my-5 items-center justify-center">
                <SignupForm />
            </div>
        </div>
    );
};

export default Signup;