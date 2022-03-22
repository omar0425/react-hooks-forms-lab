import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectInput, setSelectInput] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  // function handleInputChange(e) {
  //   const input = e.target.value;
  //   setSelectInput(input);
  // }

  const itemsToDisplay = items
    .filter(
      (item) => selectedCategory === "All" || item.category === selectedCategory
    )
    .filter((item) =>
      item.name.toLowerCase().includes(selectInput.toLowerCase())
    );

  return (
    <div className='ShoppingList'>
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter
        onCategoryChange={handleCategoryChange}
        search={selectInput}
        onSearchChange={setSelectInput}
      />
      <ul className='Items'>
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
