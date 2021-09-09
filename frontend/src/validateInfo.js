export default function validateInfo(values) {
    let errors = {};

    if (!values.firstname.trim()) {
      errors.username = 'First Name required';
    }

    if (!values.lastname.trim()) {
      errors.username = 'Last Name required';
    }

    if (!values.username.trim()) {
      errors.username = 'Username required';
    }
  
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }

    if (!values.phonenumber) {
      errors.phonenumber = 'Phone Number required';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }
  
    if (!values.password2) {
      errors.password2 = 'Password is required';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Passwords do not match';
    }
    return errors;
  }