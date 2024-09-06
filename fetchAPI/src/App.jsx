import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";

function App() {
  const [users, setUsers] = useState({});
  fetch("https://api.github.com/users")
    .then((res) => res.json())
    .then((data) => setUsers(data));
  return (
    <>
      {
      users.map((item) => {
        return <div>{item.login}</div>;
      })
      }
    </>
  );
}

export default App;
