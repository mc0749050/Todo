import React, { useState, useEffect } from "react";
import "./App.css";
import Appname from "./components/Appname";
import Mainhead from "./components/Mainhead";
import Itembox from "./components/Itembox";
import Itemscontainer from "./components/Itemscontainer";

function App() {
  // Initialize cart state with values from local storage
  const [cartitem, setcartitem] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Update local storage whenever cartitem changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartitem));
  }, [cartitem]);

  // Function to add an item
  const itemaddfun = (itemname, itemdate) => {
    setcartitem([...cartitem, { name: itemname, date: itemdate }]);
  };

  // Function to delete an item
  const itemdeletefun = (itemname) => {
    const newcartitems = cartitem.filter((item) => item.name !== itemname);
    setcartitem(newcartitems);
  };

  return (
    <>
      <Appname />
      <Mainhead itemfun={itemaddfun} />
      <Itemscontainer>
        <Itembox itemdeletefun={itemdeletefun} cartobject={cartitem} />
      </Itemscontainer>
    </>
  );
}

export default App;