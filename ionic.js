const inputReason = document.querySelector("#input-reason");
const inputAmount = document.querySelector("#input-amount");
const addBtn =  document.querySelector("#add-btn");
const clearBtn = document.querySelector("#clear-btn")
const expensesList = document.querySelector("#expenses-list");
const totalExpenses = document.querySelector("#total-expenses");
const alertController = document.querySelector('ion-alert-controller')

let totExpense = 0;

const clear = () => {
    inputReason.value = "",
    inputAmount.value = ""
}
addBtn.addEventListener("click", () => {
    const reasonValue = inputReason.value;
    const amountValue = inputAmount.value;

    if(reasonValue.trim().length <= 0 || amountValue <= 0 || amountValue.trim().length <= 0){
        alertController.create({
            message : "please enter a valid reason and amount!",
            header : "Invalid Input",
            buttons : ["CANCEL","CONFIRM"]
        }).then(alertElement => {
            alertElement.present();
        });
    }
    else{
            const newItem = document.createElement("ion-item");
            newItem.textContent = reasonValue + ": $" + amountValue;

            expensesList.appendChild(newItem);

            totExpense += +amountValue;
            totalExpenses.textContent = "$"+totExpense;

            clear(); // for dir exc.
    }
})

clearBtn.addEventListener("click", clear) // method ref to act with event