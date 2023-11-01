import './App.css';
import ListUsers from './components/ListUsers';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

function App() {
  return (
    <div className="App">
      <h1>hola mundo</h1>
      <ListUsers />
      <AddUser />
      <EditUser />
    </div>
  );
}

export default App;
