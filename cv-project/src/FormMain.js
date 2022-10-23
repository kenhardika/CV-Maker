import React, { useEffect, useState } from "react";

function FormMain({ dataMain }) {
  const [dataForm, setDataForm] = useState({
    firstName: "",
    lastName: "",
    address: "",
  });
  // console.log('start');
  useEffect(()=>{
    console.log(dataForm.firstName);
    return ()=>{
    }
  },
  [dataForm]
  );

  function inputDataForm(e, inputName){
    e.preventDefault();
    setDataForm((prevData) => {
      return {
        ...prevData,
        [inputName]: e.target.value,
      };
    });
    dataMain(dataForm);
  }

  return (
        <div>
          <div className="form-layout">
            <input
              type="text"
              placeholder="First Name"
              required
              onChange={(e)=> inputDataForm(e,'firstName')}
              
            />
          </div>
          <div className="form-layout">
            <input
              type="text"
              placeholder="Last Name"
              required
              // onChange={(e) => {
              //   e.preventDefault();
              //   setDataForm((prevData) => {
              //     return {
              //       ...prevData,
              //       lastName: e.target.value,
              //     };
              //   });
              //   dataMain(dataForm);
              // }}
            />
          </div>
          <div className="form-layout">
            <input
              type="text"
              placeholder="Address"
              required
              // onChange={(e) => {
              //   e.preventDefault();
              //   setDataForm((prevData) => {
              //     return {
              //       ...prevData,
              //       address: e.target.value,
              //     };
              //   });
              //   dataMain(dataForm);
              // }}
            />
          </div>
        </div>
  );
}

export default FormMain;
