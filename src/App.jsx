import { useEffect, useState } from "react";
//import "./App.css";
import AddLine from "./components/AddLine";
import Line from "./components/Line";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "Lines"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setLines(todosArray);
    });
    return () => unsub();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "Lines", id));
  };

  const handleUpdate = async (line, name, age) => {
    await updateDoc(doc(db, "Lines", line.id), { name: name, age: age });
  };

  return (
    <div className="App">
      <div>
        <AddLine />
        <br />
        <br />
      </div>

      <div className="lines_container">
        {lines.map((line) => (
          <Line
            key={line.id}
            line={line}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
