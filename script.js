//Login Button even handler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener("click", function() {
   const loginArea =document.getElementById("login-area");
   loginArea.style.display = "none";
   //Second content load and show
   const transitionArea = document.getElementById("transition-area");
   transitionArea.style.display = "block";
})

//Deposit button even handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function() {
const depositAmount = document.getElementById("depositAmount").value;
const depositNumber = parseFloat(depositAmount);


// const currentDeposit = document.getElementById("currentDeposit").innerText;
// const currentDepositNumber = parseFloat(currentDeposit);
// const totalDeposit = depositNumber + currentDepositNumber;
// document.getElementById("currentDeposit").innerText = totalDeposit;

updateSpanText("currentDeposit", depositNumber);

updateSpanText("currentBalance", depositNumber);

document.getElementById("depositAmount").value ="";
})

//withdeaw button event handler
const withdrawBtn = document.getElementById("addwithdrow");
withdrawBtn.addEventListener("click", function () {
 const withdrawNumber = getInputNumber("withdrawAmount");
 
 updateSpanText("currentwithdrow", withdrawNumber);
 updateSpanText("currentBalance",-1 * withdrawNumber);


 document.getElementById("withdrawAmount").value ="";
})

function getInputNumber(id) {
   const amount = document.getElementById(id).value;
   const amountNumber = parseFloat(amount);
   return amountNumber;
}

function updateSpanText(id,depositNumber) {
   const current= document.getElementById(id).innerText;
   const currentNumber = parseFloat(current);
   const totalAmount = depositNumber + currentNumber;
   document.getElementById(id).innerText = totalAmount;
}