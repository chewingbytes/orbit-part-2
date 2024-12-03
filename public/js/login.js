const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  
  // Get email and password input values
  const email = loginForm.querySelector('#email').value;
  const password = loginForm.querySelector('#password').value;

  // Perform input validation
  if (!email.includes('@') || !email.includes('.')) {
    loginError.textContent = "Please enter a valid email and ensure the password is at least 6 characters long.";
    return;
  }

  try {
    // Send a POST request to the server for login
    const response = await fetch('http://localhost:5050/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();
    console.log(result);  // Log the response for debugging

    // Check if the response is successful
    if (response.ok) {
      // Store token and username in localStorage
      localStorage.setItem('token', result.token);
      localStorage.setItem('userName', result.userName || 'Guest'); // Save user name or default to 'Guest'

      // Redirect to the homepage
      window.location.href = '/index.html'; // Update to the correct redirect page
    } else {
      // Display error message if login failed
      loginError.textContent = `Login failed: ${result.message}`;
    }
  } catch (error) {
    // Handle any error that occurs during the fetch
    console.error("Error during login:", error);
    loginError.textContent = "An error occurred during login. Please try again later.";
  }
});
