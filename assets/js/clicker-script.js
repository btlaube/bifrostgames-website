class PlayerData
{
    constructor()
    {
        this.inventory = new Inventory();
    }
    
    getInventory()
    {
        return this.inventory;
    }

    collectItem(item, quantity)
    {
        this.inventory.addItem(item, quantity);
    }

    spendItem(item, quantity)
    {
        if (this.inventory.hasItem(item) && this.inventory.getItemQuantity(item) >= quantity)
            this.inventory.removeItem(item, quantity);
    }

    outputData()
    {
        console.log(`${this.inventory}`);
    }

}

class Inventory
{
    constructor()
    {
        this.inventoryItems = {};
    }

    hasItem(item)
    {
        return (this.inventoryItems[item]);
    }

    getItemQuantity(item)
    {
        if (this.inventoryItems[item])
            return (this.inventoryItems[item]);
    }

    addItem(item, quantity)
    {
        if(this.inventoryItems[item])
        {
            this.inventoryItems[item] += quantity;
        }
        else
        {
            this.inventoryItems[item] = quantity;
        }
    }

    removeItem(item, quantity)
    {
        if(this.inventoryItems[item])
        {
            this.inventoryItems[item] -= quantity;
        }
    }
}

class Button
{
    constructor(label, resource, clickValue, display)
    {
        this.label = label;
        this.resource = resource;
        this.clickValue = clickValue;
        this.display = display;
    }

    updateDisplay()
    {
        // Get the specific child elements within the parent display
        const labelElement = this.display.querySelector(`#label`);
        const resourceElement = this.display.querySelector(`#resource`);
        const clickValueElement = this.display.querySelector(`#clickValue`);

        if (labelElement)
            labelElement.textContent = `${this.label}`;

        if (resourceElement)
            resourceElement.textContent = `${this.resource}`;

        if (clickValueElement)
            clickValueElement.textContent = `${this.clickValue}/click`;
    }

}


var player = new PlayerData();
player.outputData();
player.collectItem("Stone", 100);
player.outputData();
player.spendItem("Stone", 50);
player.outputData();

var buttonElements = document.querySelectorAll('.resourceButton');
var buttons = [
    new Button("Generate Coal", "coal", 1, buttonElements[0]),
    new Button("Generate Copper", "copper", 1, buttonElements[1]),
    new Button("Generate Iron", "iron", 1, buttonElements[2])
];

// Iterate and update display
buttons.forEach(button => button.updateDisplay());