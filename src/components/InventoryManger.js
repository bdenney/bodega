import React, { useEffect, useState } from "react";
import CurrentInventoryList from "./CurrentInventoryList";
import ReorderInventoryList from "./ReorderInventoryList"

function InventoryManager() {

    const [inventory, setInventory] = useState([]);
    const [reorderInventory, setReorderInventory] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8001/inventory")
        .then(response => response.json())
        .then(inventoryJson => {
            console.log(inventoryJson);
            setInventory(inventoryJson);
        });
    }, []);

    function handleAddItemToReorder(item) {
        const reorderItemIndex = reorderInventory.findIndex(inventoryItem => inventoryItem.id === item.id);
        if (reorderItemIndex < 0) {
            setReorderInventory([...reorderInventory, item]);
        } else {
            console.log(item.name + " already in reorder list!");
        }
    }

    function handleRemoveItemFromReorder(item) {
        removeItemfromStateArray(item, reorderInventory, setReorderInventory);
    }

    function removeItemfromStateArray(itemToRemove, stateArray, setStateFunction) {
        const reorderItemIndex = stateArray.findIndex(item => item.id === itemToRemove.id);
        if (reorderItemIndex >= 0) {
            const arrayCopy = [...stateArray];
            arrayCopy.splice(reorderItemIndex, 1);

            setStateFunction(arrayCopy);
        } else {
            console.log('Could not remove item.')
        }
    }

    function handleDelete(item) {
        fetch("http://localhost:8001/inventory/"+item.id, {
            method: "DELETE"
        });

        removeItemfromStateArray(item, reorderInventory, setReorderInventory);
        removeItemfromStateArray(item, inventory, setInventory);
    }

    return(
        <div className="container">
            <CurrentInventoryList inventory={inventory} 
                                  onAddItemToReorder={handleAddItemToReorder}
                                  onDelete={handleDelete} />

            <ReorderInventoryList inventory={reorderInventory} 
                                  onRemoveItemFromReorder={handleRemoveItemFromReorder}
                                  onDelete={handleDelete}/>
        </div>
    );
}

export default InventoryManager;