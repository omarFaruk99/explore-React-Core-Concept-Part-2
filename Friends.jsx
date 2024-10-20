import { useEffect, useState } from "react";
import "./friendStyle.css";
import Friend from "./Friend";

export default function Friends() {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
    // .then((data) => console.log(data));
  }, []);
  return (
    <div className="fstyle">
      <h2>#ofUsers: {friends.length}</h2>
      {
        friends.map(friend =><Friend friend={friend}></Friend>)
      }
    </div>
  );
}
