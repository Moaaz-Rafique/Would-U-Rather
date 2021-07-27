import { useSelector, useDispatch } from "react-redux";
import PollCard from "../components/PollCard";
import { Grid } from "@material-ui/core";

function Home() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);
  console.log(currentUser);
  const polls = useSelector((state) => state.polls);

  const submitVote = (key, selectedOption) => {
    console.log(selectedOption);
    const newVote = {
      option: selectedOption,
      user: currentUser,
    };
    const newUsers = users;
    newUsers[currentUser].answeredPolls++;
    const newPolls = polls;
    newPolls[key] = {
      ...newPolls[key],
      votes: [...newPolls[key].votes, newVote],
    };
    console.log(newUsers);
    dispatch({ type: "ADDVOTE", polls: newPolls, users: newUsers });
  };
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="flex-start"
    >
      {polls.map((poll, i) => {
        return (
          <PollCard key={i} index={i} poll={poll} submitVote={submitVote} />
        );
      })}
    </Grid>
  );
}
export default Home;
