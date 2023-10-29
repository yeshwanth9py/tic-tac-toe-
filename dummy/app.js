const boxes = document.querySelectorAll(".box");
let chance = 1;
const x_pos = []
const y_pos = []

const possible_comb = [[1,2,3],[4,5,6],[7,8,9]]


boxes.forEach((el) => {
    el.addEventListener("click", (e) => {
        console.log("clicked")
        startgame(e)
    })
})


function startgame(e) {
    console.log(e.target)
    if (chance == 1) {
        const p = document.createElement("p");
        p.innerText = "X";
        p.style.color = "red"
        e.target.appendChild(p);
        x_pos.push(Number(e.target.id))
        if(check_win(x_pos,possible_comb)){
            console.log("x won")
        }
        chance = 0
    }
    else{
        const p = document.createElement("p");
        p.innerText = "O";
        p.style.color = "blue"
        e.target.appendChild(p);
        y_pos.push(Number(e.target.id))
        if(check_win(y_pos,possible_comb)){
            console.log("y won")
        }
        chance = 1
    }
}

function check_win(arr, possible_comb){
    for(let i =0; i<possible_comb.length;i++){
        let all_present = possible_comb[i].every((el)=>{
            return arr.includes(el)
        })
        if(all_present){
            return true
        }
    }
}   