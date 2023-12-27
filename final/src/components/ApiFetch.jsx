import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../features/dragonsSlice";
import { fetchData1 } from "../features/MissionsSlice";
const ApiFetch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("in UseEfect");
    dispatch(fetchData());
    dispatch(fetchData1());
  }, [dispatch]);

  return <div></div>;
};

export default ApiFetch;
