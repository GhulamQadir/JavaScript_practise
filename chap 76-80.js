
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
function checkForPopupBlocker() {
    var win = window.open('https://github.com')
    if (win === null) {
        alert("Please enable popup locker")
        win.close()
    }
}