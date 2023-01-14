function User({ name, surName, isLoggedIn, friends }) {
  return (
    <>
      <div>
        {isLoggedIn ? `Hello ${name} ${surName}` : "You did not signed in!"}
      </div>
      {friends.map((friend) => (
        <div key={friend.id}>
            {friend.name}
        </div>
      ))}
    </>
  );
}

export default User;
