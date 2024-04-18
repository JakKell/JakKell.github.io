var spaces = document.querySelectorAll("#tictactoe td")
var freeSpaces = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"]
var takenSpaces = {}
var winText = document.querySelector("#game")
spaces.forEach(element => {
    element.addEventListener("click", addX);
});


function validateForm() {
    let x = document.forms["myForm"];
    let element = document.querySelector("form");
    if (x["name"].value == ""){
        alert("Please provide your name");
    }
    else if (x["addr"].value == ""){
        alert("Please provide your address");
    }
    else if (x["cn"].value == ""){
        alert("Please provide your country");
    }
    else if (x["email"].value == "" || !(x["email"].value.match("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"))){
        alert("Please provide your email");
    }
    else if (x["phone"].value == "" || !(x["phone"].value.match("[0-9]{3}-[0-9]{3}-[0-9]{4}"))){
        alert("Please provide your phone number");
    }
    else if (x["comment"].value == ""){
        alert("Please provide a comment or feedback");
    }
    else{
        alert("Form has successfully submitted");
        const presentsDiv = document.querySelector('#presents');
        const openDiv = document.querySelector('#open');
        const myForm = document.querySelector('form');
        const thanksDiv = document.querySelector('#thanks');
        myForm.classList.add('hidden');
        thanksDiv.classList.remove('hidden');
        presentsDiv.innerHTML = "";
        openDiv.textContent = "Click a present to open it:";
        const presents = new Reward(presentsDiv, openDiv);
    }
    
  }

function addX(event){
    event.currentTarget.appendChild(document.createTextNode("X"));
    event.currentTarget.removeEventListener("click", addX);
    takenSpaces[freeSpaces.splice(freeSpaces.indexOf(event.currentTarget.id),1)[0]] = 'x';
    if (checkWin() === 'x'){
        winText.appendChild(document.createTextNode("You Win"))
        spaces.forEach(element => {
            element.removeEventListener("click", addX);
        });
        return null
    }
    addO()
    if (checkWin() === 'o'){
        winText.appendChild(document.createTextNode("Better Luck Next Time"))
        spaces.forEach(element => {
            element.removeEventListener("click", addX);
        });
    }
}

function addO(){
    var choice = freeSpaces[Math.floor(Math.random()*freeSpaces.length)]
    var space = spaces[parseInt(choice) - 1]
    space.appendChild(document.createTextNode("O"))
    space.removeEventListener("click", addX)
    takenSpaces[freeSpaces.splice(freeSpaces.indexOf(choice),1)[0]] = 'o'
}

function checkWin(){
    for (let i = 1; i < 16; i += 4){
        if (takenSpaces[i.toString()] !== undefined &&
            takenSpaces[i.toString()] === takenSpaces[(i+1).toString()] &&
            takenSpaces[i.toString()] === takenSpaces[(i+2).toString()]){
            return takenSpaces[i.toString()]
        }
    }
    for (let i = 2; i < 16; i += 4){
        if (takenSpaces[i.toString()] !== undefined &&
            takenSpaces[i.toString()] === takenSpaces[(i+1).toString()] &&
            takenSpaces[i.toString()] === takenSpaces[(i+2).toString()]){
            return takenSpaces[i.toString()]
        }
    }
    for (let i = 1; i < 5; i += 1){
        if (takenSpaces[i.toString()] !== undefined &&
            takenSpaces[i.toString()] === takenSpaces[(i+4).toString()] &&
            takenSpaces[i.toString()] === takenSpaces[(i+8).toString()]){
            return takenSpaces[i.toString()]
        }
    }
    for (let i = 5; i < 9; i += 1){
        if (takenSpaces[i.toString()] !== undefined &&
            takenSpaces[i.toString()] === takenSpaces[(i+4).toString()] &&
            takenSpaces[i.toString()] === takenSpaces[(i+8).toString()]){
            return takenSpaces[i.toString()]
        }
    }
    for (let i = 1; i < 3; i += 1){
        if (takenSpaces[i.toString()] !== undefined &&
            takenSpaces[i.toString()] === takenSpaces[(i+5).toString()] &&
            takenSpaces[i.toString()] === takenSpaces[(i+10).toString()]){
            return takenSpaces[i.toString()]
        }
    }
    for (let i = 5; i < 7; i += 1){
        if (takenSpaces[i.toString()] !== undefined &&
            takenSpaces[i.toString()] === takenSpaces[(i+5).toString()] &&
            takenSpaces[i.toString()] === takenSpaces[(i+10).toString()]){
            return takenSpaces[i.toString()]
        }
    }
    for (let i = 3; i < 5; i += 1){
        if (takenSpaces[i.toString()] !== undefined &&
            takenSpaces[i.toString()] === takenSpaces[(i+3).toString()] &&
            takenSpaces[i.toString()] === takenSpaces[(i+6).toString()]){
            return takenSpaces[i.toString()]
        }
    }
    for (let i = 7; i < 9; i += 1){
        if (takenSpaces[i.toString()] !== undefined &&
            takenSpaces[i.toString()] === takenSpaces[(i+3).toString()] &&
            takenSpaces[i.toString()] === takenSpaces[(i+6).toString()]){
            return takenSpaces[i.toString()]
        }
    }
    return null
}
