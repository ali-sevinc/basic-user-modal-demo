function List({ user, onDeleteUser }) {
  const { username, age, id } = user;
  return (
    <li
      onClick={() => onDeleteUser(id)}
      className="mb-1 cursor-pointer space-x-3 border border-[#527bf7] px-2 py-1 text-xl font-bold"
    >
      <span>{username}</span> <span>{age}(years)</span>
    </li>
  );
}

export default List;
