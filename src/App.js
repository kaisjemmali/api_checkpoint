import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import UserList from "./Components/UserList";
import NavigationBar from "./Components/NavigationBar";

function App() {
  const [listOfUser, setlistOfUser] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((result) => {
      setlistOfUser(result.data);
    });
  });

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "40px",
      }}
    >
      <NavigationBar />
      <br />
      <br />
      {listOfUser.map((el) => (
        <UserList userInfo={el} key={el.id} />
      ))}
    </div>
  );
}

export default App;
