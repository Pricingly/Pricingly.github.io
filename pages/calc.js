// VARIABLES ================================================================================================================================

const companyName = document.getElementById("company-name");
const iconChildren = document.getElementsByClassName("icon-child");

const addItemButton = document.getElementById("add-item-button");
const item = document.getElementsByClassName("item");
const itemContainer = document.getElementById("item-container");

const addItem = document.getElementById("add-item");

const addImage = document.getElementsByClassName("add-image");

// FUNCTIONS ================================================================================================================================

let num = 0;

// When cloning, specificly set the id of the trash can for proper deletion
// Also reset values of user inputs as well as the item image
// Furthermore, insert new clone before the add-item div
function cloneItem(num){
    let clone = item[0].cloneNode(true); // Clone the item div

    clone.childNodes[7].childNodes[3].setAttribute("id", "remove-item" + num); // trash can

    clone.childNodes[1].childNodes[1].value = ""; // Item Name input
    clone.childNodes[1].childNodes[3].value = ""; // Price input

    clone.childNodes[3].childNodes[1].src = "/images/Icons/image-list/default.png";

    itemContainer.insertBefore(clone, addItem);
} 

let debounce = false; // Debounce is here so the animation cannot be spammed

// When the trash can is clicked, run this function AS DEFINED IN THE HTML
// If there is one item left, do not allow the user to delete the item div
function removeItem(trash){
    const trashCan = document.querySelectorAll(".trash-can"); // Update trashCan variable

    console.log(trash);

    if (debounce == true){
        return;
    }

    if (trashCan.length > 1){
        console.log(trash.parentNode.parentNode);

        trash.parentNode.parentNode.remove();
    }
    else{
        trash.classList.add("angryShakeUp"); // Play animation when the user tries to delete the only item div left
        debounce = true;

        setTimeout(() => {
            trash.classList.remove("angryShakeUp");
            debounce = false;
        }, 800);
    }

    return;
}

// MAINSETUP ================================================================================================================================

companyName.addEventListener("click", () => {
    window.location.href = "/index.html";
});

// TRASHCAN =================================================================================================================================

// When the addItemButton is clicked, clone the item div and insert it before the add-item div
// Then give each trashcan clone a working click event listener
addItemButton.addEventListener("click", () => { 
    num++;
    cloneItem(num);
});



