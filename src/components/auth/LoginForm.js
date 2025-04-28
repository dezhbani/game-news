import React, { useState } from 'react';
import { emailValidation } from '../../validations/auth.validation';
import { login } from '../../services/auth.service';
import { Link } from 'react-router-dom';

//Images
import logo from '../../assets/Logo.svg'

const LoginForm = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const handleChange = e => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    }
    const handleSubmit = () => {
        const result = emailValidation(data.email)
        if (result) login(data)
    };
    return (
        <form className="w-full space-y-10 max-w-lg p-8 dir-rtl bg-dark-gray bg-opacity-85 rounded-2xl shadow-[#ffffff16] shadow-[1px_1px_30px_10px] ">
            <div className='w-full justify-center flex flex-col space-y-6'>
                <img className='h-14' src={logo} alt='logo' />
                <h2 className="text-2xl font-bold text-center text-white placeholder:text-white">ورود به حساب کاربری</h2>
            </div>
            <div className='space-y-6 mt-5'>
                <input
                    type="email"
                    name="email"
                    required
                    onChange={handleChange}
                    value={data.email}
                    autoComplete='none'
                    placeholder='ایمیل'
                    className="w-full h-12 text-lg text-white px-3 py-2 rounded-md focus:outline-none bg-[#35384d]"
                />
                <input
                    type="password"
                    name="password"
                    required
                    onChange={handleChange}
                    value={data.password}
                    autoComplete='none'
                    placeholder='رمز عبور'
                    className="w-full h-12 text-lg text-white px-3 py-2 rounded-md focus:outline-none bg-[#35384d]"
                />
            </div>

            <div className='space-y-4'>
                <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full h-12 py-2 px-4 bg-gradient-to-r from-[#6c5dd3] to-[#4C1D95] text-white font-semibold rounded-md focus:outline-none"
                >
                    ورود
                </button>
                <p className='text-[#3A8BED]'>
                    <Link to="/signup">
                        ایجاد حساب کاربری!
                    </Link>
                </p>
            </div>
        </form>
    );
};

export default LoginForm;