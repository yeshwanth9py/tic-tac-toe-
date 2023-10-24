const boxarr = document.querySelectorAll(".box");
const playbtn = document.getElementById("button");

playbtn.addEventListener("click",()=>{
    console.log("clicked")
    window.location.reload()
})

let chance = 1
x_pos = []
y_pos = []
ans_pos = [[1,2,3],[4,5,6],[7,8,9]]  //u add more

boxarr.forEach((el)=>{
    el.addEventListener("click",startgame)
})

function startgame(e){

    console.log(e.target)
    const p = document.createElement("p");
    if(chance == 1){
        p.innerText = "X"
        p.style.color = "red"
        e.target.appendChild(p)
        x_pos.push(Number(e.target.id))
        if(win_check(x_pos,ans_pos)){
            console.log("x won")
            document.getElementById("result").style.visibility = "visible"
            document.getElementById("message").innerText = "X won"

        }
        console.log(x_pos)
        chance = 0
    }
    else{
        p.innerText = "O"
        p.style.color = "blue"
        e.target.appendChild(p)
        y_pos.push(Number(e.target.id))
        if(win_check(y_pos,ans_pos)){
            console.log("y won")
            document.getElementById("result").style.visibility = "visible"
            document.getElementById("message").innerText = "y won"

        }
        chance = 1
    }
}


function win_check(arr1, ans){
    for(let i =0;i<ans.length;i++){
        //ans[i]
        let flag = ans[i].every((el)=>{
            return arr1.includes(el)
        })
        if(flag){
            return true
        }
    }
    return false
}