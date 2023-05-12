const thisSite = 'phase4'

//check if stuff is there in the local Storage:
document.addEventListener('DOMContentLoaded', () => {
    storage.checksite(thisSite);
});


const happy = document.querySelector("#happy")
function getHappy(){
    const inputValue = happy.value
    if (inputValue) {
        storage.setItem('happy', inputValue);
    }
}

const skydiving = document.querySelector("#skydiving")
function getSkydiving(){
    const inputValue = skydiving.value
    if (inputValue) {
        storage.setItem('skydiving', inputValue);
    }
}

const hasOneDollar = document.querySelector("#hasOneDollar")
function getHasOneDollar(){
    const inputValue = hasOneDollar.value
    if (inputValue) {
        storage.setItem('hasOneDollar', inputValue);
    }
}