import React from 'react'
import InventoryItemCard from './InventoryItemCard';

function CurrentInventoryList({inventory, onAddItemToReorder, onDelete}) {

    const inventoryItems = inventory.map(item => {
        return <InventoryItemCard key={item.id} 
                                  item={item} 
                                  onCardClicked={onAddItemToReorder}
                                  onDelete={onDelete} />
    });

    return(
        <div id="current-inventory">
            <h2>Current Inventory</h2>
            <div>
                {inventoryItems}
            </div>
        </div>
    );
}

export default CurrentInventoryList;