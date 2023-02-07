import { useState } from "react"
import '../css/Home.scss'

export default function Signup() {
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
      setSubmitted(true);
      setError(false);
      fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, password })
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
        <h1>User {name} successfully registered!!</h1>
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
    <div className="Signup">
      <div>
        <h1>Create an account</h1>
      </div>

      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form action="">
        <div className="signup-center">
          <label htmlFor="">Username</label>
          <input type="text" onChange={handleName} value={name} />
          <br />
          <label htmlFor="">Password</label>
          <input type="password" onChange={handlePassword} value={password} />
        </div>

        <button onClick={handleSubmit} type='submit'>Sign up</button>
      </form>
    </div>
  )
}