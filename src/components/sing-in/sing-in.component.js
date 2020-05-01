import React, { Component } from "react";

import "./sing-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { singInWithGoogle } from "../../firebase/firebase.utils";

export default class SingIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sing-in'>
        <h2>I already have an account</h2>
        <span>Sing in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            value={this.state.email}
            required
            handleChange={this.handleChange}
            label='Email'
          />
          <FormInput
            type='password'
            name='password'
            value={this.state.password}
            required
            handleChange={this.handleChange}
            label='Password'
          />
          <div className='buttons'>
            <CustomButton type='submit'>Sing In</CustomButton>
            <CustomButton onClick={singInWithGoogle} isGoogleSingIn>
              Sing in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
