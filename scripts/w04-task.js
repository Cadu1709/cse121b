/* LESSON 3 - Programming Tasks */

/* Profile Object */
let myProfile = {};

// Populate Profile Object with placesLive objects
myProfile.name = "Carlos Eduardo De Souza e Silva"; 
myProfile.photo = "images/WhatsApp Image 2024-02-05 at 12.01.52.jpeg"; 
myProfile.favoriteFoods = [ 
    'Lasagna',
    'Pizza',
    'Sushi',
    'Chocolate',
];
myProfile.hobbies = ['Reading', 'Coding', 'Play Videogames']; 
myProfile.placesLived = []; 

myProfile.placesLived.push({
    place: 'Sao Paulo, SP',
    length: '20 years'
});

myProfile.placesLived.push({
    place: 'Atlanta, ATL',
    length: '2 years'
});

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name + "'s photo";

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});


myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});