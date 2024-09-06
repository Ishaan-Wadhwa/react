import { useState } from "react";
export default function App() {
  const [formData, setformdata] = useState({
    firstname: "",
    lastname: "",
  });
  const [users, setusers] = useState([{}]);
  // console.log(formData);
  function handleChange(event) {
    setformdata((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }
  function handleSubmit() {
    alert("submit is clicked");
    if (!formData.firstname || !formData.lastname) {
      alert("pls enter the complete details");
    } else {
      setusers([...users, formData]);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="firstname"
          onChange={handleChange}
          name="firstname"
        />
        <input
          type="text"
          placeholder="lastname"
          onChange={handleChange}
          name="lastname"
        />
      </form>
      <button type="submit">Submit</button>
     <ul>
        {users.map(function (item) {
          return (<p>{item.firstname}</p>)
        })}
      </ul>
    </div>
  );
}

// Log to console
