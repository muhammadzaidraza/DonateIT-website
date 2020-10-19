//setting an auth observer

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in
        console.log("User Signed In")
    }
    else {
        console.log("user signed out");
        window.location.replace("main_page.html");
    }

});