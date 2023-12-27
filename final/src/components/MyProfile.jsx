import React from "react";
import { useSelector } from "react-redux";

const MyProfile = () => {
  const { dragonList } = useSelector((state) => {
    console.log("Here in selector");
    return state.dragons;
  });

  const { missionsList } = useSelector((state) => {
    console.log("Here in selector");
    return state.missions;
  });
  const reserverdDragons = dragonList.filter(({ reserved }) => reserved);
  const joinedMissions = missionsList.filter(({ reserved }) => reserved);
  return (
    <table>
      <tr>
        <th>My Missions</th>
        <tr>
          {joinedMissions.map((items) => (
            <td>{items.name}</td>
          ))}
        </tr>
        <th>My Rockets</th>
      </tr>
      <tr>
        {reserverdDragons.map((items) => (
          <td>{items.name}</td>
        ))}
      </tr>
    </table>
  );
};

export default MyProfile;
