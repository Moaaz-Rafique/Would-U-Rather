import { useSelector, useDispatch } from "react-redux";
import User from "../components/user";
function LeaderBoard() {
  const users = useSelector((state) => state.users);
  return (
    <div>
      <h1>Leader Board</h1>
      {users
        .sort((a, b) => b.answeredPolls - a.answeredPolls)
        .map((user, i) => (
          <User key={i} user={user} i={i} />
        ))}
    </div>
  );
}
export default LeaderBoard;
