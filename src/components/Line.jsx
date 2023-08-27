import { useState } from "react";

const Line = ({ line, handleDelete, handleUpdate }) => {
  const [newName, setNewName] = useState(line.name);
  const [newAge, setNewAge] = useState(line.age);

  const handleNameChange = (e) => {
    e.preventDefault();
    setNewName(e.target.value);
  };

  const handleAgeChange = (e) => {
    e.preventDefault();
    setNewAge(e.target.value);
  };

  return (
    <div className="Line">
      <input type="text" value={newName} onChange={handleNameChange} />
      <input type="number" value={newAge} onChange={handleAgeChange} />
      <button onClick={() => handleUpdate(line, newName, newAge)}>
        Update{" "}
      </button>
      <button onClick={() => handleDelete(line.id)}>Delete </button>
    </div>
  );
};
export default Line;
