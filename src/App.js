import React from 'react';
import './App.css';
import request from 'request';

class App extends React.Component {
  // constructor(props) { // Useless Constructor
  //   super(props);
  // }

  submitForm(e) {
    e.preventDefault();
    console.log('form submitted.')
    request.post({
      url: 'localhost:3000/users/login',
      form: {
        name: 'Test UserA',
        email: 'rhuysen@gmail.com', 
        age: 35,
        password: 'asdjfhhwfweikh'
      },
      function(error, response, body) {
        console.log('error', error);
        console.log('response', response);
        console.log('body', body);
      }
    })
    // request.post('http://localhost:3000/users/login', (error, response, body) => {
    //   console.log('error:', error);
    //   console.log('statusCode:', response && response.statusCode)
    //   console.log('body:', body)
    // })
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.submitForm}>
          <h1>Login Page</h1>
          <p>Name and Surname</p>
          <input type='text'></input>
          <p>Age</p>
          <input type='number'></input>
          <p>Password</p>
          <input type='password'></input>
          <br></br>
          <button type='submit'>Login</button>
        </form>
      </div>
    );
  }
}

export default App;
