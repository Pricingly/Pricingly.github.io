import React, {useEffect, useRef} from 'react'

export default function Item({input}) {
    const inputRef = useRef();

    let oldInput = 0;
    
    return (
        <>
            <input ref={inputRef} className="itemInput" type="number" placeholder="Item Name" 
                onChange={
                    (e) => {
                        input.newValue(() => {
                            return 0;
                        })

                        input.newValue((previous) => {
                            let newValue;
                            newValue = previous - oldInput;
                            oldInput = parseInt(e.target.value);

                            console.log("previous: " + previous);
                            console.log("oldInput: " + oldInput);
                            console.log("newValue: " + newValue);

                            console.log("return: " + (newValue += parseInt(e.target.value)));

                            return newValue += parseInt(e.target.value);
                        })
                    }
                }
            />

            {/* <button onClick={newValue}>Confirm (No undo)</button> */}
        </>
    )
}
