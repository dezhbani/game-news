import React, { createContext, useEffect, useState } from 'react';

export const ProfileContext = createContext()

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const getUserProfile = () => {
        const userProfile = localStorage.getItem("currentUser")
        if (userProfile) {
            const parseUser = JSON.parse(userProfile)
            setUser(parseUser)
        }
    }
    useEffect(() => {
        getUserProfile()
    }, [])
    return (
        <ProfileContext.Provider value={user}>
            {children}
        </ProfileContext.Provider>
    );
};

export default UserContext;