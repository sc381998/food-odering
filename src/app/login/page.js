"use client"
import AppContext from '@/AppContext';
import { users } from '@/data';
import React, { useContext, useState } from 'react'
const errors = {
    uname: "invalid username",
    pass: "invalid password"
};
function Login() {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { setIsLoginClicked } = useContext(AppContext);

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );
    const handleSubmit = (event) => {
        event.preventDefault();
        var { uname, pass } = document.forms[0];
        const userData = users.find((user) => user.username === uname.value);
        if (userData) {
            if (userData.password !== pass.value) {
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };
    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}

export default Login