import validator from 'validator';

function isLowerCase (input) {  
    return input === String(input).toLowerCase();
  }
function validateForm(formData) {
  const { fullName, username, email, password } = formData;
  if (!fullName || !username || !email || !password) {
    alert("Please fill out all fields");
    return false;
  }
  if (!validator.isEmail(email)) {
    return 'Invalid email format';
  }
  else if (!validator.isLength(password, { min: 6 })) {
    return 'Password must be at least 6 characters long';
  }
  else if (!isLowerCase(username)) {
    return 'Username must be lowercase';
  }
  return null;
}

export default validateForm;