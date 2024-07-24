import React from "react";
import "./App.css";
import Appname from "./components/Appname";
import Mainhead from "./components/Mainhead";
import Itembox from "./components/Itembox";
import Itemscontainer from "./components/Itemscontainer";
import { useState } from "react";
function App() {
  const [cartitem, setcartitem] = useState("");

  const itemaddfun = (itemname, itemdate) => {
    setcartitem([...cartitem, { name: itemname, date: itemdate }]);
  };
  const itemdeletefun = (itemname) => {
    const newcartitems = cartitem.filter((item) => item.name !== itemname);
    setcartitem(newcartitems);
  };
  return (
    <>
      <Appname />
      <Mainhead itemfun={itemaddfun} />
      <Itemscontainer>
        <Itembox itemdeletefun={itemdeletefun} cartobject={cartitem}></Itembox>
      </Itemscontainer>
    </>
  );
}
export default App;
