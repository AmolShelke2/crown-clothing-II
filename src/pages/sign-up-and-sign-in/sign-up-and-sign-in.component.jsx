import React from 'react';

import { SingInandSignUpPage } from './sign-up-and-sign-in.styles';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => (
  <SingInandSignUpPage>
    <SignIn />
    <SignUp />
  </SingInandSignUpPage>
);

export default SignInAndSignUpPage;
