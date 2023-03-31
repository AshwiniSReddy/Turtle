let new_game=document.getElementById("newgame")

new_game.addEventListener("click",newGame)

function newGame(){
    location.href = "turtle.html";
}

let instruction=document.getElementById("instructions")

instruction.addEventListener("click",Instruction)

function Instruction(){
    location.href = "index3.html";
}