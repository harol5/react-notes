import { memo, useCallback, useEffect, useState } from "react";
import Test from "../components/Test";

function UseStateHook() {
  console.log("UseStateHook Component");
  let id = 1;
  const [user, setUser] = useState({ name: "", age: "" });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("UseStateHook useEffect");
  }, []);

  const addUser = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submmitHandler = (e) => {
    e.preventDefault();
    setUsers((prev) => [...prev, user]);
    setUser((prev) => ({ ...prev, name: "", age: "" }));
  };

  // useCallBack memoized this function because on every re render a new function
  // is created, making any components who has it as prop to render again.
  const printParentName = useCallback(() => {
    console.log("test parent");
    setUser((prev) => ({
      ...prev,
      name: prev.name + String.fromCodePoint(Math.round(Math.random() * 100)),
    }));
  }, []);

  return (
    <div className="hook-style">
      <h1>Practicing react hooks</h1>
      <article>
        <h2>UseState Hook</h2>
        <form onSubmit={submmitHandler}>
          <label>name</label>
          <input type="text" name="name" value={user.name} onChange={addUser} />
          <label>age</label>
          <input type="text" name="age" value={user.age} onChange={addUser} />
          <button>add</button>
        </form>
        <Test data={users} onPrintName={printParentName} />
        <section>
          <ul>
            {users.map((u) => (
              <li key={id++}>
                Name: {u.name}, Age: {u.age}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
}

export default UseStateHook;
