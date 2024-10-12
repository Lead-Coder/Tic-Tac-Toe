let btns = document.querySelectorAll(".tab");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let reset = document.querySelector(".reset");

let count=0;
let flag=1;
const resetGame = () => {
    flag=1;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6],
];

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if(flag==1) {
        btn.innerText = "X";
        flag=0;
    }
    else {
        btn.innerText = "O";
        flag=1;
    }
    btn.disabled = true;
    count++;

    let value = checkWinner();
    if(count==9 && !value) {
        msg.innerText = `Game was a Draw.`;
        msgContainer.classList.remove("hide");
        disableBoxes();
    }
  })
})

const enableBoxes = () => {
    for(let box of btns) {
        box.disabled = false;
        box.innerHTML = "";
    }
}

const disableBoxes = () => {
    for(let box of btns) {
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for(let arr of winPatterns) {
        let ele1 = btns[arr[0]].innerHTML;
        let ele2 = btns[arr[1]].innerHTML;
        let ele3 = btns[arr[2]].innerHTML;

    if (ele1!="" && ele2 != "" && ele3!="") {
          if(ele1 == ele2 && ele2 == ele3) {
            showWinner(ele1);
            return true;
          }
       }
    }
}

reset.addEventListener("click", resetGame);
