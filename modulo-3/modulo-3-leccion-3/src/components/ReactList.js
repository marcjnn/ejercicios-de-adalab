import React from "react";

function ReactList() {
  const items = [
    {
      name: "Cereales con chocolate",
      description: "Cereales rellenos de chocolate",
      quantity: 2,
      category: "Cereales",
      price: 5,
    },
    {
      name: "Hamburguesa con queso",
      description: "Hamburguesa rica y saludable",
      quantity: 1,
      category: "Fast-food",
      price: 15,
    },
    {
      name: "Agua mineral",
      description: "Agua de un charco del Himalaya",
      quantity: 2,
      category: "Bebida",
      price: 5,
    },
  ];

  /* con este map iteramos iteramos el array de items */

  /* Warning: Each child in a list should have a unique "key" prop. - like in Vue when rendering a list */

  // return del componente ReactList devuelve un listado y el return dentro es del .map

  return (
    <ul>
      {items.map((item, index) => {
        // cada return retorna un li

        return (
          <li key={index}>
            <h3>Nombre: {item.name}</h3>
            <p>Descripción: {item.description}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Categoría: {item.category}</p>
            <p>Precio: {item.price}</p>
          </li>
        );

        // el map retorna un array de li, es decir, un listado de HTML
      })}
    </ul>
  );
}

export default ReactList;
