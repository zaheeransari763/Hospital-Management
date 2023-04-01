function signupvalidation(){
	let name = document.forms.signupForm.name.value;
	let email = document.forms.signupForm.email.value;
	let password = document.forms.signupForm.password.value;
	let confirmpwd = document.frms.signupForm.confirmpwd.value;

	let regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_'{|}~-]*@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	let regName = /\d+/g;
	if (name == "" || regName.test(name)) {
		alert("Please enter your name properly.");
		name.focus();
		return false;
	}
	if (email == "" || regEmail.test(email)) {
		alert("Please enter your email properly.");
		email.focus();
		return false;
	}
	if (password == "" || regName.test(password)) {
		alert("Please enter your password.");
		password.focus();
		return false;
	}
	if (confirmpws == "" || regName.test(confirmpws)) {
		alert("Please confirm your password.");
		confirmpws.focus();
		return false;
	}

	Log = document.querySelector(".Log"),
	pwShowHide = document.querySelectorAll(".showhidepw"),
	pwFields = document.querySelectorAll(".password"),
	signup = document.queryselector("signup-link"),
	login = document.querySelector(".t")
}


// js code to show and hide password and change icon

 pwShowHide.forEach(eyeIcon => {
	eyeIcon.addEventListner("click", ()=>{
		pwFields.forEach(pwField =>{
		if (pwField.type === "password"){
			pwField.type = "text";
			pwShowHide.forEach(icon =>{
			Icon.classList.replace("fa-eye-slash", "fa-eye");
		})
	
	}
	else{
		pwField.type = "password";

		pwShowHide.forEach(icon =>{
			icon.classList.replace("fa-eye", "fa-eye-slash")
		})
	}
		})
	})
});

// js code to appear signup and login form//

signup.addEventListner("click", function () {
	Log.classList.add("active");
})

login.addEventListner("click",  function () {
	Log.classList.remove("active");
})


// form validation //

function loginvalidation(){
	let email = document.forms.loginForm.email.value;
	let password = document.forms.loginForm.password.value;
	let regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_'{|}~-]*@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (email == "" || !regEmail.test(email)) {
		alert("please enter your Emial properly.");
		email.focus();
		return false;

	}if (password ==""){
		alert("please entert your password");
		password.focus();
		return false();

	}else{
		alert("Login Successful.")
	}
}