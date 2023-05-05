import Login from "./Login.jsx";
import Osic from "./Osic.jsx";
import "./App.css";
import { Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/login" Component={Login}></Route>
        <Route exact path="/osic" Component={Osic}></Route>
      </Routes>
    </div>
  );
}

export default App;
