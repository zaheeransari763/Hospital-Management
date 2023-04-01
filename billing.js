const firebaseConfig = {
	apiKey: "AIzaSyDfjBDf_vtsCSf0rvlBMohfT69b6-mgaYk",
    authDomain: "hospital-management-f3acf.firebaseapp.com",
    databaseURL: "https://hospital-management-f3acf-default-rtdb.firebaseio.com",
    projectId: "hospital-management-f3acf",
    storageBucket: "hospital-management-f3acf.appspot.com",
    messagingSenderId: "1073844674212",
    appId: "1:1073844674212:web:b5ec41ac83582673d55031",
    measurementId: "G-MB7P9HX327"
};

firebase.initializeApp(firebaseConfig);


var billbutton = document.getElementById('billcheckoutbutton');
const inputs = document.querySelectorAll('input,textarea,option');

const database = firebase.database();
const usersRef = database.ref('/bills');



billbutton.addEventListener('click', e => {
  e.preventDefault();

  var name = document.getElementById('billname');
  var email = document.getElementById('billemail');
  var address = document.getElementById('billaddress');
  var city = document.getElementById('billcity');
  var state = document.getElementById('billstate');
  var zipcode = document.getElementById('billzipcode');
  var nameoncard = document.getElementById('billcardname');
  var creditcardnumber = document.getElementById('billcreditcardnumber');
  var expmonth = document.getElementById('billexpmonth');
  var expyear = document.getElementById('billexpyear');
  var cvv = document.getElementById('billcvv');
  
  if (email.length < 4) {
    alert('Please enter an email address.');
  
}
  
  const autoId = usersRef.push().key;

  usersRef.child(autoId).set({
    Name: name.value,
    Email: email.value,
    Address:address.value,
    City:city.value,
    Sate:state.value,
    ZipCode:zipcode.value,
    NameOnCard:nameoncard.value,
    CreditCardNumber:creditcardnumber.value,
    ExpMoth:expmonth.value,
    ExpYear:expyear.value,
    CVV:cvv.value
  });
  alert(name.value +'Thank you for paying the bill.' );
}); 

//clear form 
billbutton.addEventListener('click', () => {
  inputs.forEach(input => input.value = '');
});



