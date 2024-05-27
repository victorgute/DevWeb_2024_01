document.addEventListener("DOMContentLoaded", () => {
    const itemForm = document.getElementById("itemForm");
    const itemNameInput = document.getElementById("itemName");
    const itemQuantityInput = document.getElementById("itemQuantity");
    const itemPriceInput = document.getElementById("itemPrice");
    const itemList = document.getElementById("itemList");
    const totalList = document.getElementById("totalList");
    const totalGeneral = document.getElementById("totalGeneral");

    let items = [];

    itemForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const itemName = itemNameInput.value.trim();
        const itemQuantity = parseInt(itemQuantityInput.value.trim());
        const itemPrice = parseFloat(itemPriceInput.value.trim());
        
        if (itemName && itemQuantity > 0 && itemPrice > 0) {
            addItem(itemName, itemQuantity, itemPrice);
            itemNameInput.value = "";
            itemQuantityInput.value = "";
            itemPriceInput.value = "";
        }
    });

    function addItem(name, quantity, price) {
        const item = {
            name: name,
            quantity: quantity,
            price: price,
        };
        items.push(item);
        updateLists();
    }

    function updateLists() {
        itemList.innerHTML = "";
        totalList.innerHTML = "";

        let totalPrice = 0;

        items.forEach((item, index) => {
            const itemTotal = item.quantity * item.price;
            totalPrice += itemTotal;

            const itemElement = document.createElement("li");
            itemElement.className = "list-group-item";
            itemElement.innerHTML = `${item.name} - ${item.price.toFixed(2)} 
                <div>
                    <button class="btn btn-success btn-sm" onclick="increaseQuantity(${index})">+</button>
                    <button class="btn btn-warning btn-sm" onclick="decreaseQuantity(${index})">-</button>
                    <button class="btn btn-danger btn-sm" onclick="removeItem(${index})">X</button>
                </div>`;
            itemList.appendChild(itemElement);

            const totalElement = document.createElement("li");
            totalElement.className = "list-group-item";
            totalElement.innerHTML = `${item.quantity} ${item.name} - ${(itemTotal).toFixed(2)}`;
            totalList.appendChild(totalElement);
        });

        totalGeneral.innerText = `Total Geral: ${totalPrice.toFixed(2)}`;
    }

    window.increaseQuantity = function(index) {
        items[index].quantity += 1;
        updateLists();
    };

    window.decreaseQuantity = function(index) {
        if (items[index].quantity > 1) {
            items[index].quantity -= 1;
        }
        updateLists();
    };

    window.removeItem = function(index) {
        items.splice(index, 1);
        updateLists();
    };
});
