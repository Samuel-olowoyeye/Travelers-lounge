import * as Yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

export const signInValidateSchema = Yup.object({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8).matches(passwordRules, {message: "Please create a stronger password"})
    .required('Password is required'),

    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), ""], 'Passwords does not match')
    .required(''),
});