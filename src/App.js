import "./styles.css";
import Users from "./Home/Users";
import { Routes, Route } from "react-router-dom";
import Posts from "./Home/Posts";
import Profile from "./Home/Profile";
import Gallery from "./Home/Gallery";
import ToDo from "./Home/ToDo";
import Error from "./Home/Error";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}
