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
        if (inventoryItems[item])
            return (this.inventoryItems[item]);
    }

    addItem(item, quantity)
    {
        if(inventoryItems[item])
        {
            inventoryItems[item] += quantity;
        }
        else
        {
            inventoryItems[item] = quantity;
        }
    }

    removeItem(item, quantity)
    {
        if(inventoryItems[item])
        {
            inventoryItems[item] -= quantity;
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
        const resource = this.display.id.split('-')[0]; // Get copper from copper-button
        const recipe = itemRecipes[resource];
        
        // Get the specific child elements within the parent display
        const labelElement = this.display.querySelector(`#label`);
        const resourceElement = this.display.querySelector(`#resource`);
        const clickValueElement = this.display.querySelector(`#clickValue`);

        if (labelElement)
            labelElement.textContent = `${this.label}`;

        if (resourceElement)
            resourceElement.textContent = `${this.resource}`;

        if (clickValueElement)
            clickValueElement.textContent = `${this.clickValue}`;
    }

}


var player = new PlayerData();
player.outputData();
player.collectItem("Stone", 100);
player.outputData();
player.spendItem("Stone", 50);
player.outputData();

var testButton = document.getElementById("testButton");
button = new Button("Generate Coal", "coal", 1, testButton);
button.updateDisplay();