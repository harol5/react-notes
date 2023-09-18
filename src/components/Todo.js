import { useState, useEffect } from "react";
import { React } from "react";
import axios from "axios";
import Card from "./Card";
import Model from "./Model";
import Backdrop from "./Backdrop";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    console.log("use effect");
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  }, []);

  const [modelIsOpen, setModel] = useState(false);
  const [cardId, setCardId] = useState();
  const deleteHandler = (cardId) => {
    setCardId(cardId);
    setModel(true);
  };
  const closeModelHandler = (e) => {
    console.log(e);
    setModel(false);
  };
  const confirmDelete = () => {
    let updated = todos.filter((d) => d.id !== cardId);
    setTodos(updated);
    setModel(false);
  };

  return (
    <div>
      <h1>My Todos</h1>
      <main>
        {todos.map((i) => (
          <Card key={i.id} title={i.title} id={i.id} onDelete={deleteHandler} />
        ))}
        {modelIsOpen && (
          <Model onCancel={closeModelHandler} onConfirm={confirmDelete} />
        )}
        {modelIsOpen && <Backdrop onClick={closeModelHandler} />}
      </main>
    </div>
  );
};

export default Todo;
