document.getElementById('registrationForm').addEventListener('submit', function (event) {
  event.preventDefault();

  let isValid = true;

  const pseudo = document.getElementById('pseudo');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirmPassword');
  const optionError = document.getElementById('optionError');

  if (pseudo.value.length < 6) {
      setError(pseudo, 'Le pseudo doit contenir au moins 6 caractères.', 'pseudoError');
      isValid = false;
  } else {
      setSuccess(pseudo, 'pseudoError');
  }

  if (!validateEmail(email.value.trim())) {
      setError(email, 'Entrez un email valide.', 'emailError');
      isValid = false;
  } else {
      setSuccess(email, 'emailError');
  }

  if (!validatePassword(password.value)) {
      setError(password, 'Le mot de passe doit contenir entre 6 et 16 caractères, un chiffre et un caractère spécial.', 'passwordError');
      isValid = false;
  } else {
      setSuccess(password, 'passwordError');
  }

  if (password.value !== confirmPassword.value) {
      setError(confirmPassword, 'Les mots de passe ne correspondent pas.', 'confirmPasswordError');
      isValid = false;
  } else {
      setSuccess(confirmPassword, 'confirmPasswordError');
  }

  const option = document.querySelector('input[name="option"]:checked');
  if (!option) {
      setError(optionError, 'Veuillez choisir une option.', 'optionError');
      isValid = false;
  } else {
      setSuccess(optionError, 'optionError');
  }

  if (isValid) {
      console.log('Formulaire soumis avec succès !');
  } else {
      console.log('Corrigez les erreurs avant de soumettre.');
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePassword(password) {
  const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,16})/;
  return re.test(password);
}

function setError(element, message, errorElementId) {
  const errorMessage = document.getElementById(errorElementId);
  errorMessage.innerText = message;
  element.classList.add('error');
  element.classList.remove('success');
}

function setSuccess(element, errorElementId) {
  const errorMessage = document.getElementById(errorElementId);
  errorMessage.innerText = '';
  element.classList.add('success');
  element.classList.remove('error');
}
