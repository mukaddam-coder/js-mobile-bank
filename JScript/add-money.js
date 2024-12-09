document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const addMoneyInput = document.getElementById('input-add-money').value;
    const pinNumberInput = document.getElementById('input-pin-number').value;
    const accountBalance = document.getElementById('current-balance').innerText
   if(pinNumberInput === '19945'){
    const addMoneynumber = parseFloat(addMoneyInput);
    const BalanceNumber = parseFloat(accountBalance);
    const newBalance = addMoneynumber + BalanceNumber;
    document.getElementById('current-balance').innerText = newBalance;
    console.log('Adding money to your account')
   }
   else{
    alert('Failed to add money! Please try again.')
   }
})