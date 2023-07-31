import React, { useState } from "react";
import styles from "./UserForm.module.css";
import edits from "../UI/Container.module.css";

const UserForm = (props) => {
  const [userData, setUserData] = useState({
    enteredUsername: "",
    enteredAge: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    const userContent = { ...userData };

    props.onSaveData(userContent);
  };

  const dataChangeHandler = (input, value) => {
    setUserData((prevData) => {
      return {
        ...prevData,
        [input]: value,
      };
    });
  };

  return (
    <div className={edits.container}>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles["user-content"]}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={(event) =>
              dataChangeHandler("enteredUsername", event.target.value)
            }
            value={userData.enteredUsername}
          />
        </div>
        <div className={styles["age-content"]}>
          <label htmlFor="age">Age(Years)</label>
          <input
            type="number"
            name="age"
            id="age"
            onChange={(event) =>
              dataChangeHandler("enteredAge", event.target.value)
            }
            value={userData.enteredAge}
          />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default UserForm;
