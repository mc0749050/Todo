function Cartitem({cartobject, itemdeletefun}) {
  
  return (
    <>
    {cartobject.map((item) => (
        <div class="container text-center">
          <div class="row w-11/12 flex justify-center py-2">
            <div class="col-6 font-normal text-lg text-slate-700 font-sans flex items-center">
              <p className="text-sm font-light text-wrap pt-2">{item.name}</p>
            </div>
            <div class="col-2 text-[10px] flex pb-[4px] mr-2 ml-4 items-center font-sans">
              {item.date}
            </div>
            <div class="col-2">
              <button type="button" className="btn btn-danger ml-[5px]"
                onClick={() => itemdeletefun(item.name)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export default Cartitem;
