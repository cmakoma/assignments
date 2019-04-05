import React from 'react';
import "./Form.css"

const SignupForm = props => {
    const {handleChange, handleSubmit, fullname, keyCode, username, password, btnText} = props
    return (
        <div>
           <form onSubmit={handleSubmit}>
               <input 
                    type="text" 
                    name="fullname"
                    value={fullname}
                    onChange={handleChange}
                    placeholder="fullname" 
                />

                <input 
                    type="text" 
                    name="keyCode"
                    value={keyCode}
                    onChange={handleChange}
                    placeholder="keyCode" 
                />

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

                <button>{btnText}</button>
           </form> 
        </div>
    );
};

export default SignupForm;