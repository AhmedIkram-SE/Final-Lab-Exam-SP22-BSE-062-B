import React from "react";
import { useSelector } from "react-redux";
import { Joning } from "../features/MissionsSlice";
import { useDispatch } from "react-redux";

const Missions = () => {
  const dispatch = useDispatch();
  const HandleJoining = (id, reserved) => {
    const type = reserved ? "cancel" : "reserve";
    dispatch(Joning({ id, type }));
  };
  const { missionsList } = useSelector((state) => {
    return state.missions;
  });

  return (
    <div>
      <div>
        {missionsList.map((items) => (
          <>
            <div>{items.mission_name}</div>
            <div>{items.mission_id}</div>
            <div>{items.description}</div>
            <button onClick={() => HandleJoining(items.id, items.reserved)}>
              {items.reserved ? "Leave Mission" : "Join Mission"}
            </button>
            {/* <div>Here in return</div> */}
            {/* <div key={items.name}>
    <div>{items.size_meters}</div>
    <div>{items.material}</div>
  </div> */}
          </>
        ))}
      </div>
    </div>
  );
};

export default Missions;
