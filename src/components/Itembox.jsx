import Emptycart from "./Emptycart";
import Cartitem from "./Cartitem";
function Itembox({cartobject, itemdeletefun}) {
  let itemlength = cartobject.length;

return itemlength == 0 ? <Emptycart /> : <Cartitem itemdeletefun={itemdeletefun} cartobject={cartobject} /> 


}

export default Itembox;