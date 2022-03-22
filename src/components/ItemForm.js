import React, { useState } from "react";
import { v4 as uuid } from "uuid";
function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleSubmit(e) {
    e.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      name: itemName,
      category: category,
    });
  }
  function handleItemName(e) {
    setItemName(e.target.value);
  }

  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }
  return (
    <form className='NewItem' onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type='text'
          name='name'
          onChange={handleItemName}
          value={itemName}
        />
      </label>

      <label>
        Category:
        <select
          name='category'
          onChange={handleCategoryChange}
          value={category}
        >
          <option value='Produce'>Produce</option>
          <option value='Dairy'>Dairy</option>
          <option value='Dessert'>Dessert</option>
        </select>
      </label>

      <button type='submit'>Add to List</button>
    </form>
  );
}

export default ItemForm;
