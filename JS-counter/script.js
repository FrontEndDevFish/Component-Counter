document.addEventListener("DOMContentLoaded", function() {
    
let counterNum = document.getElementById("counter-number");
let minusBtn = document.getElementById("minus");
let plusBtn = document.getElementById("plus");

let count = 0; 

updateNum();

minusBtn.addEventListener("click",()=>{
    count--;
    updateNum();
});

plusBtn.addEventListener("click", ()=>{
    count++;
    updateNum();
})


function updateNum() {
    counterNum.innerHTML = count;
}

});