import React from "react";
import "./App.css"


const regex = new RegExp(/^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/)
class App extends React.Component {

  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rememberMe: false,
      emailIsValid: false,
      passwordIsValid: false,
      isSubmitted: false,
      Namevalide: "form-control is-invalid",
      SureNameValide: "form-control is-invalid",
      validEmail: "form-control is-invalid",
      validPassword: "form-control is-invalid",
    }

  }

  handleFirstNameChange = (e) => {
    this.setState({
      firstName: e.target.value,
      Namevalide: "form-control is-valid"
    })

    e.target.value === "" && this.setState({ Namevalide: "form-control is-invalid" })
  }
  handleLastNameChange = (e) => {
    this.setState({
      lastName: e.target.value,
      SureNameValide: "form-control is-valid"
    })
    e.target.value === "" && this.setState({ SureNameValide: "form-control is-invalid" })

  }

  handleEmailChange = (e) => {

    this.setState({
      email: e.target.value,
      emailIsValid: (regex.test(e.target.value)),

    })

    regex.test(e.target.value) && this.setState({ validEmail: "form-control is-valid" })
    !regex.test(e.target.value) && this.setState({ validEmail: "form-control is-invalid" })

  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    })

    this.state.password.length >= 5 && this.setState({ passwordIsValid: true, validPassword: "form-control is-valid" })
    !this.state.password.length >= 5 && this.setState({ passwordIsValid: false })

    e.target.value.length < 6 && this.setState({ validPassword: "form-control is-invalid" })

  }

  handleRememberMeChange = () => {
    this.state.rememberMe === false ? (this.setState({ rememberMe: true })) : (this.setState({ rememberMe: false }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if ((this.state.emailIsValid && this.state.passwordIsValid) && (this.state.firstName || this.state.lastName != "")) {
      this.setState({
        isSubmitted: true
      })

    }
    // this.state.emailIsValid === true && this.state.passwordIsValid && this.setState({ isSubmitted: true })

  }

  render() {
    return (
      <>
        {this.state.isSubmitted ? (
          <div className="success">
            <span className="submitted">Submitted</span>
            <span className="first-last">{this.state.firstName} {this.state.lastName}</span>
            <span className="validEmail">{this.state.email}</span>

          </div>
        ) : (

          <div className="container ">

            <span className="login">LogIn</span>
            <form onSubmit={this.handleSubmit} novalidate>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label" >First Name</label>
                <input type="text" className={this.state.Namevalide} onChange={this.handleFirstNameChange} />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label" >Last Name</label>
                <input type="text" className={this.state.SureNameValide} onChange={this.handleLastNameChange} />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className={this.state.validEmail} id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.email} onChange={this.handleEmailChange} />

              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" >Password</label>
                <input type="password" className={this.state.validPassword} id="exampleInputPassword1" onChange={this.handlePasswordChange} />
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