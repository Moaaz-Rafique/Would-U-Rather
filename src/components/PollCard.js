import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { Button, Typography, Collapse } from "@material-ui/core";

function PollCard({ poll, submitVote, index, deletePoll, currentUser, users }) {
  const { statement, options, votes, creator } = poll;
  const [selectedOption, setSelectedOption] = useState(0);

  const [hoveredOption, setHoveredOption] = useState(-1);
  const onChangeValue = (e) => {
    setSelectedOption(e.target.value);
  };

  let noOfVotes = votes.length;
  const optionVotes = [];
  let voted = false;
  let myVote;
  for (let i in options) {
    let temp = 0;
    for (let j of votes) {
      if (i == j.option) {
        temp++;
      }
      if (currentUser === j.user && !voted) {
        voted = true;
        myVote = options[j.option];
      }
    }
    optionVotes.push(temp);
  }
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
            <label
              onMouseEnter={() => {
                setHoveredOption(index);
              }}
              onMouseLeave={() => {
                setHoveredOption(-1);
              }}
            >
              {" "}
              {submitVote && !voted ? (
                <input type="radio" name={statement} value={index} />
              ) : (
                ""
              )}
              <span
                style={{ color: voted && myVote == opt ? "#400CCC" : "black" }}
              >
                {opt.name}
                <sub style={{ fontSize: "11px" }}>
                  {" "}
                  {hoveredOption == index && voted
                    ? optionVotes[index]
                    : ""}{" "}
                </sub>
              </span>
            </label>
          </div>
        );
      })}
      {deletePoll ? (
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
      ) : (
        ""
      )}

      <Collapse in={submitVote && !voted}>
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
      </Collapse>
      <div>
        <Typography variant="caption" color="secondary">
          Poll by: {users[creator].name}
        </Typography>
      </div>
    </Paper>
  );
}
export default PollCard;
