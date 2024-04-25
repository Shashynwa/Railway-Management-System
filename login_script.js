document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const usernameOrEmailInput = document.querySelector('#username');
    const passwordInput = document.querySelector('#password');
  
    form.addEventListener('submit', async function(event) {
      event.preventDefault();
  
      const usernameOrEmail = usernameOrEmailInput.value;
      const password = passwordInput.value;
  
      if (usernameOrEmail === '' || password === '') {
        alert('All fields must be filled out');
        return;
      }
  
      const response = await fetch('Login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          username: usernameOrEmail,
          password: password,
        }),
      });
  
      const result = await response.json();
  
      if (result.status === 'success') {
        alert('Logged in successfully');
      } else {
        alert('Invalid username or password');
      }
    });
  });
  