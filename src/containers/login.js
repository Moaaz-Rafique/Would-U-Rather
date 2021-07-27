import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import User from "../components/user";
import { Button, Paper } from "@material-ui/core";

function Login() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const setUser = (user) => {
    dispatch({ type: "SETUSER", user: user });
  };
  // const addUser = () => {
  //   let newUser = {
  //     name: "Adnan",
  //     answeredPolls: 1,
  //     createdPolls: 2,
  //   };
  //   dispatch({
  //     type: "ADDUSER",
  //     user: newUser,
  //   });
  // };
  // useEffect(() => {
  //   setUser({});
  // });
  return (
    <div>
      <h2>Login As</h2>
      {users.map((user, i) => (
        <Link
          to="/home"
          onClick={() => {
            setUser(i);
          }}
          style={{ textDecoration: "solid" }}
          key={i}
        >
          <User user={user}></User>
        </Link>
      ))}
      {/* <button onClick={addUser}>Add User</button> */}
    </div>
  );
}
export default Login;
