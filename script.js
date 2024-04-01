// Get the person icon image and dialog box elements
const personIcon = document.getElementById('person-icon');
const dialogBox = document.getElementById('dialog-box');

// Add click event listener to the person icon image
personIcon.addEventListener('click', (event) => {
    // Toggle the display of the dialog box
    dialogBox.classList.toggle('show');

    // Calculate the position of the clicked image relative to the viewport
    const rect = event.target.getBoundingClientRect();
    const positionTop = rect.top + window.scrollY;
    const positionLeft = rect.left + window.scrollX;

    // Position the dialog box below the clicked image
    dialogBox.style.top = `${positionTop + event.target.offsetHeight}px`;
    dialogBox.style.left = `${positionLeft}px`;
});

// Add click event listener to the login link
document.getElementById('login-link').addEventListener('click', () => {
    // Handle login link click
    // For example, navigate to the login page
    window.location.href = 'login.html';
});

// Add click event listener to the sign up link
document.getElementById('signup-link').addEventListener('click', () => {
    // Handle sign up link click
    // For example, navigate to the sign up page
    window.location.href = 'signup.html';
});


// Function to save user data to a text file
const saveUserDataToFile = (userData) => {
    // Check if localStorage already contains user data
    let usersData = localStorage.getItem('usersData');
    if (!usersData) {
        // If not, initialize an empty object
        usersData = {};
    } else {
        // If yes, parse the existing data
        usersData = JSON.parse(usersData);
    }
    
    // Add or update user data in the object
    usersData[userData.email] = userData.password;

    // Convert the object to JSON string
    const usersDataString = JSON.stringify(usersData);

    // Save the JSON string to localStorage
    localStorage.setItem('usersData', usersDataString);
};


// Function to handle form submission for sign up
const handleSignUp = (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = new FormData(event.target);
    const userData = {
        email: formData.get('email'),
        password: formData.get('password')
    };

    // Save user data to file
    saveUserDataToFile(userData);

    // You can now access userData object to retrieve form data
    console.log('Sign up data:', userData);
    // window.location.href = 'index.html';
    alert("Sign Up Success");
    window.location.href = 'index.html';
};

// Add form submission event listener for sign up form
document.getElementById('signup-form').addEventListener('submit', handleSignUp);

// Function to handle form submission for login

// document.getElementById('forget').addEventListener('submit', handleSignUp);