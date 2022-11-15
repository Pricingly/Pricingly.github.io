// VARIABLES ================================================================================================================================

const companyName = document.getElementById("company-name");
const iconChildren = document.getElementsByClassName("icon-child");

// FUNCTIONS ================================================================================================================================

// MAINSETUP ================================================================================================================================

for (let j = 0; j < iconChildren.length; j++) {
    iconChildren[j].classList.remove("content-hidden");
    iconChildren[j].classList.add("popUp");
}

setTimeout(() =>{

    for (let i = 0; i < iconChildren.length; i += 2) {
        iconChildren[i].classList.add("shakeUpRight");
    }
    
    for (let i = 1; i < iconChildren.length; i += 2) {
        iconChildren[i].classList.add("shakeUpLeft");
    }
    
}, 700)


companyName.addEventListener("click", () => {
    window.location.href = "index.html";
});