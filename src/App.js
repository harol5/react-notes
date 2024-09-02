import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import UseStateHook from "./pages/UseStateHook";
import UseReducerHook from "./pages/UseReducerHook";
import UseEffectHook from "./pages/UseEffectHook";
import Todo from "./components/Todo";
import Demo from "./components/Demo";
import Wordpress from "./pages/Wordpress";
import Context from "./pages/Context";
import "./App.css";
import UseMemoHook from "./pages/UseMemoHook";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("App useEffect;");
  }, []);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<UseStateHook />} />
        <Route path="/use-reducer-hook" element={<UseReducerHook />} />
        <Route path="/use-effect-hook" element={<UseEffectHook />} />
        <Route path="/to-do" element={<Todo />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/wordpress" element={<Wordpress />} />
        <Route path="/context" element={<Context />} />
        <Route path="/use-memo-hook" element={<UseMemoHook />} />
      </Routes>
    </>
  );
}

export default App;
