import "./App.css";
import ListUsers from "./components/ListUsers";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>hola mundo</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListUsers />} exact></Route>
          <Route path="/agregar-usuario" element={<AddUser />} exact></Route>
          <Route path="/editar-usuario" element={<EditUser />} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
