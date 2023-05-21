import { useState } from "react";
import validacion from '../validation'
//import styles from "./Card.module.css"
export default function Form(props) {
    let [userData,setUserData] = useState({
        email:"",
        password:"",
    });
    let [errors,setErrors] = useState({});
    const onChange = (evento) => {
        let {value,name} = evento.target;
        setUserData ({...userData, [name] : value});
        setErrors(
            validacion({
                ...userData,
                [name]: value
            })
        )
    }
    const handleSubmit = (evento) => {
        evento.preventDefault();
        props.login(userData);
    }
    return (
       <form onSubmit={handleSubmit}>
            <label htmlFor="">E-mail</label>
            <input name='email' type="text"  onChange={onChange}/>
            <p>{errors.email && errors.email}</p>
            <label htmlFor="">Password:</label>
            <input name='password' type="password" onChange={onChange} />
            <p>{errors.password && errors.password}</p>
            <button>Ingresar</button>
       </form>
    );
 }