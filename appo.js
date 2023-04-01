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


var appointmentbutton = document.getElementById('appbutton');
const inputs = document.querySelectorAll('input,textarea,option');

const database = firebase.database();
const usersRef = database.ref('/appointments');



appointmentbutton.addEventListener('click', e => {
  e.preventDefault();

  var patientname = document.getElementById('appname');
  var patientemail = document.getElementById('appemail');
  var patientphonenumber = document.getElementById('appnumber');
  var patientbloodgroup = document.getElementById('appbloodgroup');
  var patientdob = document.getElementById('appdob');
  var patientdop = document.getElementById('appdop');
  var patientdoctor = document.getElementById('appdoctor');
 
  
  if (patientemail.length < 4) {
    alert('Please enter an email address.');
  
}
  
  const autoId = usersRef.push().key;

  usersRef.child(autoId).set({
    Name: patientname.value,
    Email: patientemail.value,
    PhoneNumber:patientphonenumber.value,
    BloodGroup:patientbloodgroup.value,
    DateOfBirth:patientdob.value,
    DateOfAppointment:patientdop.value,
    Doctor:patientdoctor.value
    
  });
  alert('Appointment Booked for ' + patientname.value );
}); 

//clear form 
appointmentbutton.addEventListener('click', () => {
  inputs.forEach(input => input.value = '');
});



