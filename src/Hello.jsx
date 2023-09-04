import {useState} from 'react'
import usePosition from './Customhooks/usePosition'
import Cursor from './Cursor'

function Hello() {
    const [animate, setAnimate] = useState('default')
    const position = usePosition()
  
//   console.log('rerender')
    const variants = {
      default: {
        x: position.x - 10,
        y: position.y - 80,
        scale: 1,
        backgroundColor: 'black',
      },
  
      text: {
        x: position.x - 60,
        y: position.y - 170,
        height: 150,
        width: 150,
        backgroundColor: 'rgba(255,255,255,1)',
        mixBlendMode: 'difference',
      }
      
    }
  
    const textEnter = () => setAnimate('text')
    const textLeave = () => setAnimate('default')
  
  
    return (
      <div className="hello">
        <Cursor variants={variants} animate={animate} handleCursor={position} />
        {/* <motion.div className='cursor' variants={variants} animate={animate} /> */}
        <h1 className='hellocursor' onMouseEnter={textEnter} onMouseLeave={textLeave}> <span className='wellthen'>well then,</span>Hello!</h1>
         <span style={{position:'absolute', bottom:'20%', right:'2rem'}}>	&darr;</span>
      </div>
    )
  }

export default Hello