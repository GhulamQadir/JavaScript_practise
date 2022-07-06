
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
function signUp() {
    var firstName = document.getElementById('firstName')
    var lastName = document.getElementById('lastName')
    var email = document.getElementById('email')
    var password = document.getElementById('password')

    if (firstName.value.length === 0) {
        alert("Please enter your first name")
        firstName.className = 'error'
        firstName.focus();
    }
    else if (lastName.value.length === 0) {
        alert("Please enter your last name")
        lastName.className = 'error'
        lastName.focus();
    }
    else if (email.value.length === 0) {
        alert("Please enter your email")
        email.className = 'error'
        email.focus();
    }
    else if (password.value.length === 0) {
        alert("Please enter your password")
        password.className = 'error'
        password.focus();
    }
    else {
        firstName.value = ""
        lastName.value = ""
        email.value = ""
        password.value = ""
        alert("Your account created successfully")
        window.location.replace('home.html')
    }

}