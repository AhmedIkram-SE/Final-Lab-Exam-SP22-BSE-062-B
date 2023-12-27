import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Reservation } from "../features/dragonsSlice";

const Dragons = () => {
  const dispatch = useDispatch();
  const HandleReserve = (id, reserved) => {
    const type = reserved ? "cancel" : "reserve";
    dispatch(Reservation({ id, type }));
  };
  const { dragonList } = useSelector((state) => {
    console.log("Here in selector");
    return state.dragons;
  });

  return (
    <div>
      {dragonList.map((items) => (
        <>
          <div>{items.name}</div>
          <div>{items.id}</div>
          <div>{items.type}</div>
          <img src={items.flickr_images} alt="N/A"></img>
          <button
            type="button"
            data-type="reserve"
            onClick={() => HandleReserve(items.id, items.reseverd)}
          >
            {items.reserved ? "Reserved" : "Reserve"}
          </button>
          {/* <div>Here in return</div> */}
          {/* <div key={items.name}>
            <div>{items.size_meters}</div>
            <div>{items.material}</div>
          </div> */}
        </>
      ))}
    </div>
  );
};

export default Dragons;
