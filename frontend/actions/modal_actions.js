export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP';


export const signupForm = () => ({
  type: SIGNUP,
  modal: "signup",
});

export const loginForm = () => ({
  type: LOGIN,
  modal: "login",
});
