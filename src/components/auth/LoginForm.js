import React, { useState } from 'react';
import { emailValidation } from '../../validations/auth.validation';
import { login } from '../../services/auth.service';
import { Link } from 'react-router-dom';

//Images
import logo from '../../assets/Logo.svg'
import { customToast } from '../../utils/functions';
import SmileIcon from '../../assets/icons/SmileIcon';
import LoadingButton from '../../modules/LoadingButton';

const LoginForm = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const [loading, setLoading] = useState(false)

    const handleChange = e => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const result = emailValidation(data.email)
        if (result) {
            const loginResult = await login(data)
            if (loginResult) {
                customToast(null,
                    <div className="flex items-center gap-2">
                        <SmileIcon />
                        <span>خوش اومدی! ورود موفقیت‌آمیز بود</span>
                    </div>
                )
                return setTimeout(() => setLoading(false), 4000);
            } else setLoading(false)
        } else setLoading(false)
    }

    return (
        <form className="w-full m-auto space-y-10 max-w-lg p-8 dir-rtl bg-dark-gray bg-opacity-85 rounded-2xl shadow-[#ffffff16] shadow-[1px_1px_30px_10px] ">
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
                    disabled={loading}
                    className="w-full h-12 text-lg text-white px-3 py-2 rounded-md focus:outline-none disabled:opacity-50 bg-[#35384d]"
                />
                <input
                    type="password"
                    name="password"
                    required
                    onChange={handleChange}
                    value={data.password}
                    autoComplete='none'
                    placeholder='رمز عبور'
                    disabled={loading}
                    className="w-full h-12 text-lg text-white px-3 py-2 rounded-md focus:outline-none disabled:opacity-50 bg-[#35384d]"
                />
            </div>

            <div className='space-y-4'>
                <LoadingButton
                    type="submit"
                    onClick={handleSubmit}
                    className="w-full h-12 py-2 px-4 bg-gradient-to-r from-[#6c5dd3] to-[#4C1D95] text-white font-semibold rounded-md disabled:opacity-80 focus:outline-none"
                    loading={loading}>
                    ورود
                </LoadingButton>
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