// VARIABLES ========================================================================================================================================

// FUNCTIONS ========================================================================================================================================

setCookie("first", "john");
setCookie("last", "test");

console.log("working");

console.log(getCookie("first"));
console.log(getCookie("last"));

function setCookie(cookieId, value){
    let date = new Date();
    date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000)); // Next year's date

    let nextYear = date.toUTCString();

    // Create cookie with key, value, and expiration date
    document.cookie = `${cookieId}=${value}; expires=${nextYear}; path=/`; // Path is set to root directory so that all pages can access the cookie
}

function getCookie(cookieId){
    const decodeCookie = decodeURIComponent(document.cookie); // Decode cookie
    const cookieArray = decodeCookie.split(";"); // Split cookie into an array

    cookieArray.forEach((cookie) => {
        if (cookie.includes(cookieId)){

            // Return the value of the cookie
            return cookie.split("=")[1]; 
        }
    });
}

// MAINSETUP ========================================================================================================================================

