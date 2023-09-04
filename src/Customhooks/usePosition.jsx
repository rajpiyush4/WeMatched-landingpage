import {useState, useEffect} from 'react'

const usePosition=()=>{
    const [position, setPosition] = useState({x:0, y:0})
    
    useEffect(()=>{
        window.addEventListener('mousemove', handleMouseMove)
        return ()=>{
            window.removeEventListener('mousemove', handleMouseMove)
        }
    },[])


    const handleMouseMove = (e)=>{
        setPosition({x: e.clientX, y: e.clientY})
    }


return position
}

export default usePosition