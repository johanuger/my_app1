import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const AddLine = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "Lines"), { name: name, age: age });
    setName("");
    setAge(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter age..."
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default AddLine;
