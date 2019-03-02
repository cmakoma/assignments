import React from 'react'


const NameForm = props => {
    const { inputs: { name, age }, handleSubmit, handleChange } = props
    return (
        <form onSubmit={handleSubmit} className="form">
            <input type="text" onChange={ handleChange } name="name" value={name} placeholder="Name"/>
            <input type="text" onChange={ handleChange } name="age" value={age} placeholder="Age"/>
            <button>Submit</button>
        </form>
    )
}

export default NameForm