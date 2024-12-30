const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item => {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i => {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');
const body = document.querySelector('body');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})

// Function to toggle the 'hide' class based on screen width
function updateSidebarClass() {
	if (window.innerWidth < 768) {
		sidebar.classList.add("hide");
	} else {
		sidebar.classList.remove("hide");
	}
}

// Run on page load
updateSidebarClass();

// Run on window resize
window.addEventListener("resize", updateSidebarClass);







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if (window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if (searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if (window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if (window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if (this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if (this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})


// error message html
function validateForm() {
	// Clear existing errors
	document.querySelectorAll('.error-message').forEach(el => el.innerText = '');
	document.querySelectorAll('.form-control').forEach(el => el.classList.remove('input-error'));

	let isValid = true;

	// First Name Validation
	const firstName = document.getElementById('firstName');
	if (!firstName.value.trim()) {
		isValid = false;
		document.getElementById('firstNameError').innerText = 'First name is required.';
		firstName.classList.add('input-error');
	}

	// Last Name Validation
	const lastName = document.getElementById('lastName');
	if (!lastName.value.trim()) {
		isValid = false;
		document.getElementById('lastNameError').innerText = 'Last name is required.';
		lastName.classList.add('input-error');
	}

	// Email Validation
	const email = document.getElementById('email');
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!email.value.trim() || !emailRegex.test(email.value)) {
		isValid = false;
		document.getElementById('emailError').innerText = 'A valid email is required.';
		email.classList.add('input-error');
	}

	// Password Validation
	const password = document.getElementById('password');
	if (password.value.length < 6) {
		isValid = false;
		document.getElementById('passwordError').innerText = 'Password must be at least 6 characters.';
		password.classList.add('input-error');
	}

	// Agreement Validation
	const agree = document.getElementById('agree');
	if (!agree.checked) {
		isValid = false;
		document.getElementById('agreeError').innerText = 'You must agree to the terms.';
	}

	if (isValid) {
		alert('Form submitted successfully!');
	}
}



// const avatar = document.getElementById('avatar');
// const profileMenu = document.querySelector('.profile-menu');

// avatar.addEventListener('click', () => {
// 	profileMenu.classList.toggle('active');
// });

// document.addEventListener('click', event => {
// 	if (!profileMenu.contains(event.target)) {
// 		profileMenu.classList.remove('active');
// 	}
// });