
import { use, useMemo, useState } from "react"

const Assignment1 = () =>{
    const [input,setInput] = useState("");

    const onChangeHander = (e) => {
        setInput(e.target.value);
    }

    const factorial =  () =>{
        let i = 1;
        let fact = 1;
        for(i=1;i<=input;i++){
            fact = fact * i;
        }
        return fact;
    };

    const fac = useMemo(factorial, [input]);

    return (
        <div>
            <input placeholder="Enter the Number" onChange = {onChangeHander}/>
            <h1>Factorial of {input} is : {fac}</h1>
        </div>
    )
}

export default Assignment1;