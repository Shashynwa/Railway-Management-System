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

    // Send a POST request to the server
    fetch('Login.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `username=${encodeURIComponent(usernameOrEmail)}&password=${encodeURIComponent(password)}`,
    })
    .then(response => response.json())
    .then(data => {
      if (data.status === 'success') {
        alert('Logged in successfully');
        // Redirect to welcome.php
        window.location.href = 'welcome.php';
      } else {
        alert(data.message);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
});