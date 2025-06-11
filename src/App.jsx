import List from "./List.jsx";
import Item from "./Item.jsx";
import Form from "./Form.jsx";
import { useState } from "react";


export default function App() {
  const [data, setData] = useState([
    { id: 1, content: "Hello, World!", name: "Alice" },
    { id: 2, content: "React is fun.", name: "Bob" },
    { id: 3, content: "Yay, interesting.", name: "Chris" },
  ]);

  const [showForm, setShowForm] = useState(false);

  const add = (content, name) => {
    const id = data[data.length - 1].id + 1;
    setData([...data, { id, content, name }]);
  }

  const remove = (id) => {
    let filteredData = data.filter(item => item.id !== id);
    setData(filteredData);
  }

  return (
    <div style={{ maxWidth: 600, margin: "20px auto" }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center"
      }}>
        <h1>Yaycha</h1>

        <button
          onClick={() => setShowForm(!showForm)}
          style={{
            borderRadius: 50,
            border: "0 none",
            background: showForm ? "#dc3545" : "#0d6efd",
            color: "white",
          }}>
          {showForm ? "×" : "+"}
        </button>
      </div>

      { showForm && <Form add={add} /> }

      <List>
        {
          data.map(item => <Item key={item.id} item={item} remove={remove} />)
        }
      </List>
    </div>
  );
}