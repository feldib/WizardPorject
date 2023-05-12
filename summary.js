/* Functions for summary */
//getting stuff out from the local storage
//import storage from './common.js'

const thisSite = 'summary';

//check if everything is there:
document.addEventListener('DOMContentLoaded', () => {
    storage.checksite(thisSite);
});

const userDetails = [
    ['Name', storage.user.name],
    ['Email', storage.user.email],
    ['Birthdate',storage.user.birthdate],
    ['City', storage.user.city],
    ['Street', storage.user.street],
    ['Number', storage.user.number],
    ['Hobbies', storage.user.hobbies],
    ['Image', storage.user.image],
    ['Happy', storage.user.happy],
    ['Does skydiving', storage.user.skydiving],
    ['Has $1', storage.user.hasOneDollar]
];

//Display a list with user details:
function displaySummary(){
//get the question-div:
const questionDiv = document.querySelector('.question-div');

//creat a new ul:
const userDetailsList = document.createElement('ul');
userDetailsList.id = 'user-details';

// for(const details of storage.toArray()) {

// }

//loop through the user details:
for (let i = 0; i < userDetails.length; i++) {
        const label = userDetails[i][0];
        const value = userDetails[i][1];

        const li = document.createElement('li');

        const div = document.createElement('div');
        div.textContent = `${label}: `;

        const span = document.createElement('span');
        span.textContent = value;

        div.appendChild(span);
        li.appendChild(div);
        userDetailsList.appendChild(li);

    };
questionDiv.appendChild(userDetailsList);

};

/* Calling the function: ------------ */
displaySummary();