import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { Button, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";

function PollCard({ poll, submitVote, index }) {
  const { statement, options, votes, deletePoll } = poll;
  const [selectedOption, setSelectedOption] = useState(0);
  const dispatch = useDispatch();
  const onChangeValue = (e) => {
    setSelectedOption(e.target.value);
  };
  let noOfVotes = votes.length;
  return (
    <Paper
      elevation={1}
      style={{ width: "60%", margin: "20px", padding: "20px" }}
    >
      <Typography variant="h5">{statement}</Typography>
      <Typography
        style={{
          width: "100%",
          textAlign: "right",
          color: "green",
        }}
      >
        Votes: {noOfVotes}
      </Typography>

      {options.map((opt, index) => {
        return (
          <div
            key={index}
            onChange={(e, index) => {
              onChangeValue(e);
            }}
          >
            <label>
              {" "}
              {submitVote ? (
                <input type="radio" name={statement} value={index} />
              ) : (
                ""
              )}
              {opt ? <span>{opt.name}</span> : "error"}
            </label>
          </div>
        );
      })}
      {submitVote ? (
        <Button
          variant="outlined"
          style={{
            marginTop: "20px",
            padding: "10px",
          }}
          onClick={() => {
            submitVote(index, selectedOption);
          }}
        >
          Submit Vote
        </Button>
      ) : (
        <Button
          variant="outlined"
          style={{
            marginTop: "20px",
            padding: "10px",
          }}
          onClick={(index) => {
            deletePoll(index, selectedOption);
          }}
        >
          Delete Poll
        </Button>
      )}
    </Paper>
  );
}
export default PollCard;
