import PollCard from "../components/PollCard";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";

function MyPolls() {
  const currentUser = useSelector((state) => state.currentUser);
  const polls = useSelector((state) => state.polls);
  const deletePoll = (index) => {
    let newpolls = polls;
  };
  return (
    <Grid>
      {polls.map((poll, i) => {
        return poll.creator == currentUser ? (
          <PollCard poll={poll} index={i} deletePoll={deletePoll} />
        ) : (
          ""
        );
      })}
    </Grid>
  );
}
export default MyPolls;
