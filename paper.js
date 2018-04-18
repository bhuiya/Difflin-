
let submit_button=document.getElementById('submit');
submit_button.addEventListener('click', function() {
  console.log('click is working');
  let input = document.getElementById('input1').value;
  console.log(input);
  checkEmail();


});

function checkEmail() {

    var email = document.getElementById('input1');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {

      alert('Please provide a valid email address');
      email.focus;
      return false;
     }
     else{
        alert('Sign up complete');
        document.getElementById('div_on_pict').style.visibility = 'hidden';
     }
}
