import { useState } from "react"
import { Link } from 'react-router-dom'
import '../css/Home.scss'

export default function Login({ setLoggedInUserName, loggedInUserId, setLoggedInUserId }) {
  // States for registration
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // add in fetch from be to see if user exists

    if (name === '' || password === '') {
      setError(true);
    } else {
      console.log('test log in')

      fetch('/api/sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, password })
      })
        .then(res => res.json())
        .then(res => {
          if (res.error) {
            setError(true);
          } else {
            setSubmitted(true);
            setError(false);
            setLoggedInUserName(res.username)
            setLoggedInUserId(res.id)
            // console.log(loggedInUserName)
          }
        })
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {name} has successfully logged in!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };


  return (
    <div className="Login">
      <div className="login-head">
        <h1>Log in</h1>
      </div>

      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      {loggedInUserId ?
        <div className="play">
          <Link to="/town">PLAY NOW</Link>
        </div>
        :
        <div className="login-out-container">
          <div className="login-in-container">
            <div className="messages">
              {errorMessage()}
              {successMessage()}
            </div>

            <form action="">
              <div className="login-center">
                <label htmlFor="">Username</label>
                <input type="text" onChange={handleName} value={name} />
                <br />
                <label htmlFor="">Password</label>
                <input type="password" onChange={handlePassword} value={password} />
              </div>

              <div className="loginbtn">
                <button onClick={handleSubmit} type='submit'>Log in</button>
              </div>
            </form>
          </div>
        </div>
      }

    </div>
  )
}