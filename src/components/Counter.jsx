import React, {useState} from 'react';

function Counter(props) {

    const[count, setCount] = useState(props.startCount); //[] is called array destructuring in React

    const countChangePlusHandler = () =>{
        setCount(count+1);
        props.countChangesPlus();
    };
    const countChangeMinusHandler = () =>{
        setCount(count -1);
        props.countChangesMinus();
    };


    return(

            <div>
                <button onClick={countChangeMinusHandler}>-</button>
                    {count}
                <button onClick={countChangePlusHandler}>+</button>
            </div>

    );
}

export default Counter;