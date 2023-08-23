// 1: add event handler with the wit withdrawal button
// 2: get the withdrawal amount from the withdrawal input field
// 3: Get the current withdrawal total amount
// 4: Add numbers to show the withdrawal amount
// 5: Get balance total
// 6: calculate current total Balance
// 7: Clearing the deposit field

// step-1
document.getElementById('btn-withdrawal').addEventListener('click', function () {
    // step-2
    const withdrawField = document.getElementById('withdrawal-amount');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawalAmount = parseFloat(newWithdrawAmountString);

    // step-7
    withdrawField.value = '';

    // step-3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step-4
    const currentWithdrawalTotal = previousWithdrawTotal + newWithdrawalAmount;
    withdrawTotalElement.innerText = currentWithdrawalTotal;


    // step-5
    const balanceTotalElement = document.getElementById('Balance-total');
    const PreviousBalanceTotalString = balanceTotalElement.innerText;
    const PreviousBalanceTotal = parseFloat(PreviousBalanceTotalString);

    // step-6
    const currentBalanceTotal = PreviousBalanceTotal - newWithdrawalAmount;
    balanceTotalElement.innerText = currentBalanceTotal;


})