import React, { useEffect, useState } from "react";

function FormMain({ dataMain }) {
  const [dataForm, setDataForm] = useState({
    firstName: "",
    lastName: "",
    address: "",
  });
  // console.log('start');
  function pushDataForm(){
    dataMain(dataForm);
  }
  
  useEffect(()=>{
    pushDataForm();
    return ()=>{
    }
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [dataForm]
  );

  function inputDataForm(e, inputName){
    setDataForm((prevData) => {
      return {
        ...prevData,
        [inputName]: e.target.value,
      };
    });
  }

  return (
        <div>
          <div className="form-layout">
            <input
              type="text"
              placeholder="First Name"
              required
              onChange={(e)=> { 
                inputDataForm(e, 'firstName'); 
               }
              }
              
            />
          </div>
          <div className="form-layout">
            <input
              type="text"
              placeholder="Last Name"
              required
              onChange={(e)=>{
                inputDataForm(e, 'lastName');
              }}
            />
          </div>
          <div className="form-layout">
            <input
              type="text"
              placeholder="Address"
              required
              onChange={(e)=>{
                inputDataForm(e, 'address');
              }}
            />
          </div>
        </div>
  );
}

export default FormMain;
