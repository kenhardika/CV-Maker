import React from 'react';

function ViewSide(props) {
    // console.log(props)
    return (
        <div className='viewSide'>
            <p>{props.firstName}</p>
            <p>{props.lastName}</p>
            <p>{props.address}</p>
        </div>
    );
}

export default ViewSide;