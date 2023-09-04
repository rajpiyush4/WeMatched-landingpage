
function Head() {

  const handleAuthClick = async() => {
    window.open("http://20.234.91.15:8080/auth/google","_self")
}

  return (
    <header className='header'>
      <div className='logo'>WeMatched!</div>
      <div className="signup_head">
        <button type='button'>Sign Up</button>
      </div>

      {/* <div className='comming'> COMMING SOON</div> */}
    </header>
  )
}

export default Head