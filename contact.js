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


var contactbutton = document.getElementById('contactbutton');
const inputs = document.querySelectorAll('input,textarea,option');

const database = firebase.database();
const usersRef = database.ref('/contacts');



contactbutton.addEventListener('click', e => {
  e.preventDefault();

  var contactname = document.getElementById('contactname');
  var contactemail = document.getElementById('contactemail');
  var contactmessage = document.getElementById('contactmessage');
  
 
  
  if (contactemail.length < 4) {
    alert('Please enter an email address.');
  
}
  
  const autoId = usersRef.push().key;

  usersRef.child(autoId).set({
    Name: contactname.value,
    Email: contactemail.value,
    Message:contactmessage.value
    
  });
  alert('We will get back to you ' + contactname.value );
}); 

//clear form 
contactbutton.addEventListener('click', () => {
  inputs.forEach(input => input.value = '');
});



