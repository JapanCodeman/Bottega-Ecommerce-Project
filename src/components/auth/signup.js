import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import SignUpForm from './signupform';
import PageTitle from '../pagetitle';

class SignUp extends Component {
  onSubmit = (fields) => {
    console.log(fields);
  }

  render() {
    return (
      <div className='sign-up'>
        <PageTitle className='sign-up__page-title' title='Register' />
        <SignUpForm onSubmit={this.onSubmit} className='sign-up__form'/>
      </div>
    )
  }
}

export default SignUp;