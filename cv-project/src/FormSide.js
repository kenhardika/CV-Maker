import React, { useState } from 'react';

function FormSide({dataFormSide}) {

    const [dataForm, setDataForm] = useState({ firstName:'',
                                                lastName: '',
                                                address:'' });

    return (
        <div className='formSide'>
            <div className="mainFormLayer">
                <form action="" onSubmit={(e)=> {
                    e.preventDefault();
                    dataFormSide(dataForm);
                    }}>
                    <div className="form-layout">
                        <label htmlFor=""> First Name: </label>
                        <input type="text" required onChange={
                            (e)=>{
                                setDataForm(prevData => {
                                        return{
                                            ...prevData,
                                            firstName: e.target.value
                                        }
                                    }
                                );
                            }
                        }/>
                    </div>
                    <div className="form-layout">
                        <label htmlFor=""> Last Name: </label>
                        <input type="text" required onChange={
                            (e)=>{
                                setDataForm(prevData => {
                                        return{
                                            ...prevData,
                                            lastName: e.target.value
                                        }
                                    }
                                );
                            }
                        }/>
                    </div>
                    <div className="form-layout">
                        <label htmlFor=""> Address: </label>
                        <input type="text" required onChange={
                            (e)=>{
                                setDataForm(prevData => {
                                        return {
                                            ...prevData,
                                            address: e.target.value
                                        }
                                    }   
                                );
                            }
                        } />
                    </div>
                    <div className="submitButtonLayer">
                        <button type='submit' id='submitBtn'> Add </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormSide;