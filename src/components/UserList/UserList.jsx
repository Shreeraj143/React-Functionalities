import "./UserList.css";

const UserList = (props) => {
  return (
    <div className="container">
      <ul>
        {props.items.map((item) => (
          <li>
            {item.enteredUsername} ({item.enteredAge} years old)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
