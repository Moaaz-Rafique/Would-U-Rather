import { Paper, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

function User({ user }) {
  const { name, answeredPolls, createdPolls } = user;
  return (
    <Paper
      elevation={1}
      style={{ width: "60%", margin: "20px 0px", padding: "20px" }}
    >
      <Typography variant="h4">{name}</Typography>
      <Typography variant="subtitle1">Answered: {answeredPolls}</Typography>
      <Typography variant="subtitle1">Created: {createdPolls}</Typography>
    </Paper>
  );
}
export default User;
