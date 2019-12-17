import React from 'react';

export const MyContext = React.createContext();

export class MyProvider extends React.Component {
  state = {
    state : {
      token: localStorage.getItem('token') ? localStorage.getItem('token') : ''
    }, functions: {
      consoleLog: (input) => console.log(input),
      editToken: (token) => {
        this.setState(() => ({
          state: {
            token
          }
        }))
        localStorage.setItem('token', token)
      }
    }
  }
  render() {
    return (
      <MyContext.Provider value={this.state}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}