import { useState } from "react";

import UserForm from "./components/form/UserForm";
import UserList from "./components/userlist/UserList";
import Modal from "./components/modal/Modal";
import Error from "./components/error/Error";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  function closeModalHandler() {
    setShowModal(false);
  }
  function showModalHandler() {
    setShowModal(true);
  }

  function deleteUserHandler(id) {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  }

  return (
    <div className="relative">
      {showModal && (
        <Modal onCloseModal={closeModalHandler}>
          <Error message={error} onCloseError={closeModalHandler} />
        </Modal>
      )}
      <UserForm
        setUsers={setUsers}
        setError={setError}
        onShowModal={showModalHandler}
      />
      {users.length === 0 && (
        <p className="text-center text-lg font-semibold text-[#527bf7]">
          There is no user
        </p>
      )}
      {users.length > 0 && (
        <UserList users={users} onDeleteUser={deleteUserHandler} />
      )}
    </div>
  );
}

export default App;
