import { useState, useEffect, createContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Profile from "./Profile";
import "./Users.css";
export const globalInfo = createContext();
function Users() {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  function handleClick(userid) {
    //console.log(userid);
    sessionStorage.setItem("id", userid); //this is to store user id
    const state = { data: userid };
    navigate("/profile", { state });
  }

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("https://panorbit.in/api/users.json");
      const data = await response.json();
      setUsers(data.users);
    }
    fetchUsers();
  }, []);
  //this is to extract users list from the api
  return (
    <div className="background">
      <div className="container">
        <Routes>
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <h1 className="uname">Select an account</h1>
        <ul className="unorli">
          {users.map((user) => (
            <li key={user.id} onClick={() => handleClick(user.id)}>
              <img
                className="imgOr"
                src={user.profilepicture}
                alt={user.name}
              />
              <span> {user.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Users;
