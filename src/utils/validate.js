// export const checkValidData = (email,password,fullname) =>{
//     const isFullNameValid = /^[A-Za-z]+([\ A-Za-z]+)*/.test(fullname)
//     const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.+[a-zA-Z]{2,})$/.test(email);
//     const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
//     if(!isFullNameValid) return "Full name is wrong";
//     if(!isEmailValid) return "Email Id is not valid";
//     if(!isPasswordValid) return "Password is not Valid";

//     return null;
// };

export const checkValidData = (email, password, fullname, contact) => {
    const isFullNameValid = /^[A-Za-z]+(\[A-Za-z]+)*/.test(fullname);
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.+[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
    const isContactValid = /^\d{10}$/.test(contact);
    
    if (!isFullNameValid) return "Full name is wrong";
    if (!isEmailValid) return "Email is not valid";
    if (!isPasswordValid) return "Password is not valid";
    if (!isContactValid) return "Contact number is wrong";

    return null;
};
