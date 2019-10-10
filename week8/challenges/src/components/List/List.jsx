import React from 'react';


function List (props){
    return (
        <div>
            <ol>
               <li>{props.result}</li> 
            </ol>
        </div>
    )
}


export default List;