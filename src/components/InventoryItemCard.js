import React from 'react'

function InventoryItemCard({item, onCardClicked, onDelete}) {
    return(
        <div className="card" onClick={() => onCardClicked(item)}>
            <img src={item.image}></img>
            <h3>{item.name}</h3>
            <h4>${item.price}</h4>
            <button onClick={() => onDelete(item)}>Delete</button>
        </div>
    );
}

export default InventoryItemCard;