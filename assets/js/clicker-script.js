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


var player = new PlayerData();
player.outputData();
player.collectItem("Stone", 100);
player.outputData();
player.spendItem("Stone", 50);
player.outputData();
