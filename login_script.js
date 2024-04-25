document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const usernameOrEmailInput = document.querySelector('#username');
  const passwordInput = document.querySelector('#password');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const usernameOrEmail = usernameOrEmailInput.value;
    const password = passwordInput.value;

    if (usernameOrEmail === '' || password === '') {
      alert('All fields must be filled out');
      return;
    }

    console.log('Username/Email:', usernameOrEmail);
    console.log('Password:', password);

    // TODO: Add your own logic to handle the login

    alert('Logged in successfully');
  });
});