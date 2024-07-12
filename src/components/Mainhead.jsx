import { useState } from "react";
export default function Mainhead({itemfun}) {
  const[itemname, setitemname] = useState("");
  const[itemdate, setitemdate] = useState("");

  const itemnamechange = (event) => {
    setitemname(event.target.value);
  }
  const itemdatechange = (event) => {
    setitemdate(event.target.value);
  }
  
  const Datahandlingbtn = () => {
  if(itemname == "" || itemdate == "") {
    return;
  }
    itemfun(itemname, itemdate)
    setitemname("")
    setitemdate("")
  
  }
  return (
    <div className="container text-center my-8 w-full">
      <div>
      
        <input
          className="w-4/5 border-2 border-orange-200 h-10 rounded-md bg-green-50 placeholder:italic placeholder:text-slate-500 focus:outline-none focus:border-green-400 py-2 px-4 font-light my-1"
          type="text"
          placeholder="Enter Item"
          onChange={itemnamechange}
          value={itemname}
        ></input>
      </div>
      <div>
        <input
          className="w-4/5 h-10 border-2 border-orange-200 rounded-md bg-green-50 py-2 px-4 my-1 focus:border-green-400"
          type="date"
          onChange={itemdatechange}
          value={itemdate}
        ></input>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-success w-4/5 py-2 px-4 h-10 my-1"
          onClick={Datahandlingbtn}
        >
          Add
        </button>
      </div>
    </div>
  );
}
