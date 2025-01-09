const signupForm = document.getElementById('signup-form');
const signupError = document.getElementById('signup-error');

signupForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const name = signupForm.querySelector('#name').value;
  const email = signupForm.querySelector('#email').value;
  const password = signupForm.querySelector('#password').value;

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
      return "User created successfully.";
    } else {
      signupError.textContent = result.message;
    }
  } catch (error) {
    signupError.textContent = "An error occurred during signup.";
  }
});
