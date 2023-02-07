import { useState } from "react"
import '../css/Home.scss'

function Signup() {

  return (
    <div className="Signup">
      <form action="">
        <div className="signup-center">
          <label htmlFor="">Username</label>
          <input type="text" />
          <br />
          <label htmlFor="">Password</label>
          <input type="password" />
        </div>
        <button>Sign up</button>
      </form>

    </div>
  )
}

export default Signup