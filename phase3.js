/* functions for phase 3 */
//import storage from "./common"

//get imgURL from  the input
const imgInputField = document.querySelector('#image-url');
function getImgURL(){
    const inputValue = imgInputField.value;
    storage.setItem('image', inputValue);
};

//get hobbies array
function trueHobbies(){
    const hobbiesField = document.querySelectorAll('input[name="hobby"]:checked');
    const checkedHobbiesArr = [];
    for (let i = 0; i < hobbiesField.length; i++){
        checkedHobbiesArr.push(hobbiesField[i].value);
    };

    hobbieString = ''
    for (let i = 0; i < checkedHobbiesArr.length; i++){
        hobbieString += `${checkedHobbiesArr[i]}, `;
    };

    return hobbieString;
};

function getHobbies(){
    const hobbies = trueHobbies();
    storage.setItem('hobbies', hobbies);
};

