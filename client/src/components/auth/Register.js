import { Fragment, useState } from "react";
//import register form
import RegisterForm from "../forms/RegisterForm";
import axios from "axios";

const Register = () => {
    //create the state
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //submit handler
    const handleSubmit = async (e) => {
        e.preventDefault()
        //console.table({name, email, password});
        try {
            const res = await axios.post(`http://localhost:8000/api/register`,{
                name,email,password
            });
            console.log('REGISTER USER ===>', res);
        } catch (error) {
            console.log(error.message);
        }
    }

    
    //component
    return (
        <Fragment>
            <div>
                <h2>Register</h2>
            </div>
            <div>
            <RegisterForm
            //pass props
            handleSubmit={handleSubmit} 
            name={name} 
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            />
            </div>
        </Fragment>
    )
}

export default Register;