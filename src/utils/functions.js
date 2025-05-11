import { toast } from "react-toastify";

const textMaxLength = (text="", max = 110) => {
    if (text.length > max) return text.slice(0, max - 5) + " ..."
    else return text
}

const customToast = (type, message) => {
    toast[type](message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: false,
        closeButton: false,
        className: "font-iranSans dir-rtl shadow-[#F0F3F61A] shadow-md w-fit flex justify-center bg-dark-gray text-white rounded-2xl text-sm md:text-base max-md:mt-2 px-3 py-0"
    });
};

export {
    textMaxLength,
    customToast
}