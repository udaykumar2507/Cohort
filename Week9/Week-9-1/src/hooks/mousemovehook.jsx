import React, { use, useState,useEffect} from 'react'


 const usemousemove = ()=>{
        const [position,setposition] = useState({x:0,y:0});
        

        useEffect(()=>{
           const handlemouse = (event)=>{
                setposition({
                    x:event.clientX,
                    y:event.clientY
                });
            } 
            window.addEventListener('mousemove',handlemouse);
            return () => {
                window.removeEventListener('mousemove', handlemouse);
            };
        },[]);  

        return position;
    }

const mousemovehook = () => {
   
     const position = usemousemove();
  return (
   
    <div>
      {position.x} , {position.y}
    </div>
  )
}

export default mousemovehook
