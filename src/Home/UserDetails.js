import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import "./UserDetails.css";
import myImage from "../images/map.png";
const UserDetails = ({ userId }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://panorbit.in/api/users.json");
        const data = await response.json();

        const user1Details = data.users.filter((user) => user.id === userId);

        setUsers(user1Details);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  //this is for modal working
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const openmodal = (user) => {
    setUsername(user.username);
    setImageUrl(user.image);
    setModalIsOpen(true);
  };
  const navigate = useNavigate();

  const closeModal = () => {
    navigate("/");
    setModalIsOpen(false);
  };

  return (
    <div>
      {users.length > 0 ? (
        <div className="container1">
          {users.map((user) => (
            <div key={user.id}>
              <div>
                <h3 className="user-info">{user.name}</h3>
              </div>
              <div className="imname">
                {" "}
                <img src={user.profilepicture} alt={user.name} />{" "}
              </div>

              <div className="details1">
                <p>
                  Username <span className="b">:</span> {user.username}
                </p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
              </div>
              <div className="details2">
                <h3 className="cname">Company</h3>
                <p>Name : {user.company.name}</p>
                <p>catchphrase : {user.company.catchPhrase}</p>
                <p>bs : {user.company.bs}</p>
              </div>
              <div className="hline"></div>
              <div className="details3">
                <h3 className="cname">Address :</h3>
                <p>Street : {user.address.street}</p>
                <p>Suite : {user.address.suite}</p>
                <p>City : {user.address.city}</p>
                <p>Zipcode : {user.address.zipcode}</p>
              </div>
              <div className="map">
                <img src={myImage} alt="map_loading" />
              </div>
              <div className="details4">
                <p>latitude={user.address.geo.lat}</p>
                <p>longitude={user.address.geo.lng}</p>
              </div>
              <div className="details5">
                <button
                  className="details5-button"
                  onClick={() =>
                    openmodal({
                      username: user.name,
                      image: user.profilepicture
                    })
                  }
                >
                  <img
                    className="details5-img"
                    src={user.profilepicture}
                    alt={user.name}
                  />
                  <span className="details5-name">{user.name}</span>
                </button>
                <Modal
                  className="modal-content"
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                >
                  <img className="details6-img" src={imageUrl} alt="User " />
                  <span className="details6-name">{username}</span>
                  <button className="det6-but" onClick={closeModal}>
                    Signout
                  </button>
                </Modal>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
};

export default UserDetails;
