import React from "react";
import './Form.css'

const Form = ({handleChage, submit, formData, error}) => {
    return(
        <form className="form-class" onSubmit={submit}>
            {
                Object.keys(formData).map ((key, i)=>(
                    <div className="form-class-dos" key={i} style={{width: "100%"}} >
                        <label htmlFor={key}>Ingrese {key}</label>
                        <input type="text" name={key} id={key} onChange={handleChage} value = {formData[key]} />
                        {error[key] && <span>{error[key]}</span> }
                    </div>
                ))
            }

            <button className="btn btn-primary">Create order</button>
        </form>
    )
}

export default Form
