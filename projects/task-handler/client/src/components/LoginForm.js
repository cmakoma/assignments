import React from 'react';
import "./Form.css"

const LoginForm = props => {
    const {handleChange, handleSubmit, username, password, btnText} = props
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="username"
                    value={username}
                    onChange={handleChange}
                    placeholder="username" 
                />

                <input 
                    type="text" 
                    name="password"
                    value={password}
                    onChange={handleChange}
                    placeholder="password" 
                />
                <br></br>
                <button>{btnText}</button>
           </form>
        </div>
    );
};

export default LoginForm;