const birthDate = document.querySelector("#birthDate")

function fillInDashes(event){
    let value = event.target.value
    if(value.length == 2 || value.length == 5){
        event.target.value += "/"
    }
}

birthDate.addEventListener("keyup", fillInDashes)