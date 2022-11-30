// VARIABLES ================================================================================================================================

const companyName = document.getElementById("company-name");

const addItemButton = document.getElementById("add-item-button");
const item = document.getElementById("item");
const itemContainer = document.getElementById("item-container");

const itemName = document.getElementsByClassName("item-name")[0]; 
const plusSign = document.getElementById("plus-symbol0");

const calculationText = document.getElementById("calculation-text");
const totalAmount = document.getElementById("total-amount");
const salesTax = document.getElementById("calc-sales-tax");

const addItem = document.getElementById("add-item");
const addImage = document.getElementsByClassName("add-image");

/* 

// Check to see if the item element with ID="item0" was ever deleted (via trash can).
// If so, then hide item0 when the page is reseted
if (getCookie("item0") == "item0"){
    // do nothing
    item0.classList.remove("content-gone");
}
else{
    let item0 = document.getElementById("item0");
    item0.classList.add("content-gone");
}

// Originally give item0 a cookie value
setCookie("item0", "item0");

*/

// FUNCTIONS ================================================================================================================================

function dataSave(){
    const decodeCookie = decodeURIComponent(document.cookie); // Decode cookie
    const cookieArray = decodeCookie.split("; "); // Split cookie into an array (look how document.cookie is formatted)

    const itemArray = []; // Array to store all the item divs

    for (let i = 0; i < cookieArray.length; i++){
        if (cookieArray[i].includes("item")){
            let itemValue = getCookie(cookieArray[i]);
            let itemIndex = itemValue.match(/\d/g).join(""); // Get the index of the item div
            
            itemArray.push(itemIndex);
        }
    }
    
    if (!itemArray.length > 0){
        return;
    }

    console.log(cookieArray);
    console.log(itemArray);

    for (let j = 0; j < itemArray.length; j += 1){
        cloneItem(itemArray[j]);
    }

}

dataSave();

let number;
if (getCookie("number") == undefined){
    number = -1; // start @ -1 as array indexes start at 0 and we want to be able to loop
}
else{
    number = getCookie("number");
}

// When cloning, specificly set the id of the trash can for proper deletion
// Also reset values of user inputs as well as the item image
// Furthermore, insert new clone before the add-item div
function cloneItem(num){
    let clone = item.cloneNode(true); // Clone the item div
    clone.classList.remove("content-gone"); // Remove the content-gone class so that the item div is visible

    let trashButton = clone.childNodes[7].childNodes[3]; // Get the trash can id

    let priceInput = clone.childNodes[1].childNodes[3];
    let itemNameInput = clone.childNodes[1].childNodes[1];

    let addImageButton = clone.childNodes[7].childNodes[1];
    let imageIcon = clone.childNodes[3].childNodes[1];

    clone.classList.remove("content-gone");

    // Set default values 
    clone.setAttribute("id", "item" + num);
    addImageButton.setAttribute("id", "add-image" + num);
    trashButton.setAttribute("id", "remove-item" + num);
    imageIcon.setAttribute("id", "item-image" + num);

    setCookie(clone.id, clone.id);

    itemNameInput.value = "";
    priceInput.value = "";
    priceInput.setAttribute("id", "price" + num);    
    itemNameInput.setAttribute("id", "item-name-input" + num);

    let itemImage = clone.childNodes[3].childNodes[1];
    itemImage.src = "/images/Icons/image-list/default.png";

    itemContainer.insertBefore(clone, addItem);
    cloneCalculation(num);
} 

// When the add item button is clicked, run this function to add "Item Name" and "Quantity" to the calculation div
function cloneCalculation(num){

    let itemNameClone = itemName.cloneNode(true);
    itemNameClone.setAttribute("id", "item-name" + num);

    let quantityClone = document.getElementsByClassName("quantity-class")[0].cloneNode(true); // We get the parent node because that styles the input
    quantityClone.setAttribute("id", "quantity" + num); 

    itemNameClone.innerHTML = "Item Name";
    itemNameClone.style.color = "black";
    quantityClone.childNodes[0].value = "";

    calculationText.insertBefore(itemNameClone, salesTax);
    calculationText.insertBefore(quantityClone, salesTax);

    let plusSignClone = plusSign.cloneNode(true);
    plusSignClone.setAttribute("id", "plus-symbol" + num);

    calculationText.insertBefore(plusSignClone, salesTax);
}

let debounce = false; // Debounce is here so the animation cannot be spammed

// When the trash can is clicked, run this function AS DEFINED IN THE HTML
// If there is one item left, do not allow the user to delete the item div
function removeItem(trash){
    const trashCan = document.getElementsByClassName("trash-can"); // Update trashCan variable

    if (debounce == true){
        return;
    }

    if (trashCan.length > 1){
        let itemIndex = (trash).match(/\d/g); // \d/ searches for all digits [0-9] while /g searches for all instances of the digit
        let itemNameCalc = document.getElementById("item-name" + itemIndex.join(""));
        let quantityCalc = document.getElementById("quantity" + itemIndex.join(""));
        let plusSignCalc = document.getElementById("plus-symbol" + itemIndex.join("")); // use .join() as matches method returns a list

        // if item0 is deleted, never show it again (item0 is originally hardcoded)
        if (itemIndex == 0){
            setCookie("item0", "deleted");
        }

        document.getElementById(trash).parentNode.parentNode.remove(); // Remove the item div
        
        console.log(itemIndex);
        console.log(itemNameCalc);

        itemNameCalc.remove(); // Remove the item name from the calculation div
        quantityCalc.remove(); // Remove the quantity from the calculation div
        plusSignCalc.remove();

        deleteCookie("item" + itemIndex.join("")); // Delete the cookie of the item div
        updatePrice();
    }
    else{
        document.getElementById(trash).classList.add("angryShakeUp"); // Play animation when the user tries to delete the only item div left
        debounce = true;

        setTimeout(() => {
            document.getElementById(trash).classList.remove("angryShakeUp");
            debounce = false;
        }, 800);
    }

    return;
}

// This function is meant to run as the user types in the item name input. It will take the item name and apply it to the
// calculation div. 
function updateName(itemId){

    let itemIndex = (itemId).match(/\d/g); 
    let itemNameId = document.getElementById("item-name" + itemIndex.join(""));

    itemNameId.innerHTML = document.getElementById(itemId).value;
    itemNameId.style.color = "var(--super-dark-blue)";

    if (itemNameId.innerHTML == ""){
        itemNameId.innerHTML = "Item Name";
        itemNameId.style.color = "black";
    }
}

let validPrices = true;
function updatePrice(){
    validPrices = true;

    let calcSalesTax = document.getElementById("sales-tax").value; 

    totalAmount.innerHTML = "$0.00";
    salesTax.innerHTML = "0% Sales Tax";
    salesTax.style.color = "black";

    if (calcSalesTax != ""){        
        salesTax.innerHTML = calcSalesTax + "% Sales Tax";

        salesTax.style.color = "var(--super-dark-blue)";
    }

    // Make sure that all prices are filled
    for (var j = 0; j < item.length; j++){
        
        if (item[j].childNodes[1].childNodes[3].value == ""){
            validPrices = false; // changes to false immediately if one of the prices elements are empty strings
            return;
        }
        else{
            let allQuantities = document.getElementsByClassName("quantity-class"); // Get all the quantity inputs

            for (var i = 0; i < allQuantities.length; i++){
                
                if (allQuantities[i].value == ""){
                    validPrices = false;
                    return;
                }   
            }
            
            if (validPrices == true){

                let currentPrice = 0; // Use the for loop to get all prices and add the total
    
                for (var i = 0; i < item.length; i++){
                    currentPrice += parseFloat(item[i].childNodes[1].childNodes[3].value).toFixed(2) * allQuantities[i].childNodes[0].value; // * for loop through all these quantity spans
                }
                
                if (document.getElementById("sales-tax").value == ""){
                    totalAmount.innerHTML = "$" + parseFloat(currentPrice).toFixed(2); // Round to the nearest cent
                }
                else{
                    totalAmount.innerHTML = "$" + (parseFloat(currentPrice) * (1 + (calcSalesTax / 100))).toFixed(2); // Round to the nearest cent
                }
            }
        }
    }
}

var itemElement = "";
function openModal(imageId){
    
    let dialogModal = document.getElementsByClassName("img-dialog")[0];
    let itemIndex = (imageId).match(/\d/g); 
    itemElement = document.getElementById("item-image" + itemIndex.join(""));

    if (typeof dialogModal.showModal !== "function"){
        window.alert("The dialog API is not supported by this browser. Sorry.");
    }
    else{
        dialogModal.showModal();
    }
}

function setImage(image){
    
    itemElement.src = image;
    exitModal();
}

function exitModal(){
    let dialogModal = document.getElementsByClassName("img-dialog")[0];
    dialogModal.close();
}

function setCookie(cookieId, value){
    let date = new Date();
    date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000)); // Next year's date

    let nextYear = date.toUTCString();

    // Create cookie with key, value, and expiration date
    document.cookie = `${cookieId}=${value}; expires=${nextYear}; path=/`; // Path is set to root directory so that all pages can access the cookie
}

function getCookie(cookieId){
    const decodeCookie = decodeURIComponent(document.cookie); // Decode cookie
    const cookieArray = decodeCookie.split("; "); // Split cookie into an array (look how document.cookie is formatted)

    let cookieValue = null;
    cookieArray.forEach((cookie) => {
        if (cookie.includes(cookieId)){

            cookieValue = cookie.split("=")[1]; // Get value of this cookie            
        }
    });
    return cookieValue; 
    // You cannot break/return out of a forEach loop, so you have to return the value outside of the loop
    // If you try to do so, forEach will ignore your return statement and continue to loop through the array
}

function deleteCookie(cookieId){
    document.cookie = `${cookieId}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

// MAINSETUP ================================================================================================================================

companyName.addEventListener("click", () => {
    window.location.href = "/index.html";
});

// TRASHCAN =================================================================================================================================

// When the addItemButton is clicked, clone the item div and insert it before the add-item div
// Then give each trashcan clone a working click event listener
addItemButton.addEventListener("click", () => { 
    number++;

    setCookie("number", number);
    cloneItem(number);
});
