import PollCard from "../components/PollCard";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import {useHistory} from 'react-router-dom'
function MyPolls() {
  const currentUser = useSelector((state) => state.currentUser);
  const users = useSelector((state) => state.users);
  const history = useHistory();

  if(currentUser==null){
    history.push("/");    
  }
  const polls = useSelector((state) => state.polls);
  const deletePoll = (index) => {
    let newPolls = polls;
    console.log(newPolls);
  };
  return (
    <Grid>
      {polls.map((poll, i) => {
        return poll.creator == currentUser ? (
          <PollCard key={i} poll={poll} index={i} deletePoll={deletePoll} users={users} />
        ) : (
          ""
        );
      })}
    </Grid>
  );
}
export default MyPolls;
