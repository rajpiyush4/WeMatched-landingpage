import React from 'react'

function Auth() {

    async function authcheck() {

        // Don't forget to use withCreditials:true
        try {
    
          const url = `http://localhost:8080/credential`;
    
          // Don't forget to use withCreditials:true
          const data = await axios.get(url, { withCredentials: true });
          console.log(data.status);
          if (data.status === 200) {
            logRef.current = data.status
            const soc = connectSocket()
    
          }
          else {
            logRef.current = 404
          }
    
        } catch (err) {
          logRef.current = 404
        }
    
      }
  return (
    <div>Auth</div>
  )
}

export default Auth