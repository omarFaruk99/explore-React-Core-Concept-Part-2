import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      //   .then((data) => console.log(data[0]));
      .then((data) => setUsers(data));
  }, []);

  const userStyle = {
    border: "2px solid tomato",
    margin: "10px",
    borderRadius: "15px",
  };

  return (
    <div style={userStyle}>
      <h3>useEffect & useState</h3>
      <p>#ofUsers: {users.length}</p>
    </div>
    
  );
}
