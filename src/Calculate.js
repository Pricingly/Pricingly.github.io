import React, {useState, useEffect, createElement} from 'react'
import Item from './app-components/Item'

// React has a localstorage you can use in place of cookies

export default function Calculate() {

  const [value, changeValue] = useState(0);
  const [itemList, setItemList] = useState([]);
  
  const handleNewItem = () => {
    setItemList([...itemList, <Item input={{value: value, newValue: changeValue}} />]);
  }

  return (
    <>
        <div>Calculate Value: {value}</div>

        {/* Handle new items when the create item button is clicked and map out each of these items when rerendered */}
        <button onClick={handleNewItem}>Add Item</button>

        {itemList.map((item, index) => (
          <div key={index}>{item}</div>
        ))}

    </>
  )
}
