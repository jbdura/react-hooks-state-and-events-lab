import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
//   const [selecetedCategory, setSelecetedCategory] = useState("All")

//   function handleCategories(event) {
//     setSelecetedCategory(event.target.value);
//   }

//   const newItems = items.filter((item) => {
//     if (selectedCategory === "All") {
//       return true;
//     } else {
//       return item.category === selectedCategory;
//     }
//   })


//   return (
//     <div className="ShoppingList">
//       <div className="Filter">
//         <select name="filter" onChange={handleCategories}>
//           <option value="All">Filter by category</option>
//           <option value="Produce">Produce</option>
//           <option value="Dairy">Dairy</option>
//           <option value="Dessert">Dessert</option>
//         </select>
//       </div>
//       <ul className="Items">
//         {newItems.map((item) => (
//           <Item key={item.id} name={item.name} category={item.category} />
//         ))}
//       </ul>
//     </div>
//   );
// }

const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategory(event) {
    // event.target.value will be the value selected by the user
    setSelectedCategory(event.target.value);
  }

  // we want to filter the items to only display the ones based on the selected category
  const newItems = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {newItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}


export default ShoppingList;
