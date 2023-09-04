import React from 'react'

function SignUp() {

  const handleSignup = async() => {
    window.open("http://20.234.91.15:8080/auth/google","_self")
}

  return (
    <div className='signup'>
        <hr />
        <p>So, why not sign up now and join our exclusive club of early birds? 
         you will be the first to know when we launch.</p>

         <div className="signup_notbutton">
            <button type='button' >Sign Up</button>
         </div>
        
    </div>
  )
}

export default SignUp