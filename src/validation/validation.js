// mail, password and name validation regex
export const mailRegEx =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const passwordRegEx =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
export const nameRegEx =
  /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;

// mail validation logics
export const validateEmail = (userEmail) => {
  if (!userEmail) {
    let error = "Please Enter an Email Address";
    return error;
  } else if (!mailRegEx.test(userEmail)) {
    let error = "Enter a valid Email Address";
    return error;
  } else {
    let error = false;
    return error;
  }
};

// password validation logics
export const validatePassword = (userPassword) => {
  if (!userPassword) {
    let error = "Please Enter Password";
    return error;
  } else if (!passwordRegEx.test(userPassword)) {
    let error =
      "Enter at least 8 characters with uppercase, lowercase, number and one special character!";
    return error;
  } else {
    let error = false;
    return error;
  }
};

// confirm password validation
export const validateConfirmPassword = (userPassword, confirmPassword) => {
  if (!confirmPassword) {
    let error = "Please Enter Confirm Password";
    return error;
  } else if (!passwordRegEx.test(confirmPassword)) {
    let error =
      "Enter at least 8 characters with uppercase, lowercase, number and one special character!";
    return error;
  } else if (userPassword != confirmPassword) {
    let error = "Password does not match!";
    return error;
  } else {
    let error = false;
    return error;
  }
};

// name validation logics
export const validateName = (userName) => {
  if (!userName) {
    let error = "Please Enter Your Name";
    return error;
  } else if (!nameRegEx.test(userName)) {
    let error = "Enter a valid name";
    return error;
  } else {
    let error = false;
    return error;
  }
};
