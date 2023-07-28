import { useState } from 'react';

import './birthday-add-form.css';


function BirthdayAddForm (props) {

    const [name, setName] = useState('')
    const [birthday, setBirthday] = useState('')


    const onValueChange = (e, setState) => {
        setState( 
            e.target.value
        )       
    }


    const onSubmit = (e) => {
        e.preventDefault();
     
        if (name.length < 3 || !birthday) return;
        props.onAdd(name, birthday);
       
        setBirthday('')
        setName('')
    }



        return (
            <div className="app-add-form">
                <h3>Add new birthday</h3>
                <form
                    className="add-form d-flex"
                    onSubmit = {onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Person"
                        name="name"
                        value={name} 
                        onChange={(e) => {
                            onValueChange(e, setName)
                        }}/>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Birthday date"
                        name="birthday"
                        value={birthday} 
                        onChange={(e) => {
                            onValueChange(e, setBirthday)
                        }}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Add</button>
                </form>
            </div>
        )
    
}

export default BirthdayAddForm;