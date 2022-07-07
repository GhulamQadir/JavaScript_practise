
// chap: 76 Browser control: Getting and setting the URL

function openStopWatch() {
    var location = window.location.href;
    console.log(location)
    window.location.href = "https://stop-watch-for-web.web.app/"
}




// Browser control: Getting and setting the URL another way

function openFacebook() {
    window.location.assign('https://www.facebook.com/') //work same like href but this is best practise
}


// replacing url
function login() {
    var email = document.getElementById('email')
    var password = document.getElementById('password')
    if (email.value.length >= 9 && password.value >= 6) {
        window.location.replace('file:///C:/Users/abdulqadir/Desktop/JS-practise/home.html')
        alert("Your are logged in successfully")
    }
}





// chap:78 Browser control: Filling the window with content
// function openWindow() {
//     // window.open()    //opens blank window

//     window.open('https://www.linkedin.com')

// }



// chap: 80 Controlling the window's size and location
// function openHomeFile() {
//     window.open('home.html', 'win1', 'height=200, width=200,left=200,top=100')
// }




// chap 81: Browser control: Testing for popup blockers
// function checkForPopupBlocker() {
//     var win = window.open('https://github.com')
//     if (win === null) {
//         alert("Please enable popup locker")
//         win.close()
//     }
// }





// chap 82: Form validation: text fields 
// function signUp() {
//     var firstName = document.getElementById('firstName')
//     var lastName = document.getElementById('lastName')
//     var email = document.getElementById('email')
//     var password = document.getElementById('password')

//     if (firstName.value.length === 0) {
//         alert("Please enter your first name")
//         firstName.className = 'error'
//         firstName.focus();
//     }
//     else if (lastName.value.length === 0) {
//         alert("Please enter your last name")
//         lastName.className = 'error'
//         lastName.focus();
//     }
//     else if (email.value.length === 0) {
//         alert("Please enter your email")
//         email.className = 'error'
//         email.focus();
//     }
//     else if (password.value.length === 0) {
//         alert("Please enter your password")
//         password.className = 'error'
//         password.focus();
//     }
//     else {
//         firstName.value = ""
//         lastName.value = ""
//         email.value = ""
//         password.value = ""
//         alert("Your account created successfully")
//         window.location.replace('home.html')
//     }

// }





// chap 83: Form validation: drop-downs
function submit() {
    var selectState = document.getElementById('states')
    if (selectState.selectedIndex === 0) {
        alert("Please select your state")
        return false;
    }
    else {
        console.log(selectState.options[selectState.selectedIndex].value)
        selectState.selectedIndex = null
    }
}



// chap 84: Form validation: radio buttons
function selectGender() {
    var gender = document.getElementsByName('radioBtn')
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            console.log(gender[i].value)
            gender[i].checked = false
            return true;
        }
    }
    alert("Please select your gender")
    return false
}




// chap 85: Form validation: ZIP codes
function validateZipCode() {
    var valueEntered = document.getElementById("zip_code").value;
    var numChars = valueEntered.length;
    if (numChars < 5 || numChars > 5) {
        alert("Please enter a 5-digit code.");
        return false;
    }

    for (var i = 0; i <= 4; i++) {
        var thisChar = parseInt(valueEntered[i]);
        if (isNaN(thisChar)) {
            alert("Please enter only numbers.");
            return false;
        }
    }
}