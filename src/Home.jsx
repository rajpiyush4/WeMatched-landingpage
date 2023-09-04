import { useState } from 'react'
import Hello from './Hello'
import About from './About'
import SignUp from './SignUp'
import Head from './Head'
import Features from './Features'
import Ques from './Ques'


function Home() {
  const [show, setShow] = useState(true)

  return (
    <div className='home'>
      {show ? <Ques setShow={setShow} /> :
        <>
          <Head />
          <Hello />
          <About />
          <Features />
          <SignUp />
        {/* <div className='about-img' /> */}
   
        </>}
           

    </div>
  )
}

export default Home