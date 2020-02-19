import React, {useState} from 'react';

function State(props) {
    //let count = 3
    const[count, setCount] = useState(props.startCount);

    const countChangePlusHandler = () =>{
        setCount(count+1);
        console.log('change +');
        props.countChanges(count+1)
    };
    const countChangeMinusHandler = () =>{
        setCount(count-1);
        props.countChanges(count-1);
        console.log('change -')
    };

    return(

            <div>
                <button onClick={countChangeMinusHandler}>-</button>
                    {count}
                <button onClick={countChangePlusHandler}>+</button>
            </div>

    );
}

export default State;