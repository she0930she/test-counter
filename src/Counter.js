import { useState } from 'react';


function Counter({ initialCount }){
    const [count, setCount] = useState(initialCount);

    const increment = () => {
        setCount( (prev) => prev +1 );
    }

    const decrement = () => {
        setCount( prev => prev -1 );
    }

    const restart = () => {
        setCount(0); 
    }

    const switchSigns = () => {
        setCount( prev => prev * -1 );
    }

    return(
        <div>
            <h3>in Counter component</h3>
            <h1>
                Count: <h3 data-testid= "initCount" >{count}</h3>
            </h1>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={restart} aria-label="restart">Restart</button>
                <button onClick={switchSigns} aria-label="switchSigns">SwitchSigns</button>
            </div>
        </div>
    )
}

export default Counter;