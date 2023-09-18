import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import UseStateHook from "./pages/UseStateHook";
import UseReducerHook from "./pages/UseReducerHook";
import Favorite from "./pages/Favorite";
import Todo from "./components/Todo";
import Demo from "./components/Demo";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<UseStateHook />} />
        <Route path="/use-reducer-hook" element={<UseReducerHook />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/to-do" element={<Todo />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </>
  );
}

export default App;
