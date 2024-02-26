/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

// Define variables for profile information
const fullName = "Carlos Eduardo De Souza e Silva";
const profilePicture = "images/WhatsApp Image 2024-02-05 at 12.01.52.jpeg";
const currentYear = new Date().getFullYear();

/* Step 3 - Element Variables */

// Get references to HTML elements
const nameElement = document.getElementById('name');
const imageElement = document.querySelector('img');
const yearElement = document.querySelector('#year');

/* Step 4 - Adding Content */

// Set content of elements with profile information
nameElement.innerHTML = `<strong>${fullName}</strong>`;
imageElement.setAttribute('src', profilePicture);
yearElement.textContent = currentYear;

/* Step 5 - Array */

// Declare an array variable to hold favorite foods
let favoriteFoods = ['Lasagna','Pizza', 'Sushi', 'Chocolate'];

// Modify the HTML element with the ID of 'food' to display the favorite foods array
const foodElement = document.getElementById('food');
foodElement.innerHTML = favoriteFoods.join('<br>');


