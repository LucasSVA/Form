import React from "react";
import "./App.css"


const regex = new RegExp(/^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/)
class App extends React.Component {

  constructor() {
    super()
    this.state = {
      email: "",
      password: "",
      rememberMe: false,
      emailIsValid: false,
      passwordIsValid: false,
      isSubmitted: false,
      firstName: "",
      lastName: ""
    }

  }

  handleFirstNameChange = (e) => {
    this.setState({
      firstName: e.target.value
    })

  }
  handleLastNameChange = (e) => {
    this.setState({ lastName: e.target.value })
  }




  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
      emailIsValid: (regex.test(e.target.value))
    })
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    })
    if (this.state.password.length >= 5) {
      this.setState({
        passwordIsValid: true
      })
    } else {
      this.setState({
        passwordIsValid: false
      })
    }
    console.log(this.state.password)
    console.log(this.state.passwordIsValid)
  }

  handleRememberMeChange = () => {
    this.state.rememberMe === false ? (this.setState({ rememberMe: true })) : (this.setState({ rememberMe: false }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.emailIsValid = true && this.state.passwordIsValid) {
      this.setState({ isSubmitted: true })

    }
    console.log(this.state.isSubmitted);
  }


  render() {



    return (
      <>
        {this.state.isSubmitted ? (<h1>seggt</h1>) : (

          <div className="container ">
            <form onSubmit={this.handleSubmit}>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label" onChange={this.handleFirstNameChange}>Name</label>
                <input type="text" className="form-control" onChange={this.handlePasswordChange} />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label" onChange={this.handleLastNameChange}>Name</label>
                <input type="text" className="form-control" onChange={this.handlePasswordChange} />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.email} onChange={this.handleEmailChange} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" onChange={this.handlePasswordChange} />
              </div>




              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={this.handleRememberMeChange} />
                <label className="form-check-label" htmlFor="exampleCheck1" >remember me</label>
              </div>
              <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
          </div>
        )
        }
      </>

    )
  }


}

export default App