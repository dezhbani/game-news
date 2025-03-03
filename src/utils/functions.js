const textMaxLength = (text="", max = 110) => {
    console.log(text.length);
    
    if (text.length > max) return text.slice(0, max) + "..."
    else return text
}

export {
    textMaxLength
}