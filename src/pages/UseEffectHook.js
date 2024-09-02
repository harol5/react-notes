import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Table from "../components/Table";
import Listing from "../components/Listing";
import { styled } from "styled-components";

const ControlMain = styled.main`
  display: block;
  padding: 1.25em;
  background-color: rgb(6, 8, 14);
  color: #33ff00;
`;

function UseEffectHook() {
  const deleteNameRef = useRef();
  const [users, setUsers] = useState([]);
  const [deleteNameIndex, setDeleteNameIndex] = useState();

  useEffect(() => {
    if (!deleteNameIndex) return;
    console.log("useEffect delete user");
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
        console.log("useEffect get users");
        setUsers((prev) => [...prev, ...users]);
      } catch (e) {
        console.log(e);
      }
    };
    fetch();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    const updatedUser = users.filter((u, i) => {
      let isNotSelectedName =
        u.name.toLowerCase() !== deleteNameRef.current.value.toLowerCase();
      if (!isNotSelectedName) setDeleteNameIndex(u.id);
      return isNotSelectedName;
    });
    setUsers(updatedUser);
    deleteNameRef.current.value = "";
  };

  return (
    <ControlMain>
      <h1>User table</h1>
      <form onSubmit={handleClick}>
        <h4>Delete a Name</h4>
        <label>enter name</label>
        <input type="text" ref={deleteNameRef}></input>
        <button>submit</button>
      </form>
      <h1>Table</h1>
      <Table data={users} />
      <h1>Listing</h1>
      <Listing data={users} />
    </ControlMain>
  );
}

export default UseEffectHook;
