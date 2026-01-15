let choices= document.querySelectorAll(".choice")
let you=document.querySelector(".you")
let computer=document.querySelector(".computer")
let result=document.querySelector(".result")

// function StartShake(){
//     you.style= "animation shake 1s liner 3;"
//     computer.style= "animation shake 1s liner 3;"
// }



choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        result.classList.remove("draw")
        result.classList.remove("win")
        result.classList.remove("lose")
        // StartShake()

    
        let userChoice= choice.getAttribute("id") 
        let options=["stone", "paper", "scissor"]
        let compindex=Math.floor(Math.random()*3)
        let computerChoice=options[compindex]
        playGame(userChoice,computerChoice)
    
        
    })
})

function playGame(userChoice,computerChoice){
    if(userChoice==="stone"){
        you.innerText= "👊"
    }
    else if(userChoice==="paper"){
        you.innerText= "✋"
    }
    else{
        you.innerText= "✌️"
    }

     if(computerChoice==="stone"){
        computer.innerText= "👊"
    }
    else if(computerChoice==="paper"){
        computer.innerText= "✋"
    }
    else{
        computer.innerText= "✌️"
    }


    if(userChoice===computerChoice){
        result.innerText="DRAW"
        result.style="box-shadow: inset 2px 2px 20px rgba(16,198,222,0.8), inset -2px -2px 20px rgba(17,201,225,0.8); color:rgba(17,201,225,0.8);"
    }
    else if(userChoice==="stone" && computerChoice==="scissor" || userChoice==="paper" && computerChoice==="stone" || userChoice==="scissor" && computerChoice==="paper"){
        result.innerText="YOU WIN"
        result.style="box-shadow: inset 2px 2px 20px rgba(16,222,19,0.8), inset -2px -2px 20px rgba(16,222,19,0.8); color:rgba(16,222,19,0.8);"
    }
    else{
        result.innerText="YOU LOSE"
        result.style="box-shadow: inset 2px 2px 20px rgba(222,50,16,0.8), inset -2px -2px 20px rgba(222,50,16,0.8); color:rgba(222,50,16,0.8);"
    }
}