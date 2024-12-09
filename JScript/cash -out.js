document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
   const inputCashOut = document.getElementById('input-cash-out').value;
   const inputCashOutNumber = parseFloat(inputCashOut);
   const inputCashOutPin = document.getElementById('input-cash-out-pin').value;
   if(inputCashOutPin === '19945'){
    console.log('Cash Out Successful')
    const currentBalance = document.getElementById('current-balance').innerText;
    const currentBalanceNumber =parseFloat(currentBalance);
    const newBalance = currentBalanceNumber - inputCashOutNumber;
    document.getElementById('current-balance').innerText = newBalance; 
   }
   else{
    alert('Failed to cash out! Please try again')
   }
})
