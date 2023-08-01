import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";
import React, { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  // const addUserData = (userData) => {
  //   setUsers((prevData) => {
  //     return [...prevData, userData];
  //   });
  // };

  const addUserData = (enteredName, enteredAge) => {
    setUsers((prevData) => {
      return [
        ...prevData,
        { name: enteredName, age: enteredAge, id: Math.random.toString() },
      ];
    });
  };

  return (
    <div className="App">
      <UserForm onSaveData={addUserData} />
      <UserList items={users} />
    </div>
  );
}

export default App;
