import React from 'react';



const Input = (props) => {
    return (
        <div>
            
           <button onClick={props.submitButton} counter={props.Click}>Submit</button>
            
           <p></p>
        </div>
    )
}



 export default Input;