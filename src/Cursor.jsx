import {useState, useEffect} from 'react'
import {motion} from 'framer-motion'


const cursorStyle = {position:'absolute',top:'0', left:'0', width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'yellow', zIndex: 1000, pointerEvents: 'none'}


function Cursor({variants, animate, handleCursor}) {

    useEffect(() => {
        window.addEventListener('mousemove', handleCursor)
        return (() => {
          window.removeEventListener('mousemove', handleCursor)
        })
      }, [])


  return (
    <motion.div className='cursor' style={cursorStyle} variants={variants} animate={animate} />
  )
}

export default Cursor
