import { useState } from "react";

function UseStateHook() {
  console.log("use state hook");
  let id = 1;
  const [user, setUser] = useState({ name: "", age: "" });
  const [users, setUsers] = useState([]);

  const addUser = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submmitHandler = (e) => {
    e.preventDefault();
    setUsers((prev) => [...prev, user]);
    setUser((prev) => ({ ...prev, name: "", age: "" }));
  };

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
