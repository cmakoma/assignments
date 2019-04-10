import React from 'react';

const Form = (props) => {
       const { handleSubmit, handleChange, title, description } = props
        return (
            <form onSubmit = {handleSubmit}>
               <input placeholder="title"
                      name="title"
                      type="text"
                      required
                      value={title}
                      onChange={handleChange}></input> 
               <br></br>

             
               <textarea placeholder="Description"
                      name="description"
                      type="text"
                      required
                      value={description}
                      onChange={handleChange}></textarea>
               <br></br>
               
               <button>Create</button>
            </form>
        );
    };

export default Form;