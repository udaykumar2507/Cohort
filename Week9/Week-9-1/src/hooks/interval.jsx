import React from 'react'

import { useEffect , useState } from 'react'

const useInterval = (callback, delay) => {
   useEffect(() => {
    const intervalId = setInterval(callback, delay);
    return () => clearInterval(intervalId);
  }, [callback, delay]);
  
}

const interval = () => {
  const [count, setCount] = useState(0);
    useInterval(() => { 
        setCount(count + 1);
    }, 1000);
  return (
    <div>
      Count is {count}
    </div>
  )
}

export default interval
