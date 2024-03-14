function sendMoney() {
   var enterName = document.getElementById("enterName").value;
   var enterAmount = parseInt(document.getElementById("enterAmount").value);
   var enterSName = document.getElementById("enterSName").value;
   var findSenderBankAccount = enterSName + "BankBalance";
   var enterSAmount = parseInt(document.getElementById(findSenderBankAccount).innerHTML);

   if (enterAmount > enterSAmount || isNaN(enterAmount) || enterAmount <= 0) {
       alert("Invalid amount or insufficient balance.");
   } else {
       var findUserBankAccount = enterName + "BankBalance";
       var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
       var myAccountBalance = enterSAmount - enterAmount;

       document.getElementById(findSenderBankAccount).innerHTML = myAccountBalance;
       document.getElementById(findUserBankAccount).innerHTML = finalAmount;

       alert(`Successful Transaction!\nRs ${enterAmount} is sent to ${enterName}@gmail.com.`);

       var transactionDetails = `Rs ${enterAmount} is sent from ${enterSName}@gmail.com to ${enterName}@gmail.com on ${new Date().toLocaleString()}`;
       addTransactionToHistory(transactionDetails);
   }
}

function addTransactionToHistory(transactionDetails) {
   var createPTag = document.createElement("li");
   var textNode = document.createTextNode(transactionDetails);
   createPTag.appendChild(textNode);

   var element = document.getElementById("transaction-history-body");
   element.appendChild(createPTag);
}
