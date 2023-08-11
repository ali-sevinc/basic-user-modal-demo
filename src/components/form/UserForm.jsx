import { useState } from "react";

import Card from "../ui/Card";
import InputGroup from "./InputGroup";
import Button from "../ui/Button";

const extraStyle = "mx-auto mt-32 mb-16 w-[536px] px-5 py-3 bg-white ";

function UserForm({ setUsers, setError, onShowModal }) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (username.trim().length < 3) {
      setError("Please enter a valid name. (at least 3 characters)");
      onShowModal();
      return;
    }
    if (age < 1 || age.trim().length === 0) {
      setError("Please enter a valid age (min 1)");
      onShowModal();
      return;
    }
    const user = {
      username,
      age,
      id: Math.random(),
    };

    setUsers((prev) => [user, ...prev]);
    setUsername("");
    setAge("");
  }

  return (
    <Card extraStyling={extraStyle}>
      <form onSubmit={handleSubmit} className="relative h-[190px]">
        <InputGroup
          type="text"
          id="username"
          label="Username"
          value={username}
          setValue={setUsername}
        />
        <InputGroup
          type="number"
          id="age"
          label="Age (years)"
          value={age}
          setValue={setAge}
        />
        <Button>Add User</Button>
      </form>
    </Card>
  );
}

export default UserForm;
