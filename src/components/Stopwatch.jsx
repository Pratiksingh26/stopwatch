import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';

const Stopwatch = () => {

    const [hours,setHours] = useState(0);
    const [minutes,setMinutes] = useState(0)
    const [sec,setSec] = useState(0)
    const [msec,setMsec] = useState(0)
    const [stop, setStop] = useState(true)

    const onStart = () => {

         setStop(false);
         //setMsec(msec+1); 

    }

    const onStop = () => {

       setStop(true)

    }

    const onReset = () => {

        setMsec(0);
        setSec(0)
        setMinutes(0) 
        setHours(0)
        setStop(true)
    }

    useEffect(() => {
       let interval = null;

       if(!stop){
        interval = setInterval(() => {

           if(msec > 59){
             
            setSec(sec+1)
            setMsec(0)
            clearInterval(interval)

           }

           if(sec > 59){
             
            setMinutes(minutes+1)
            setSec(0)
            clearInterval(interval)

           }

           if(minutes > 59){
             
            setHours(hours+1)
            setMinutes(0)
            clearInterval(interval)

           }

           if(msec<=59){
            setMsec(msec+1)
           }



        },15)
       }
       else{
        clearInterval(interval)
       }

       return () => {
        clearInterval(interval)
       }
    })

  return (
    <div>
      <h1>{hours} : {minutes} : {sec} : {msec}</h1>
      <button onClick={onStart}>start</button>
      <button onClick={onStop}>stop</button>
      <button onClick={onReset}>reset</button>
    </div>
  )
}

export default Stopwatch
