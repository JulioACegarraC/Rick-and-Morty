export default function Validacion(user) { // {email:"",password:""}
    const regexEmail = /\S+@\S+\.\S+/;
    const regexPass = new RegExp ("[0-9]");
    const errors = {};
    //if (!user.email) errors.email = "El E-mail es Obligatorio";
    if (!regexEmail.test(user.email)) errors.email = "El E-mail no es valido";
    if (user.email.length>35) errors.email = "Maximo 35 caracteres";
    if (user.password.length <6 || user.password.length >10 ) errors.password = "El pasword debe contener entr 6 y 10 caracteres";
    if (!regexPass.test(user.password)) errors.password = "El passwor debe contener al menos 1 numero";
    return errors;
};