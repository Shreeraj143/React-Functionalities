import React, { useState, useRef } from "react";
import styles from "./UserForm.module.css";
import edits from "../UI/Container.module.css";
import "../UI/Button";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

// const initialState = {
//   enteredUsername: "",
//   enteredAge: "",
// };

const UserForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  // const [userData, setUserData] = useState(initialState);

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter valid age and name (non-empty values).",
      });
      return;
    }

    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter positive Age.",
      });
      return;
    }

    // const userContent = { ...userData };

    // props.onSaveData(userContent);
    props.onSaveData(enteredName, enteredUserAge);
    // setUserData(initialState);

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  // const dataChangeHandler = (input, value) => {
  //   setUserData((prevData) => {
  //     return {
  //       ...prevData,
  //       [input]: value,
  //       id: Math.random().toString(),
  //     };
  //   });
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
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
              // onChange={(event) =>
              //   dataChangeHandler("enteredUsername", event.target.value)
              // }
              // value={userData.enteredUsername}
              ref={nameInputRef}
            />
          </div>
          <div className={styles["age-content"]}>
            <label htmlFor="age">Age(Years)</label>
            <input
              type="number"
              name="age"
              id="age"
              // onChange={(event) =>
              //   dataChangeHandler("enteredAge", event.target.value)
              // }
              // value={userData.enteredAge}
              ref={ageInputRef}
            />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </div>
    </>
  );
};

export default UserForm;
