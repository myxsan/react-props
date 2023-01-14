import "./App.css";
import User from "./components/User.js";
const friends = [
  {
    id: 1,
    name: "Jhon",
  },
  {
    id: 2,
    name: "Smith",
  },
  {
    id: 3,
    name: "Dani",
  },
  {
    id: 4,
    name: "Monica",
  },
  {
    id: 5,
    name: "Kelvin",
  },
];

function App() {
  return (
    <User
      name="Musa"
      surName="Yuksel"
      isLoggedIn={true}
      age={19}
      friends={friends}
      address = {{title: "address", zipCode: 34567}}
    />
  );
}
export default App;
