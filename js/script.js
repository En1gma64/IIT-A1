function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

function validateReg() {   
  if( document.registration.username.value == "" ) {
     alert( "Please provide your name!" );
     return false;
  }
  if( document.registration.password.value == "" ) {
     alert( "Please provide your password!" );
     return false;
  }
  var pass = document.registration.password.value;
  var n = pass.length;
  if(n<8) {
    alert( "Password must be at least 8 characters" );
    return false;
  }
  if( document.registration.comment.value == "" ) {
     alert( "Please provide your comments!" );
     return false;
  }
  return( true );
}

function validateOrd() {   
  if(document.getElementById('delivery').checked) {
    if( document.order.daddress.value == "" ) {
       alert( "Please provide your  delivery address!" );
      return false;
    }
  }
  if( document.order.baddress.value == "" ) {
     alert( "Please provide your billing address!" );
     return false;
  }
  if( document.order.num.value == "" ) {
    alert( "Please provide your contact number!" );
    return false;
  }
  if( document.order.mail.value == "" ) {
    alert( "Please provide your email!" );
    return false;
  }
  if(document.getElementById('payop').value == "Pay Online") {
    if( document.order.creditnum.value == "" ) {
      alert( "Please provide your credit card number!" );
      return false;
    }
    if( document.order.hname.value == "" ) {
      alert( "Please provide CardHolder's Name" );
      return false;
    }
    if( document.order.ccv.value == "" ) {
      alert( "Please provide your ccv/ccv!" );
      return false;
    }
  }
  if(document.getElementById('payop').value == "Pay Online") {
    if(document.getElementById('paytype').value == "Visa"){
      var c = document.getElementById('creditnum').value;
      var i = c.length;
      if (i!=16){
        alert("Invalid Card Number");
        return false;
      }
    }
    if(document.getElementById('paytype').value == "MasterCard"){
      var c = document.getElementById('creditnum').value;
      var i = c.length;
      if (i!=16){
        alert("Invalid Card Number");
        return false;
      }
    }
    if(document.getElementById('paytype').value == "American Express"){
      var c = document.getElementById('creditnum').value;
      var i = c.length;
      if (i!=15){
        alert("Invalid Card Number");
        return false;
      }
    }
  }
  return( true );
}

function handleChangeR()  {
  if(document.getElementById('pickup').checked) {
    document.getElementById('daddress').disabled = true;
    document.getElementById('copybutton').disabled = true;
  }
  if(document.getElementById('delivery').checked) {
    document.getElementById('daddress').disabled = false;
    document.getElementById('copybutton').disabled = false;
  }
}

function handleChangePay() {
  if(document.getElementById('payop').value == "Pay on pickup") {
    document.getElementById('paytype').disabled = true;
    document.getElementById('creditnum').disabled = true;
    document.getElementById('hname').disabled = true;
    document.getElementById('ccv').disabled = true;
  }
  if(document.getElementById('payop').value == "Pay Online") {
    document.getElementById('paytype').disabled = false;
    document.getElementById('creditnum').disabled = false;
    document.getElementById('hname').disabled = false;
    document.getElementById('ccv').disabled = false;
  }
}

function copyAddress() {
  if(document.getElementById('copybutton').checked) {
    if(document.getElementById('daddress').value == "") {
      alert( "Please provide your delivery address!" );
      document.getElementById('copybutton').checked = false;
    }else {
    document.getElementById('baddress').disabled = true;
    document.getElementById('baddress').value = document.getElementById('daddress').value;
    }
  }else {
    document.getElementById('baddress').disabled = false;
  }
}
