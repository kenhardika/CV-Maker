import React, { useState } from 'react';


// form input generator

// label input, inpu type, placeholder text, update button & text, add new form button & text.  
function FormWorkExp({dataWorkExp}) {

    const [dataWork, setDataWork] = useState({
        position: "",
        company: "",
        from: "",
        to: ""
      });

    return (
        <div>
            <div className="formTitle">
                <p>Work Experience</p>
            </div>
            <div className="form-layout">
                <input
                type="text"
                placeholder="Position"
                required
                onChange={(e) => {
                    e.preventDefault();
                    setDataWork((prevData) => {
                    return {
                        ...prevData,
                        position: e.target.value,
                    };
                    });
                    dataWorkExp(dataWork);
                }}
                />
            </div>
            <div className="form-layout">
                <input
                type="text"
                placeholder="Company"
                required
                onChange={(e) => {
                    e.preventDefault();
                    setDataWork((prevData) => {
                    return {
                        ...prevData,
                        company: e.target.value,
                    };
                    });
                    dataWorkExp(dataWork);
                }}
                />
            </div>
            <div className="form-layout">
                <input
                type="date"
                placeholder="from"
                required
                onChange={(e) => {
                    e.preventDefault();
                    setDataWork((prevData) => {
                    return {
                        ...prevData,
                        from: e.target.value,
                    };
                    });
                    dataWorkExp(dataWork);
                }}
                />
            </div>
            <div className="form-layout">
                <input
                type="date"
                placeholder="to"
                required
                onChange={(e) => {
                    setDataWork((prevData) => {
                    return {
                        ...prevData,
                        to: e.target.value,
                    };
                    });
                }}
                />
            </div>
        </div>
    );
}

export default FormWorkExp;