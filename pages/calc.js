// VARIABLES ================================================================================================================================

const companyName = document.getElementById("company-name");
const iconChildren = document.getElementsByClassName("icon-child");

const addItemButton = document.getElementById("add-item-button");
const item = document.getElementsByClassName("item");
const itemContainer = document.getElementById("item-container");

const itemName = document.getElementsByClassName("item-name")[0]; 
const plusSign = document.getElementById("plus-symbol0");

const calculationText = document.getElementById("calculation-text");
const totalAmount = document.getElementById("total-amount");
const salesTax = document.getElementById("calc-sales-tax");

const addItem = document.getElementById("add-item");
const addImage = document.getElementsByClassName("add-image");

// FUNCTIONS ================================================================================================================================

let number = 0;

// When cloning, specificly set the id of the trash can for proper deletion
// Also reset values of user inputs as well as the item image
// Furthermore, insert new clone before the add-item div
function cloneItem(num){
    let clone = item[0].cloneNode(true); // Clone the item div
    
    let trashButton = clone.childNodes[7].childNodes[3]; // Get the trash can id

    let priceInput = clone.childNodes[1].childNodes[3];
    let itemNameInput = clone.childNodes[1].childNodes[1];

    let addImageButton = clone.childNodes[7].childNodes[1];
    let imageIcon = clone.childNodes[3].childNodes[1];

    // Set default values 
    addImageButton.setAttribute("id", "add-image" + num);
    trashButton.setAttribute("id", "remove-item" + num);
    imageIcon.setAttribute("id", "item-image" + num);

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

    console.log(itemNameClone);

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

        document.getElementById(trash).parentNode.parentNode.remove(); // Remove the item div
        
        console.log(itemIndex);
        console.log(itemNameCalc);

        itemNameCalc.remove(); // Remove the item name from the calculation div
        quantityCalc.remove(); // Remove the quantity from the calculation div
        plusSignCalc.remove();

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

// MAINSETUP ================================================================================================================================

companyName.addEventListener("click", () => {
    window.location.href = "/index.html";
});

// TRASHCAN =================================================================================================================================

// When the addItemButton is clicked, clone the item div and insert it before the add-item div
// Then give each trashcan clone a working click event listener
addItemButton.addEventListener("click", () => { 
    number++;
    cloneItem(number);
});
