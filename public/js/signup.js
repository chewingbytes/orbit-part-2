const signupForm = document.getElementById('signup-form');
const signupError = document.getElementById('signup-error');

signupForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const name = signupForm.querySelector('#name').value;
  const email = signupForm.querySelector('#email').value;
  const password = signupForm.querySelector('#password').value;

  // Validation checks
  if (name.length < 3) {
    signupError.textContent = "Name must be at least 3 characters long.";
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    signupError.textContent = "Please enter a valid email address.";
    return;
  }

  if (password.length < 6) {
    signupError.textContent = "Password must be at least 6 characters long.";
    return;
  }

  // Perform more checks if needed (e.g., strength of password, regex for email)

  try {
    const response = await fetch('http://localhost:5050/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });

    const result = await response.json();
    console.log(result); // Log response for debugging

    if (response.ok) {
      window.location.href = '/login.html'; // Redirect to login after successful signup
    } else {
      signupError.textContent = `Signup failed: ${result.message}`;
    }
  } catch (error) {
    signupError.textContent = "An error occurred during signup.";
  }
});
