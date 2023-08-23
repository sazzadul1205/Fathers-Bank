/*
1: add event handler with the with deposit button
2: get the deposit amount from the deposit input field
3: Get the current deposit total amount
4: Add numbers to show the deposit amount
5: Get balance total
6: calculate current total Balance
7: Clearing the deposit field
*/

// step-1
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step-2
    const depositField = document.getElementById('Deposit-amount');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // Clearing the deposit field step-7
    depositField.value = '';

    // step-3
    const depositTotalElement = document.getElementById('Deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step-4
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;

    // step-5
    const balanceTotalElement = document.getElementById('Balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;
});

