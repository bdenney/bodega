import React from 'react'
import InventoryItemCard from './InventoryItemCard';

function ReorderInventoryList({inventory, onRemoveFromReorder, onDelete}) {
    const inventoryList = inventory.map(item => {
        return <InventoryItemCard key={item.id} 
                                  item={item} 
                                  onCardClicked={onRemoveFromReorder}
                                  onDelete={onDelete} />
    });

    return(
        <div id="reorder-container">
            <h2>Reorder</h2>
            <div>
                {inventoryList}
            </div>
        </div>
    );
}

export default ReorderInventoryList;