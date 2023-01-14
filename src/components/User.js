import userEvent from "@testing-library/user-event";
import PropTypes from "prop-types";

function User({ name, surName, age, isLoggedIn, friends, address }) {
  if (!isLoggedIn) return(
    <div>{"You did not signed in !!!"}</div>
  );

  return (
    <>
      <div>
        {`Hello ${name} ${surName} (${age})`}
      </div>
      {friends.map((friend) => (
        <div key={friend.id}>{friend.name}</div>
      ))}

      <div>{`TITLE: ${address.title}, ZIP: ${address.zipCode}`}</div>
    </>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  surName: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  friends: PropTypes.array,
  address: PropTypes.shape({
    title: PropTypes.string,
    zipCode: PropTypes.number,
  }),
};

User.defaultProps = {
  isLoggedIn: false,
  name: "name",
  surname: "surname",
  age: "age",
};

export default User;
