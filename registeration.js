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

var registerbutton = document.getElementById('regbutton');
var loginbutton = document.getElementById('loginbutton');
const inputs = document.querySelectorAll('input,textarea');

const auth = firebase.auth();
const database = firebase.database();
const usersRef = database.ref('/users');


registerbutton.addEventListener('click', e => {
  e.preventDefault();
  
var username = document.getElementById('regname').value;
var email = document.getElementById('regemail').value;
var password = document.getElementById('regpassword').value;
var age = document.getElementById('regage').value;
var phonenumber = document.getElementById('regphonenumber').value;
var address = document.getElementById('regaddress').value;
var registrationdate = document.getElementById('registrationdate').value;

  auth
    .createUserWithEmailAndPassword(email, password)
    .then(function () {
      if (email.length < 4) {
        alert('Please enter an email address.');
      
    }
      const autoId = usersRef.push().key;
      // Declare user variable
      var user = auth.currentUser;

      // Add this user to Firebase Database
      usersRef.child(autoId).set({
        UserName: username,
        Email: email,
        Password: password,
        Age:age,
        Phone:phonenumber,
        Address: address,
        RegistrationDate:registrationdate
        
      });
      alert(username +' ThankYou for Registering.' );
    
      
    })
    .catch(function (error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code;
      var error_message = error.message;

      alert(error_message);
    });

}); 

registerbutton.addEventListener('click', () => {
  inputs.forEach(input => input.value = '');
});


loginbutton.addEventListener('click', e => {
	//Get mail and pass
	e.preventDefault();
	const logemail = document.getElementById('logemail').value;
 	const logpassword = document.getElementById('logpassword').value;

	auth
 .signInWithEmailAndPassword(logemail, logpassword)
 .then(function () {
	
   // Declare user variable
   var user = auth.currentUser;

   alert("User Logged In with "+logemail+" and "+logpassword);
 })
 .catch(function (error) {
   // Firebase will use this to alert of its errors
   var error_code = error.code;
   var error_message = error.message;

   alert(error_message);
 });

	
});
//Send verification mail


//Add realtime Listner
firebase.auth().onAuthStateChanged(firebaseUser => {
	if(firebaseUser) {
		console.log(firebaseUser);
	}else{
		console.log('not logged in');
	}
});

//clear function
loginbutton.addEventListener('click', () => {
	inputs.forEach(input => input.value = '');
});