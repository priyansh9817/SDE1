import { useState } from "react";

function UpdateUser() {

  const [user, setUser] = useState({
    name: "",
    age: "",
    email: ""
  });

  // common handler
  function handleChange(e) {
    const { name, value } = e.target;

    setUser ({
      ...user,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(user);
  }

  return (
    <>
      <h2>Update User</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={user.name}
          onChange={handleChange}
        />

        <input
          type="number"
          name="age"
          placeholder="Enter age"
          value={user.age}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={user.email}
          onChange={handleChange}
        />

        <button type="submit">Update</button>
      </form>

      <p>
        {user.name} - {user.age} - {user.email}
      </p>
    </>
  );
}

export default UpdateUser;
