import * as Yup from 'yup';



export const contactValidationSchema = Yup.object({
    name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Full Name cannot be longer than 50 characters')
    .required('Full Name is required'),

  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Email is required'),

    phone: Yup.string()
    .matches(
      /^(?:\+?\d{1,3})?[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}$/,
      'Please Enter a Valid Phone Number'
    )
    .required('Phone number is required'),

    message: Yup.string()
        .min(10, 'Message must be at least 10 characters')
        .max(500, 'Message cannot be longer than 500 characters')
        .required('Message is required'),
  
});