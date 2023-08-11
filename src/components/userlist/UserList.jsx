import Card from "../ui/Card";
import List from "./List";

const extraStyle = "mx-auto w-[536px] px-5 py-3 bg-white";
function UserList({ users, onDeleteUser }) {
  return (
    <Card extraStyling={extraStyle}>
      <ul className="list-none p-0">
        {users.map((user) => (
          <List key={user.id} user={user} onDeleteUser={onDeleteUser} />
        ))}
      </ul>
    </Card>
  );
}

export default UserList;
