import Nav from "./Nav";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import UserDetails from "./UserDetails";
import "./Profile.css";

const Profile = () => {
  const location = useLocation();
  const { state } = location;

  const data = state && state.data;

  const [Data, setdata] = useState(data);
  console.warn(Data);

  useEffect(() => {
    // Retrieve variable from session storage when component mounts
    const savedVariable = sessionStorage.getItem("id");

    setdata(savedVariable);
  }, []);

  return (
    <div>
      <Nav />
      <h2 className="prof">Profile </h2>
      <div className="line"></div>
      <UserDetails userId={Data} />
    </div>
  );
};
export default Profile;
