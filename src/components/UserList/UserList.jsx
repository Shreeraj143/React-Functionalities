import "./UserList.css";

const UserList = (props) => {
  return (
    <div className="container">
      <ul>
        {props.items.map((item) => (
          <li key={item.id}>
            {item.name} ({item.age} years old)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
