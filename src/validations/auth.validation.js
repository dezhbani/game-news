import { customToast } from "../utils/functions";

const emailValidation = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return customToast('error', "ایمیل نمیتواند خالی باشد")
    else if(!emailRegex.test(email))  return customToast("error", "ایمیل وارد شده صحیح نیست")
    return true
}
const passwordValidation = password => {
    const passwordRegex = /^[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password) return customToast("error", "پسورد نمی‌تواند خالی باشد");
    else if (!passwordRegex.test(password)) return customToast("error", "پسورد باید حداقل 8 کاراکتر و شامل حروف، اعداد و کاراکترهای خاص باشد");
    return true
}

export {
    emailValidation,
    passwordValidation
}