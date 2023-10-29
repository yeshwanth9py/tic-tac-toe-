const boxes = document.querySelectorAll(".box");
let chance = 1;

const x_pos = []
const y_pos = []
const possible_outcomes = [[1,2,3],[4,5,6],[7,8,9]]

boxes.forEach((el)=>{
    el.addEventListener("click",(e)=>{
        // console.log(e.target);
        startgame(e.target)
    })
})


function startgame(e){
    if(chance == 1){
        const p = document.createElement("p");
        p.innerText = "X";
        p.style.color = "red";
        e.appendChild(p);
        x_pos.push(Number(e.id))
        chance = 0
        if(win_check(x_pos,possible_outcomes)){
            console.log("x won")
            document.getElementById("result").style.visibility = "visible"
            document.getElementById("message").innerText = "X WON"
        }
    }
    else{
        const p = document.createElement("p");
        p.innerText = "O";
        p.style.color = "blue";
        e.appendChild(p);
        y_pos.push(Number(e.id))
        chance = 1
        if(win_check(y_pos,possible_outcomes)){
            console.log("y won")
            document.getElementById("result").style.visibility = "visible"
            document.getElementById("message").innerText = "Y WON"
        }
    }
    // console.log(x_pos,y_pos)
    
}

function win_check(arr1,possible_outcomes){
    for(let i =0;i<possible_outcomes.length;i++){
        const boole = possible_outcomes[i].every((el)=>{
            return arr1.includes(el)
        })
        if(boole){
            return true
        }
    }
}