document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('login-number').value;
    const pinNumber = document.getElementById('login-pin').value;
   if(phoneNumber === '01735109219' && pinNumber === '19945'){
    console.log('Login Successful');
    window.location.href = '/home.html'
   }
   else{
    alert('Wrong Input! Try again.')
   }
})
