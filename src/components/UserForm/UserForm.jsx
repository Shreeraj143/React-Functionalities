import React, { useState } from "react";
import styles from "./UserForm.module.css";
import edits from "../UI/Container.module.css";
import "../UI/Button";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const initialState = {
  enteredUsername: "",
  enteredAge: "",
};

const UserForm = (props) => {
  const [userData, setUserData] = useState(initialState);
  const [error, setError] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      userData.enteredUsername.trim().length === 0 ||
      userData.enteredAge.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter valid age and name (non-empty values).",
      });
      return;
    }

    if (+userData.enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter positive Age.",
      });
      return;
    }

    const userContent = { ...userData };

    props.onSaveData(userContent);
    setUserData(initialState);
  };

  const dataChangeHandler = (input, value) => {
    setUserData((prevData) => {
      return {
        ...prevData,
        [input]: value,
        id: Math.random().toString(),
      };
    });
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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
          <Button type="submit">Add User</Button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
