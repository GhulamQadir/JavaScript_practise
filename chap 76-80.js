
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

function login() {
    var email = document.getElementById('email')
    var password = document.getElementById('password')
}