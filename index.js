const all_box = document.querySelectorAll(".box");
const res = document.querySelector("#result");
const msg = document.querySelector("#message");
message
let chance = 1;
const desired_res = [[1,5,9],[1,2,3],[4,5,6],[7,8,9]]
const x_pos = [];
const y_pos = [];

all_box.forEach((el)=>{
    console.log(el)
    el.addEventListener("click",startgame)
});

function startgame(event){
    console.log(event.target.id);
    const p = document.createElement("p");
    
    result(p,event.target.id)
    p.style.color = '#FAB201'
    
    event.target.appendChild(p)
}

function result(p, ind){
    if(chance == 1){
        p.innerText = "X"
        chance = 0
        x_pos.push(Number(ind));
        if(check_win(x_pos)){
            console.log("x won");
            msg.innerText = "x won";
            res.style.visibility = "visible"
        } 
    }
    else{
        p.innerText = "O"
        chance = 1
        y_pos.push(Number(ind));
        if(check_win(y_pos)){
            console.log("y won")
            msg.innerText = "y won";
            res.style.visibility = "visible"
        }
    }
}


function check_win(arr){
    return desired_res.some((el)=>{
        // console.log(el)
        // el = [1,2,3]  arr = [1,2,5,3]
        console.log(el,arr)
        const allElementsInArray1ExistInArray2 = el.every(element  => arr.includes(element));
        console.log(allElementsInArray1ExistInArray2)
        if(allElementsInArray1ExistInArray2 == true){
            return true
        }
})}

