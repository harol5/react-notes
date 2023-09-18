import { useEffect, useState } from "react";
import axios from "axios";

function Favorite() {
  const [users, setUsers] = useState([]);
  const [deleteName, setDeleteName] = useState("");
  const [deleteNameIndex, setDeleteNameIndex] = useState();

  useEffect(() => {
    console.log("useEffect delete user");
    if (!deleteNameIndex) return;
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${deleteNameIndex}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, [deleteNameIndex]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data: users } = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers((prev) => [...prev, ...users]);
      } catch (e) {
        console.log(e);
      }
    };
    fetch();
  }, [deleteNameIndex]);

  const handleClick = (e) => {
    e.preventDefault();

    const updatedUser = users.filter((u) => {
      return u.name.toLowerCase() !== deleteName.toLowerCase();
    });
    setUsers((prev) => {
      return updatedUser;
    });
    setDeleteName("");
  };

  const nameHandler = (e) => {
    setDeleteName(e.target.value);
  };

  console.log("-----render--------");
  console.log("favorite called");
  console.log(users);

  return (
    <main className="favorite-main">
      <h1>User Names</h1>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
      <form onSubmit={handleClick}>
        <h4>Delete a Name</h4>
        <label>enter name</label>
        <input type="text" value={deleteName} onChange={nameHandler}></input>
        <button>submit</button>
      </form>
    </main>
  );
}

export default Favorite;
