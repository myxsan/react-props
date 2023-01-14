function User({name, surName, isLoggedIn}) {
  return (
    <div>
      {isLoggedIn
        ? `Hello ${name} ${surName}`
        : "You did not signed in!"}
    </div>
  );
}

export default User;
