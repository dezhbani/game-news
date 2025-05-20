import { customToast } from "../utils/functions"

const signup = async data => {
    const copyData = JSON.parse(JSON.stringify(data))
    if (!localStorage.getItem('users')) localStorage.setItem('users', JSON.stringify([]))

    let users = JSON.parse(localStorage.getItem('users'))
    const findUser = users.filter(user => user.email == copyData.email)
    if (findUser.length) return customToast("error", "ایمیل وارد شده وجود دارد")

    const lastUserIndex = users.length - 1
    const newID = users[lastUserIndex]?.id + 1
    copyData.id = users.length ? newID : 1
    delete copyData['repeatPassword']
    users.push(copyData)
    const strUsers = JSON.stringify(users)

    localStorage.setItem("users", strUsers)
    const strCurrentUser = JSON.stringify(copyData)

    localStorage.setItem("currentUser", strCurrentUser)
    setTimeout(() => {
        window.location.replace("/")
        localStorage.setItem('showTooltipOnHome', 'true');
    }, 3000);
    return true
}

const login = async data => {
    const copyData = JSON.parse(JSON.stringify(data))
    if (!localStorage.getItem('users')) localStorage.setItem('users', JSON.stringify([]))

    let users = JSON.parse(localStorage.getItem('users'))
    const findUser = users.filter(user => user.email == copyData.email)

    if (!findUser.length) return customToast("error", "ایمیل وارد شده وجود ندارد")
    else if (findUser[0].password !== copyData.password) return customToast("error", "ایمیل یا رمز وارد شده صحیح نیست")

    const strCurrentUser = JSON.stringify(findUser[0])
    localStorage.setItem("currentUser", strCurrentUser)
    setTimeout(() => {
        window.location.replace("/")
        localStorage.setItem('showTooltipOnHome', 'true');
    }, 3000);
    return true
}

export {
    signup,
    login
}